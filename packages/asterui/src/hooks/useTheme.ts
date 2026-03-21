import { useEffect, useState, useMemo, useRef } from 'react'
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
  /** Computed theme colors as hex values. Computed asynchronously after theme changes. */
  colors: ThemeColors
  /** The system preference. Only available with ThemeProvider. */
  systemTheme: 'light' | 'dark' | undefined
}

const SSR_COLORS: ThemeColors = {
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

// Persistent hidden element for DOM-based color conversion
let colorProbe: HTMLSpanElement | null = null

function getColorProbe(): HTMLSpanElement {
  if (!colorProbe) {
    colorProbe = document.createElement('span')
    colorProbe.style.position = 'absolute'
    colorProbe.style.visibility = 'hidden'
    colorProbe.style.pointerEvents = 'none'
    colorProbe.style.width = '0'
    colorProbe.style.height = '0'
    colorProbe.style.overflow = 'hidden'
    document.body.appendChild(colorProbe)
  }
  return colorProbe
}

/** Convert any CSS color (including oklch) to hex via getComputedStyle */
function colorToHex(color: string): string {
  const probe = getColorProbe()
  probe.style.color = color
  const computed = getComputedStyle(probe).color
  // getComputedStyle returns rgb(r, g, b) or rgba(r, g, b, a)
  const match = computed.match(/\d+/g)
  if (!match) return '#000000'
  const [r, g, b] = match.map(Number)
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

function computeThemeColors(): ThemeColors {
  if (typeof document === 'undefined') return SSR_COLORS

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
 * Hook to detect current theme and get computed colors.
 *
 * When used within a ThemeProvider, returns full theme control including
 * setTheme, theme selection, and resolved theme.
 *
 * When used standalone (without ThemeProvider), provides read-only access
 * to isDark and colors based on the current data-theme attribute and
 * system preference.
 *
 * Colors are computed asynchronously after mount and theme changes,
 * using DOM-based color conversion (no canvas).
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
    return useThemeWithProvider()
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useThemeStandalone()
}

/**
 * Theme hook when ThemeProvider is present.
 */
function useThemeWithProvider(): UseThemeReturn {
  const context = useThemeContext()
  const [colors, setColors] = useState<ThemeColors>(SSR_COLORS)
  const mountedRef = useRef(false)

  useEffect(() => {
    // On mount and when theme changes, compute colors after CSS has applied
    requestAnimationFrame(() => {
      setColors(computeThemeColors())
    })
    mountedRef.current = true
  }, [context.resolvedTheme])

  return useMemo(() => ({
    theme: context.theme,
    resolvedTheme: context.resolvedTheme,
    isDark: context.isDark,
    setTheme: context.setTheme,
    toggleTheme: context.toggleTheme,
    colors,
    systemTheme: context.systemTheme,
  }), [context.theme, context.resolvedTheme, context.isDark, context.setTheme, context.toggleTheme, colors, context.systemTheme])
}

/**
 * Standalone theme detection (no ThemeProvider)
 */
function useThemeStandalone(): UseThemeReturn {
  const [isDark, setIsDark] = useState(false)
  const [colors, setColors] = useState<ThemeColors>(SSR_COLORS)

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = getCurrentTheme()
      const systemTheme = getSystemTheme()

      let dark = false
      if (currentTheme) {
        dark = DARK_THEMES.has(currentTheme)
      } else {
        dark = systemTheme === 'dark'
      }

      setIsDark(dark)

      // Compute colors after CSS has applied
      requestAnimationFrame(() => {
        setColors(computeThemeColors())
      })
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

  return useMemo(() => ({
    theme: undefined,
    resolvedTheme: undefined,
    isDark,
    setTheme: undefined,
    toggleTheme: undefined,
    colors,
    systemTheme: undefined,
  }), [isDark, colors])
}

export default useTheme
