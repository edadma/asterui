# Cascader

**Import:** `import { Cascader } from 'asterui'`

## Examples

### Basic Cascader

Simple hierarchical selection.

```tsx
import React from 'react'
import { Cascader } from 'asterui'

const options = [
  {
    value: 'usa',
    label: 'United States',
    children: [
      {
        value: 'ca',
        label: 'California',
        children: [
          { value: 'sf', label: 'San Francisco' },
          { value: 'la', label: 'Los Angeles' },
        ],
      },
      {
        value: 'ny',
        label: 'New York',
        children: [
          { value: 'nyc', label: 'New York City' },
          { value: 'buf', label: 'Buffalo' },
        ],
      },
    ],
  },
]

const App: React.FC = () => (
  <Cascader options={options} placeholder="Select location" />
)

export default App
```

### Hover Expand

Expand sub-menus on hover.

```tsx
import React from 'react'
import { Cascader } from 'asterui'

const options = [
  {
    value: 'electronics',
    label: 'Electronics',
    children: [
      {
        value: 'phones',
        label: 'Phones',
        children: [
          { value: 'iphone', label: 'iPhone' },
          { value: 'android', label: 'Android' },
        ],
      },
      {
        value: 'computers',
        label: 'Computers',
        children: [
          { value: 'laptop', label: 'Laptop' },
          { value: 'desktop', label: 'Desktop' },
        ],
      },
    ],
  },
]

const App: React.FC = () => (
  <Cascader options={options} expandTrigger="hover" placeholder="Select category" />
)

export default App
```

### Sizes

Different cascader sizes.

```tsx
import React from 'react'
import { Cascader, Space } from 'asterui'

const options = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' },
]

const App: React.FC = () => (
  <Space direction="vertical" size="sm">
    <Cascader size="xs" options={options} placeholder="Extra small" />
    <Cascader size="sm" options={options} placeholder="Small" />
    <Cascader size="md" options={options} placeholder="Medium" />
    <Cascader size="lg" options={options} placeholder="Large" />
  </Space>
)

export default App
```

### Disabled

Disabled cascader state.

```tsx
import React from 'react'
import { Cascader } from 'asterui'

const options = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' },
]

const App: React.FC = () => (
  <Cascader options={options} disabled defaultValue={['opt1']} />
)

export default App
```

## API

### Cascader

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `options` | Hierarchical options data | `CascaderOption[]` | `-` |
| `value` | Selected value path | `string[]` | `-` |
| `defaultValue` | Initial selected value | `string[]` | `-` |
| `placeholder` | Input placeholder text | `string` | `Select` |
| `displayRender` | Custom display render function | `(labels: string[]) => React.ReactNode` | `-` |
| `expandTrigger` | How to expand sub-menus | `click' \| 'hover` | `click` |
| `disabled` | Disable the cascader | `boolean` | `false` |
| `size` | Input size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `className` | Additional CSS classes | `string` | `-` |
