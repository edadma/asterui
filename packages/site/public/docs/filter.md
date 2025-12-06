# Filter

A group of radio buttons for single-option filtering. Selecting an option hides the others and shows a reset button.

## Import

```tsx
import { Filter } from 'asterui'
```

## Basic Usage

```tsx
import { useState } from 'react'
import { Filter } from 'asterui'

export default function App() {
  const [value, setValue] = useState<string | undefined>()

  return (
    <Filter
      options={['Svelte', 'Vue', 'React', 'Angular']}
      value={value}
      onChange={setValue}
    />
  )
}
```

## Examples

### Sizes

```tsx
import { Filter, Space } from 'asterui'

export default function App() {
  return (
    <Space direction="vertical" size="lg">
      <Filter options={['Small', 'Medium', 'Large']} size="xs" />
      <Filter options={['Small', 'Medium', 'Large']} size="sm" />
      <Filter options={['Small', 'Medium', 'Large']} size="md" />
      <Filter options={['Small', 'Medium', 'Large']} size="lg" />
    </Space>
  )
}
```

### Object Options

Use objects for options with custom labels, values, and disabled state.

```tsx
import { useState } from 'react'
import { Filter } from 'asterui'

export default function App() {
  const [value, setValue] = useState<string | undefined>()

  return (
    <Filter
      options={[
        { label: 'JavaScript', value: 'js' },
        { label: 'TypeScript', value: 'ts' },
        { label: 'Python', value: 'py' },
        { label: 'Rust', value: 'rust', disabled: true },
      ]}
      value={value}
      onChange={setValue}
    />
  )
}
```

### Without Reset Button

Hide the reset button when you want to require a selection.

```tsx
import { Filter } from 'asterui'

export default function App() {
  return (
    <Filter
      options={['Option A', 'Option B', 'Option C']}
      showReset={false}
      defaultValue="Option A"
    />
  )
}
```

## API

### Filter Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| options | Filter options | `(string \| FilterOption)[]` | - |
| value | Controlled selected value | `string` | - |
| defaultValue | Default value for uncontrolled mode | `string` | - |
| onChange | Called when selection changes | `(value: string \| undefined) => void` | - |
| name | Radio group name (auto-generated if not provided) | `string` | - |
| size | Button size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| showReset | Show reset button | `boolean` | `true` |
| resetLabel | Reset button label | `React.ReactNode` | `'×'` |
| className | Additional CSS classes | `string` | - |

### FilterOption

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| label | Display text for the option | `string` | - |
| value | Value of the option | `string` | - |
| disabled | Whether the option is disabled | `boolean` | `false` |

## Accessibility

- Uses native radio inputs for keyboard and screen reader support
- Options use `aria-label` for accessible names
- Reset button has `aria-label="Reset filter"`
- Supports keyboard navigation with Tab and Space/Enter
