# Checkbox

**Import:** `import { Checkbox } from 'asterui'`

## Examples

### Basic Checkbox

Simple checkbox with label.

```tsx
import React from 'react'
import { Checkbox } from 'asterui'

const App: React.FC = () => (
  <label className="flex items-center gap-2 cursor-pointer">
    <Checkbox />
    <span>Accept terms and conditions</span>
  </label>
)

export default App
```

### Colors

Checkboxes with different color variants.

```tsx
import React from 'react'
import { Checkbox, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="sm">
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox color="primary" defaultChecked />
      <span>Primary</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox color="secondary" defaultChecked />
      <span>Secondary</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox color="accent" defaultChecked />
      <span>Accent</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox color="success" defaultChecked />
      <span>Success</span>
    </label>
  </Space>
)

export default App
```

### Sizes

Different checkbox sizes.

```tsx
import React from 'react'
import { Checkbox, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="md" align="center">
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox size="xs" defaultChecked />
      <span className="text-xs">XS</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox size="sm" defaultChecked />
      <span className="text-sm">SM</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox size="md" defaultChecked />
      <span>MD</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox size="lg" defaultChecked />
      <span className="text-lg">LG</span>
    </label>
  </Space>
)

export default App
```

### Disabled

Disabled checkbox states.

```tsx
import React from 'react'
import { Checkbox, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="md">
    <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
      <Checkbox disabled />
      <span>Disabled</span>
    </label>
    <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
      <Checkbox disabled defaultChecked />
      <span>Disabled Checked</span>
    </label>
  </Space>
)

export default App
```

### Indeterminate

Checkbox with indeterminate state for partial selection.

```tsx
import React, { useState } from 'react'
import { Checkbox, Space } from 'asterui'

const App: React.FC = () => {
  const [items, setItems] = useState([true, false, true])
  const allChecked = items.every(Boolean)
  const someChecked = items.some(Boolean) && !allChecked

  const handleSelectAll = () => {
    setItems(allChecked ? [false, false, false] : [true, true, true])
  }

  return (
    <Space direction="vertical" size="sm">
      <label className="flex items-center gap-2 cursor-pointer font-medium">
        <Checkbox
          checked={allChecked}
          indeterminate={someChecked}
          onChange={handleSelectAll}
        />
        <span>Select All</span>
      </label>
      <div className="ml-6">
        <Space direction="vertical" size="xs">
          {['Item 1', 'Item 2', 'Item 3'].map((item, i) => (
            <label key={i} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={items[i]}
                onChange={() => {
                  const newItems = [...items]
                  newItems[i] = !newItems[i]
                  setItems(newItems)
                }}
              />
              <span>{item}</span>
            </label>
          ))}
        </Space>
      </div>
    </Space>
  )
}

export default App
```

### Checkbox Group

Group of checkboxes with shared state.

```tsx
import React from 'react'
import { Checkbox } from 'asterui'

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Mango', value: 'mango' },
]

const App: React.FC = () => (
  <Checkbox.Group
    options={options}
    defaultValue={['apple', 'orange']}
    onChange={(values) => console.log('Selected:', values)}
  />
)

export default App
```

## API

### Checkbox

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `checked` | Controlled checked state | `boolean` | `-` |
| `defaultChecked` | Initial checked state | `boolean` | `false` |
| `onChange` | Change handler | `(e: ChangeEvent) => void` | `-` |
| `disabled` | Disable the checkbox | `boolean` | `false` |
| `indeterminate` | Indeterminate state (partial selection) | `boolean` | `false` |
| `size` | Checkbox size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `color` | Checkbox color | `primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Checkbox Group

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Selected values | `string[]` | `-` |
| `defaultValue` | Initial selected values | `string[]` | `-` |
| `onChange` | Change handler | `(values: string[]) => void` | `-` |
| `options` | Checkbox options | `CheckboxOption[]` | `-` |
| `disabled` | Disable all checkboxes | `boolean` | `false` |
| `direction` | Layout direction | `horizontal' \| 'vertical` | `horizontal` |
