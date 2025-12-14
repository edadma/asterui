# Loading

**Import:** `import { Loading } from 'asterui'`

## Examples

### Basic Loading

Default loading spinner.

```tsx
import React from 'react'
import { Loading } from 'asterui'

const App: React.FC = () => (
  <Loading />
)

export default App
```

### Loading Types

Different animation types for loading indicators.

```tsx
import React from 'react'
import { Loading, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="md" align="center" wrap>
    <Loading type="spinner" />
    <Loading type="dots" />
    <Loading type="ring" />
    <Loading type="ball" />
    <Loading type="bars" />
    <Loading type="infinity" />
  </Space>
)

export default App
```

### Sizes

Control loading indicator size.

```tsx
import React from 'react'
import { Loading, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="md" align="center">
    <Loading size="xs" />
    <Loading size="sm" />
    <Loading size="md" />
    <Loading size="lg" />
  </Space>
)

export default App
```

### Colors

Different color variants for loading indicators.

```tsx
import React from 'react'
import { Loading, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="md" align="center" wrap>
    <Loading color="primary" />
    <Loading color="secondary" />
    <Loading color="accent" />
    <Loading color="neutral" />
    <Loading color="info" />
    <Loading color="success" />
    <Loading color="warning" />
    <Loading color="error" />
  </Space>
)

export default App
```

## API

### Loading

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `size` | Loading indicator size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `type` | Loading animation type | `spinner' \| 'dots' \| 'ring' \| 'ball' \| 'bars' \| 'infinity` | `spinner` |
| `color` | Loading indicator color | `primary' \| 'secondary' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error` | `primary` |
| `className` | Additional CSS classes | `string` | `-` |
