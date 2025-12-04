# Table

Feature-rich table component for displaying tabular data.

**Import:** `import { Table } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Table } from 'asterui'
import type { ColumnType } from 'asterui'

interface User {
  id: string
  name: string
  email: string
  role: string
}

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role' },
]

const data: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} />
)

export default App
```

### Custom Render

```tsx
import React from 'react'
import { Table, Tag, Button } from 'asterui'
import type { ColumnType } from 'asterui'

interface User {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive'
}

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    render: (value: string) => (
      <Tag color={value === 'active' ? 'success' : 'ghost'}>{value}</Tag>
    ),
  },
  {
    key: 'actions',
    title: 'Actions',
    render: () => (
      <div className="flex gap-2">
        <Button size="xs">Edit</Button>
      </div>
    ),
  },
]

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={false} />
)

export default App
```

### Sorting

```tsx
import React from 'react'
import { Table } from 'asterui'
import type { ColumnType } from 'asterui'

interface User {
  id: string
  name: string
  age: number
  email: string
}

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sorter: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sorter: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sorter: true },
]

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={false} />
)

export default App
```

### Filtering

```tsx
import React from 'react'
import { Table } from 'asterui'
import type { ColumnType } from 'asterui'

interface User {
  id: string
  name: string
  role: string
  status: 'active' | 'inactive'
}

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    filters: [
      { text: 'Admin', value: 'Admin' },
      { text: 'User', value: 'User' },
      { text: 'Editor', value: 'Editor' },
    ],
    onFilter: (value, record) => record.role === value,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    filters: [
      { text: 'Active', value: 'active' },
      { text: 'Inactive', value: 'inactive' },
    ],
    onFilter: (value, record) => record.status === value,
  },
]

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={false} />
)

export default App
```

### Selection

```tsx
import React, { useState } from 'react'
import { Table } from 'asterui'
import type { ColumnType, RowSelection } from 'asterui'

const App: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([])

  const rowSelection: RowSelection<User> = {
    selectedRowKeys: selectedKeys,
    onChange: (keys, rows) => {
      setSelectedKeys(keys)
      console.log('Selected:', keys, rows)
    },
  }

  return (
    <div className="space-y-4">
      <div className="text-sm">Selected: {selectedKeys.join(', ') || 'None'}</div>
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        pagination={false}
      />
    </div>
  )
}

export default App
```

## API

### Table

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `columns` | Table column configuration | `ColumnType<T>[]` | `-` |
| `dataSource` | Data to display in table | `T[]` | `-` |
| `rowKey` | Unique key for each row | `string \| ((record: T) => string)` | `id` |
| `loading` | Loading state | `boolean` | `false` |
| `size` | Table size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `bordered` | Add border around table | `boolean` | `false` |
| `hoverable` | Highlight row on hover | `boolean` | `true` |
| `striped` | Alternating row colors (zebra stripes) | `boolean` | `false` |
| `pinRows` | Pin header rows while scrolling | `boolean` | `false` |
| `pinCols` | Pin columns while scrolling | `boolean` | `false` |
| `pagination` | Pagination configuration or false to disable | `false \| PaginationConfig` | `{ pageSize: 10` |
| `className` | Additional CSS classes | `string` | `-` |
| `rowSelection` | Row selection configuration | `RowSelection<T>` | `-` |

### Column Type

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `key` | Unique key for column | `string` | `-` |
| `title` | Column header title | `string` | `-` |
| `dataIndex` | Field name in data record | `string` | `-` |
| `width` | Column width | `string \| number` | `-` |
| `align` | Text alignment | `left' \| 'center' \| 'right` | `-` |
| `fixed` | Fix column to left or right | `left' \| 'right` | `-` |
| `filters` | Filter dropdown configuration | `FilterConfig[]` | `-` |

### Row Selection

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `type` | Selection type | `checkbox' \| 'radio` | `checkbox` |
| `selectedRowKeys` | Controlled selected row keys | `React.Key[]` | `-` |
| `getCheckboxProps` | Function to customize checkbox props | `(record: T) => { disabled?: boolean; [key: string]: any` | `-` |
