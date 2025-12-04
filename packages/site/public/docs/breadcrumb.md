# Breadcrumb

**Import:** `import { Breadcrumb } from 'asterui'`

## Examples

### Basic Breadcrumb

Simple breadcrumb navigation.

```tsx
import React from 'react'
import { Breadcrumb } from 'asterui'

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="/documents">Documents</Breadcrumb.Item>
    <Breadcrumb.Item>Add Document</Breadcrumb.Item>
  </Breadcrumb>
)

export default App
```

### With Icons

Breadcrumb with icons.

```tsx
import React from 'react'
import { Breadcrumb } from 'asterui'
import { FolderIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="/">
      <FolderIcon className="w-4 h-4" />
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="/documents">
      <FolderIcon className="w-4 h-4" />
      Documents
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <DocumentTextIcon className="w-4 h-4" />
      Add Document
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default App
```

### Max Width with Scroll

Breadcrumb with overflow scrolling.

```tsx
import React from 'react'
import { Breadcrumb } from 'asterui'

const App: React.FC = () => (
  <Breadcrumb className="max-w-xs">
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="/documents">Documents</Breadcrumb.Item>
    <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
    <Breadcrumb.Item href="/team">Team</Breadcrumb.Item>
    <Breadcrumb.Item>Add New Member</Breadcrumb.Item>
  </Breadcrumb>
)

export default App
```

## API

### Breadcrumb

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Breadcrumb.Item components | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Breadcrumb Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Item content (text or elements) | `React.ReactNode` | `-` |
| `href` | Link URL (makes item clickable) | `string` | `-` |
| `onClick` | Click handler (makes item clickable) | `() => void` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
