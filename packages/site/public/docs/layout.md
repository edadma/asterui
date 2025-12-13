# Layout

**Import:** `import { Layout, Menu } from 'asterui'`

## Examples

### Basic Layout

Simple header, content, and footer layout.

```tsx
import React from 'react'
import { Layout } from 'asterui'

const App: React.FC = () => (
  <Layout className="min-h-screen">
    <Layout.Header className="bg-primary text-primary-content px-4">
      <div className="text-lg font-bold">Header</div>
    </Layout.Header>
    <Layout.Content className="bg-base-200 p-6">
      <div className="bg-base-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Content</h2>
        <p>Main content area</p>
      </div>
    </Layout.Content>
    <Layout.Footer className="bg-neutral text-neutral-content px-4 py-3 text-center">
      Footer
    </Layout.Footer>
  </Layout>
)

export default App
```

### Layout with Sider and Menu

Layout with side navigation using the Menu component.

```tsx
import React from 'react'
import { Layout, Menu } from 'asterui'

const HomeIcon = () => <svg>...</svg>
const InfoIcon = () => <svg>...</svg>
const MailIcon = () => <svg>...</svg>

const App: React.FC = () => (
  <Layout className="min-h-screen">
    <Layout.Header className="bg-primary text-primary-content px-4">
      <div className="text-lg font-bold">Header</div>
    </Layout.Header>
    <Layout className="flex-1">
      <Layout.Sider width={160} className="p-2">
        <Menu size="sm">
          <Menu.Item itemKey="home" icon={<HomeIcon />}>Home</Menu.Item>
          <Menu.Item itemKey="about" icon={<InfoIcon />}>About</Menu.Item>
          <Menu.Item itemKey="contact" icon={<MailIcon />}>Contact</Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content className="bg-base-200 p-6">
        <div className="bg-base-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Content</h2>
          <p>Layout with sidebar navigation</p>
        </div>
      </Layout.Content>
    </Layout>
    <Layout.Footer className="bg-neutral text-neutral-content px-4 py-3 text-center">
      Footer
    </Layout.Footer>
  </Layout>
)

export default App
```

### Sider on Right

Layout with sidebar on the right side using reverseArrow.

```tsx
import React from 'react'
import { Layout, Menu } from 'asterui'

const App: React.FC = () => (
  <Layout className="min-h-screen">
    <Layout.Header className="bg-primary text-primary-content px-4">
      <div className="text-lg font-bold">Header</div>
    </Layout.Header>
    <Layout className="flex-1">
      <Layout.Content className="bg-base-200 p-6">
        <div className="bg-base-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Content</h2>
          <p>Main content with right sidebar</p>
        </div>
      </Layout.Content>
      <Layout.Sider width={160} reverseArrow className="p-2 border-l border-base-300">
        <Menu size="sm">
          <Menu.Title>Quick Links</Menu.Title>
          <Menu.Item itemKey="info">Info Panel</Menu.Item>
          <Menu.Item itemKey="help">Help</Menu.Item>
          <Menu.Item itemKey="docs">Documentation</Menu.Item>
        </Menu>
      </Layout.Sider>
    </Layout>
    <Layout.Footer className="bg-neutral text-neutral-content px-4 py-3 text-center">
      Footer
    </Layout.Footer>
  </Layout>
)

export default App
```

### Collapsible Sider

Sider with collapse/expand functionality and built-in trigger.

```tsx
import React, { useState } from 'react'
import { Layout, Menu, Button } from 'asterui'

const DashboardIcon = () => <svg>...</svg>
const UsersIcon = () => <svg>...</svg>
const SettingsIcon = () => <svg>...</svg>

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className="min-h-screen">
      <Layout.Header className="bg-primary text-primary-content px-4 flex items-center justify-between">
        <div className="text-lg font-bold">Header</div>
        <Button
          variant="ghost"
          size="xs"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </Layout.Header>
      <Layout className="flex-1">
        <Layout.Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(c) => setCollapsed(c)}
          width={160}
          collapsedWidth={48}
          className="p-2"
        >
          <Menu size="sm">
            <Menu.Item itemKey="dash" icon={<DashboardIcon />}>
              {!collapsed && 'Dashboard'}
            </Menu.Item>
            <Menu.Item itemKey="users" icon={<UsersIcon />}>
              {!collapsed && 'Users'}
            </Menu.Item>
            <Menu.Item itemKey="settings" icon={<SettingsIcon />}>
              {!collapsed && 'Settings'}
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout.Content className="bg-base-200 p-6">
          <div className="bg-base-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Content</h2>
            <p>Click the button or trigger to toggle the sidebar</p>
          </div>
        </Layout.Content>
      </Layout>
      <Layout.Footer className="bg-neutral text-neutral-content px-4 py-3 text-center">
        Footer
      </Layout.Footer>
    </Layout>
  )
}

export default App
```

### Menu Navigation

