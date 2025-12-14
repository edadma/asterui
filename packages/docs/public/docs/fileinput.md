# FileInput

**Import:** `import { FileInput } from 'asterui'`

## Examples

### Basic FileInput

Simple file input.

```tsx
import React from 'react'
import { FileInput } from 'asterui'

const App: React.FC = () => (
  <FileInput />
)

export default App
```

### Accept Types

File input that accepts only specific file types.

```tsx
import React from 'react'
import { FileInput, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md">
    <div>
      <label className="block text-sm font-medium mb-2">Images only</label>
      <FileInput accept="image/*" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">PDF files only</label>
      <FileInput accept=".pdf" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Images and PDFs</label>
      <FileInput accept="image/*,.pdf" />
    </div>
  </Space>
)

export default App
```

### Multiple Files

Allow selecting multiple files.

```tsx
import React from 'react'
import { FileInput } from 'asterui'

const App: React.FC = () => (
  <FileInput multiple />
)

export default App
```

### Sizes

Different file input sizes.

```tsx
import React from 'react'
import { FileInput, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md">
    <FileInput size="xs" />
    <FileInput size="sm" />
    <FileInput size="md" />
    <FileInput size="lg" />
  </Space>
)

export default App
```

### Colors

Different color variants.

```tsx
import React from 'react'
import { FileInput, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md">
    <FileInput color="primary" />
    <FileInput color="secondary" />
    <FileInput color="accent" />
    <FileInput color="success" />
    <FileInput color="warning" />
    <FileInput color="error" />
  </Space>
)

export default App
```

### Styles

Bordered and ghost styles.

```tsx
import React from 'react'
import { FileInput, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md">
    <FileInput bordered color="primary" />
    <FileInput ghost color="secondary" />
  </Space>
)

export default App
```

## API

### File Input

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `accept` | File types to accept | `string` | `-` |
| `multiple` | Allow multiple file selection | `boolean` | `false` |
| `onChange` | Change handler | `(e: ChangeEvent) => void` | `-` |
| `disabled` | Disable the input | `boolean` | `false` |
| `size` | Input size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `color` | Input color | `primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error` | `-` |
| `bordered` | Show border | `boolean` | `false` |
| `ghost` | Ghost style | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
