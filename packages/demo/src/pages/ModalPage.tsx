import { Modal, Button, Input } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'
import { ApiTable } from '../components/ApiTable'
import type { ApiProperty } from '../components/ApiTable'
import { useState } from 'react'

const modalApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Modal content',
    type: 'React.ReactNode',
  },
  {
    property: 'open',
    description: 'Control modal visibility',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'onClose',
    description: 'Callback when modal closes',
    type: '() => void',
  },
  {
    property: 'position',
    description: 'Vertical position of modal',
    type: "'top' | 'middle' | 'bottom'",
    default: "'middle'",
  },
  {
    property: 'align',
    description: 'Horizontal alignment',
    type: "'start' | 'end'",
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const modalBoxApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Box content',
    type: 'React.ReactNode',
  },
  {
    property: 'className',
    description: 'Additional CSS classes (use for custom sizing)',
    type: 'string',
  },
]

const modalActionApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Action buttons',
    type: 'React.ReactNode',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const modalBackdropApi: ApiProperty[] = [
  {
    property: 'onClick',
    description: 'Callback when backdrop is clicked',
    type: '() => void',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const modalFuncApi: ApiProperty[] = [
  {
    property: 'title',
    description: 'Modal title',
    type: 'React.ReactNode',
  },
  {
    property: 'content',
    description: 'Modal content',
    type: 'React.ReactNode',
  },
  {
    property: 'onOk',
    description: 'Callback when OK button is clicked (can be async)',
    type: '() => void | Promise<void>',
  },
  {
    property: 'onCancel',
    description: 'Callback when cancel button is clicked',
    type: '() => void',
  },
  {
    property: 'okText',
    description: 'Text for OK button',
    type: 'string',
    default: "'OK'",
  },
  {
    property: 'cancelText',
    description: 'Text for cancel button',
    type: 'string',
    default: "'Cancel'",
  },
  {
    property: 'type',
    description: 'Modal type (sets alert styling)',
    type: "'info' | 'success' | 'warning' | 'error'",
  },
]

export function ModalPage() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [backdropOpen, setBackdropOpen] = useState(false)
  const [topOpen, setTopOpen] = useState(false)
  const [bottomOpen, setBottomOpen] = useState(false)
  const [customOpen, setCustomOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Modal</h1>
        <p className="text-base-content/70">
          Dialog boxes triggered by user interaction using native HTML dialog element.
        </p>
      </div>

      <div className="columns-1 lg:columns-2 gap-x-4">
        <ExampleSection
          title="Basic Modal"
          description="Simple modal with close button."
          code={`import React, { useState } from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Box>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <Modal.Action>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Modal.Action>
        </Modal.Box>
      </Modal>
    </>
  )
}

export default App`}
        >
          <Button onClick={() => setBasicOpen(true)}>Open Modal</Button>
          <Modal open={basicOpen} onClose={() => setBasicOpen(false)}>
            <Modal.Box>
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
              <Modal.Action>
                <Button onClick={() => setBasicOpen(false)}>Close</Button>
              </Modal.Action>
            </Modal.Box>
          </Modal>
        </ExampleSection>

        <ExampleSection
          title="Click Outside to Close"
          description="Modal with backdrop that closes on click."
          code={`import React, { useState } from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Box>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Click outside to close or press ESC
          </p>
        </Modal.Box>
        <Modal.Backdrop onClick={() => setOpen(false)} />
      </Modal>
    </>
  )
}

export default App`}
        >
          <Button onClick={() => setBackdropOpen(true)}>Open Modal</Button>
          <Modal open={backdropOpen} onClose={() => setBackdropOpen(false)}>
            <Modal.Box>
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">Click outside to close or press ESC</p>
            </Modal.Box>
            <Modal.Backdrop onClick={() => setBackdropOpen(false)} />
          </Modal>
        </ExampleSection>

        <ExampleSection
          title="Modal Positions"
          description="Position modal at top or bottom."
          code={`import React, { useState } from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const [topOpen, setTopOpen] = useState(false)
  const [bottomOpen, setBottomOpen] = useState(false)

  return (
    <>
      <div className="flex gap-2">
        <Button onClick={() => setTopOpen(true)}>Top</Button>
        <Button onClick={() => setBottomOpen(true)}>Bottom</Button>
      </div>

      <Modal open={topOpen} onClose={() => setTopOpen(false)} position="top">
        <Modal.Box>
          <h3 className="text-lg font-bold">Top Modal</h3>
          <p className="py-4">This modal is positioned at the top</p>
          <Modal.Action>
            <Button onClick={() => setTopOpen(false)}>Close</Button>
          </Modal.Action>
        </Modal.Box>
      </Modal>

      <Modal open={bottomOpen} onClose={() => setBottomOpen(false)} position="bottom">
        <Modal.Box>
          <h3 className="text-lg font-bold">Bottom Modal</h3>
          <p className="py-4">This modal is positioned at the bottom</p>
          <Modal.Action>
            <Button onClick={() => setBottomOpen(false)}>Close</Button>
          </Modal.Action>
        </Modal.Box>
      </Modal>
    </>
  )
}

export default App`}
        >
          <div className="flex gap-2">
            <Button onClick={() => setTopOpen(true)}>Top</Button>
            <Button onClick={() => setBottomOpen(true)}>Bottom</Button>
          </div>

          <Modal open={topOpen} onClose={() => setTopOpen(false)} position="top">
            <Modal.Box>
              <h3 className="text-lg font-bold">Top Modal</h3>
              <p className="py-4">This modal is positioned at the top</p>
              <Modal.Action>
                <Button onClick={() => setTopOpen(false)}>Close</Button>
              </Modal.Action>
            </Modal.Box>
          </Modal>

          <Modal open={bottomOpen} onClose={() => setBottomOpen(false)} position="bottom">
            <Modal.Box>
              <h3 className="text-lg font-bold">Bottom Modal</h3>
              <p className="py-4">This modal is positioned at the bottom</p>
              <Modal.Action>
                <Button onClick={() => setBottomOpen(false)}>Close</Button>
              </Modal.Action>
            </Modal.Box>
          </Modal>
        </ExampleSection>

        <ExampleSection
          title="Responsive Position"
          description="Bottom on mobile, middle on desktop."
          code={`import React, { useState } from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className="modal-bottom sm:modal-middle"
      >
        <Modal.Box>
          <h3 className="text-lg font-bold">Responsive!</h3>
          <p className="py-4">
            Bottom on mobile, middle on larger screens
          </p>
          <Modal.Action>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Modal.Action>
        </Modal.Box>
        <Modal.Backdrop onClick={() => setOpen(false)} />
      </Modal>
    </>
  )
}

export default App`}
        >
          <Button onClick={() => setCustomOpen(true)}>Open Modal</Button>
          <Modal
            open={customOpen}
            onClose={() => setCustomOpen(false)}
            className="modal-bottom sm:modal-middle"
          >
            <Modal.Box>
              <h3 className="text-lg font-bold">Responsive!</h3>
              <p className="py-4">Bottom on mobile, middle on larger screens</p>
              <Modal.Action>
                <Button onClick={() => setCustomOpen(false)}>Close</Button>
              </Modal.Action>
            </Modal.Box>
            <Modal.Backdrop onClick={() => setCustomOpen(false)} />
          </Modal>
        </ExampleSection>

        <ExampleSection
          title="Custom Size"
          description="Custom width modal using Tailwind utilities."
          code={`import React, { useState } from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Large Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Box className="w-11/12 max-w-5xl">
          <h3 className="text-lg font-bold">Large Modal</h3>
          <p className="py-4">
            This modal uses custom width classes: w-11/12 max-w-5xl
          </p>
          <Modal.Action>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Modal.Action>
        </Modal.Box>
        <Modal.Backdrop onClick={() => setOpen(false)} />
      </Modal>
    </>
  )
}

export default App`}
        >
          <Button onClick={() => setFormOpen(true)}>Open Large Modal</Button>
          <Modal open={formOpen} onClose={() => setFormOpen(false)}>
            <Modal.Box className="w-11/12 max-w-5xl">
              <h3 className="text-lg font-bold">Large Modal</h3>
              <p className="py-4">This modal uses custom width classes: w-11/12 max-w-5xl</p>
              <Modal.Action>
                <Button onClick={() => setFormOpen(false)}>Close</Button>
              </Modal.Action>
            </Modal.Box>
            <Modal.Backdrop onClick={() => setFormOpen(false)} />
          </Modal>
        </ExampleSection>

        <ExampleSection
          title="Modal with Form"
          description="Modal containing form inputs."
          code={`import React, { useState } from 'react'
import { Modal, Button, Input } from '@edadma/petalui'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Login</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Box>
          <h3 className="text-lg font-bold">Login</h3>
          <div className="py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <Input type="email" placeholder="email@example.com" />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <Input type="password" placeholder="password" />
            </div>
          </div>
          <Modal.Action>
            <Button onClick={() => setOpen(false)} type="ghost">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)} type="primary">
              Login
            </Button>
          </Modal.Action>
        </Modal.Box>
        <Modal.Backdrop onClick={() => setOpen(false)} />
      </Modal>
    </>
  )
}

export default App`}
        >
          <Button onClick={() => setFormOpen(true)}>Login</Button>
          <Modal open={formOpen} onClose={() => setFormOpen(false)}>
            <Modal.Box>
              <h3 className="text-lg font-bold">Login</h3>
              <div className="py-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Input type="password" placeholder="password" />
                </div>
              </div>
              <Modal.Action>
                <Button onClick={() => setFormOpen(false)} type="ghost">
                  Cancel
                </Button>
                <Button onClick={() => setFormOpen(false)} type="primary">
                  Login
                </Button>
              </Modal.Action>
            </Modal.Box>
            <Modal.Backdrop onClick={() => setFormOpen(false)} />
          </Modal>
        </ExampleSection>

        <ExampleSection
          title="Modal.confirm()"
          description="Confirmation dialog with OK and Cancel buttons."
          code={`import React from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const handleDelete = () => {
    Modal.confirm({
      title: 'Are you sure?',
      content: 'This action cannot be undone.',
      onOk: () => {
        console.log('Deleted')
      },
      onCancel: () => {
        console.log('Cancelled')
      },
    })
  }

  return <Button onClick={handleDelete}>Delete</Button>
}

export default App`}
        >
          <Button
            onClick={() => {
              Modal.confirm({
                title: 'Are you sure?',
                content: 'This action cannot be undone.',
                onOk: () => {
                  console.log('Deleted')
                },
                onCancel: () => {
                  console.log('Cancelled')
                },
              })
            }}
          >
            Delete Item
          </Button>
        </ExampleSection>

        <ExampleSection
          title="Modal.info()"
          description="Informational modal with info styling."
          code={`import React from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const showInfo = () => {
    Modal.info({
      title: 'Information',
      content: 'This is an informational message.',
      okText: 'Got it',
    })
  }

  return <Button onClick={showInfo}>Show Info</Button>
}

export default App`}
        >
          <Button
            onClick={() => {
              Modal.info({
                title: 'Information',
                content: 'This is an informational message.',
                okText: 'Got it',
              })
            }}
          >
            Show Info
          </Button>
        </ExampleSection>

        <ExampleSection
          title="Modal.success()"
          description="Success modal with success styling."
          code={`import React from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const showSuccess = () => {
    Modal.success({
      title: 'Success!',
      content: 'Your changes have been saved.',
    })
  }

  return <Button onClick={showSuccess}>Save</Button>
}

export default App`}
        >
          <Button
            onClick={() => {
              Modal.success({
                title: 'Success!',
                content: 'Your changes have been saved.',
              })
            }}
          >
            Save Changes
          </Button>
        </ExampleSection>

        <ExampleSection
          title="Modal.warning()"
          description="Warning modal with warning styling."
          code={`import React from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const showWarning = () => {
    Modal.warning({
      title: 'Warning',
      content: 'Your session is about to expire.',
    })
  }

  return <Button onClick={showWarning}>Show Warning</Button>
}

export default App`}
        >
          <Button
            onClick={() => {
              Modal.warning({
                title: 'Warning',
                content: 'Your session is about to expire.',
              })
            }}
          >
            Show Warning
          </Button>
        </ExampleSection>

        <ExampleSection
          title="Modal.error()"
          description="Error modal with error styling."
          code={`import React from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const showError = () => {
    Modal.error({
      title: 'Error',
      content: 'Failed to process your request.',
    })
  }

  return <Button onClick={showError}>Trigger Error</Button>
}

export default App`}
        >
          <Button
            onClick={() => {
              Modal.error({
                title: 'Error',
                content: 'Failed to process your request.',
              })
            }}
          >
            Trigger Error
          </Button>
        </ExampleSection>

        <ExampleSection
          title="Async Operations"
          description="Handle async operations with loading state."
          code={`import React from 'react'
import { Modal, Button } from '@edadma/petalui'

const App: React.FC = () => {
  const handleSubmit = () => {
    Modal.confirm({
      title: 'Submit Form',
      content: 'Are you ready to submit?',
      onOk: async () => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log('Submitted')
      },
    })
  }

  return <Button onClick={handleSubmit}>Submit</Button>
}

export default App`}
        >
          <Button
            onClick={() => {
              Modal.confirm({
                title: 'Submit Form',
                content: 'Are you ready to submit?',
                onOk: async () => {
                  await new Promise((resolve) => setTimeout(resolve, 2000))
                  console.log('Submitted')
                },
              })
            }}
          >
            Submit with Loading
          </Button>
        </ExampleSection>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Modal API</h2>
        <ApiTable data={modalApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Modal.Box API</h2>
        <ApiTable data={modalBoxApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Modal.Action API</h2>
        <ApiTable data={modalActionApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Modal.Backdrop API</h2>
        <ApiTable data={modalBackdropApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Static Methods API</h2>
        <p className="mb-4 text-base-content/70">
          All static methods (Modal.confirm, Modal.info, Modal.success, Modal.warning, Modal.error) accept the
          following configuration:
        </p>
        <ApiTable data={modalFuncApi} />

        <div className="alert alert-info mt-8">
          <div>
            <strong>Usage Tips:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Press ESC key to close modal</li>
              <li>Add Modal.Backdrop to enable click-outside-to-close</li>
              <li>Use responsive classes like "modal-bottom sm:modal-middle"</li>
              <li>Customize size with Tailwind width utilities on Modal.Box</li>
              <li>
                Static methods return an object with <code>destroy()</code> for manual cleanup
              </li>
              <li>
                Use <code>async</code> functions in <code>onOk</code> for loading state during operations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