Interactive sider with Menu that changes content when items are selected.

```tsx
import React, { useState } from 'react'
import { Layout, Menu } from 'asterui'

const DashboardIcon = () => <svg>...</svg>
const UsersIcon = () => <svg>...</svg>
const AnalyticsIcon = () => <svg>...</svg>
const SettingsIcon = () => <svg>...</svg>

const pageContent: Record<string, React.ReactNode> = {
  dashboard: <DashboardPage />,
  users: <UsersPage />,
  analytics: <AnalyticsPage />,
  settings: <SettingsPage />,
}

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('dashboard')

  return (
    <Layout className="min-h-screen">
      <Layout.Header className="bg-primary text-primary-content px-4">
        <div className="text-lg font-bold">App Name</div>
      </Layout.Header>
      <Layout className="flex-1">
        <Layout.Sider width={180} className="py-2">
          <Menu
            size="sm"
            selectedKeys={[selectedKey]}
            onSelect={setSelectedKey}
          >
            <Menu.Title>Navigation</Menu.Title>
            <Menu.Item itemKey="dashboard" icon={<DashboardIcon />}>Dashboard</Menu.Item>
            <Menu.Item itemKey="users" icon={<UsersIcon />}>Users</Menu.Item>
            <Menu.Item itemKey="analytics" icon={<AnalyticsIcon />}>Analytics</Menu.Item>
            <Menu.Divider />
            <Menu.Item itemKey="settings" icon={<SettingsIcon />}>Settings</Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout.Content className="bg-base-200 p-6">
          <div className="bg-base-100 p-4 rounded-lg min-h-[200px]">
            {pageContent[selectedKey]}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default App
```

### Inline Menu with Submenus

Layout with nested submenus using inline mode for expandable navigation.

```tsx
import React, { useState } from 'react'
import { Layout, Menu } from 'asterui'

const SettingsIcon = () => <svg>...</svg>
const UsersIcon = () => <svg>...</svg>

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('general')

  return (
    <Layout className="min-h-screen">
      <Layout.Header className="bg-neutral text-neutral-content px-4">
        <div className="text-lg font-bold">Settings Panel</div>
      </Layout.Header>
      <Layout className="flex-1">
        <Layout.Sider width={200} className="py-2 border-r border-base-300">
          <Menu
            mode="inline"
            size="sm"
            selectedKeys={[selectedKey]}
            defaultOpenKeys={['settings', 'users']}
            onSelect={setSelectedKey}
          >
            <Menu.SubMenu itemKey="settings" label="Settings" icon={<SettingsIcon />}>
              <Menu.Item itemKey="general">General</Menu.Item>
              <Menu.Item itemKey="security">Security</Menu.Item>
              <Menu.Item itemKey="profile">Profile</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu itemKey="users" label="Users" icon={<UsersIcon />}>
              <Menu.Item itemKey="team">Team Members</Menu.Item>
              <Menu.Item itemKey="roles">Roles</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Layout.Sider>
        <Layout.Content className="bg-base-200 p-6">
          <div className="bg-base-100 p-4 rounded-lg">
            <ContentForKey selectedKey={selectedKey} />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default App
```

## API

### Layout

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Layout content (Header, Sider, Content, Footer) | `React.ReactNode` | `-` |
| `hasSider` | Whether contains Sider (auto-detected if not specified) | `boolean` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
| `data-testid` | Test ID for testing | `string` | `-` |

### Header

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Header content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
| `data-testid` | Test ID for testing | `string` | `-` |

### Footer

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Footer content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
| `data-testid` | Test ID for testing | `string` | `-` |

### Sider

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Sider content | `React.ReactNode` | `-` |
| `width` | Width of the sider | `number \| string` | `200` |
| `collapsedWidth` | Width when collapsed | `number \| string` | `80` |
| `collapsed` | Controlled collapsed state | `boolean` | `-` |
| `defaultCollapsed` | Initial collapsed state | `boolean` | `false` |
| `collapsible` | Whether the sider can be collapsed | `boolean` | `false` |
| `onCollapse` | Callback when collapse state changes | `(collapsed: boolean, type: 'clickTrigger' \| 'responsive') => void` | `-` |
| `trigger` | Custom trigger element (null to hide) | `React.ReactNode \| null` | `-` |
| `breakpoint` | Breakpoint for auto-collapse | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `-` |
| `onBreakpoint` | Callback when breakpoint is crossed | `(broken: boolean) => void` | `-` |
| `reverseArrow` | Reverse direction of arrow (for right-side sider) | `boolean` | `false` |
| `theme` | Color theme of the sider | `'light' \| 'dark'` | `'dark'` |
| `zeroWidthTriggerStyle` | Style for zero-width trigger | `React.CSSProperties` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
| `data-testid` | Test ID for testing; trigger uses {id}-trigger suffix | `string` | `-` |

### Content

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Content area content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
| `data-testid` | Test ID for testing | `string` | `-` |
