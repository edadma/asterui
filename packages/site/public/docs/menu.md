# Menu

**Import:** `import { Menu } from 'asterui'`

## Examples

### Basic Menu

Simple vertical menu with items.

```tsx
import React from 'react'
import { Menu } from 'asterui'

const App: React.FC = () => (
  <Menu>
    <Menu.Item active>Dashboard</Menu.Item>
    <Menu.Item>Projects</Menu.Item>
    <Menu.Item>Team</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
  </Menu>
)

export default App
```

### Horizontal Menu

Menu displayed horizontally.

```tsx
import React from 'react'
import { Menu } from 'asterui'

const App: React.FC = () => (
  <Menu mode="horizontal">
    <Menu.Item active>Home</Menu.Item>
    <Menu.Item>About</Menu.Item>
    <Menu.Item>Services</Menu.Item>
    <Menu.Item>Contact</Menu.Item>
  </Menu>
)

export default App
```

### With Icons

Menu items with icons for better visual context.

```tsx
import React from 'react'
import { Menu } from 'asterui'
import { HomeIcon, FolderIcon, UsersIcon, CogIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Menu>
    <Menu.Item active>
      <HomeIcon className="w-5 h-5 mr-2" />
      Dashboard
    </Menu.Item>
    <Menu.Item>
      <FolderIcon className="w-5 h-5 mr-2" />
      Projects
    </Menu.Item>
    <Menu.Item>
      <UsersIcon className="w-5 h-5 mr-2" />
      Team
    </Menu.Item>
    <Menu.Item>
      <CogIcon className="w-5 h-5 mr-2" />
      Settings
    </Menu.Item>
  </Menu>
)

export default App
```

### With Submenu

Menu with nested submenus.

```tsx
import React from 'react'
import { Menu } from 'asterui'

const App: React.FC = () => (
  <Menu>
    <Menu.Item active>Dashboard</Menu.Item>
    <Menu.SubMenu title="Projects">
      <Menu.Item>Active Projects</Menu.Item>
      <Menu.Item>Archived</Menu.Item>
      <Menu.Item>Templates</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Team">
      <Menu.Item>Members</Menu.Item>
      <Menu.Item>Roles</Menu.Item>
      <Menu.Item>Permissions</Menu.Item>
    </Menu.SubMenu>
    <Menu.Divider />
    <Menu.Title>Admin</Menu.Title>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Item>Billing</Menu.Item>
  </Menu>
)

export default App
```

### Sizes

Menu in different sizes.

```tsx
import React from 'react'
import { Menu, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="lg" wrap>
    <div>
      <div className="text-sm font-semibold mb-2">Extra Small</div>
      <Menu size="xs">
        <Menu.Item active>Dashboard</Menu.Item>
        <Menu.Item>Projects</Menu.Item>
        <Menu.Item>Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Small</div>
      <Menu size="sm">
        <Menu.Item active>Dashboard</Menu.Item>
        <Menu.Item>Projects</Menu.Item>
        <Menu.Item>Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Medium</div>
      <Menu size="md">
        <Menu.Item active>Dashboard</Menu.Item>
        <Menu.Item>Projects</Menu.Item>
        <Menu.Item>Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Large</div>
      <Menu size="lg">
        <Menu.Item active>Dashboard</Menu.Item>
        <Menu.Item>Projects</Menu.Item>
        <Menu.Item>Team</Menu.Item>
      </Menu>
    </div>
  </Space>
)

export default App
```

## API

### Menu

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Menu items and submenus | `React.ReactNode` | `-` |
| `mode` | Menu display mode | `vertical' \| 'horizontal` | `vertical` |
| `size` | Menu size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `className` | Additional CSS classes | `string` | `-` |

### Menu Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Item content | `React.ReactNode` | `-` |
| `active` | Whether the item is active | `boolean` | `false` |
| `onClick` | Click handler | `() => void` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Menu Title

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Title content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Menu Sub Menu

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `title` | Submenu title | `React.ReactNode` | `-` |
| `children` | Submenu items | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Menu Divider

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `className` | Additional CSS classes | `string` | `-` |
