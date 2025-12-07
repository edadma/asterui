import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Toggle, Form, Button, Space } from 'asterui'

const demos: Record<string, React.ReactNode> = {
  basic: <Toggle />,
  sizes: (
    <Space>
      <Toggle size="xs" defaultChecked />
      <Toggle size="sm" defaultChecked />
      <Toggle size="md" defaultChecked />
      <Toggle size="lg" defaultChecked />
    </Space>
  ),
  colors: (
    <Space>
      <Toggle color="primary" defaultChecked />
      <Toggle color="secondary" defaultChecked />
      <Toggle color="accent" defaultChecked />
      <Toggle color="info" defaultChecked />
      <Toggle color="success" defaultChecked />
      <Toggle color="warning" defaultChecked />
      <Toggle color="error" defaultChecked />
    </Space>
  ),
  disabled: (
    <Space>
      <Toggle disabled />
      <Toggle disabled defaultChecked />
    </Space>
  ),
}

function ControlledToggle() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center gap-4">
      <Toggle checked={checked} onChange={(e) => setChecked(e.target.checked)} color="primary" />
      <span>Toggle is {checked ? 'ON' : 'OFF'}</span>
    </div>
  )
}

function FormToggle() {
  const handleSubmit = (values: Record<string, unknown>) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Form onFinish={handleSubmit} className="max-w-md">
      <Form.Item name="notifications" label="Enable notifications" valuePropName="checked">
        <Toggle color="primary" />
      </Form.Item>

      <Form.Item name="darkMode" label="Dark mode" valuePropName="checked">
        <Toggle color="secondary" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" color="primary">
          Save Settings
        </Button>
      </Form.Item>
    </Form>
  )
}

const statefulDemos: Record<string, React.FC> = {
  controlled: ControlledToggle,
  form: FormToggle,
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('.demo-container').forEach((container) => {
    const example = container.dataset.example
    if (example) {
      const root = createRoot(container)
      if (statefulDemos[example]) {
        const Component = statefulDemos[example]
        root.render(<Component />)
      } else if (demos[example]) {
        root.render(demos[example])
      }
    }
  })
})
