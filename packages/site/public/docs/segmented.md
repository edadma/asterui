# Segmented

Inline toggle for switching between mutually exclusive options.

**Import:** `import { Segmented } from 'asterui'`

## Examples

### Basic Usage

Simple compound component pattern.

```tsx
import React, { useState } from 'react'
import { Segmented } from 'asterui'

const App: React.FC = () => {
  const [view, setView] = useState('List')

  return (
    <div>
      <Segmented value={view} onChange={setView}>
        <Segmented.Item value="List">List</Segmented.Item>
        <Segmented.Item value="Grid">Grid</Segmented.Item>
        <Segmented.Item value="Table">Table</Segmented.Item>
      </Segmented>
      <p className="mt-2 text-sm text-base-content/70">Selected: {view}</p>
    </div>
  )
}

export default App
```

### Disabled Items

Individual items can be disabled.

```tsx
import React, { useState } from 'react'
import { Segmented } from 'asterui'

const App: React.FC = () => {
  const [period, setPeriod] = useState('week')

  return (
    <div>
      <Segmented value={period} onChange={setPeriod}>
        <Segmented.Item value="day">Daily</Segmented.Item>
        <Segmented.Item value="week">Weekly</Segmented.Item>
        <Segmented.Item value="month">Monthly</Segmented.Item>
        <Segmented.Item value="year" disabled>Yearly</Segmented.Item>
      </Segmented>
      <p className="mt-2 text-sm text-base-content/70">Selected: {period}</p>
    </div>
  )
}

export default App
```

### With Icons

Options with icons and labels using Heroicons.

```tsx
import React, { useState } from 'react'
import { Segmented } from 'asterui'
import { Bars3Icon, Squares2X2Icon } from '@aster-ui/icons'

const App: React.FC = () => {
  const [view, setView] = useState('list')

  return (
    <div>
      <Segmented value={view} onChange={setView}>
        <Segmented.Item value="list" icon={<Bars3Icon size="sm" />}>
          List
        </Segmented.Item>
        <Segmented.Item value="grid" icon={<Squares2X2Icon size="sm" />}>
          Grid
        </Segmented.Item>
      </Segmented>
      <p className="mt-2 text-sm text-base-content/70">View: {view}</p>
    </div>
  )
}

export default App
```

### Sizes

Four size options available.

```tsx
import React from 'react'
import { Segmented, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical">
    <Segmented size="xs" defaultValue="M">
      <Segmented.Item value="S">S</Segmented.Item>
      <Segmented.Item value="M">M</Segmented.Item>
      <Segmented.Item value="L">L</Segmented.Item>
    </Segmented>
    <Segmented size="lg" defaultValue="M">
      <Segmented.Item value="S">S</Segmented.Item>
      <Segmented.Item value="M">M</Segmented.Item>
      <Segmented.Item value="L">L</Segmented.Item>
    </Segmented>
  </Space>
)

export default App
```

### Block Mode

Full width with equally sized options.

```tsx
import React, { useState } from 'react'
import { Segmented } from 'asterui'

const App: React.FC = () => {
  const [align, setAlign] = useState('Center')

  return (
    <div className="w-full max-w-md">
      <Segmented value={align} onChange={setAlign} block>
        <Segmented.Item value="Left">Left</Segmented.Item>
        <Segmented.Item value="Center">Center</Segmented.Item>
        <Segmented.Item value="Right">Right</Segmented.Item>
      </Segmented>
    </div>
  )
}

export default App
```

### Uncontrolled

Using defaultValue without managing state.

```tsx
import React from 'react'
import { Segmented } from 'asterui'

const App: React.FC = () => (
  <Segmented defaultValue="A" onChange={(value) => console.log('Selected:', value)}>
    <Segmented.Item value="A">Option A</Segmented.Item>
    <Segmented.Item value="B">Option B</Segmented.Item>
    <Segmented.Item value="C">Option C</Segmented.Item>
  </Segmented>
)

export default App
```

## API

### Segmented Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Currently selected value (controlled) | `string \| number` | `-` |
| `defaultValue` | Default selected value (uncontrolled) | `string \| number` | `-` |
| `onChange` | Callback when selection changes | `(value: string \| number) => void` | `-` |
| `size` | Size of the control | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `block` | Take full width of container | `boolean` | `false` |
| `disabled` | Disable all options | `boolean` | `false` |
| `className` | Additional CSS class | `string` | `-` |
| `children` | Segmented.Item components | `ReactNode` | `-` |

### Segmented.Item Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Option value (required) | `string \| number` | `-` |
| `disabled` | Disable this option | `boolean` | `false` |
| `icon` | Icon before label | `ReactNode` | `-` |
| `children` | Label content | `ReactNode` | `-` |
| `className` | Additional CSS class | `string` | `-` |

## When to Use

- **View toggles**: Switch between List/Grid/Table views
- **Time periods**: Day/Week/Month/Year filters
- **Size selectors**: S/M/L/XL options
- **Alignment**: Left/Center/Right controls
- **Mode switches**: Light/Dark theme toggles

## Segmented vs Radio.Group

| Segmented | Radio.Group |
|-----------|-------------|
| Immediate UI state changes | Form field values |
| Compact, button-like appearance | Traditional radio buttons |
| Always visible options | Can have many options |
| 2-5 options typically | Any number of options |
