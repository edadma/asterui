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
  /** Whether dark mode is active */
  isDark: boolean
  /** Set the theme. Only available with ThemeProvider. */
  setTheme: ((theme: string) => void) | undefined
  /** Toggle between light and dark. Only available with ThemeProvider. */
  toggleTheme: (() => void) | undefined
  /** The system preference. Only available with ThemeProvider. */
  systemTheme: 'light' | 'dark' | undefined
}

/**
 * Hook to detect and control the current theme.
 *
 * When used within a ThemeProvider, returns full theme control.
 * When used standalone, provides read-only isDark based on data-theme or system preference.
 *
 * Does NOT compute colors — use getThemeColors() where you need hex values.
 *
 * @example
 * const { isDark, setTheme, toggleTheme } = useTheme()
 */
export function useTheme(): UseThemeReturn {
  const hasProvider = useHasThemeProvider()

  if (hasProvider) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useThemeContext()
    return {
      theme: context.theme,
      isDark: context.isDark,
      setTheme: context.setTheme,
      toggleTheme: context.toggleTheme,
      systemTheme: context.systemTheme,
    }
  }

  // Fallback when used outside ThemeProvider — read from DOM
  const theme = typeof document !== 'undefined'
    ? document.documentElement.getAttribute('data-theme') ?? undefined
    : undefined
  const systemDark = typeof window !== 'undefined'
    && window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = theme ? DARK_THEMES.has(theme) : systemDark

  return {
    theme,
    isDark,
    setTheme: (t: string) => document.documentElement.setAttribute('data-theme', t),
    toggleTheme: () => {
      const current = document.documentElement.getAttribute('data-theme')
      const currentIsDark = current ? DARK_THEMES.has(current) : systemDark
      document.documentElement.setAttribute('data-theme', currentIsDark ? 'light' : 'dark')
    },
    systemTheme: (systemDark ? 'dark' : 'light') as 'light' | 'dark',
  }
}

// --- Color utilities (for components that need hex values) ---

/** Persistent hidden element for DOM-based color conversion */
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
  const match = computed.match(/\d+/g)
  if (!match) return '#000000'
  const [r, g, b] = match.map(Number)
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 * Compute current DaisyUI theme colors as hex values.
 * Call this on demand when you need hex colors (e.g., for canvas, xterm).
 * Not reactive — call it inside useEffect after theme changes.
 */
export function getThemeColors(): ThemeColors {
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

export default useTheme
