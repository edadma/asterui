# Radio

Radio buttons for selecting one option from a set.

**Import:** `import { Radio } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Radio, Space } from 'asterui'

const App: React.FC = () => (
  <Radio.Group defaultValue="1">
    <Space size="sm">
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio value="1" />
        <span>Option 1</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio value="2" />
        <span>Option 2</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio value="3" />
        <span>Option 3</span>
      </label>
    </Space>
  </Radio.Group>
)

export default App
```

### Horizontal

```tsx
import React from 'react'
import { Radio } from 'asterui'

const App: React.FC = () => (
  <Radio.Group defaultValue="apple">
    <div className="flex gap-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio value="apple" />
        <span>Apple</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio value="orange" />
        <span>Orange</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio value="banana" />
        <span>Banana</span>
      </label>
    </div>
  </Radio.Group>
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Radio, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="sm">
    <label className="flex items-center gap-2">
      <Radio size="xs" defaultChecked />
      <span className="text-xs">Extra Small</span>
    </label>
    <label className="flex items-center gap-2">
      <Radio size="sm" />
      <span className="text-sm">Small</span>
    </label>
    <label className="flex items-center gap-2">
      <Radio size="md" />
      <span>Medium</span>
    </label>
    <label className="flex items-center gap-2">
      <Radio size="lg" />
      <span className="text-lg">Large</span>
    </label>
    <label className="flex items-center gap-2">
      <Radio size="xl" />
      <span className="text-xl">Extra Large</span>
    </label>
  </Space>
)

export default App
```

### Colors

```tsx
import React from 'react'
import { Radio } from 'asterui'

const App: React.FC = () => (
  <div className="flex flex-wrap gap-4">
    <Radio color="primary" defaultChecked />
    <Radio color="secondary" />
    <Radio color="accent" />
    <Radio color="info" />
    <Radio color="success" />
    <Radio color="warning" />
    <Radio color="error" />
  </div>
)

export default App
```

### Disabled

```tsx
import React from 'react'
import { Radio, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="sm">
    <label className="flex items-center gap-2">
      <Radio disabled />
      <span className="opacity-50">Disabled unchecked</span>
    </label>
    <label className="flex items-center gap-2">
      <Radio disabled defaultChecked />
      <span className="opacity-50">Disabled checked</span>
    </label>
  </Space>
)

export default App
```

### Form

```tsx
import React from 'react'
import { Radio, Form, Button, Space } from 'asterui'

const App: React.FC = () => {
  const handleSubmit = (values: { plan?: string }) => {
    console.log(values)
  }

  return (
    <Form onFinish={handleSubmit} initialValues={{ plan: 'basic' }}>
      <Form.Item
        name="plan"
        label="Choose a plan"
        rules={{ required: 'Please select a plan' }}
      >
        <Radio.Group>
          <Space size="sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <Radio value="basic" />
              <div>
                <div className="font-semibold">Basic</div>
                <div className="text-sm opacity-70">$10/month</div>
              </div>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Radio value="pro" />
              <div>
                <div className="font-semibold">Pro</div>
                <div className="text-sm opacity-70">$20/month</div>
              </div>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Radio value="enterprise" />
              <div>
                <div className="font-semibold">Enterprise</div>
                <div className="text-sm opacity-70">Contact us</div>
              </div>
            </label>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Continue
      </Button>
    </Form>
  )
}

export default App
```

## API

### Radio Group

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Radio components | `React.ReactNode` | `-` |
| `value` | Current selected value (controlled) | `string \| number` | `-` |
| `defaultValue` | Default selected value (uncontrolled) | `string \| number` | `-` |
| `onChange` | Callback when selection changes | `(value: string \| number) => void` | `-` |
| `name` | Name for all radio inputs in the group | `string` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Radio

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Radio value (required when in Radio.Group) | `string \| number` | `-` |
| `size` | Radio button size | `xs' \| 'sm' \| 'md' \| 'lg' \| 'xl` | `md` |
| `color` | Radio button color variant | `neutral' \| 'primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error` | `-` |
| `disabled` | Disabled state | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
