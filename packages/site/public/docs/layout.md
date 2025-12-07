# Layout

**Import:** `import { Layout } from 'asterui'`

## Examples

### Basic Layout

Simple header, content, and footer layout.

```tsx
import React from 'react'
import { Layout } from 'asterui'

const App: React.FC = () => (
  <Layout className="min-h-screen">
    <Layout.Header className="bg-primary text-primary-content p-4">
      <div className="text-xl font-bold">Header</div>
    </Layout.Header>
    <Layout.Content className="bg-base-200 p-8">
      <div className="bg-base-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Content</h2>
        <p>Main content area</p>
      </div>
    </Layout.Content>
    <Layout.Footer className="bg-neutral text-neutral-content p-4 text-center">
      Footer
    </Layout.Footer>
  </Layout>
)

export default App
```

### Layout with Sider

Layout with side navigation on the left.

```tsx
import React from 'react'
import { Layout } from 'asterui'

const App: React.FC = () => (
  <Layout className="min-h-screen">
    <Layout.Header className="bg-primary text-primary-content p-4">
      <div className="text-xl font-bold">Header</div>
    </Layout.Header>
    <Layout className="flex-1">
      <Layout.Sider className="bg-base-300 p-4 w-48">
        <nav className="space-y-2">
          <div className="p-2 bg-base-100 rounded">Menu Item 1</div>
          <div className="p-2 bg-base-100 rounded">Menu Item 2</div>
          <div className="p-2 bg-base-100 rounded">Menu Item 3</div>
        </nav>
      </Layout.Sider>
      <Layout.Content className="bg-base-200 p-8">
        <div className="bg-base-100 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Content</h2>
          <p>Main content area with sidebar navigation</p>
        </div>
      </Layout.Content>
    </Layout>
    <Layout.Footer className="bg-neutral text-neutral-content p-4 text-center">
      Footer
    </Layout.Footer>
  </Layout>
)

export default App
```

### Sider on Right

Layout with sidebar positioned on the right side.

```tsx
import React from 'react'
import { Layout } from 'asterui'

const App: React.FC = () => (
  <Layout className="min-h-screen">
    <Layout.Header className="bg-primary text-primary-content p-4">
      <div className="text-xl font-bold">Header</div>
    </Layout.Header>
    <Layout className="flex-1">
      <Layout.Content className="bg-base-200 p-8">
        <div className="bg-base-100 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Content</h2>
          <p>Main content area with right sidebar</p>
        </div>
      </Layout.Content>
      <Layout.Sider className="bg-base-300 p-4 w-48">
        <div className="space-y-2">
          <div className="p-2 bg-base-100 rounded">Info Panel</div>
          <div className="p-2 bg-base-100 rounded">Quick Links</div>
          <div className="p-2 bg-base-100 rounded">Related Items</div>
        </div>
      </Layout.Sider>
    </Layout>
    <Layout.Footer className="bg-neutral text-neutral-content p-4 text-center">
      Footer
    </Layout.Footer>
  </Layout>
)

export default App
```

### Collapsible Sider

Responsive layout with collapsible sidebar.

```tsx
import React, { useState } from 'react'
import { Layout, Button } from 'asterui'

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className="min-h-screen">
      <Layout.Header className="bg-primary text-primary-content p-4 flex items-center justify-between">
        <div className="text-xl font-bold">Header</div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </Layout.Header>
      <Layout className="flex-1">
        <Layout.Sider
          collapsible
          collapsed={collapsed}
          className="bg-base-300 p-4"
        >
          {!collapsed && (
            <nav className="space-y-2">
              <div className="p-2 bg-base-100 rounded">Dashboard</div>
              <div className="p-2 bg-base-100 rounded">Settings</div>
              <div className="p-2 bg-base-100 rounded">Profile</div>
            </nav>
          )}
          {collapsed && (
            <div className="space-y-2">
              <div className="p-2 bg-base-100 rounded text-center">D</div>
              <div className="p-2 bg-base-100 rounded text-center">S</div>
              <div className="p-2 bg-base-100 rounded text-center">P</div>
            </div>
          )}
        </Layout.Sider>
        <Layout.Content className="bg-base-200 p-8">
          <div className="bg-base-100 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Content</h2>
            <p>Click the button to toggle the sidebar</p>
          </div>
        </Layout.Content>
      </Layout>
      <Layout.Footer className="bg-neutral text-neutral-content p-4 text-center">
        Footer
      </Layout.Footer>
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
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |

### Header

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Header content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |

### Footer

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Footer content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |

### Sider

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Sider content | `React.ReactNode` | `-` |
| `width` | Width of the sider | `number \| string` | `200` |
| `collapsedWidth` | Width when collapsed | `number \| string` | `80` |
| `collapsed` | Controlled collapsed state | `boolean` | `-` |
| `defaultCollapsed` | Initial collapsed state | `boolean` | `false` |
| `collapsible` | Whether the sider can be collapsed | `boolean` | `false` |
| `onCollapse` | Callback when collapse state changes | `(collapsed: boolean) => void` | `-` |
| `trigger` | Custom trigger element (null to hide) | `React.ReactNode \| null` | `-` |
| `breakpoint` | Breakpoint for auto-collapse | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `-` |
| `onBreakpoint` | Callback when breakpoint is crossed | `(broken: boolean) => void` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |

### Content

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Content area content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
