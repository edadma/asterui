import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'
import { Form, Input, Button, Radio, Space } from 'asterui'

// Stateful demo components
const BasicDemo: React.FC = () => {
  const handleFinish = (values: any) => {
    console.log('Form values:', values)
  }

  return (
    <Form onFinish={handleFinish}>
      <Form.Item name="username" label="Username">
        <Input placeholder="Enter username" />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input type="password" placeholder="Enter password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

const ValidationDemo: React.FC = () => {
  const handleFinish = (values: any) => {
    console.log('Success:', values)
  }

  const handleFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input placeholder="name@example.com" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { min: 6, message: 'Password must be at least 6 characters' },
        ]}
      >
        <Input type="password" placeholder="Enter password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const LayoutsDemo: React.FC = () => {
  const [layout, setLayout] = useState<'horizontal' | 'vertical' | 'inline'>('vertical')

  return (
    <Space direction="vertical" size="lg" className="w-full">
      <Radio.Group value={layout} onChange={(e) => setLayout(e.target.value as typeof layout)}>
        <Radio value="vertical">Vertical</Radio>
        <Radio value="horizontal">Horizontal</Radio>
        <Radio value="inline">Inline</Radio>
      </Radio.Group>

      <Form layout={layout} onFinish={(values) => console.log(values)}>
        <Form.Item name="name" label="Name" required>
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item name="email" label="Email" required>
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}

const InitialValuesDemo: React.FC = () => {
  const initialValues = {
    username: 'john_doe',
    email: 'john@example.com',
    bio: 'Software developer',
  }

  const handleFinish = (values: any) => {
    console.log('Updated values:', values)
  }

  return (
    <Form initialValues={initialValues} onFinish={handleFinish}>
      <Form.Item name="username" label="Username">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>
      <Form.Item name="bio" label="Bio">
        <Input.TextArea rows={3} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update Profile
        </Button>
      </Form.Item>
    </Form>
  )
}

const statefulDemos: Record<string, React.FC> = {
  basic: BasicDemo,
  validation: ValidationDemo,
  layouts: LayoutsDemo,
  'initial-values': InitialValuesDemo,
}

// Mount React demos
document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && statefulDemos[exampleId]) {
    const root = createRoot(container as HTMLElement)
    const Component = statefulDemos[exampleId]
    root.render(<Component />)
  }
})

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code')
    if (code) {
      await navigator.clipboard.writeText(code)
      const originalHTML = btn.innerHTML
      btn.innerHTML =
        '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
      setTimeout(() => {
        btn.innerHTML = originalHTML
      }, 2000)
    }
  })
})
