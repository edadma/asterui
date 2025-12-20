# Checkbox

**Import:** `import { Checkbox } from 'asterui'`

## Examples

### Basic Checkbox

Simple checkbox with label using the built-in children prop.

```tsx
import React from 'react'
import { Checkbox } from 'asterui'

const App: React.FC = () => (
  <Checkbox>Accept terms and conditions</Checkbox>
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
    <Checkbox color="primary" defaultChecked>Primary</Checkbox>
    <Checkbox color="secondary" defaultChecked>Secondary</Checkbox>
    <Checkbox color="accent" defaultChecked>Accent</Checkbox>
    <Checkbox color="success" defaultChecked>Success</Checkbox>
    <Checkbox color="warning" defaultChecked>Warning</Checkbox>
    <Checkbox color="info" defaultChecked>Info</Checkbox>
    <Checkbox color="error" defaultChecked>Error</Checkbox>
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
    <Checkbox size="xs" defaultChecked>XS</Checkbox>
    <Checkbox size="sm" defaultChecked>SM</Checkbox>
    <Checkbox size="md" defaultChecked>MD</Checkbox>
    <Checkbox size="lg" defaultChecked>LG</Checkbox>
    <Checkbox size="xl" defaultChecked>XL</Checkbox>
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
    <Checkbox disabled>Disabled</Checkbox>
    <Checkbox disabled defaultChecked>Disabled Checked</Checkbox>
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
      <Checkbox
        checked={allChecked}
        indeterminate={someChecked}
        onChange={handleSelectAll}
        className="font-medium"
      >
        Select All
      </Checkbox>
      <div className="ml-6">
        <Space direction="vertical" size="xs">
          {['Item 1', 'Item 2', 'Item 3'].map((item, i) => (
            <Checkbox
              key={i}
              checked={items[i]}
              onChange={() => {
                const newItems = [...items]
                newItems[i] = !newItems[i]
                setItems(newItems)
              }}
            >
              {item}
            </Checkbox>
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
import { Checkbox, Modal } from 'asterui'

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
    onChange={(values) => Modal.info({ title: 'Selected', content: values.join(', ') })}
  />
)

export default App
```

### Swap Mode

Use the `swap` prop to toggle between two visual states (icons, text, etc.) instead of showing a checkbox.

```tsx
import React, { useState } from 'react'
import { Checkbox, Space } from 'asterui'
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@aster-ui/icons/solid'

const App: React.FC = () => {
  const [volume, setVolume] = useState(true)

  return (
    <Space size="lg">
      <Checkbox
        checked={volume}
        onChange={(e) => setVolume(e.target.checked)}
        swap={{
          on: <SpeakerWaveIcon size={32} />,
          off: <SpeakerXMarkIcon size={32} />,
        }}
      />
      <Checkbox
        swap={{
          on: <span className="text-2xl">😀</span>,
          off: <span className="text-2xl">😴</span>,
          effect: 'rotate',
        }}
      />
      <Checkbox
        swap={{
          on: <span className="text-xl font-bold text-success">ON</span>,
          off: <span className="text-xl font-bold text-error">OFF</span>,
          effect: 'flip',
        }}
      />
    </Space>
  )
}

export default App
```

### Swap with Icons

Theme toggle example using swap mode with Heroicons.

```tsx
import React, { useState } from 'react'
import { Checkbox } from 'asterui'
import { SunIcon, MoonIcon } from '@aster-ui/icons/solid'

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <Checkbox
      checked={isDark}
      onChange={(e) => setIsDark(e.target.checked)}
      swap={{
        on: <MoonIcon size={32} />,
        off: <SunIcon size={32} />,
        effect: 'rotate',
      }}
    />
  )
}

export default App
```

## API

### Checkbox

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Label content (automatically wrapped in label element) | `React.ReactNode` | `-` |
| `checked` | Controlled checked state | `boolean` | `-` |
| `defaultChecked` | Initial checked state | `boolean` | `false` |
| `onChange` | Change handler | `(e: ChangeEvent) => void` | `-` |
| `disabled` | Disable the checkbox | `boolean` | `false` |
| `indeterminate` | Indeterminate state (partial selection) | `boolean` | `false` |
| `size` | Checkbox size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `color` | Checkbox color | `'primary' \| 'secondary' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error'` | `-` |
| `swap` | Swap mode config (see below) | `CheckboxSwapConfig` | `-` |
| `name` | HTML name attribute for the input | `string` | `-` |
| `value` | Value attribute (used with Checkbox.Group) | `string \| number` | `-` |
| `autoFocus` | Auto focus on mount | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
| `data-testid` | Test ID for the checkbox element | `string` | `-` |

### CheckboxSwapConfig

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `on` | Content shown when checked | `React.ReactNode` | - |
| `off` | Content shown when unchecked | `React.ReactNode` | - |
| `effect` | Animation effect | `'rotate' \| 'flip'` | `-` |

### Checkbox.Group

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Selected values (controlled) | `(string \| number)[]` | `-` |
| `defaultValue` | Initial selected values | `(string \| number)[]` | `-` |
| `onChange` | Change handler | `(values: (string \| number)[]) => void` | `-` |
| `options` | Checkbox options | `CheckboxOption[]` | `-` |
| `disabled` | Disable all checkboxes | `boolean` | `false` |
| `direction` | Layout direction | `'horizontal' \| 'vertical'` | `'vertical'` |
| `name` | HTML name attribute for all checkboxes (for form submission) | `string` | `-` |
| `data-testid` | Test ID prefix (options get `{testId}-option-{value}`) | `string` | `-` |

### Data Attributes

| Attribute | Description | Values |
|-----------|-------------|--------|
| `data-state` | Current checkbox state | `'checked' \| 'unchecked' \| 'indeterminate'` |

### Accessibility

- Uses native `<input type="checkbox">` for full keyboard support
- `aria-checked="mixed"` is set automatically when `indeterminate` is true
- When using `children`, the checkbox is automatically wrapped in a `<label>` for proper accessibility
- Focus visible styles are provided by default
