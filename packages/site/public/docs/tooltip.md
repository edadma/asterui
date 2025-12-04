# Tooltip

Display additional information on hover.

**Import:** `import { Tooltip } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Tooltip, Button } from 'asterui'

const App: React.FC = () => (
  <Tooltip tip="This is a tooltip">
    <Button>Hover me</Button>
  </Tooltip>
)

export default App
```

### Positions

```tsx
import React from 'react'
import { Tooltip, Button } from 'asterui'

const App: React.FC = () => (
  <div className="flex flex-wrap gap-4 justify-center py-8">
    <Tooltip tip="Top tooltip" position="top">
      <Button>Top</Button>
    </Tooltip>
    <Tooltip tip="Bottom tooltip" position="bottom">
      <Button>Bottom</Button>
    </Tooltip>
    <Tooltip tip="Left tooltip" position="left">
      <Button>Left</Button>
    </Tooltip>
    <Tooltip tip="Right tooltip" position="right">
      <Button>Right</Button>
    </Tooltip>
  </div>
)

export default App
```

### Colors

```tsx
import React from 'react'
import { Tooltip, Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space wrap>
    <Tooltip tip="Primary tooltip" color="primary">
      <Button type="primary">Primary</Button>
    </Tooltip>
    <Tooltip tip="Secondary tooltip" color="secondary">
      <Button color="secondary">Secondary</Button>
    </Tooltip>
    <Tooltip tip="Accent tooltip" color="accent">
      <Button color="accent">Accent</Button>
    </Tooltip>
    <Tooltip tip="Info tooltip" color="info">
      <Button color="info">Info</Button>
    </Tooltip>
    <Tooltip tip="Success tooltip" color="success">
      <Button color="success">Success</Button>
    </Tooltip>
    <Tooltip tip="Warning tooltip" color="warning">
      <Button color="warning">Warning</Button>
    </Tooltip>
    <Tooltip tip="Error tooltip" color="error">
      <Button color="error">Error</Button>
    </Tooltip>
  </Space>
)

export default App
```

### Open

```tsx
import React from 'react'
import { Tooltip, Button } from 'asterui'

const App: React.FC = () => (
  <Tooltip tip="Always visible" open>
    <Button>Always Open</Button>
  </Tooltip>
)

export default App
```

## API

### Tooltip

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `tip` | Tooltip text content | `string` | `-` |
| `position` | Tooltip position | `top' \| 'bottom' \| 'left' \| 'right` | `top` |
| `color` | Tooltip color | `primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error` | `-` |
| `open` | Force tooltip to be visible | `boolean` | `false` |
| `children` | Element that triggers the tooltip | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
