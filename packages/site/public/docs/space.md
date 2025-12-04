# Space

Set consistent spacing between components.

**Import:** `import { Space } from 'asterui'`

## Examples

### Horizontal

```tsx
import React from 'react'
import { Space, Button } from 'asterui'

const App: React.FC = () => (
  <Space>
    <Button type="primary">Button 1</Button>
    <Button type="secondary">Button 2</Button>
    <Button type="accent">Button 3</Button>
  </Space>
)

export default App
```

### Vertical

```tsx
import React from 'react'
import { Space, Button } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical">
    <Button type="primary">Button 1</Button>
    <Button type="secondary">Button 2</Button>
    <Button type="accent">Button 3</Button>
  </Space>
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Space, Badge } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical">
    <Space size="xs">
      <Badge>Extra Small</Badge>
      <Badge>Spacing</Badge>
    </Space>

    <Space size="sm">
      <Badge>Small</Badge>
      <Badge>Spacing</Badge>
    </Space>

    <Space size="md">
      <Badge>Medium</Badge>
      <Badge>Spacing</Badge>
    </Space>

    <Space size="lg">
      <Badge>Large</Badge>
      <Badge>Spacing</Badge>
    </Space>

    <Space size="xl">
      <Badge>Extra Large</Badge>
      <Badge>Spacing</Badge>
    </Space>
  </Space>
)

export default App
```

### Alignment

```tsx
import React from 'react'
import { Space, Button } from 'asterui'

const App: React.FC = () => (
  <Space align="center">
    <Button type="primary" size="xs">Small</Button>
    <Button type="secondary" size="md">Medium</Button>
    <Button type="accent" size="lg">Large</Button>
  </Space>
)

export default App
```

### Wrap

```tsx
import React from 'react'
import { Space, Badge } from 'asterui'

const App: React.FC = () => (
  <Space wrap>
    <Badge>Tag 1</Badge>
    <Badge>Tag 2</Badge>
    <Badge>Tag 3</Badge>
    <Badge>Tag 4</Badge>
    <Badge>Tag 5</Badge>
    <Badge>Tag 6</Badge>
    <Badge>Tag 7</Badge>
    <Badge>Tag 8</Badge>
  </Space>
)

export default App
```

### Nested

```tsx
import React from 'react'
import { Space, Card, Button } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical">
    <Card title="Card 1">
      <Space>
        <Button type="primary" size="sm">Action 1</Button>
        <Button type="secondary" size="sm">Action 2</Button>
      </Space>
    </Card>

    <Card title="Card 2">
      <Space>
        <Button type="primary" size="sm">Action 1</Button>
        <Button type="secondary" size="sm">Action 2</Button>
      </Space>
    </Card>
  </Space>
)

export default App
```

## API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `direction` | Layout direction | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `size` | Spacing size between children | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'` |
| `align` | Alignment of items | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | `-` |
| `justify` | Justification along main axis | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly'` | `-` |
| `wrap` | Whether to wrap items | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
