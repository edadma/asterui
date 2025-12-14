import { useState } from 'react'
import { CopyButton, Space, Input } from 'asterui'
import { Demo } from './Demo'

export function BasicDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="sm">
        <CopyButton text="Hello, World!" />
        <CopyButton text="Copy this text" showTooltip />
      </Space>
    </Demo>
  )
}

export function WithTextDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="sm">
        <CopyButton text="npm install asterui">npm install asterui</CopyButton>
        <CopyButton text="pnpm add asterui" copiedChildren="Copied!">pnpm add asterui</CopyButton>
      </Space>
    </Demo>
  )
}

export function ColorsDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="sm">
        <CopyButton text="primary" color="primary" showTooltip />
        <CopyButton text="secondary" color="secondary" showTooltip />
        <CopyButton text="accent" color="accent" showTooltip />
        <CopyButton text="success" color="success" showTooltip />
        <CopyButton text="warning" color="warning" showTooltip />
        <CopyButton text="error" color="error" showTooltip />
      </Space>
    </Demo>
  )
}

export function VariantsDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="sm">
        <CopyButton text="solid" color="primary" showTooltip />
        <CopyButton text="outline" color="primary" variant="outline" showTooltip />
        <CopyButton text="ghost" variant="ghost" showTooltip />
        <CopyButton text="soft" color="primary" variant="soft" showTooltip />
      </Space>
    </Demo>
  )
}

export function SizesDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="sm" align="center">
        <CopyButton text="xs" size="xs" showTooltip />
        <CopyButton text="sm" size="sm" showTooltip />
        <CopyButton text="md" size="md" showTooltip />
        <CopyButton text="lg" size="lg" showTooltip />
        <CopyButton text="xl" size="xl" showTooltip />
      </Space>
    </Demo>
  )
}

export function ShapesDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="sm">
        <CopyButton text="square" shape="square" showTooltip />
        <CopyButton text="circle" shape="circle" showTooltip />
      </Space>
    </Demo>
  )
}

export function CodeBlockDemo() {
  const codeText = `import { CopyButton } from 'asterui'

export const App = () => (
  <CopyButton text="Hello!" showTooltip />
)`

  return (
    <Demo>
      <div className="relative bg-base-300 rounded-lg p-4 pr-12">
        <pre className="font-mono text-sm whitespace-pre">{codeText}</pre>
        <CopyButton text={codeText} size="sm" variant="ghost" position="top-right" showTooltip />
      </div>
    </Demo>
  )
}

export function InputCopyDemo() {
  const [value, setValue] = useState('https://asterui.com')

  return (
    <Demo>
      <div className="flex gap-2" style={{ maxWidth: '24rem' }}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1"
        />
        <CopyButton text={value} color="primary" showTooltip />
      </div>
    </Demo>
  )
}

export function CallbackDemo() {
  const [message, setMessage] = useState('')

  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <CopyButton
          text="Callback example"
          color="primary"
          onCopy={() => setMessage('Copied successfully!')}
          onError={() => setMessage('Copy failed!')}
        >
          Copy with callback
        </CopyButton>
        {message && <span className="text-sm text-base-content/70">{message}</span>}
      </Space>
    </Demo>
  )
}

export function CustomTimeoutDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="sm">
        <CopyButton text="1 second" timeout={1000} showTooltip tooltipText="1s timeout">
          1s timeout
        </CopyButton>
        <CopyButton text="5 seconds" timeout={5000} showTooltip tooltipText="5s timeout">
          5s timeout
        </CopyButton>
      </Space>
    </Demo>
  )
}
