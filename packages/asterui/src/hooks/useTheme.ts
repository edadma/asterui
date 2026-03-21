import { useEffect, useState, useMemo } from 'react'
import { useHasThemeProvider, useThemeContext, type ThemeColors } from '../providers/ThemeProvider'

export type { ThemeColors }

// Common dark themes in DaisyUI
const DARK_THEMES = new Set([
  'dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula',
  'business', 'night', 'coffee', 'dim', 'sunset'
])

export interface UseThemeReturn {
  /** The theme setting (what user selected). Only available with ThemeProvider. */
  theme: string | undefined
  /** The actual applied theme. Only available with ThemeProvider. */
  resolvedTheme: string | undefined
  /** Whether dark mode is active */
  isDark: boolean
  /** Set the theme. Only available with ThemeProvider. */
  setTheme: ((theme: string) => void) | undefined
  /** Toggle between light and dark. Only available with ThemeProvider. */
  toggleTheme: (() => void) | undefined
  /** Computed theme colors as hex values. Lazy — only computed when accessed. */
  colors: ThemeColors
  /** The system preference. Only available with ThemeProvider. */
  systemTheme: 'light' | 'dark' | undefined
}

// Convert any CSS color to hex via canvas
function colorToHex(color: string): string {
  if (typeof document === 'undefined') return '#000000'
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 1
  const ctx = canvas.getContext('2d')
  if (!ctx) return '#000000'
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 1, 1)
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

function getThemeColors(): ThemeColors {
  if (typeof document === 'undefined') {
    return {
      background: '#ffffff',
      foreground: '#000000',
      primary: '#6366f1',
      primaryContent: '#ffffff',
      secondary: '#f000b8',
      accent: '#37cdbe',
      info: '#3abff8',
      success: '#36d399',
      warning: '#fbbd23',
      error: '#f87272',
    }
  }

  const style = getComputedStyle(document.documentElement)
  const getColor = (varName: string, fallback: string): string => {
    const value = style.getPropertyValue(varName).trim()
    return value ? colorToHex(value) : fallback
  }

  return {
    background: getColor('--color-base-100', '#ffffff'),
    foreground: getColor('--color-base-content', '#000000'),
    primary: getColor('--color-primary', '#6366f1'),
    primaryContent: getColor('--color-primary-content', '#ffffff'),
    secondary: getColor('--color-secondary', '#f000b8'),
    accent: getColor('--color-accent', '#37cdbe'),
    info: getColor('--color-info', '#3abff8'),
    success: getColor('--color-success', '#36d399'),
    warning: getColor('--color-warning', '#fbbd23'),
    error: getColor('--color-error', '#f87272'),
  }
}

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getCurrentTheme(): string | null {
  if (typeof document === 'undefined') return null
  return document.documentElement.getAttribute('data-theme')
}

/**
 * Create a lazy colors object that only computes hex values when accessed.
 * Returns a new object each time so referential identity tracks the dep key.
 */
function createLazyColors(depKey: unknown): ThemeColors {
  let cached: ThemeColors | null = null
  // depKey is used only to invalidate the closure identity
  void depKey
  return new Proxy({} as ThemeColors, {
    get(_target, prop: string) {
      if (!cached) cached = getThemeColors()
      return cached[prop as keyof ThemeColors]
    },
    ownKeys() {
      if (!cached) cached = getThemeColors()
      return Object.keys(cached)
    },
    getOwnPropertyDescriptor(_target, prop) {
      if (!cached) cached = getThemeColors()
      if (prop in cached) {
        return { configurable: true, enumerable: true, value: cached[prop as keyof ThemeColors] }
      }
    },
  })
}

/**
 * Hook to detect current theme and get computed colors.
 *
 * When used within a ThemeProvider, returns full theme control including
 * setTheme, theme selection, and resolved theme.
 *
 * When used standalone (without ThemeProvider), provides read-only access
 * to isDark and colors based on the current data-theme attribute and
 * system preference.
 *
 * Colors are lazy — only computed (via canvas) when you access them.
 * Components that only need isDark/setTheme pay no cost for color computation.
 *
 * @example
 * // With ThemeProvider (full control)
 * const { theme, setTheme, resolvedTheme, isDark, colors } = useTheme()
 * setTheme('dark')
 *
 * @example
 * // Without ThemeProvider (read-only)
 * const { isDark, colors } = useTheme()
 * // colors.primary, colors.foreground, etc.
 */
export function useTheme(): UseThemeReturn {
  const hasProvider = useHasThemeProvider()

  if (hasProvider) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useThemeContext()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const lazyColors = useMemo(() => createLazyColors(context.resolvedTheme), [context.resolvedTheme])
    return {
      theme: context.theme,
      resolvedTheme: context.resolvedTheme,
      isDark: context.isDark,
      setTheme: context.setTheme,
      toggleTheme: context.toggleTheme,
      colors: lazyColors,
      systemTheme: context.systemTheme,
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useThemeStandalone()
}

/**
 * Standalone theme detection (no ThemeProvider)
 */
function useThemeStandalone(): UseThemeReturn {
  const [state, setState] = useState<{ isDark: boolean; themeKey: string | null }>(() => ({
    isDark: false,
    themeKey: getCurrentTheme(),
  }))

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = getCurrentTheme()
      const systemTheme = getSystemTheme()

      let isDark = false
      if (currentTheme) {
        isDark = DARK_THEMES.has(currentTheme)
      } else {
        isDark = systemTheme === 'dark'
      }

      setState({ isDark, themeKey: currentTheme })
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    })

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateTheme)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', updateTheme)
    }
  }, [])

  return useMemo(() => {
    const lazyColors = createLazyColors(state.themeKey)
    return {
      theme: undefined,
      resolvedTheme: undefined,
      isDark: state.isDark,
      setTheme: undefined,
      toggleTheme: undefined,
      colors: lazyColors,
      systemTheme: undefined,
    }
  }, [state.isDark, state.themeKey])
}

export default useTheme
