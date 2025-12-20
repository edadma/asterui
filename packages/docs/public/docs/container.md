# Container

Centered content container with configurable max-width for page layouts.

**Import:** `import { Container } from 'asterui'`

## Examples

### Basic Usage

Container provides centered content with max-width and responsive padding.

```tsx
import React from 'react'
import { Container } from 'asterui'

const App: React.FC = () => (
  <Container>
    <h1>Page Content</h1>
    <p>Content is centered with max-width constraint.</p>
  </Container>
)

export default App
```

### Page Layout

Typical usage for page content.

```tsx
import React from 'react'
import { Container, Space } from 'asterui'

const App: React.FC = () => (
  <Container size="lg">
    <Space direction="vertical" size="lg">
      <header>
        <h1 className="text-3xl font-bold">Page Title</h1>
        <p className="text-base-content/70">Description</p>
      </header>
      <main className="bg-base-200 p-6 rounded-lg">
        <p>Main content area</p>
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
| `size` | Max width size | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `'xl'` |
| `centered` | Center container horizontally | `boolean` | `true` |
| `padding` | Add horizontal padding | `boolean` | `true` |
| `className` | Additional CSS classes | `string` | `-` |

## Size Reference

| Size | Tailwind Class | Width |
|------|----------------|-------|
| sm | max-w-screen-sm | 640px |
| md | max-w-screen-md | 768px |
| lg | max-w-screen-lg | 1024px |
| xl | max-w-screen-xl | 1280px |
| 2xl | max-w-screen-2xl | 1536px |
| full | max-w-full | 100% |
