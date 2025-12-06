# Button

**Import:** `import { Button } from 'asterui'`

## Examples

### Brand Colors

Primary brand colors for common actions.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="accent">Accent</Button>
    <Button type="neutral">Neutral</Button>
  </Space>
)

export default App
```

### State Colors

Semantic colors for different states and feedback.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </Space>
)

export default App
```

### Minimal Styles

Ghost and link variants for subtle actions.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="ghost">Ghost</Button>
    <Button type="link">Link</Button>
    <Button>No Type</Button>
  </Space>
)

export default App
```

### Sizes

Five sizes: xs, sm, md (default), lg, and xl.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm" align="center">
    <Button size="xs">XS</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">XL</Button>
  </Space>
)

export default App
```

### Outline

Outline variant with transparent background.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="primary" outline>Primary</Button>
    <Button type="secondary" outline>Secondary</Button>
    <Button type="accent" outline>Accent</Button>
  </Space>
)

export default App
```

### Dashed Border

Buttons with dashed border styling.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="primary" dash>Primary</Button>
    <Button type="secondary" dash>Secondary</Button>
    <Button type="accent" dash>Accent</Button>
  </Space>
)

export default App
```

### Soft Colors

Muted color backgrounds for subtle emphasis.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="primary" soft>Primary</Button>
    <Button type="secondary" soft>Secondary</Button>
    <Button type="accent" soft>Accent</Button>
    <Button type="success" soft>Success</Button>
    <Button type="warning" soft>Warning</Button>
  </Space>
)

export default App
```

### States

Active, loading, and disabled states.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="primary">Normal</Button>
    <Button type="primary" active>Active</Button>
    <Button type="primary" loading>Loading</Button>
    <Button type="primary" disabled>Disabled</Button>
  </Space>
)

export default App
```

### Shapes

Square and circle shapes for icon buttons.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'
import { XMarkIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm" align="center">
    <Button type="primary" shape="square">
      <XMarkIcon className="h-6 w-6" />
    </Button>
    <Button type="primary" shape="circle">
      <XMarkIcon className="h-6 w-6" />
    </Button>
  </Space>
)

export default App
```

### Wide

Extra wide buttons for emphasis.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="sm">
    <Button type="primary" shape="wide">Wide Button</Button>
    <Button type="secondary" shape="wide">Another Wide</Button>
  </Space>
)

export default App
```

### Block

Full width buttons.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" className="w-full">
    <Button type="primary" shape="block">Block Button</Button>
    <Button type="secondary" shape="block">Another Block</Button>
  </Space>
)

export default App
```

### Loading States

Loading spinner with different colors.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="primary" loading>Loading</Button>
    <Button type="success" loading>Processing</Button>
    <Button type="error" loading>Deleting</Button>
  </Space>
)

export default App
```

### Link Buttons

Buttons that navigate to URLs. Renders as anchor element when href is provided.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="primary" href="https://github.com" target="_blank">
      GitHub
    </Button>
    <Button type="ghost" href="https://npmjs.com" target="_blank">
      npm
    </Button>
    <Button href="/components" type="link">
      Internal Link
    </Button>
  </Space>
)

export default App
```

### With Icons

Buttons with icons using the icon prop for automatic spacing.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'
import { ArrowUpTrayIcon, CheckIcon, TrashIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="primary" icon={<ArrowUpTrayIcon className="w-4 h-4" />}>
      Upload
    </Button>
    <Button type="success" icon={<CheckIcon className="w-4 h-4" />}>
      Save
    </Button>
    <Button type="error" icon={<TrashIcon className="w-4 h-4" />} iconPosition="end">
      Delete
    </Button>
  </Space>
)

export default App
```

### Danger Button

Semantic danger styling for destructive actions.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'
import { TrashIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button danger>Delete</Button>
    <Button danger icon={<TrashIcon className="w-4 h-4" />}>
      Remove Item
    </Button>
    <Button danger outline>Cancel Account</Button>
  </Space>
)

export default App
```

### Round Shape

Pill-shaped buttons with fully rounded ends.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button type="primary" shape="round">Get Started</Button>
    <Button type="secondary" shape="round">Learn More</Button>
    <Button type="accent" shape="round">Subscribe</Button>
  </Space>
)

export default App
```

### Form Submit

Button with htmlType=

```tsx
import React from 'react'
import { Button, Form, Input, Space, Modal } from 'asterui'

const App: React.FC = () => {
  const handleFinish = (values: { email: string }) => {
    Modal.success({
      title: 'Form Submitted',
      content: \
```

### Event Handling

Buttons with onClick handlers and state management.

```tsx
import React, { useState } from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleAsync = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary" onClick={() => setCount(c => c + 1)}>
        Clicked {count} times
      </Button>
      <Button type="secondary" onClick={handleAsync} loading={loading}>
        {loading ? 'Processing...' : 'Async Action'}
      </Button>
    </Space>
  )
}

export default App
```

## API

### Button

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `type` | Button color type | `'primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'neutral' \| 'ghost' \| 'link'` | `undefined` |
| `size` | Button size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `outline` | Outline style variant | `boolean` | `false` |
| `dash` | Dashed border variant | `boolean` | `false` |
| `soft` | Muted color background variant | `boolean` | `false` |
| `active` | Active state | `boolean` | `false` |
| `loading` | Show loading spinner | `boolean` | `false` |
| `shape` | Button shape | `'square' \| 'circle' \| 'wide' \| 'block' \| 'round'` | `-` |
| `icon` | Icon element to display | `ReactNode` | `-` |
| `iconPosition` | Position of the icon | `'start' \| 'end'` | `'start'` |
| `danger` | Applies error/danger styling | `boolean` | `false` |
| `noAnimation` | Disable click animation | `boolean` | `false` |
| `disabled` | Disabled state | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
| `children` | Button content | `ReactNode` | `-` |
| `href` | URL to navigate to (renders as anchor element) | `string` | `-` |
| `target` | Where to open the linked URL (when href is set) | `string` | `-` |
| `htmlType` | HTML button type (only when href is not set) | `'button' \| 'submit' \| 'reset'` | `'button'` |
