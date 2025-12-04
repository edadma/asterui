# Select

Dropdown select component for choosing from a list of options.

**Import:** `import { Select } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Select } from 'asterui'

const App: React.FC = () => (
  <Select>
    <option disabled selected>Pick your favorite</option>
    <option>Apple</option>
    <option>Orange</option>
    <option>Banana</option>
    <option>Grape</option>
  </Select>
)

export default App
```

### Default Value

```tsx
import React from 'react'
import { Select } from 'asterui'

const App: React.FC = () => (
  <Select defaultValue="orange">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="banana">Banana</option>
    <option value="grape">Grape</option>
  </Select>
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Select, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="xs">
    <Select size="xs">
      <option>Extra small</option>
    </Select>
    <Select size="sm">
      <option>Small</option>
    </Select>
    <Select size="md">
      <option>Medium (default)</option>
    </Select>
    <Select size="lg">
      <option>Large</option>
    </Select>
    <Select size="xl">
      <option>Extra large</option>
    </Select>
  </Space>
)

export default App
```

### Colors

```tsx
import React from 'react'
import { Select, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="xs">
    <Select color="primary">
      <option>Primary</option>
    </Select>
    <Select color="secondary">
      <option>Secondary</option>
    </Select>
    <Select color="accent">
      <option>Accent</option>
    </Select>
    <Select color="info">
      <option>Info</option>
    </Select>
    <Select color="success">
      <option>Success</option>
    </Select>
    <Select color="warning">
      <option>Warning</option>
    </Select>
    <Select color="error">
      <option>Error</option>
    </Select>
  </Space>
)

export default App
```

### Ghost

```tsx
import React from 'react'
import { Select } from 'asterui'

const App: React.FC = () => (
  <Select ghost>
    <option disabled selected>Pick one</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </Select>
)

export default App
```

### Disabled

```tsx
import React from 'react'
import { Select } from 'asterui'

const App: React.FC = () => (
  <Select disabled>
    <option>Disabled select</option>
  </Select>
)

export default App
```

### Form

```tsx
import React from 'react'
import { Form, Select, Button } from 'asterui'

const App: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Form
      onFinish={handleSubmit}
      initialValues={{ country: 'canada' }}
    >
      <Form.Item
        name="country"
        label="Country"
        required
        rules={{ required: 'Please select a country' }}
      >
        <Select>
          <option value="">Select a country</option>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
          <option value="uk">United Kingdom</option>
        </Select>
      </Form.Item>

      <Form.Item
        name="language"
        label="Language"
        required
        rules={{ required: 'Please select a language' }}
      >
        <Select>
          <option value="">Select a language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Save Settings
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
```
