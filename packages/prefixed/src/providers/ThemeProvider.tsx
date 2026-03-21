import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'

// Common dark themes in DaisyUI
const DARK_THEMES = new Set([
  'dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula',
  'business', 'night', 'coffee', 'dim', 'sunset'
])

export interface ThemeProviderProps {
  children: React.ReactNode
  /** Default theme. Use "system" to follow browser preference. */
  defaultTheme?: string
  /** localStorage key for persisting theme. Set to false to disable persistence. */
  storageKey?: string | false
  /** Light theme to use when system preference is light */
  lightTheme?: string
  /** Dark theme to use when system preference is dark */
  darkTheme?: string
  /** Custom function to determine if a theme is dark */
  isDarkTheme?: (theme: string) => boolean
}

export interface ThemeColors {
  background: string
  foreground: string
  primary: string
  primaryContent: string
  secondary: string
  accent: string
  info: string
  success: string
  warning: string
  error: string
}

export interface ThemeContextValue {
  /** The theme setting (what user selected: "system", "light", "dark", etc.) */
  theme: string
  /** The actual applied theme after resolving "system" */
  resolvedTheme: string
  /** Whether the resolved theme is dark */
  isDark: boolean
  /** Set the theme */
  setTheme: (theme: string) => void
  /** Toggle between light and dark */
  toggleTheme: () => void
  /** The system preference ("light" or "dark") */
  systemTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme(key: string | false): string | null {
  if (!key || typeof window === 'undefined') return null
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function storeTheme(key: string | false, theme: string): void {
  if (!key || typeof window === 'undefined') return
  try {
    localStorage.setItem(key, theme)
  } catch {
    // Ignore storage errors
  }
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'asterui-theme',
  lightTheme = 'light',
  darkTheme = 'dark',
  isDarkTheme,
}: ThemeProviderProps) {
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(getSystemTheme)

  const [theme, setThemeState] = useState<string>(() => {
    return getStoredTheme(storageKey) || defaultTheme
  })

  const resolvedTheme = useMemo(() => {
    if (theme === 'system') {
      return systemTheme === 'dark' ? darkTheme : lightTheme
    }
    return theme
  }, [theme, systemTheme, lightTheme, darkTheme])

  const isDark = useMemo(() => {
    if (isDarkTheme) return isDarkTheme(resolvedTheme)
    return DARK_THEMES.has(resolvedTheme)
  }, [resolvedTheme, isDarkTheme])

  // Set data-theme on <html>
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('data-theme', resolvedTheme)
  }, [resolvedTheme])

  // Listen for system preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setSystemTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Listen for storage changes (cross-tab sync)
  useEffect(() => {
    if (!storageKey || typeof window === 'undefined') return
    const handler = (e: StorageEvent) => {
      if (e.key === storageKey && e.newValue) {
        setThemeState(e.newValue)
      }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [storageKey])

  const setTheme = useCallback((t: string) => {
    setThemeState(t)
    storeTheme(storageKey, t)
  }, [storageKey])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const resolved = current === 'system'
        ? (systemTheme === 'dark' ? darkTheme : lightTheme)
        : current
      const currentIsDark = isDarkTheme ? isDarkTheme(resolved) : DARK_THEMES.has(resolved)
      const next = currentIsDark ? lightTheme : darkTheme
      storeTheme(storageKey, next)
      return next
    })
  }, [systemTheme, lightTheme, darkTheme, isDarkTheme, storageKey])

  const value = useMemo<ThemeContextValue>(() => ({
    theme, resolvedTheme, isDark, setTheme, toggleTheme, systemTheme,
  }), [theme, resolvedTheme, isDark, setTheme, toggleTheme, systemTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Hook to access theme context.
 * Must be used within a ThemeProvider.
 */
export function useThemeContext(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}

/**
 * Check if ThemeProvider is present in the tree.
 */
export function useHasThemeProvider(): boolean {
  return useContext(ThemeContext) !== undefined
}
