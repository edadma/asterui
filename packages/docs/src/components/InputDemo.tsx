import { useState } from 'react'
import { Input, Space } from 'asterui'
import { Demo } from './Demo'

export function BasicDemo() {
  return (
    <Demo>
      <Input placeholder="Enter text..." />
    </Demo>
  )
}

export function SizesDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Input size="xs" placeholder="Extra small" />
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium (default)" />
        <Input size="lg" placeholder="Large" />
        <Input size="xl" placeholder="Extra large" />
      </Space>
    </Demo>
  )
}

export function ColorsDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Input color="primary" placeholder="Primary" />
        <Input color="secondary" placeholder="Secondary" />
        <Input color="accent" placeholder="Accent" />
        <Input color="info" placeholder="Info" />
        <Input color="success" placeholder="Success" />
        <Input color="warning" placeholder="Warning" />
        <Input color="error" placeholder="Error" />
      </Space>
    </Demo>
  )
}

export function TypesDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Input type="text" placeholder="Text input" />
        <Input type="email" placeholder="Email input" />
        <Input type="password" placeholder="Password input" />
        <Input type="number" placeholder="Number input" />
        <Input type="tel" placeholder="Telephone input" />
        <Input type="url" placeholder="URL input" />
        <Input type="search" placeholder="Search input" />
      </Space>
    </Demo>
  )
}

export function VariantsDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Input placeholder="Default bordered" />
        <Input bordered={false} placeholder="Without border" />
        <Input ghost placeholder="Ghost variant" />
      </Space>
    </Demo>
  )
}

export function MaskDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Input mask="(###) ###-####" placeholder="Phone number" />
        <Input mask="####-####-####-####" placeholder="Credit card" />
        <Input mask="##/##/####" placeholder="Date (MM/DD/YYYY)" />
        <Input mask="AA-####" placeholder="License plate" />
      </Space>
    </Demo>
  )
}

export function ControlledDemo() {
  const [value, setValue] = useState('')
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
        />
        <div className="text-sm text-base-content/70">
          Value: {value || '(empty)'}
        </div>
      </Space>
    </Demo>
  )
}

export function DisabledDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Input placeholder="Normal input" />
        <Input placeholder="Disabled input" disabled />
        <Input value="Disabled with value" disabled />
      </Space>
    </Demo>
  )
}

export function AllowClearDemo() {
  const [value, setValue] = useState('Clear me!')
  return (
    <Demo>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        allowClear
        placeholder="Type then clear..."
      />
    </Demo>
  )
}

export function PrefixSuffixDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Input prefix={<span>🔍</span>} placeholder="Search..." />
        <Input prefix={<span>👤</span>} placeholder="Username" />
        <Input suffix="@gmail.com" placeholder="Email" />
      </Space>
    </Demo>
  )
}

export function StatusDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <div>
          <Input status="error" placeholder="Error status" errorId="error-msg" />
          <p id="error-msg" className="text-error text-sm mt-1">This field is required</p>
        </div>
        <div>
          <Input status="warning" placeholder="Warning status" />
          <p className="text-warning text-sm mt-1">Please verify this value</p>
        </div>
      </Space>
    </Demo>
  )
}

export function FloatingLabelDemo() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Demo>
      <Space direction="vertical" size="md">
        <Input
          floatingLabel="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          floatingLabel="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Space>
    </Demo>
  )
}

export function AddonsDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="md">
        <Input addonBefore="https://" placeholder="your-site.com" />
        <Input addonAfter=".com" placeholder="username" />
        <Input addonBefore="$" addonAfter=".00" placeholder="0" />
      </Space>
    </Demo>
  )
}
