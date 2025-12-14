# Popconfirm

This action cannot be undone. Are you sure you want to continue?

**Import:** `import { Popconfirm } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Popconfirm, Button } from 'asterui'

const App: React.FC = () => (
  <Popconfirm
    title="Are you sure?"
    onConfirm={() => console.log('Confirmed')}
  >
    <Button color="error">Delete</Button>
  </Popconfirm>
)

export default App
```

### Description

```tsx
import React from 'react'
import { Popconfirm, Button } from 'asterui'

const App: React.FC = () => (
  <Popconfirm
    title="Delete this task?"
    description="This action cannot be undone. Are you sure you want to continue?"
    onConfirm={() => console.log('Deleted')}
  >
    <Button color="error">Delete</Button>
  </Popconfirm>
)

export default App
```

### Placements

```tsx
import React from 'react'
import { Popconfirm, Button } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4">
    <Popconfirm title="Delete?" placement="top">
      <Button>Top</Button>
    </Popconfirm>
    <Popconfirm title="Delete?" placement="right">
      <Button>Right</Button>
    </Popconfirm>
    <Popconfirm title="Delete?" placement="bottom">
      <Button>Bottom</Button>
    </Popconfirm>
    <Popconfirm title="Delete?" placement="left">
      <Button>Left</Button>
    </Popconfirm>
  </div>
)

export default App
```

### Custom Text

```tsx
import React from 'react'
import { Popconfirm, Button } from 'asterui'

const App: React.FC = () => (
  <Popconfirm
    title="Confirm submission?"
    okText="Yes, submit"
    cancelText="No, cancel"
    okType="success"
    cancelType="error"
  >
    <Button color="primary">Submit</Button>
  </Popconfirm>
)

export default App
```

### Async

```tsx
import React from 'react'
import { Popconfirm, Button, notification } from 'asterui'

const App: React.FC = () => {
  const handleAsyncDelete = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        notification.success({ message: 'Deleted!' })
        resolve()
      }, 2000)
    })
  }

  return (
    <Popconfirm
      title="Delete this item?"
      description="This will take a moment..."
      onConfirm={handleAsyncDelete}
    >
      <Button color="error">Delete (Async)</Button>
    </Popconfirm>
  )
}

export default App
```

### Custom Icon

```tsx
import React from 'react'
import { Popconfirm, Button } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4">
    <Popconfirm
      title="Custom icon"
      icon={<span className="text-2xl">🗑️</span>}
    >
      <Button>Custom Icon</Button>
    </Popconfirm>
    <Popconfirm
      title="No icon"
      icon={null}
    >
      <Button>No Icon</Button>
    </Popconfirm>
  </div>
)

export default App
```

### No Cancel

```tsx
import React from 'react'
import { Popconfirm, Button } from 'asterui'

const App: React.FC = () => (
  <Popconfirm
    title="Acknowledge this message"
    showCancel={false}
    okText="Got it"
  >
    <Button color="info">Show Info</Button>
  </Popconfirm>
)

export default App
```

### Disabled

```tsx
import React from 'react'
import { Popconfirm, Button } from 'asterui'

const App: React.FC = () => (
  <Popconfirm
    title="Are you sure?"
    disabled
  >
    <Button disabled>Disabled</Button>
  </Popconfirm>
)

export default App
```
