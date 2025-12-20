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
import { Table, Tag, Button, Space } from 'asterui'
import type { ColumnType } from 'asterui'

interface User {
  id: string
  name: string
  status: 'active' | 'inactive'
}

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    render: (value) => (
      <Tag color={value === 'active' ? 'success' : 'ghost'}>{String(value)}</Tag>
    ),
  },
  {
    key: 'actions',
    title: 'Actions',
    render: () => (
      <Space size="xs">
        <Button size="xs">Edit</Button>
      </Space>
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

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sorter: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sorter: true, defaultSortOrder: 'ascend' },
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

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    filters: [
      { text: 'Admin', value: 'Admin' },
      { text: 'User', value: 'User' },
    ],
    onFilter: (value, record) => record.role === value,
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
    onChange: (keys) => setSelectedKeys(keys),
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowSelection={rowSelection}
      pagination={false}
    />
  )
}

export default App
```

### Expandable Rows

```tsx
import React from 'react'
import { Table } from 'asterui'
import type { ColumnType, ExpandableConfig } from 'asterui'

const expandable: ExpandableConfig<User> = {
  expandedRowRender: (record) => (
    <p>Description: {record.description}</p>
  ),
  rowExpandable: (record) => record.status === 'active',
}

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    expandable={expandable}
    pagination={false}
  />
)

export default App
```

### Advanced Pagination

```tsx
import React from 'react'
import { Table } from 'asterui'

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 10,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    }}
  />
)

