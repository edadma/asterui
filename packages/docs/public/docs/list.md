# List

**Import:** `import { List } from 'asterui'`

## Examples

### Basic List

Simple list with items.

```tsx
import React from 'react'
import { List } from 'asterui'

const data = [
  'Racing car sprints past',
  'Japanese princess unveiled',
  'Australian walks 100km',
  'Man charged over missing wedding',
]

const App: React.FC = () => (
  <List
    dataSource={data}
    renderItem={(item) => <List.Item>{item}</List.Item>}
  />
)

export default App
```

### With Avatar

List items with avatars and descriptions.

```tsx
import React from 'react'
import { List, Avatar } from 'asterui'

const data = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Carol White',
    email: 'carol@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
]

const App: React.FC = () => (
  <List
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <div className="flex items-center gap-3">
          <Avatar src={item.avatar} alt={item.name} />
          <div>
            <div className="font-semibold">{item.name}</div>
            <div className="text-sm text-base-content/70">{item.email}</div>
          </div>
        </div>
      </List.Item>
    )}
  />
)

export default App
```

### Loading State

List in loading state with skeleton.

```tsx
import React from 'react'
import { List } from 'asterui'

const App: React.FC = () => (
  <List
    dataSource={[]}
    renderItem={(item) => <List.Item>{item}</List.Item>}
    loading
  />
)

export default App
```

### With Pagination

List with pagination controls.

```tsx
import React, { useState } from 'react'
import { List } from 'asterui'

const allData = Array.from({ length: 23 }, (_, i) => \
```

## API

### List

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `dataSource` | Array of data items to render | `T[]` | `-` |
| `header` | List header content | `React.ReactNode` | `-` |
| `footer` | List footer content | `React.ReactNode` | `-` |
| `loading` | Whether the list is in loading state | `boolean` | `false` |
| `pagination` | Pagination configuration | `PaginationConfig \| boolean` | `false` |
| `grid` | Grid layout configuration | `GridConfig` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### List Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Item content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
