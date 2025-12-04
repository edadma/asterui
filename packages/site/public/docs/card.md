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
        <Button type="primary">Accept</Button>
        <Button type="ghost">Decline</Button>
      </>
    }
    className="w-96"
  >
    <p>Card with buttons in the actions area.</p>
  </Card>
)

export default App
```

### Bordered Card

Card with a border.

```tsx
import React from 'react'
import { Card } from 'asterui'

const App: React.FC = () => (
  <Card title="Bordered Card" className="w-96" bordered>
    <p>This card has a border around it.</p>
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
    actions={<Button type="primary">Buy Now</Button>}
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
    cover={<img src="https://picsum.photos/400/300" alt="Placeholder" />}
    actions={<Button type="primary">View Details</Button>}
    imageFull
    className="w-96 h-64 text-neutral-content"
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
      actions={<Button type="primary" size="sm">Left</Button>}
      actionsJustify="start"
      bordered
    >
      <p>Actions aligned to the left.</p>
    </Card>
    <Card
      title="Center Actions"
      actions={<Button type="primary" size="sm">Center</Button>}
      actionsJustify="center"
      bordered
    >
      <p>Actions aligned to the center.</p>
    </Card>
  </Space>
)

export default App
```

## API

### Card

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Card body content | `React.ReactNode` | `-` |
| `title` | Card title (renders automatically) | `React.ReactNode` | `-` |
| `cover` | Cover image or media element | `React.ReactNode` | `-` |
| `actions` | Action buttons or elements | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
| `size` | Card size | `xs' \| 'sm' \| 'md' \| 'lg' \| 'xl` | `md` |
| `bordered` | Add border to card | `boolean` | `false` |
| `side` | Place cover beside content (horizontal layout) | `boolean` | `false` |
| `imageFull` | Make cover image a full background overlay | `boolean` | `false` |
| `actionsJustify` | Horizontal alignment of actions | `start' \| 'center' \| 'end` | `end` |
