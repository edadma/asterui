import { useState } from 'react'
import { CopyButton, Space, Input } from 'asterui'
import { Demo } from './Demo'

// @example-imports: { CopyButton, Space } from 'asterui'
export function BasicDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space>
        <CopyButton text="Hello, World!" />
        <CopyButton text="Copy this text" showTooltip />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CopyButton, Space } from 'asterui'
export function WithTextDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space direction="vertical">
        <CopyButton text="npm install asterui">
          npm install asterui
        </CopyButton>
        <CopyButton text="pnpm add asterui" copiedChildren="Copied!">
          pnpm add asterui
        </CopyButton>
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CopyButton, Space } from 'asterui'
export function ColorsDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space>
        <CopyButton text="primary" color="primary" showTooltip />
        <CopyButton text="secondary" color="secondary" showTooltip />
        <CopyButton text="accent" color="accent" showTooltip />
        <CopyButton text="success" color="success" showTooltip />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CopyButton, Space } from 'asterui'
export function VariantsDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space>
        <CopyButton text="solid" color="primary" />
        <CopyButton text="outline" color="primary" variant="outline" />
        <CopyButton text="ghost" variant="ghost" />
        <CopyButton text="soft" color="primary" variant="soft" />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CopyButton, Space } from 'asterui'
export function SizesDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space align="center">
        <CopyButton text="xs" size="xs" />
        <CopyButton text="sm" size="sm" />
        <CopyButton text="md" size="md" />
        <CopyButton text="lg" size="lg" />
        <CopyButton text="xl" size="xl" />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CopyButton, Space } from 'asterui'
export function ShapesDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space>
        <CopyButton text="square" shape="square" />
        <CopyButton text="circle" shape="circle" />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CopyButton } from 'asterui'
export function CodeBlockDemo() {
  // @example-include
  const codeText = `import { CopyButton } from 'asterui'

export const App = () => (
  <CopyButton text="Hello!" showTooltip />
)`
  // @example-include-end

  return (
    <Demo>
      {/* @example-return */}
      <div style={{ position: 'relative' }} className="bg-base-300 rounded-lg p-4 pr-12">
        <pre className="font-mono text-sm whitespace-pre">{codeText}</pre>
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <CopyButton text={codeText} size="sm" variant="ghost" showTooltip />
        </div>
      </div>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CopyButton, Input } from 'asterui'
// @example-imports: { useState } from 'react'
export function InputCopyDemo() {
  // @example-include
  const [value, setValue] = useState('https://asterui.com')
  // @example-include-end

  return (
    <Demo>
      {/* @example-return */}
      <div className="flex gap-2">
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <CopyButton text={value} color="primary" showTooltip />
      </div>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CopyButton } from 'asterui'
export function CallbackDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <CopyButton
        text="Callback example"
        color="primary"
        onCopy={() => console.log('Copied!')}
        onError={(err) => console.error('Failed:', err)}
      >
        Copy with callback
      </CopyButton>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CopyButton, Space } from 'asterui'
export function CustomTimeoutDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space>
        <CopyButton text="1 second" timeout={1000}>1s timeout</CopyButton>
        <CopyButton text="5 seconds" timeout={5000}>5s timeout</CopyButton>
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}
