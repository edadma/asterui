# Tabs

Organize content into separate views where only one view is visible at a time.

**Import:** `import { Tabs } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Tabs } from 'asterui'

const App: React.FC = () => (
  <Tabs>
    <Tabs.Panel tab="Tab 1" tabKey="1">
      Content of Tab 1
    </Tabs.Panel>
    <Tabs.Panel tab="Tab 2" tabKey="2">
      Content of Tab 2
    </Tabs.Panel>
    <Tabs.Panel tab="Tab 3" tabKey="3">
      Content of Tab 3
    </Tabs.Panel>
  </Tabs>
)

export default App
```

### Settings

```tsx
import React from 'react'
import { Tabs, Input, Button } from 'asterui'

const App: React.FC = () => (
  <Tabs defaultActiveKey="account" variant="border">
    <Tabs.Panel tab="Account" tabKey="account">
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <Input placeholder="john_doe" />
        </div>
        <Button type="primary">Save</Button>
      </div>
    </Tabs.Panel>
    <Tabs.Panel tab="Security" tabKey="security">
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <Input type="password" />
        </div>
        <Button type="primary">Update</Button>
      </div>
    </Tabs.Panel>
  </Tabs>
)

export default App
```

### Box

```tsx
import React from 'react'
import { Tabs } from 'asterui'

const App: React.FC = () => (
  <Tabs variant="box">
    <Tabs.Panel tab="Home" tabKey="home">
      Home content
    </Tabs.Panel>
    <Tabs.Panel tab="Profile" tabKey="profile">
      Profile content
    </Tabs.Panel>
    <Tabs.Panel tab="Settings" tabKey="settings">
      Settings content
    </Tabs.Panel>
  </Tabs>
)

export default App
```

### Lift

```tsx
import React from 'react'
import { Tabs } from 'asterui'

const App: React.FC = () => (
  <Tabs variant="lift">
    <Tabs.Panel tab="Overview" tabKey="1">
      Overview content
    </Tabs.Panel>
    <Tabs.Panel tab="Reports" tabKey="2">
      Reports content
    </Tabs.Panel>
    <Tabs.Panel tab="Analytics" tabKey="3">
      Analytics content
    </Tabs.Panel>
  </Tabs>
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Tabs } from 'asterui'

const App: React.FC = () => (
  <div className="space-y-4">
    <Tabs size="sm">
      <Tabs.Panel tab="Small" tabKey="1">
        Small tabs
      </Tabs.Panel>
      <Tabs.Panel tab="Tab 2" tabKey="2">
        Content 2
      </Tabs.Panel>
    </Tabs>
    <Tabs size="lg">
      <Tabs.Panel tab="Large" tabKey="1">
        Large tabs
      </Tabs.Panel>
      <Tabs.Panel tab="Tab 2" tabKey="2">
        Content 2
      </Tabs.Panel>
    </Tabs>
  </div>
)

export default App
```

### Disabled

```tsx
import React from 'react'
import { Tabs } from 'asterui'

const App: React.FC = () => (
  <Tabs>
    <Tabs.Panel tab="Active" tabKey="1">
      Active content
    </Tabs.Panel>
    <Tabs.Panel tab="Disabled" tabKey="2" disabled>
      Cannot see this
    </Tabs.Panel>
    <Tabs.Panel tab="Also Active" tabKey="3">
      Active content
    </Tabs.Panel>
  </Tabs>
)

export default App
```

## API

### Tabs

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Tabs.Panel components | `React.ReactNode` | `-` |
| `activeKey` | Current active tab key (controlled) | `string` | `-` |
| `defaultActiveKey` | Default active tab key (uncontrolled) | `string` | `-` |
| `onChange` | Callback when tab changes | `(key: string) => void` | `-` |
| `variant` | Visual style variant | `box' \| 'border' \| 'lift` | `-` |
| `size` | Tab size | `xs' \| 'sm' \| 'md' \| 'lg' \| 'xl` | `md` |
| `className` | Additional CSS classes | `string` | `-` |

### Tab Panel

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `tab` | Tab button label | `React.ReactNode` | `-` |
| `tabKey` | Unique identifier for the tab | `string` | `-` |
| `disabled` | Disable the tab | `boolean` | `-` |
| `children` | Tab panel content | `React.ReactNode` | `-` |
