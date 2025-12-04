# Fieldset

**Import:** `import { Fieldset } from 'asterui'`

## Examples

### Basic Fieldset

Simple fieldset with legend.

```tsx
import React from 'react'
import { Fieldset } from 'asterui'

const App: React.FC = () => (
  <Fieldset>
    <Fieldset.Legend>User Information</Fieldset.Legend>
    <p className="text-sm text-base-content/70">
      Group related form controls with a descriptive legend.
    </p>
  </Fieldset>
)

export default App
```

### With Form Inputs

Fieldset containing form inputs.

```tsx
import React from 'react'
import { Fieldset, Input, Space } from 'asterui'

const App: React.FC = () => (
  <Fieldset>
    <Fieldset.Legend>Contact Details</Fieldset.Legend>
    <Space direction="vertical" size="sm" className="w-full">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <Input placeholder="Enter your name" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <Input type="tel" placeholder="Enter your phone" />
      </div>
    </Space>
  </Fieldset>
)

export default App
```

### Disabled Fieldset

All form controls within are disabled.

```tsx
import React from 'react'
import { Fieldset, Input, Space } from 'asterui'

const App: React.FC = () => (
  <Fieldset disabled>
    <Fieldset.Legend>Disabled Form Section</Fieldset.Legend>
    <Space direction="vertical" size="sm" className="w-full">
      <div>
        <label className="block text-sm font-medium mb-1">Username</label>
        <Input placeholder="Cannot edit" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <Input type="password" placeholder="Cannot edit" />
      </div>
    </Space>
  </Fieldset>
)

export default App
```

## API

### Fieldset

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Content of the fieldset | `React.ReactNode` | `-` |
| `disabled` | Disables all form controls within | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |

### Legend

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Legend text or content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
