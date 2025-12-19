# Descriptions

**Import:** `import { Descriptions } from 'asterui'`

## Examples

### Basic Descriptions

Simple key-value display.

```tsx
import React from 'react'
import { Descriptions } from 'asterui'

const items = [
  { label: 'Name', children: 'John Doe' },
  { label: 'Email', children: 'john@example.com' },
  { label: 'Phone', children: '+1 234 567 890' },
  { label: 'Location', children: 'San Francisco, CA' },
  { label: 'Status', children: 'Active' },
]

const App: React.FC = () => (
  <Descriptions items={items} />
)

export default App
```

### Bordered

Descriptions with borders.

```tsx
import React from 'react'
import { Descriptions } from 'asterui'

const items = [
  { label: 'Product', children: 'AsterUI Pro' },
  { label: 'Price', children: '$99.00' },
  { label: 'Quantity', children: '2' },
  { label: 'Total', children: '$198.00' },
]

const App: React.FC = () => (
  <Descriptions items={items} bordered title="Order Details" />
)

export default App
```

### Vertical Layout

Vertical label and content layout.

```tsx
import React from 'react'
import { Descriptions } from 'asterui'

const items = [
  { label: 'Created', children: '2024-01-15 10:30:00' },
  { label: 'Updated', children: '2024-01-20 14:45:00' },
  { label: 'Author', children: 'Jane Smith' },
]

const App: React.FC = () => (
  <Descriptions items={items} layout="vertical" />
)

export default App
```

### Custom Columns

Control the number of columns.

```tsx
import React from 'react'
import { Descriptions } from 'asterui'

const items = [
  { label: 'Name', children: 'Alice Johnson' },
  { label: 'Age', children: '28' },
  { label: 'Gender', children: 'Female' },
  { label: 'Occupation', children: 'Software Engineer' },
  { label: 'Department', children: 'Engineering' },
  { label: 'Start Date', children: '2022-03-15' },
]

const App: React.FC = () => (
  <Descriptions items={items} column={2} bordered />
)

export default App
```

### With Column Span

Items spanning multiple columns.

```tsx
import React from 'react'
import { Descriptions } from 'asterui'

const items = [
  { label: 'Name', children: 'Product X' },
  { label: 'SKU', children: 'PRD-12345' },
  { label: 'Category', children: 'Electronics' },
  { label: 'Description', children: 'A detailed product description that spans multiple columns for better readability.', span: 3 },
]

const App: React.FC = () => (
  <Descriptions items={items} bordered />
)

export default App
```

## API

### Descriptions

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `items` | Description items | `DescriptionItem[]` | `-` |
| `title` | Title of the descriptions block | `React.ReactNode` | `-` |
| `column` | Number of columns | `number` | `3` |
| `bordered` | Show borders | `boolean` | `false` |
| `layout` | Layout direction | `horizontal' \| 'vertical` | `horizontal` |
| `size` | Size of the descriptions | `sm' \| 'md' \| 'lg` | `md` |
| `className` | Additional CSS classes | `string` | `-` |
