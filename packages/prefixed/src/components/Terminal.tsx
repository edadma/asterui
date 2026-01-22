import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import * as XTermPkg from '@xterm/xterm'
import * as FitAddonPkg from '@xterm/addon-fit'
import type { Terminal as XTermType, ITerminalOptions, ITerminalInitOnlyOptions } from '@xterm/xterm'
import type { FitAddon as FitAddonType } from '@xterm/addon-fit'
import { useTheme } from '../hooks/useTheme'

// Handle both ESM and CJS module formats
const XTerm = (XTermPkg as { Terminal?: typeof XTermType }).Terminal
  ?? (XTermPkg as { default?: { Terminal: typeof XTermType } }).default?.Terminal
  ?? (XTermPkg as unknown as typeof XTermType)
const FitAddon = (FitAddonPkg as { FitAddon?: typeof FitAddonType }).FitAddon
  ?? (FitAddonPkg as { default?: { FitAddon: typeof FitAddonType } }).default?.FitAddon
  ?? (FitAddonPkg as unknown as typeof FitAddonType)

// Inject xterm.css once (inlined for reliability across bundlers)
let cssInjected = false
function injectXtermCSS() {
  if (cssInjected || typeof document === 'undefined') return
  cssInjected = true

  const style = document.createElement('style')
  style.setAttribute('data-xterm', '')
  style.textContent = `.xterm{cursor:text;position:relative;user-select:none;-ms-user-select:none;-webkit-user-select:none}.xterm.focus,.xterm:focus{outline:none}.xterm .xterm-helpers{position:absolute;top:0;z-index:5}.xterm .xterm-helper-textarea{padding:0;border:0;margin:0;position:absolute;opacity:0;left:-9999em;top:0;width:0;height:0;z-index:-5;white-space:nowrap;overflow:hidden;resize:none}.xterm .composition-view{background:#000;color:#fff;display:none;position:absolute;white-space:nowrap;z-index:1}.xterm .composition-view.active{display:block}.xterm .xterm-viewport{background-color:#000;overflow-y:scroll;cursor:default;position:absolute;right:0;left:0;top:0;bottom:0}.xterm .xterm-screen{position:relative}.xterm .xterm-screen canvas{position:absolute;left:0;top:0}.xterm .xterm-scroll-area{visibility:hidden}.xterm-char-measure-element{display:inline-block;visibility:hidden;position:absolute;top:0;left:-9999em;line-height:normal}.xterm.enable-mouse-events{cursor:default}.xterm.xterm-cursor-pointer,.xterm .xterm-cursor-pointer{cursor:pointer}.xterm.column-select.focus{cursor:crosshair}.xterm .xterm-accessibility:not(.debug),.xterm .xterm-message{position:absolute;left:0;top:0;bottom:0;right:0;z-index:10;color:transparent;pointer-events:none}.xterm .xterm-accessibility-tree:not(.debug) *::selection{color:transparent}.xterm .xterm-accessibility-tree{user-select:text;white-space:pre}.xterm .live-region{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}.xterm-dim{opacity:.5}.xterm-underline-1{text-decoration:underline}.xterm-underline-2{text-decoration:double underline}.xterm-underline-3{text-decoration:wavy underline}.xterm-underline-4{text-decoration:dotted underline}.xterm-underline-5{text-decoration:dashed underline}.xterm-overline{text-decoration:overline}.xterm-overline.xterm-underline-1{text-decoration:overline underline}.xterm-overline.xterm-underline-2{text-decoration:overline double underline}.xterm-overline.xterm-underline-3{text-decoration:overline wavy underline}.xterm-overline.xterm-underline-4{text-decoration:overline dotted underline}.xterm-overline.xterm-underline-5{text-decoration:overline dashed underline}.xterm-strikethrough{text-decoration:line-through}.xterm-screen .xterm-decoration-container .xterm-decoration{z-index:6;position:absolute}.xterm-screen .xterm-decoration-container .xterm-decoration.xterm-decoration-top-layer{z-index:7}.xterm-decoration-overview-ruler{z-index:8;position:absolute;top:0;right:0;pointer-events:none}.xterm-decoration-top{z-index:2;position:relative}`
  document.head.appendChild(style)
}

