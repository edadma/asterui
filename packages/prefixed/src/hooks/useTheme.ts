import { useEffect, useState } from 'react'

export interface ThemeColors {
  /** Base background color (--color-base-100) */
  background: string
  /** Base content/text color (--color-base-content) */
  foreground: string
  /** Primary color (--color-primary) */
  primary: string
  /** Primary content color (--color-primary-content) */
  primaryContent: string
  /** Secondary color (--color-secondary) */
  secondary: string
  /** Accent color (--color-accent) */
  accent: string
  /** Info color (--color-info) */
  info: string
  /** Success color (--color-success) */
  success: string
  /** Warning color (--color-warning) */
  warning: string
  /** Error color (--color-error) */
  error: string
}

export interface UseThemeReturn {
  /** Whether dark mode is active */
  isDark: boolean
  /** Computed theme colors as hex values */
  colors: ThemeColors
}

// Convert any CSS color to hex
function colorToHex(color: string): string {
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
  const style = getComputedStyle(document.documentElement)

  const getColor = (varName: string, fallback: string): string => {
    const value = style.getPropertyValue(varName).trim()
    return value ? colorToHex(value) : fallback
  }

  // DaisyUI v5 uses --color-* variables with full oklch() values
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

/**
 * Hook to detect current theme and get computed colors
 *
 * Checks the `data-theme` attribute on the document root (for DaisyUI themes)
 * and falls back to system preference via `prefers-color-scheme`.
 *
 * Returns both the dark mode state and computed theme colors as hex values,
 * useful for canvas-based components that can't use CSS variables directly.
 *
 * Automatically updates when theme changes.
 */
export function useTheme(): UseThemeReturn {
  const [state, setState] = useState<UseThemeReturn>({
    isDark: false,
    colors: {
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
  })

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement
      const theme = html.getAttribute('data-theme')
      // Check for explicit dark theme or system preference
      const isDark = theme === 'dark' ||
        (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)

      // Small delay to ensure CSS variables are updated
      requestAnimationFrame(() => {
        setState({
          isDark,
          colors: getThemeColors()
        })
      })
    }

    checkTheme()

    // Watch for theme changes via attribute mutation
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    })

    // Also watch for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', checkTheme)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', checkTheme)
    }
  }, [])

  return state
}

export default useTheme
