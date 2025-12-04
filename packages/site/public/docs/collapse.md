# Collapse

**Import:** `import { Collapse } from 'asterui'`

## Examples

### Basic Collapse

Simple collapsible panels.

```tsx
import React from 'react'
import { Collapse } from 'asterui'

const items = [
  {
    key: '1',
    label: 'What is AsterUI?',
    children: 'AsterUI is a React component library built on DaisyUI and Tailwind CSS.',
  },
  {
    key: '2',
    label: 'How do I install it?',
    children: 'Run npm install asterui to get started.',
  },
  {
    key: '3',
    label: 'Is it free?',
    children: 'Yes, AsterUI is open source and free to use.',
  },
]

const App: React.FC = () => (
  <Collapse items={items} defaultActiveKey={['1']} />
)

export default App
```

### Accordion

Only one panel can be open at a time.

```tsx
import React from 'react'
import { Collapse } from 'asterui'

const items = [
  {
    key: '1',
    label: 'Section 1',
    children: 'Content for section 1. Click another section to close this one.',
  },
  {
    key: '2',
    label: 'Section 2',
    children: 'Content for section 2. Only one section can be open.',
  },
  {
    key: '3',
    label: 'Section 3',
    children: 'Content for section 3. This is accordion behavior.',
  },
]

const App: React.FC = () => (
  <Collapse items={items} accordion defaultActiveKey="1" />
)

export default App
```

### Borderless

Collapse without borders.

```tsx
import React from 'react'
import { Collapse } from 'asterui'

const items = [
  {
    key: '1',
    label: 'Panel 1',
    children: 'Content without borders for a cleaner look.',
  },
  {
    key: '2',
    label: 'Panel 2',
    children: 'Great for FAQ sections or sidebars.',
  },
]

const App: React.FC = () => (
  <Collapse items={items} bordered={false} />
)

export default App
```

### Nested Content

Collapse with rich nested content.

```tsx
import React from 'react'
import { Collapse, Button, Space } from 'asterui'

const items = [
  {
    key: '1',
    label: 'Getting Started',
    children: (
      <Space direction="vertical" size="sm">
        <p>Follow these steps to get started:</p>
        <ol className="list-decimal list-inside">
          <li>Install the package</li>
          <li>Import components</li>
          <li>Start building</li>
        </ol>
        <Button type="primary" size="sm">Read Docs</Button>
      </Space>
    ),
  },
  {
    key: '2',
    label: 'Advanced Usage',
    children: 'Learn about advanced patterns and customization options.',
  },
]

const App: React.FC = () => (
  <Collapse items={items} />
)

export default App
```

## API

### Collapse

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `items` | Collapse panel items | `CollapseItem[]` | `-` |
| `activeKey` | Controlled active panel keys | `string \| string[]` | `-` |
| `defaultActiveKey` | Initial active panel keys | `string \| string[]` | `-` |
| `onChange` | Change handler | `(key: string \| string[]) => void` | `-` |
| `accordion` | Only one panel open at a time | `boolean` | `false` |
| `bordered` | Show border around panels | `boolean` | `true` |
| `className` | Additional CSS classes | `string` | `-` |
