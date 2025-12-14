# Menu

**Import:** `import { Menu } from 'asterui'`

## Examples

### Basic Menu

Simple vertical menu with selectable items.

```tsx
import React, { useState } from 'react'
import { Menu } from 'asterui'

const App: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <Menu selectedKeys={[selected]} onSelect={setSelected}>
      <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
      <Menu.Item itemKey="projects">Projects</Menu.Item>
      <Menu.Item itemKey="team">Team</Menu.Item>
      <Menu.Item itemKey="settings">Settings</Menu.Item>
    </Menu>
  )
}

export default App
```

### Horizontal Menu

Menu displayed horizontally.

```tsx
import React, { useState } from 'react'
import { Menu } from 'asterui'

const App: React.FC = () => {
  const [selected, setSelected] = useState('home')

  return (
    <Menu mode="horizontal" selectedKeys={[selected]} onSelect={setSelected}>
      <Menu.Item itemKey="home">Home</Menu.Item>
      <Menu.Item itemKey="about">About</Menu.Item>
      <Menu.Item itemKey="services">Services</Menu.Item>
      <Menu.Item itemKey="contact">Contact</Menu.Item>
    </Menu>
  )
}

export default App
```

### With Icons

Menu items with icons for better visual context.

```tsx
import React, { useState } from 'react'
import { Menu } from 'asterui'
import { HomeIcon, FolderIcon, UsersIcon, Cog6ToothIcon } from '@aster-ui/icons'

const App: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <Menu selectedKeys={[selected]} onSelect={setSelected}>
      <Menu.Item itemKey="dashboard" icon={<HomeIcon />}>
        Dashboard
      </Menu.Item>
      <Menu.Item itemKey="projects" icon={<FolderIcon />}>
        Projects
      </Menu.Item>
      <Menu.Item itemKey="team" icon={<UsersIcon />}>
        Team
      </Menu.Item>
      <Menu.Item itemKey="settings" icon={<Cog6ToothIcon />}>
        Settings
      </Menu.Item>
    </Menu>
  )
}

export default App
```

### With Submenu

Menu with nested submenus.

```tsx
import React, { useState } from 'react'
import { Menu } from 'asterui'

const App: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <Menu selectedKeys={[selected]} onSelect={setSelected} defaultOpenKeys={['projects']}>
      <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
      <Menu.SubMenu itemKey="projects" label="Projects">
        <Menu.Item itemKey="active">Active Projects</Menu.Item>
        <Menu.Item itemKey="archived">Archived</Menu.Item>
        <Menu.Item itemKey="templates">Templates</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu itemKey="team" label="Team">
        <Menu.Item itemKey="members">Members</Menu.Item>
        <Menu.Item itemKey="roles">Roles</Menu.Item>
        <Menu.Item itemKey="permissions">Permissions</Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.Title>Admin</Menu.Title>
      <Menu.Item itemKey="admin-settings">Settings</Menu.Item>
      <Menu.Item itemKey="billing">Billing</Menu.Item>
    </Menu>
  )
}

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
      <Menu size="xs" defaultSelectedKeys={['dashboard']}>
        <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
        <Menu.Item itemKey="projects">Projects</Menu.Item>
        <Menu.Item itemKey="team">Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Small</div>
      <Menu size="sm" defaultSelectedKeys={['dashboard']}>
        <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
        <Menu.Item itemKey="projects">Projects</Menu.Item>
        <Menu.Item itemKey="team">Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Medium</div>
      <Menu size="md" defaultSelectedKeys={['dashboard']}>
        <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
        <Menu.Item itemKey="projects">Projects</Menu.Item>
        <Menu.Item itemKey="team">Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Large</div>
      <Menu size="lg" defaultSelectedKeys={['dashboard']}>
        <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
        <Menu.Item itemKey="projects">Projects</Menu.Item>
        <Menu.Item itemKey="team">Team</Menu.Item>
      </Menu>
    </div>
  </Space>
)

export default App
```

### Data-Driven Pattern

Use items prop for data-driven menus.

```tsx
import React, { useState } from 'react'
import { Menu, notification } from 'asterui'
import { HomeIcon, FolderIcon, Cog6ToothIcon } from '@aster-ui/icons'

const App: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: <HomeIcon /> },
    { key: 'projects', label: 'Projects', icon: <FolderIcon />, children: [
      { key: 'active', label: 'Active Projects' },
      { key: 'archived', label: 'Archived' },
    ]},
    { key: 'divider1', divider: true },
    { key: 'admin', label: 'Admin', title: true },
    { key: 'settings', label: 'Settings', icon: <Cog6ToothIcon /> },
  ]

  return (
    <Menu
      items={items}
      selectedKeys={[selected]}
      onSelect={(key) => {
        setSelected(key)
        notification.info({ message: `Selected: ${key}` })
      }}
    />
  )
}

export default App
```

## API

### Menu

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| children | Menu items (compound pattern) | `React.ReactNode` | - |
| items | Menu items (data-driven pattern) | `MenuItem[]` | - |
| mode | Menu display mode | `'vertical' \| 'horizontal' \| 'inline'` | `'vertical'` |
| size | Menu size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | - |
| selectedKeys | Controlled selected item keys | `string[]` | - |
| defaultSelectedKeys | Default selected keys (uncontrolled) | `string[]` | `[]` |
| openKeys | Controlled open submenu keys | `string[]` | - |
| defaultOpenKeys | Default open submenu keys (uncontrolled) | `string[]` | `[]` |
| onSelect | Callback when item is selected | `(key: string) => void` | - |
| onOpenChange | Callback when submenu open state changes | `(openKeys: string[]) => void` | - |
| className | Additional CSS classes | `string` | - |

### MenuItem (for items prop)

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| key | Unique identifier | `string` | - |
| label | Item label | `React.ReactNode` | - |
| icon | Icon element | `React.ReactNode` | - |
| disabled | Whether item is disabled | `boolean` | `false` |
| children | Submenu items | `MenuItem[]` | - |
| divider | Render as divider | `boolean` | `false` |
| title | Render as section title | `boolean` | `false` |

### Menu.Item (compound pattern)

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| itemKey | Unique key for selection | `string` | - |
| children | Item content | `React.ReactNode` | - |
| icon | Icon element | `React.ReactNode` | - |
| disabled | Whether item is disabled | `boolean` | `false` |
| onClick | Click handler | `() => void` | - |
| className | Additional CSS classes | `string` | - |

### Menu.SubMenu (compound pattern)

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| itemKey | Unique key for open state | `string` | - |
| label | Submenu label | `React.ReactNode` | - |
| icon | Icon element | `React.ReactNode` | - |
| disabled | Whether submenu is disabled | `boolean` | `false` |
| children | Submenu items | `React.ReactNode` | - |
| className | Additional CSS classes | `string` | - |

### Menu.Title

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| children | Title content | `React.ReactNode` | - |
| className | Additional CSS classes | `string` | - |

### Menu.Divider

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| className | Additional CSS classes | `string` | - |
