import { useRef } from 'react'
import { Terminal, type TerminalRef } from '@aster-ui/prefixed/terminal'
import { Demo } from './Demo'

// @example-imports: { Terminal } from 'asterui/terminal'
export function BasicDemo() {
  // @example-include
  const terminalRef = useRef<TerminalRef>(null)
  // @example-include-end

  return (
    <Demo contained height="300px">
      {/* @example-return */}
      <Terminal
        ref={terminalRef}
        readline
        prompt={'\x1b[32m$ \x1b[0m'}
        onReady={(term) => {
          term.writeln('Welcome to AsterUI Terminal!')
          term.writeln('Type something and press Enter.')
          term.writeln('Use arrow keys for line editing and history.')
        }}
        style={{ height: '100%' }}
      />
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Terminal, type TerminalRef } from 'asterui/terminal'
// @example-imports: { useRef } from 'react'
export function CommandDemo() {
  // @example-include
  const terminalRef = useRef<TerminalRef>(null)

  const handleLine = (line: string) => {
    const term = terminalRef.current
    if (!term) return

    const cmd = line.trim().toLowerCase()
    if (cmd === 'help') {
      term.writeln('Available commands: help, date, clear, hello')
    } else if (cmd === 'date') {
      term.writeln(new Date().toString())
    } else if (cmd === 'clear') {
      term.clear()
    } else if (cmd === 'hello') {
      term.writeln('\x1b[36mHello, World!\x1b[0m')
    } else if (cmd) {
      term.writeln(`\x1b[31mUnknown command: ${cmd}\x1b[0m`)
    }
  }
  // @example-include-end

  return (
    <Demo contained height="300px">
      {/* @example-return */}
      <Terminal
        ref={terminalRef}
        readline
        prompt={'\x1b[33m>\x1b[0m '}
        onLine={handleLine}
        onReady={(term) => {
          term.writeln('Simple command shell. Type "help" for commands.')
        }}
        style={{ height: '100%' }}
      />
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Terminal, type TerminalRef } from 'asterui/terminal'
// @example-imports: { useRef } from 'react'
export function RefDemo() {
  // @example-include
  const terminalRef = useRef<TerminalRef>(null)

  const handleWrite = () => {
    terminalRef.current?.writeln('Hello from button!')
  }

  const handleClear = () => {
    terminalRef.current?.clear()
  }
  // @example-include-end

  return (
    <Demo contained height="320px">
      {/* @example-return */}
      <div className="flex flex-col gap-2 h-full">
        <div className="flex gap-2">
          <button className="d-btn d-btn-sm d-btn-primary" onClick={handleWrite}>
            Write Line
          </button>
          <button className="d-btn d-btn-sm d-btn-secondary" onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className="flex-1">
          <Terminal ref={terminalRef} style={{ height: '100%' }} />
        </div>
      </div>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Terminal } from 'asterui/terminal'
export function CustomOptionsDemo() {
  return (
    <Demo contained height="300px">
      {/* @example-return */}
      <Terminal
        options={{
          fontSize: 16,
          fontFamily: '"Fira Code", monospace',
          cursorBlink: false,
          cursorStyle: 'block',
        }}
        onReady={(term) => {
          term.writeln('Custom terminal with Fira Code font')
          term.writeln('fontSize: 16, cursorStyle: block')
        }}
        style={{ height: '100%' }}
      />
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Terminal } from 'asterui/terminal'
export function ColorOutputDemo() {
  return (
    <Demo contained height="300px">
      {/* @example-return */}
      <Terminal
        onReady={(term) => {
          term.writeln('\x1b[1mBold text\x1b[0m')
          term.writeln('\x1b[31mRed text\x1b[0m')
          term.writeln('\x1b[32mGreen text\x1b[0m')
          term.writeln('\x1b[33mYellow text\x1b[0m')
          term.writeln('\x1b[34mBlue text\x1b[0m')
          term.writeln('\x1b[35mMagenta text\x1b[0m')
          term.writeln('\x1b[36mCyan text\x1b[0m')
          term.writeln('')
          term.writeln('\x1b[42m\x1b[30m Green background \x1b[0m')
          term.writeln('\x1b[44m\x1b[37m Blue background \x1b[0m')
        }}
        style={{ height: '100%' }}
      />
      {/* @example-return-end */}
    </Demo>
  )
}
