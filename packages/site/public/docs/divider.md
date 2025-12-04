# Divider

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

### Text Orientation

Position text on the left, center, or right.

```tsx
import React from 'react'
import { Divider, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md" className="w-full">
    <Divider orientation="left">Left</Divider>
    <Divider orientation="center">Center</Divider>
    <Divider orientation="right">Right</Divider>
  </Space>
)

export default App
```

### Dashed

Divider with dashed line style.

```tsx
import React from 'react'
import { Divider, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md" className="w-full">
    <Divider dashed />
    <Divider dashed>Dashed with text</Divider>
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
  <div className="flex items-center">
    <span>Home</span>
    <Divider type="vertical" />
    <span>Products</span>
    <Divider type="vertical" />
    <span>About</span>
    <Divider type="vertical" />
    <span>Contact</span>
  </div>
)

export default App
```

## API

### Divider

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Text or content in the divider | `React.ReactNode` | `-` |
| `type` | Divider orientation | `horizontal' \| 'vertical` | `horizontal` |
| `orientation` | Text position for horizontal dividers | `left' \| 'center' \| 'right` | `center` |
| `dashed` | Dashed line style | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
