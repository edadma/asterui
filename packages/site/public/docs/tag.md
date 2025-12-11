# Tag

Labels for categorizing, marking, and organizing content.

**Import:** `import { Tag } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Tag, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="sm" wrap>
    <Tag>Default</Tag>
    <Tag color="primary">Primary</Tag>
    <Tag color="secondary">Secondary</Tag>
    <Tag color="accent">Accent</Tag>
    <Tag color="info">Info</Tag>
    <Tag color="success">Success</Tag>
    <Tag color="warning">Warning</Tag>
    <Tag color="error">Error</Tag>
  </Space>
)

export default App
```

### Closable

```tsx
import React, { useState } from 'react'
import { Tag, Space } from 'asterui'

const App: React.FC = () => {
  const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3'])

  const handleClose = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  return (
    <Space size="sm" wrap>
      {tags.map((tag) => (
        <Tag
          key={tag}
          closable
          color="primary"
          onClose={() => handleClose(tag)}
        >
          {tag}
        </Tag>
      ))}
    </Space>
  )
}

export default App
```

### Sizes

```tsx
import React from 'react'
import { Tag, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="sm" align="center" wrap>
    <Tag color="primary" size="xs">Extra Small</Tag>
    <Tag color="primary" size="sm">Small</Tag>
    <Tag color="primary" size="md">Medium</Tag>
    <Tag color="primary" size="lg">Large</Tag>
  </Space>
)

export default App
```

### Custom Colors

```tsx
import React from 'react'
import { Tag, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="sm" wrap>
    <Tag color="#f50">Red</Tag>
    <Tag color="#2db7f5">Blue</Tag>
    <Tag color="#87d068">Green</Tag>
    <Tag color="#108ee9">Cyan</Tag>
    <Tag color="#f5222d">Crimson</Tag>
  </Space>
)

export default App
```

### Checkable

```tsx
import React, { useState } from 'react'
import { CheckableTag, Space } from 'asterui'

const App: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['React'])

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    setSelectedTags(nextSelectedTags)
  }

  const tags = ['React', 'Vue', 'Angular', 'Svelte']

  return (
    <Space size="sm" wrap>
      {tags.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Space>
  )
}

export default App
```

## API

### Tag

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `closable` | Show close icon and enable closing | `boolean` | `false` |
| `closeIcon` | Custom close icon element | `ReactNode` | `-` |
| `onClose` | Callback when tag is closed | `() => void` | `-` |
| `color` | Tag color (preset or custom hex) | `'primary' \| 'secondary' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'ghost' \| string` | `-` |
| `icon` | Icon element to display before text | `ReactNode` | `-` |
| `size` | Tag size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `children` | Tag content | `ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `data-testid` | Test ID for the component | `string` | `'tag'` |

### CheckableTag

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `checked` | Whether tag is checked | `boolean` | `false` |
| `onChange` | Callback when checked state changes | `(checked: boolean) => void` | `-` |
| `icon` | Icon element to display before text | `ReactNode` | `-` |
| `children` | Tag content | `ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `data-testid` | Test ID for the component | `string` | `'checkable-tag'` |

## Accessibility

The Tag components follow accessibility best practices:

- CheckableTag uses `role="checkbox"` with `aria-checked`
- CheckableTag supports keyboard navigation (Enter/Space to toggle)
- Close buttons have `aria-label="Close"`

## Testing

The component exposes `data-testid` attributes for testing:

| Element | Test ID |
|---------|---------|
| Tag root | `{baseTestId}` |
| Close button | `{baseTestId}-close` |
| CheckableTag root | `{baseTestId}` |

Data attributes:
- `data-state`: `'checked'` or `'unchecked'` (CheckableTag only)

Pass a custom `data-testid` prop to use a different base ID:

```tsx
<Tag data-testid="user-role">Admin</Tag>
// Results in: user-role, user-role-close (if closable)
```
