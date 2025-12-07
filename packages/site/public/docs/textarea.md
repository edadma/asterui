# Textarea

Multi-line text input component for longer text content.

**Import:** `import { Textarea } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Textarea } from 'asterui'

const App: React.FC = () => (
  <Textarea placeholder="Type your message here" />
)

export default App
```

### Rows

```tsx
import React from 'react'
import { Textarea } from 'asterui'

const App: React.FC = () => (
  <Textarea rows={6} placeholder="Tall textarea" />
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Textarea, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="xs">
    <Textarea size="xs" placeholder="Extra small" />
    <Textarea size="sm" placeholder="Small" />
    <Textarea size="md" placeholder="Medium (default)" />
    <Textarea size="lg" placeholder="Large" />
    <Textarea size="xl" placeholder="Extra large" />
  </Space>
)

export default App
```

### Colors

```tsx
import React from 'react'
import { Textarea, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="xs">
    <Textarea color="primary" placeholder="Primary" />
    <Textarea color="secondary" placeholder="Secondary" />
    <Textarea color="accent" placeholder="Accent" />
    <Textarea color="info" placeholder="Info" />
    <Textarea color="success" placeholder="Success" />
    <Textarea color="warning" placeholder="Warning" />
    <Textarea color="error" placeholder="Error" />
  </Space>
)

export default App
```

### Ghost Variant

```tsx
import React from 'react'
import { Textarea } from 'asterui'

const App: React.FC = () => (
  <Textarea ghost placeholder="Ghost textarea" />
)

export default App
```

### Disabled State

```tsx
import React from 'react'
import { Textarea } from 'asterui'

const App: React.FC = () => (
  <Textarea disabled placeholder="Disabled textarea" />
)

export default App
```

### Form

```tsx
import React, { useState } from 'react'
import { Form, Textarea, Button, Modal } from 'asterui'

const App: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<Record<string, unknown> | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (values: Record<string, unknown>) => {
    setSubmittedData(values)
    setIsModalOpen(true)
  }

  return (
    <>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="message"
          label="Message"
          required
          rules={{
            required: 'Please enter a message',
            min: { value: 10, message: 'Message must be at least 10 characters' },
          }}
        >
          <Textarea rows={4} placeholder="Enter your message here" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Send Message
          </Button>
        </Form.Item>
      </Form>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        title="Form Submitted"
        footer={null}
      >
        <div className="py-4">
          <p className="mb-4">Form data:</p>
          <pre className="bg-base-200 p-4 rounded-lg overflow-auto max-h-96">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      </Modal>
    </>
  )
}

export default App
```

## API

### Textarea

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `size` | Textarea size | `xs' \| 'sm' \| 'md' \| 'lg' \| 'xl` | `-` |
| `color` | Textarea color theme | `neutral' \| 'primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error` | `-` |
| `ghost` | Ghost style variant | `boolean` | `false` |
| `bordered` | Show border | `boolean` | `true` |
| `disabled` | Disabled state | `boolean` | `false` |
| `placeholder` | Placeholder text | `string` | `-` |
| `rows` | Number of visible text rows | `number` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
