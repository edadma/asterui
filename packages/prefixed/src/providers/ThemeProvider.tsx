import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

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
  /** The theme setting (what user selected) */
  theme: string | undefined
  /** Whether the current theme is dark */
  isDark: boolean
  /** Set the theme */
  setTheme: (theme: string) => void
  /** Toggle between light and dark */
  toggleTheme: () => void
  /** The system preference ("light" or "dark") */
  systemTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({
  children,
  defaultTheme,
  storageKey = 'asterui-theme',
}: ThemeProviderProps) {
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light'
  )

  const [theme, setThemeState] = useState<string | undefined>(() => {
    if (storageKey && typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(storageKey)
        if (stored) return stored
      } catch { /* ignore */ }
    }
    return defaultTheme ?? systemTheme
  })

  const isDark = theme ? DARK_THEMES.has(theme) : systemTheme === 'dark'

  // Set data-theme on <html>
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [theme])

  // Listen for system preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setSystemTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Cross-tab sync
  useEffect(() => {
    if (!storageKey || typeof window === 'undefined') return
    const handler = (e: StorageEvent) => {
      if (e.key === storageKey && e.newValue) setThemeState(e.newValue)
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [storageKey])

  const setTheme = useCallback((t: string) => {
    setThemeState(t)
    if (storageKey) {
      try { localStorage.setItem(storageKey, t) } catch { /* ignore */ }
    }
  }, [storageKey])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const currentIsDark = current ? DARK_THEMES.has(current) : systemTheme === 'dark'
      const next = currentIsDark ? 'light' : 'dark'
      if (storageKey) {
        try { localStorage.setItem(storageKey, next) } catch { /* ignore */ }
      }
      return next
    })
  }, [systemTheme, storageKey])

  const value = useMemo(() => ({
    theme, isDark, setTheme, toggleTheme, systemTheme,
  }), [theme, isDark, setTheme, toggleTheme, systemTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Hook to access theme context.
 * Works with or without ThemeProvider.
 */
export function useThemeContext(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return ctx
}

/**
 * Check if ThemeProvider is present in the tree.
 */
export function useHasThemeProvider(): boolean {
  return useContext(ThemeContext) !== null
}