export interface TerminalRef {
  /** The underlying xterm.js Terminal instance */
  terminal: XTermType | null
  /** Write data to the terminal */
  write: (data: string) => void
  /** Write a line to the terminal (with newline) */
  writeln: (data: string) => void
  /** Clear the terminal */
  clear: () => void
  /** Focus the terminal */
  focus: () => void
  /** Fit the terminal to its container */
  fit: () => void
  /** Command history (only available with readline mode) */
  history: string[]
  /** Clear command history (only available with readline mode) */
  clearHistory: () => void
}

export interface TerminalProps {
  /** Callback when user types in the terminal (raw input) */
  onData?: (data: string) => void
  /** Callback when terminal is ready */
  onReady?: (terminal: XTermType) => void
  /** Enable readline mode with line editing and history */
  readline?: boolean
  /** Prompt string for readline mode (supports ANSI colors) */
  prompt?: string
  /** Callback when user submits a line in readline mode */
  onLine?: (line: string) => void
  /** xterm.js options (theme is auto-applied unless you override it) */
  options?: ITerminalOptions & ITerminalInitOnlyOptions
  /** Additional CSS classes for the container */
  className?: string
  /** Container style */
  style?: React.CSSProperties
  'data-testid'?: string
}

export const Terminal = forwardRef<TerminalRef, TerminalProps>(({
  onData,
  onReady,
  readline = false,
  prompt = '$ ',
  onLine,
  options = {},
  className = '',
  style,
  'data-testid': testId,
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<XTermType | null>(null)
  const fitAddonRef = useRef<FitAddonType | null>(null)
  const { isDark, colors } = useTheme()

  // Readline state
  const readlineState = useRef({
    buffer: '',
    cursor: 0,
    history: [] as string[],
    historyIndex: -1,
    savedBuffer: '',
  })

  // Build theme from DaisyUI colors
  const getTheme = () => ({
    background: colors.background,
    foreground: colors.foreground,
    cursor: colors.primary,
    cursorAccent: colors.background,
    selectionBackground: colors.primary + '40',
    selectionForeground: colors.foreground,
    black: isDark ? '#000000' : '#2e3436',
    red: colors.error,
    green: colors.success,
    yellow: colors.warning,
    blue: colors.info,
    magenta: colors.secondary,
    cyan: colors.accent,
    white: isDark ? '#d3d7cf' : '#eeeeec',
    brightBlack: '#555753',
    brightRed: colors.error,
    brightGreen: colors.success,
    brightYellow: colors.warning,
    brightBlue: colors.info,
    brightMagenta: colors.secondary,
    brightCyan: colors.accent,
    brightWhite: isDark ? '#eeeeec' : '#ffffff',
  })

  useImperativeHandle(ref, () => ({
    terminal: terminalRef.current,
    write: (data: string) => terminalRef.current?.write(data),
    writeln: (data: string) => terminalRef.current?.writeln(data),
    clear: () => terminalRef.current?.clear(),
    focus: () => terminalRef.current?.focus(),
    fit: () => fitAddonRef.current?.fit(),
    history: readlineState.current.history,
    clearHistory: () => { readlineState.current.history = [] },
  }), [])

  // Redraw the current line in readline mode
  const redrawLine = () => {
    const term = terminalRef.current
    if (!term) return
    const s = readlineState.current
    // Move to start of line, clear line, write prompt + buffer, position cursor
    term.write('\r\x1b[K' + prompt + s.buffer)
    // Move cursor to correct position
    const moveBack = s.buffer.length - s.cursor
    if (moveBack > 0) {
      term.write(`\x1b[${moveBack}D`)
    }
  }

  // Handle readline input
  const handleReadlineData = (data: string) => {
    const term = terminalRef.current
    if (!term) return
    const s = readlineState.current

    // Handle escape sequences (arrow keys)
    if (data === '\x1b[A') {
      // Up arrow - history previous
      if (s.history.length > 0 && s.historyIndex < s.history.length - 1) {
        if (s.historyIndex === -1) s.savedBuffer = s.buffer
        s.historyIndex++
        s.buffer = s.history[s.history.length - 1 - s.historyIndex]
        s.cursor = s.buffer.length
        redrawLine()
      }
      return
    }
    if (data === '\x1b[B') {
      // Down arrow - history next
      if (s.historyIndex > -1) {
        s.historyIndex--
        s.buffer = s.historyIndex === -1 ? s.savedBuffer : s.history[s.history.length - 1 - s.historyIndex]
        s.cursor = s.buffer.length
        redrawLine()
      }
      return
    }
    if (data === '\x1b[C') {
      // Right arrow
      if (s.cursor < s.buffer.length) {
        s.cursor++
        term.write('\x1b[C')
      }
      return
    }
    if (data === '\x1b[D') {
      // Left arrow
      if (s.cursor > 0) {
        s.cursor--
        term.write('\x1b[D')
      }
      return
    }
    if (data === '\x1b[H' || data === '\x1bOH' || data === '\x1b[1~') {
      // Home - move to start of line
      if (s.cursor > 0) {
        term.write(`\x1b[${s.cursor}D`)
        s.cursor = 0
      }
      return
    }
    if (data === '\x1b[F' || data === '\x1bOF' || data === '\x1b[4~') {
      // End - move to end of line
      if (s.cursor < s.buffer.length) {
        term.write(`\x1b[${s.buffer.length - s.cursor}C`)
        s.cursor = s.buffer.length
      }
      return
    }
    if (data === '\x1b[3~') {
      // Delete key - delete character at cursor
      if (s.cursor < s.buffer.length) {
        s.buffer = s.buffer.slice(0, s.cursor) + s.buffer.slice(s.cursor + 1)
        redrawLine()
      }
      return
    }

    // Ignore other escape sequences
    if (data.startsWith('\x1b')) return

    if (data === '\r') {
      // Enter
      term.writeln('')
      const line = s.buffer
      if (line.trim()) {
        s.history.push(line)
      }
      s.buffer = ''
      s.cursor = 0
      s.historyIndex = -1
      s.savedBuffer = ''
      onLine?.(line)
      term.write(prompt)
    } else if (data === '\x7f' || data === '\b') {
      // Backspace
      if (s.cursor > 0) {
        s.buffer = s.buffer.slice(0, s.cursor - 1) + s.buffer.slice(s.cursor)
        s.cursor--
        redrawLine()
      }
    } else if (data === '\x03') {
      // Ctrl+C
      term.writeln('^C')
      s.buffer = ''
      s.cursor = 0
      s.historyIndex = -1
      term.write(prompt)
    } else if (data >= ' ' || data === '\t') {
      // Printable characters
      s.buffer = s.buffer.slice(0, s.cursor) + data + s.buffer.slice(s.cursor)
      s.cursor += data.length
      redrawLine()
    }
  }

  // Initialize terminal
  useEffect(() => {
    if (!containerRef.current) return

    injectXtermCSS()

    const container = containerRef.current
    let terminal: XTermType | null = null
    let fitAddon: FitAddonType | null = null
    let resizeObserver: ResizeObserver | null = null
    let initialized = false
    let disposed = false

    const initTerminal = () => {
      if (initialized || disposed || !container) return

      // Check container has dimensions before opening
      const rect = container.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      initialized = true

      terminal = new XTerm({
        theme: getTheme(),
        cursorBlink: true,
        fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
        fontSize: 14,
        ...options,
      })
      fitAddon = new FitAddon()

      terminal.loadAddon(fitAddon)
      terminal.open(container)
      fitAddon.fit()

      terminalRef.current = terminal
      fitAddonRef.current = fitAddon

      if (readline) {
        terminal.onData(handleReadlineData)
      } else if (onData) {
        terminal.onData(onData)
      }

      onReady?.(terminal)

      // Write initial prompt after onReady so welcome messages appear first
      if (readline) {
        terminal.write(prompt)
      }
    }

    // Use ResizeObserver to wait for container to have dimensions
    resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry || disposed) return

      if (!initialized) {
        initTerminal()
      } else if (fitAddon) {
        fitAddon.fit()
      }
    })
    resizeObserver.observe(container)

    // Also try immediately in case container already has dimensions
    requestAnimationFrame(initTerminal)

    return () => {
      disposed = true
      resizeObserver?.disconnect()
      terminal?.dispose()
      terminalRef.current = null
      fitAddonRef.current = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Update theme when colors change
  useEffect(() => {
    if (!terminalRef.current) return
    terminalRef.current.options.theme = getTheme()
  }, [isDark, colors]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      data-testid={testId}
    />
  )
})

Terminal.displayName = 'Terminal'
