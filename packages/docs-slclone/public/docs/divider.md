# Divider

Visual separator for content sections with optional text labels.

**Import:** `import { Divider } from 'asterui'`

## Examples

### Basic Divider

Simple horizontal divider.

```tsx
import React from 'react'
import { Divider } from 'asterui'

const App: React.FC = () => (
  <div>
    <p>Content above the divider</p>
    <Divider />
    <p>Content below the divider</p>
  </div>
)

export default App
```

### With Text

Divider with text label.

```tsx
import React from 'react'
import { Divider } from 'asterui'

const App: React.FC = () => (
  <div>
    <p>Section 1 content</p>
    <Divider>OR</Divider>
    <p>Section 2 content</p>
  </div>
)

export default App
```

### Text Position

Position text at start, center, or end.

```tsx
import React from 'react'
import { Divider, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md" className="w-full">
    <Divider position="start">Start</Divider>
    <Divider position="center">Center</Divider>
    <Divider position="end">End</Divider>
  </Space>
)

export default App
```

### Vertical Divider

Vertical divider for inline content.

```tsx
import React from 'react'
import { Divider } from 'asterui'

const App: React.FC = () => (
  <div className="flex items-center h-8">
    <span>Home</span>
    <Divider orientation="vertical" />
    <span>Products</span>
    <Divider orientation="vertical" />
    <span>About</span>
  </div>
)

export default App
```

### Colors

Dividers with different color types.

```tsx
import React from 'react'
import { Divider, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md" className="w-full">
    <Divider type="primary">Primary</Divider>
    <Divider type="secondary">Secondary</Divider>
    <Divider type="accent">Accent</Divider>
  </Space>
)

export default App
```

## API

### Divider

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Text or content in the divider | `React.ReactNode` | `-` |
| `orientation` | Divider orientation | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `position` | Text position | `'start' \| 'center' \| 'end'` | `'center'` |
| `type` | Color type | `'neutral' \| 'primary' \| 'secondary' \| 'accent' \| 'success' \| 'warning' \| 'info' \| 'error'` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
