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
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="accent">Accent</Button>
    <Button color="neutral">Neutral</Button>
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
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
  </Space>
)

export default App
```

### Variants

Different style variants: solid (default), outline, dash, soft, ghost, and link.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button color="primary">Solid</Button>
    <Button color="primary" variant="outline">Outline</Button>
    <Button color="primary" variant="dash">Dash</Button>
    <Button color="primary" variant="soft">Soft</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
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
    <Button color="primary" variant="outline">Primary</Button>
    <Button color="secondary" variant="outline">Secondary</Button>
    <Button color="accent" variant="outline">Accent</Button>
    <Button color="success" variant="outline">Success</Button>
    <Button color="error" variant="outline">Error</Button>
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
    <Button color="primary" variant="dash">Primary</Button>
    <Button color="secondary" variant="dash">Secondary</Button>
    <Button color="accent" variant="dash">Accent</Button>
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
    <Button color="primary" variant="soft">Primary</Button>
    <Button color="secondary" variant="soft">Secondary</Button>
    <Button color="accent" variant="soft">Accent</Button>
    <Button color="success" variant="soft">Success</Button>
    <Button color="warning" variant="soft">Warning</Button>
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
    <Button color="primary">Normal</Button>
    <Button color="primary" active>Active</Button>
    <Button color="primary" loading>Loading</Button>
    <Button color="primary" disabled>Disabled</Button>
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
    <Button color="primary" shape="square">
      <XMarkIcon className="h-6 w-6" />
    </Button>
    <Button color="primary" shape="circle">
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
    <Button color="primary" shape="wide">Wide Button</Button>
    <Button color="secondary" shape="wide">Another Wide</Button>
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
    <Button color="primary" shape="block">Block Button</Button>
    <Button color="secondary" shape="block">Another Block</Button>
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
    <Button color="primary" loading>Loading</Button>
    <Button color="success" loading>Processing</Button>
    <Button color="error" loading>Deleting</Button>
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
    <Button color="primary" href="https://github.com" target="_blank">
      GitHub
    </Button>
    <Button variant="ghost" href="https://npmjs.com" target="_blank">
      npm
    </Button>
    <Button href="/components" variant="link">
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
    <Button color="primary" icon={<ArrowUpTrayIcon className="w-4 h-4" />}>
      Upload
    </Button>
    <Button color="success" icon={<CheckIcon className="w-4 h-4" />}>
      Save
    </Button>
    <Button color="error" icon={<TrashIcon className="w-4 h-4" />} iconPosition="end">
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
    <Button danger variant="outline">Cancel Account</Button>
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
    <Button color="primary" shape="round">Get Started</Button>
    <Button color="secondary" shape="round">Learn More</Button>
    <Button color="accent" shape="round">Subscribe</Button>
  </Space>
)

export default App
```

### Toggle Button

Toggle buttons using pressed prop for accessibility.

```tsx
import React, { useState } from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <Space direction="horizontal" wrap size="sm">
      <Button
        color="primary"
        pressed={pressed}
        active={pressed}
        onClick={() => setPressed(!pressed)}
      >
        {pressed ? 'On' : 'Off'}
      </Button>
      <Button
        color="secondary"
        variant="outline"
        pressed={pressed}
        active={pressed}
        onClick={() => setPressed(!pressed)}
      >
        Toggle: {pressed ? 'Active' : 'Inactive'}
      </Button>
    </Space>
  )
}

export default App
```

### No Animation

Disable the click animation effect.

```tsx
import React from 'react'
import { Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" wrap size="sm">
    <Button color="primary">With Animation</Button>
    <Button color="primary" noAnimation>No Animation</Button>
  </Space>
)

export default App
```

### Form Submit

Button with htmlType="submit" inside AsterUI Form component.

```tsx
import React from 'react'
import { Button, Form, Input, Space, notification } from 'asterui'

const App: React.FC = () => {
  const handleFinish = (values: { email: string }) => {
    notification.success({ message: 'Submitted!', description: `Email: ${values.email}` })
  }

  return (
    <Form onFinish={handleFinish}>
      <Form.Item name="email" label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Form.Item>
      <Form.Item>
        <Space direction="horizontal" size="sm">
          <Button color="primary" htmlType="submit">Submit</Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default App
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
      <Button color="primary" onClick={() => setCount(c => c + 1)}>
        Clicked {count} times
      </Button>
      <Button color="secondary" onClick={handleAsync} loading={loading}>
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
| `color` | Button color | `'primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `-` |
| `variant` | Button style variant | `'solid' \| 'outline' \| 'dash' \| 'soft' \| 'ghost' \| 'link'` | `-` |
| `size` | Button size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `active` | Active/pressed visual state | `boolean` | `false` |
| `loading` | Show loading spinner and disable button | `boolean` | `false` |
| `shape` | Button shape | `'square' \| 'circle' \| 'wide' \| 'block' \| 'round'` | `-` |
| `icon` | Icon element to display | `ReactNode` | `-` |
| `iconPosition` | Position of the icon | `'start' \| 'end'` | `'start'` |
| `danger` | Applies error/danger styling (shorthand for color="error") | `boolean` | `false` |
| `pressed` | Toggle button pressed state (sets aria-pressed) | `boolean` | `-` |
| `noAnimation` | Disable click animation | `boolean` | `false` |
| `disabled` | Disabled state | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
| `children` | Button content | `ReactNode` | `-` |
| `href` | URL to navigate to (renders as anchor element) | `string` | `-` |
| `target` | Where to open the linked URL (when href is set) | `string` | `-` |
| `htmlType` | HTML button type (only when href is not set) | `'button' \| 'submit' \| 'reset'` | `'button'` |
