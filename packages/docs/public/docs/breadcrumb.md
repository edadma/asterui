# Breadcrumb

Navigation breadcrumb trail showing hierarchical location.

**Import:** `import { Breadcrumb } from 'asterui'`

## Examples

### Basic (Compound Pattern)

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

### Data-Driven (items prop)

```tsx
import React from 'react'
import { Breadcrumb } from 'asterui'

const App: React.FC = () => (
  <Breadcrumb
    items={[
      { title: 'Home', href: '/' },
      { title: 'Products', href: '/products' },
      { title: 'Category', href: '/products/category' },
      { title: 'Item Details' },
    ]}
  />
)

export default App
```

### With Icons

```tsx
import React from 'react'
import { Breadcrumb } from 'asterui'
import { FolderIcon, DocumentTextIcon } from '@aster-ui/icons'

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="/" icon={<FolderIcon size="sm" />}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="/documents" icon={<FolderIcon size="sm" />}>
      Documents
    </Breadcrumb.Item>
    <Breadcrumb.Item icon={<DocumentTextIcon size="sm" />}>
      Add Document
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default App
```

### Custom Separator

```tsx
import React from 'react'
import { Breadcrumb } from 'asterui'
import { ChevronRightIcon } from '@aster-ui/icons'

const App: React.FC = () => (
  <div className="space-y-4">
    <Breadcrumb separator="/">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
      <Breadcrumb.Item>Details</Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb separator={<ChevronRightIcon size="sm" />}>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
      <Breadcrumb.Item>Details</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

export default App
```

### Max Width with Scroll

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
| `children` | Breadcrumb.Item components (compound pattern) | `React.ReactNode` | `-` |
| `items` | Breadcrumb items data (data-driven pattern) | `BreadcrumbItemType[]` | `-` |
| `separator` | Custom separator between items | `React.ReactNode` | `"/"` |
| `className` | Additional CSS classes | `string` | `-` |
| `data-testid` | Test ID for testing | `string` | - |

### BreadcrumbItemType (for items prop)

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `title` | Item title/label | `React.ReactNode` | `-` |
| `href` | Link URL | `string` | `-` |
| `onClick` | Click handler | `() => void` | `-` |
| `className` | Custom CSS class | `string` | `-` |
| `data-testid` | Test ID for testing | `string` | - |

### Breadcrumb.Item (compound pattern)

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Item content (text or elements) | `React.ReactNode` | `-` |
| `href` | Link URL (makes item clickable) | `string` | `-` |
| `onClick` | Click handler (makes item clickable) | `() => void` | `-` |
| `icon` | Icon to display before the label | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `data-testid` | Test ID for testing | `string` | - |
