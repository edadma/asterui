# Drawer

**Import:** `import { Drawer } from 'asterui'`

## Examples

### Basic Drawer

Simple drawer from the right side.

```tsx
import React, { useState } from 'react'
import { Drawer, Button } from 'asterui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Basic Drawer"
      >
        <p>Drawer content goes here.</p>
      </Drawer>
    </>
  )
}

export default App
```

### Placement

Drawer can slide in from any direction.

```tsx
import React, { useState } from 'react'
import { Drawer, Button, Space } from 'asterui'

const App: React.FC = () => {
  const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right')
  const [open, setOpen] = useState(false)

  const showDrawer = (p: typeof placement) => {
    setPlacement(p)
    setOpen(true)
  }

  return (
    <>
      <Space direction="horizontal" size="sm" wrap>
        <Button onClick={() => showDrawer('left')}>Left</Button>
        <Button onClick={() => showDrawer('right')}>Right</Button>
        <Button onClick={() => showDrawer('top')}>Top</Button>
        <Button onClick={() => showDrawer('bottom')}>Bottom</Button>
      </Space>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement={placement}
        title={\
```

### With Footer

Drawer with action buttons in footer.

```tsx
import React, { useState } from 'react'
import { Drawer, Button, Space } from 'asterui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Profile"
        footer={
          <Space direction="horizontal" size="sm">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="primary" onClick={() => setOpen(false)}>
              Save
            </Button>
          </Space>
        }
      >
        <p>Form content would go here...</p>
      </Drawer>
    </>
  )
}

export default App
```

### Custom Size

Drawer with custom width.

```tsx
import React, { useState } from 'react'
import { Drawer, Button } from 'asterui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Large Drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Large Drawer"
        width={500}
      >
        <p>This drawer is 500px wide.</p>
      </Drawer>
    </>
  )
}

export default App
```

## API

### Drawer

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `open` | Controlled open state | `boolean` | `-` |
| `onClose` | Close handler | `() => void` | `-` |
| `title` | Drawer title | `React.ReactNode` | `-` |
| `children` | Drawer content | `React.ReactNode` | `-` |
| `placement` | Drawer position | `left' \| 'right' \| 'top' \| 'bottom` | `right` |
| `width` | Drawer width (for left/right) | `string \| number` | `320` |
| `height` | Drawer height (for top/bottom) | `string \| number` | `256` |
| `mask` | Show overlay mask | `boolean` | `true` |
| `maskClosable` | Close on mask click | `boolean` | `true` |
| `footer` | Footer content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