export default App
```

## API

### Table

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `columns` | Table column configuration | `ColumnType<T>[]` | `-` |
| `dataSource` | Data to display in table | `T[]` | `-` |
| `rowKey` | Unique key for each row | `keyof T \| ((record: T) => string)` | `'id'` |
| `loading` | Loading state | `boolean` | `false` |
| `size` | Table size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `bordered` | Add border around table | `boolean` | `false` |
| `hoverable` | Highlight row on hover | `boolean` | `true` |
| `striped` | Alternating row colors (zebra stripes) | `boolean` | `false` |
| `pinRows` | Pin header rows while scrolling | `boolean` | `false` |
| `pinCols` | Pin columns while scrolling | `boolean` | `false` |
| `pagination` | Pagination configuration or false to disable | `false \| PaginationConfig` | `{ pageSize: 10 }` |
| `rowSelection` | Row selection configuration | `RowSelection<T>` | `-` |
| `expandable` | Expandable row configuration | `ExpandableConfig<T>` | `-` |
| `scroll` | Scroll configuration for fixed dimensions | `ScrollConfig` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `onRow` | Row event handlers | `(record: T, index: number) => HTMLAttributes` | `-` |
| `onChange` | Unified callback for pagination, sorting, and filtering | `(pagination, filters, sorter, extra) => void` | `-` |
| `onSortChange` | Callback when sort changes | `(sorter: SorterResult<T>) => void` | `-` |
| `onFilterChange` | Callback when filter changes | `(filters) => void` | `-` |
| `locale` | Localization config | `{ emptyText?, filterConfirm?, filterReset?, selectAll? }` | `-` |
| `data-testid` | Test ID for the component | `string` | `'table'` |
| `aria-label` | Accessible label for the table | `string` | `-` |

### ColumnType

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `key` | Unique key for column | `string` | `-` |
| `title` | Column header title | `ReactNode` | `-` |
| `dataIndex` | Field name in data record | `keyof T` | `-` |
| `render` | Custom render function | `(value, record, index) => ReactNode` | `-` |
| `width` | Column width | `string \| number` | `-` |
| `align` | Text alignment | `'left' \| 'center' \| 'right'` | `'left'` |
| `fixed` | Fix column to left or right | `'left' \| 'right'` | `-` |
| `sorter` | Enable sorting or custom sort function | `boolean \| ((a: T, b: T) => number)` | `-` |
| `sortOrder` | Controlled sort order | `'ascend' \| 'descend' \| null` | `-` |
| `defaultSortOrder` | Default sort order | `'ascend' \| 'descend'` | `-` |
| `filters` | Filter dropdown configuration | `FilterConfig[]` | `-` |
| `filteredValue` | Controlled filtered values | `(string \| number \| boolean)[]` | `-` |
| `defaultFilteredValue` | Default filtered values | `(string \| number \| boolean)[]` | `-` |
| `onFilter` | Filter function | `(value, record) => boolean` | `-` |
| `ellipsis` | Truncate text with ellipsis | `boolean` | `false` |
| `hidden` | Hide column | `boolean` | `false` |

### RowSelection

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `type` | Selection type | `'checkbox' \| 'radio'` | `'checkbox'` |
| `selectedRowKeys` | Controlled selected row keys | `React.Key[]` | `-` |
| `onChange` | Callback when selection changes | `(selectedRowKeys, selectedRows) => void` | `-` |
| `getCheckboxProps` | Function to customize checkbox props | `(record) => { disabled?, name? }` | `-` |

### ExpandableConfig

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `expandedRowRender` | Render function for expanded content | `(record, index, expanded) => ReactNode` | `-` |
| `expandedRowKeys` | Controlled expanded row keys | `React.Key[]` | `-` |
| `defaultExpandedRowKeys` | Default expanded row keys | `React.Key[]` | `-` |
| `rowExpandable` | Function to determine if row is expandable | `(record) => boolean` | `-` |
| `onExpand` | Callback when expand state changes | `(expanded, record) => void` | `-` |
| `onExpandedRowsChange` | Callback when expanded keys change | `(expandedKeys) => void` | `-` |
| `expandRowByClick` | Expand row on row click | `boolean` | `false` |
| `expandIcon` | Custom expand icon | `(props) => ReactNode` | `-` |

### PaginationConfig

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `current` | Current page number | `number` | `1` |
| `pageSize` | Number of items per page | `number` | `10` |
| `total` | Total number of items | `number` | `-` |
| `showSizeChanger` | Show page size dropdown | `boolean` | `false` |
| `showQuickJumper` | Show quick page jumper input | `boolean` | `false` |
| `showTotal` | Function to render total text | `(total, range) => ReactNode` | `-` |
| `pageSizeOptions` | Page size options | `number[]` | `[10, 20, 50, 100]` |
| `position` | Pagination position | `'topLeft' \| 'topCenter' \| ... \| 'bottomRight'` | `'bottomRight'` |
| `onChange` | Callback when page changes | `(page, pageSize) => void` | `-` |
| `onShowSizeChange` | Callback when page size changes | `(current, size) => void` | `-` |

## Accessibility

The Table component follows accessibility best practices:

- Uses semantic `<table>` with `role="grid"`
- Column headers include `role="columnheader"` and `aria-sort` for sortable columns
- Row selection checkboxes have proper `aria-label`
- Sort controls are keyboard accessible (Enter/Space to toggle)
- Filter dropdowns support Escape key to close
- Pagination buttons include `aria-label` and `aria-current`
- Expand/collapse buttons include `aria-expanded`
- Indeterminate checkbox state for partial selection

## Testing

The component exposes `data-testid` attributes:

| Element | Test ID |
|---------|---------|
| Root wrapper | `{baseTestId}` |
| Table element | `{baseTestId}-table` |
| Column headers | `{baseTestId}-header-{columnKey}` |
| Table rows | `{baseTestId}-row-{index}` |
| Table cells | `{baseTestId}-row-{index}-{columnKey}` |
| Row selection | `{baseTestId}-row-{index}-select` |
| Expanded row | `{baseTestId}-row-{index}-expanded` |
| Select all | `{baseTestId}-select-all` |
| Pagination | `{baseTestId}-pagination` |
| Filter button | `{baseTestId}-{columnKey}-filter-button` |
| Empty state | `{baseTestId}-empty` |
| Loading state | `{baseTestId}-loading` |

Data attributes:
- `data-state="selected"` - On selected rows
