# Container

**Import:** `import { Container } from 'asterui'`

## Examples

### Basic Container

Centered container with max-width.

```tsx
import React from 'react'
import { Container } from 'asterui'

const App: React.FC = () => (
  <Container>
    <div className="bg-base-200 p-4 rounded-lg">
      Content is centered with a max-width constraint.
    </div>
  </Container>
)

export default App
```

### Container Sizes

Different max-width sizes.

```tsx
import React from 'react'
import { Container, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md">
    <Container size="sm">
      <div className="bg-primary/20 p-4 rounded-lg text-center">
        Small (max-w-screen-sm)
      </div>
    </Container>
    <Container size="md">
      <div className="bg-secondary/20 p-4 rounded-lg text-center">
        Medium (max-w-screen-md)
      </div>
    </Container>
    <Container size="lg">
      <div className="bg-accent/20 p-4 rounded-lg text-center">
        Large (max-w-screen-lg)
      </div>
    </Container>
    <Container size="xl">
      <div className="bg-info/20 p-4 rounded-lg text-center">
        XL (max-w-screen-xl)
      </div>
    </Container>
  </Space>
)

export default App
```

### Without Padding

Container without horizontal padding.

```tsx
import React from 'react'
import { Container } from 'asterui'

const App: React.FC = () => (
  <Container padding={false}>
    <div className="bg-base-200 p-4">
      Full-width content without padding.
    </div>
  </Container>
)

export default App
```

### Page Layout Example

Container used for page content layout.

```tsx
import React from 'react'
import { Container, Space } from 'asterui'

const App: React.FC = () => (
  <Container size="lg">
    <Space direction="vertical" size="lg">
      <header>
        <h1 className="text-3xl font-bold">Page Title</h1>
        <p className="text-base-content/70">Page description goes here.</p>
      </header>
      <main className="bg-base-200 p-6 rounded-lg">
        <p>Main content area with consistent max-width.</p>
      </main>
    </Space>
  </Container>
)

export default App
```

## API

### Container

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Container content | `React.ReactNode` | `-` |
| `size` | Max width size | `sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full` | `xl` |
| `centered` | Center content horizontally | `boolean` | `true` |
| `padding` | Add horizontal padding | `boolean` | `true` |
| `className` | Additional CSS classes | `string` | `-` |
