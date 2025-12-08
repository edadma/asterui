# Card

**Import:** `import { Card } from 'asterui'`

## Examples

### Basic Card

Simple card with title and content.

```tsx
import React from 'react'
import { Card } from 'asterui'

const App: React.FC = () => (
  <Card title="Card Title" className="w-96">
    <p>This is a basic card with some content inside it.</p>
  </Card>
)

export default App
```

### Card with Image

Card with a cover image at the top.

```tsx
import React from 'react'
import { Card } from 'asterui'

const App: React.FC = () => (
  <Card
    title="Image Card"
    cover={<img src="https://picsum.photos/400/200" alt="Placeholder" />}
    className="w-96"
  >
    <p>A card with an image positioned at the top.</p>
  </Card>
)

export default App
```

### Card with Actions

Card with action buttons.

```tsx
import React from 'react'
import { Card, Button } from 'asterui'

const App: React.FC = () => (
  <Card
    title="Action Card"
    actions={
      <>
        <Button color="primary">Accept</Button>
        <Button variant="ghost">Decline</Button>
      </>
    }
    className="w-96"
  >
    <p>Card with buttons in the actions area.</p>
  </Card>
)

export default App
```

### Unbordered Card

Card without border (cards have borders by default).

```tsx
import React from 'react'
import { Card } from 'asterui'

const App: React.FC = () => (
  <Card title="Unbordered Card" className="w-96" bordered={false}>
    <p>This card has no border.</p>
  </Card>
)

export default App
```

### Card Sizes

Cards in different sizes.

```tsx
import React from 'react'
import { Card, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="sm" className="w-96">
    <Card title="Extra Small" size="xs" bordered>
      <p>Compact card with minimal padding.</p>
    </Card>
    <Card title="Small" size="sm" bordered>
      <p>Small card with reduced padding.</p>
    </Card>
    <Card title="Large" size="lg" bordered>
      <p>Large card with increased padding.</p>
    </Card>
  </Space>
)

export default App
```

### Side Layout

Horizontal card with image on the side.

```tsx
import React from 'react'
import { Card, Button } from 'asterui'

const App: React.FC = () => (
  <Card
    title="Side Card"
    cover={
      <img
        src="https://picsum.photos/200/300"
        alt="Placeholder"
        className="w-32 h-full object-cover"
      />
    }
    actions={<Button color="primary">Buy Now</Button>}
    side
    className="w-96"
  >
    <p>Image positioned beside the content.</p>
  </Card>
)

export default App
```

### Full Background Image

Card with image as full background overlay.

```tsx
import React from 'react'
import { Card, Button } from 'asterui'

const App: React.FC = () => (
  <Card
    title="Overlay Card"
    cover={<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />}
    actions={<Button color="primary">View Details</Button>}
    imageFull
    className="w-96"
  >
    <p>Text appears over the background image.</p>
  </Card>
)

export default App
```

### Custom Colors

Card with custom background colors using className.

```tsx
import React from 'react'
import { Card, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="sm" className="w-96">
    <Card title="Primary Card" className="bg-primary text-primary-content">
      <p>Card with primary background color.</p>
    </Card>
    <Card title="Neutral Card" className="bg-neutral text-neutral-content">
      <p>Card with neutral background color.</p>
    </Card>
  </Space>
)

export default App
```

### Action Alignment

Different action button alignments.

```tsx
import React from 'react'
import { Card, Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="sm" className="w-96">
    <Card
      title="Left Actions"
      actions={<Button color="primary" size="sm">Left</Button>}
      actionsJustify="start"
      bordered
    >
      <p>Actions aligned to the left.</p>
    </Card>
    <Card
      title="Center Actions"
      actions={<Button color="primary" size="sm">Center</Button>}
      actionsJustify="center"
      bordered
    >
      <p>Actions aligned to the center.</p>
    </Card>
  </Space>
)

export default App
```

### Extra Content

Card with extra content in the top-right corner.

```tsx
import React from 'react'
import { Card, Button } from 'asterui'

const App: React.FC = () => (
  <Card
    title="Card Title"
    extra={<a href="#" className="link link-primary">More</a>}
    className="w-96"
  >
    <p>Card with extra content in the header area.</p>
  </Card>
)

export default App
```

### Loading State

Card showing skeleton placeholders while loading.

```tsx
import React, { useState } from 'react'
import { Card, Button, Space } from 'asterui'

const App: React.FC = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Space direction="vertical" size="sm">
      <Button size="sm" onClick={() => setLoading(!loading)}>
        Toggle Loading
      </Button>
      <Card
        title="Loading Card"
        cover={<img src="https://picsum.photos/400/200" alt="Placeholder" />}
        actions={<Button color="primary">Action</Button>}
        loading={loading}
        className="w-96"
      >
        <p>Content appears when loading is false.</p>
      </Card>
    </Space>
  )
}

export default App
```

### Hoverable

Card with hover effect.

```tsx
import React from 'react'
import { Card, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="sm">
    <Card title="Hoverable Card" hoverable className="w-64">
      <p>Hover over this card to see the shadow effect.</p>
    </Card>
    <Card title="Normal Card" className="w-64">
      <p>This card has no hover effect.</p>
    </Card>
  </Space>
)

export default App
```

### Card.Meta

Use Card.Meta for avatar with title and description layout.

```tsx
import React from 'react'
import { Card, Avatar } from 'asterui'

const App: React.FC = () => (
  <Card className="w-96">
    <Card.Meta
      avatar={<Avatar src="https://i.pravatar.cc/100" />}
      title="John Doe"
      description="Software Engineer at Acme Corp"
    />
    <p className="mt-4">
      This card uses Card.Meta for a structured avatar layout.
    </p>
  </Card>
)

export default App
```

### Card with Avatar Props

Alternative inline avatar layout using Card props directly.

```tsx
import React from 'react'
import { Card, Avatar, Button } from 'asterui'

const App: React.FC = () => (
  <Card
    avatar={<Avatar src="https://i.pravatar.cc/100" />}
    title="Jane Smith"
    description="Product Designer"
    actions={<Button color="primary" size="sm">Follow</Button>}
    className="w-96"
  >
    <p className="mt-2">Building beautiful user experiences.</p>
  </Card>
)

export default App
```

## API

### Card

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Card body content | `React.ReactNode` | `-` |
| `title` | Card title | `React.ReactNode` | `-` |
| `extra` | Content in the top-right corner of the header | `React.ReactNode` | `-` |
| `cover` | Cover image or media element | `React.ReactNode` | `-` |
| `actions` | Action buttons or elements | `React.ReactNode` | `-` |
| `size` | Card size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `-` |
| `bordered` | Add border and shadow to card | `boolean` | `true` |
| `side` | Place cover beside content (horizontal layout) | `boolean` | `false` |
| `imageFull` | Make cover image a full background overlay | `boolean` | `false` |
| `actionsJustify` | Horizontal alignment of actions | `'start' \| 'center' \| 'end'` | `'end'` |
| `loading` | Show skeleton loading state | `boolean` | `false` |
| `hoverable` | Enable hover shadow effect | `boolean` | `false` |
| `avatar` | Avatar element (for inline meta layout) | `React.ReactNode` | `-` |
| `description` | Description text (for inline meta layout) | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |

### Card.Meta

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `avatar` | Avatar or icon element | `React.ReactNode` | `-` |
| `title` | Title content | `React.ReactNode` | `-` |
| `description` | Description content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Card.Grid

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Grid cell content | `React.ReactNode` | `-` |
| `hoverable` | Enable hover effect | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
