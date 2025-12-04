# Tag

Labels for categorizing, marking, and organizing content.

**Import:** `import { Tag } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Tag } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-2 flex-wrap">
    <Tag>Default</Tag>
    <Tag color="primary">Primary</Tag>
    <Tag color="secondary">Secondary</Tag>
    <Tag color="accent">Accent</Tag>
    <Tag color="info">Info</Tag>
    <Tag color="success">Success</Tag>
    <Tag color="warning">Warning</Tag>
    <Tag color="error">Error</Tag>
  </div>
)

export default App
```

### Closable

```tsx
import React, { useState } from 'react'
import { Tag } from 'asterui'

const App: React.FC = () => {
  const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3'])

  const handleClose = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  return (
    <div className="flex gap-2 flex-wrap">
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
    </div>
  )
}

export default App
```

### Sizes

```tsx
import React from 'react'
import { Tag } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-2 items-center flex-wrap">
    <Tag color="primary" size="xs">Extra Small</Tag>
    <Tag color="primary" size="sm">Small</Tag>
    <Tag color="primary" size="md">Medium</Tag>
    <Tag color="primary" size="lg">Large</Tag>
  </div>
)

export default App
```

### Custom Colors

```tsx
import React from 'react'
import { Tag } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-2 flex-wrap">
    <Tag color="#f50">Red</Tag>
    <Tag color="#2db7f5">Blue</Tag>
    <Tag color="#87d068">Green</Tag>
    <Tag color="#108ee9">Cyan</Tag>
    <Tag color="#f5222d">Crimson</Tag>
  </div>
)

export default App
```

### Checkable

```tsx
import React, { useState } from 'react'
import { CheckableTag } from 'asterui'

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
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
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
| `color` | Tag color (preset or custom hex) | `primary' \| 'secondary' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'ghost' \| string` | `-` |
| `icon` | Icon element to display before text | `ReactNode` | `-` |
| `size` | Tag size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `children` | Tag content | `ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Checkable Tag

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `checked` | Whether tag is checked | `boolean` | `false` |
| `onChange` | Callback when checked state changes | `(checked: boolean) => void` | `-` |
| `icon` | Icon element to display before text | `ReactNode` | `-` |
| `children` | Tag content | `ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
