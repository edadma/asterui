# Modal

**Import:** `import { Modal } from 'asterui'`

## Examples

### Basic Modal

Simple modal with open/close functionality.

```tsx
import React, { useState } from 'react'
import { Modal, Button } from 'asterui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Basic Modal"
      >
        <p>This is the modal content.</p>
        <p>You can put any content here.</p>
      </Modal>
    </>
  )
}

export default App
```

### With Footer

Modal with custom footer buttons.

```tsx
import React, { useState } from 'react'
import { Modal, Button, Space } from 'asterui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleOk = () => {
    console.log('OK clicked')
    setOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmation"
        footer={
          <Space direction="horizontal" size="sm">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="primary" onClick={handleOk}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Are you sure you want to proceed with this action?</p>
      </Modal>
    </>
  )
}

export default App
```

### Centered Modal

Vertically centered modal.

```tsx
import React, { useState } from 'react'
import { Modal, Button } from 'asterui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Centered Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Centered Modal"
        centered
      >
        <p>This modal is vertically centered on the screen.</p>
      </Modal>
    </>
  )
}

export default App
```

### Modal Sizes

Different modal widths.

```tsx
import React, { useState } from 'react'
import { Modal, Button, Space } from 'asterui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState<number | string>(520)

  const showModal = (w: number | string, title: string) => {
    setWidth(w)
    setOpen(true)
  }

  return (
    <>
      <Space direction="horizontal" size="sm" wrap>
        <Button onClick={() => showModal(400, 'Small Modal')}>
          Small (400px)
        </Button>
        <Button onClick={() => showModal(520, 'Default Modal')}>
          Default (520px)
        </Button>
        <Button onClick={() => showModal(800, 'Large Modal')}>
          Large (800px)
        </Button>
      </Space>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={\
```

## API

### Modal

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `open` | Controlled open state | `boolean` | `-` |
| `onClose` | Close handler | `() => void` | `-` |
| `title` | Modal title | `React.ReactNode` | `-` |
| `children` | Modal content | `React.ReactNode` | `-` |
| `footer` | Footer content | `React.ReactNode` | `-` |
| `width` | Modal width | `number \| string` | `520` |
| `centered` | Vertically center modal | `boolean` | `false` |
| `maskClosable` | Close on mask click | `boolean` | `true` |
| `closable` | Show close button | `boolean` | `true` |
| `className` | Additional CSS classes | `string` | `-` |
