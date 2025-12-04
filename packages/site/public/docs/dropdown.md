# Dropdown

**Import:** `import { Dropdown } from 'asterui'`

## Examples

### Basic Dropdown

Simple dropdown menu with items.

```tsx
import React from 'react'
import { Dropdown, Button } from 'asterui'

const App: React.FC = () => (
  <Dropdown>
    <Dropdown.Trigger>
      <Button type="primary">Actions</Button>
    </Dropdown.Trigger>
    <Dropdown.Menu>
      <Dropdown.Item>Edit</Dropdown.Item>
      <Dropdown.Item>Duplicate</Dropdown.Item>
      <Dropdown.Item>Delete</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default App
```

### Placement

Dropdown menu can be positioned in different directions.

```tsx
import React from 'react'
import { Dropdown, Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="sm" wrap>
    <Dropdown placement="top">
      <Dropdown.Trigger>
        <Button>Top</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown placement="bottom">
      <Dropdown.Trigger>
        <Button>Bottom</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown placement="left">
      <Dropdown.Trigger>
        <Button>Left</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown placement="right">
      <Dropdown.Trigger>
        <Button>Right</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Space>
)

export default App
```

### Hover to Open

Dropdown opens on hover instead of click.

```tsx
import React from 'react'
import { Dropdown, Button } from 'asterui'

const App: React.FC = () => (
  <Dropdown hover>
    <Dropdown.Trigger>
      <Button type="secondary">Hover Me</Button>
    </Dropdown.Trigger>
    <Dropdown.Menu>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default App
```

### With Icons

Menu items with icons for better visual context.

```tsx
import React from 'react'
import { Dropdown, Button } from 'asterui'
import { PencilIcon, DocumentDuplicateIcon, TrashIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Dropdown>
    <Dropdown.Trigger>
      <Button type="primary">Options</Button>
    </Dropdown.Trigger>
    <Dropdown.Menu>
      <Dropdown.Item>
        <PencilIcon className="w-4 h-4 mr-2" />
        Edit
      </Dropdown.Item>
      <Dropdown.Item>
        <DocumentDuplicateIcon className="w-4 h-4 mr-2" />
        Duplicate
      </Dropdown.Item>
      <Dropdown.Item>
        <TrashIcon className="w-4 h-4 mr-2" />
        Delete
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default App
```

## API

### Dropdown

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Trigger element and dropdown content (use Dropdown.Trigger and Dropdown.Menu) | `React.ReactNode` | `-` |
| `placement` | Dropdown menu placement | `top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end` | `bottom-start` |
| `hover` | Open on hover instead of click | `boolean` | `false` |
| `open` | Controlled open state | `boolean` | `-` |
| `onOpenChange` | Callback when open state changes | `(open: boolean) => void` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
