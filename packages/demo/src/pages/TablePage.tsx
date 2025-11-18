import { Table, Button } from '@edadma/petalui'
import type { ColumnType } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'

interface User {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const userData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
  { id: '4', name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'active' },
  { id: '5', name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'active' },
  { id: '6', name: 'David Lee', email: 'david@example.com', role: 'User', status: 'active' },
  { id: '7', name: 'Emma Wilson', email: 'emma@example.com', role: 'Editor', status: 'active' },
  { id: '8', name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'inactive' },
  { id: '9', name: 'Grace Taylor', email: 'grace@example.com', role: 'Admin', status: 'active' },
  { id: '10', name: 'Henry Davis', email: 'henry@example.com', role: 'User', status: 'active' },
  { id: '11', name: 'Iris Martin', email: 'iris@example.com', role: 'Editor', status: 'active' },
  { id: '12', name: 'Jack White', email: 'jack@example.com', role: 'User', status: 'inactive' },
  { id: '13', name: 'Kelly Harris', email: 'kelly@example.com', role: 'User', status: 'active' },
  { id: '14', name: 'Leo Clark', email: 'leo@example.com', role: 'Admin', status: 'active' },
  { id: '15', name: 'Mia Robinson', email: 'mia@example.com', role: 'User', status: 'active' },
]

const columns: ColumnType<User>[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    align: 'center',
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
    render: (value: string) => (
      <span className={`badge ${value === 'active' ? 'badge-success' : 'badge-ghost'}`}>
        {value}
      </span>
    ),
  },
  {
    key: 'actions',
    title: 'Actions',
    align: 'center',
    render: () => (
      <div className="flex gap-2 justify-center">
        <Button size="xs" type="ghost">Edit</Button>
        <Button size="xs" type="ghost">Delete</Button>
      </div>
    ),
  },
]

export function TablePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Table</h1>
        <p className="text-base-content/70">
          Feature-rich table component with DaisyUI styling.
        </p>
      </div>

      <ExampleSection
        title="Default Pagination"
        description="Tables have pagination enabled by default with 10 rows per page."
        code={`import React from 'react'
import { Table, Button } from '@edadma/petalui'
import type { ColumnType } from '@edadma/petalui'

interface User {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const userData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
]

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role', align: 'center' },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
    render: (value: string) => (
      <span className={\`badge \${value === 'active' ? 'badge-success' : 'badge-ghost'}\`}>
        {value}
      </span>
    ),
  },
  {
    key: 'actions',
    title: 'Actions',
    align: 'center',
    render: () => (
      <div className="flex gap-2 justify-center">
        <Button size="xs" type="ghost">Edit</Button>
        <Button size="xs" type="ghost">Delete</Button>
      </div>
    ),
  },
]

const App: React.FC = () => <Table<User> columns={columns} dataSource={userData} />

export default App`}
      >
        <Table columns={columns} dataSource={userData} />
      </ExampleSection>

      <ExampleSection
        title="Disable Pagination"
        description="Set pagination to false to show all rows without pagination."
        code={`import React from 'react'
import { Table } from '@edadma/petalui'
import type { ColumnType } from '@edadma/petalui'

interface User {
  id: string
  name: string
  email: string
  role: string
}

const userData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role' },
]

const App: React.FC = () => <Table<User> columns={columns} dataSource={userData} pagination={false} />

export default App`}
      >
        <Table columns={columns.slice(0, 3)} dataSource={userData.slice(0, 5)} pagination={false} />
      </ExampleSection>

      <ExampleSection
        title="Zebra Stripes"
        description="Add alternating row colors with the striped prop."
        code={`import React from 'react'
import { Table } from '@edadma/petalui'
import type { ColumnType } from '@edadma/petalui'

interface User {
  id: string
  name: string
  email: string
  role: string
}

const userData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role' },
]

const App: React.FC = () => <Table<User> columns={columns} dataSource={userData} striped pagination={false} />

export default App`}
      >
        <Table columns={columns.slice(0, 3)} dataSource={userData.slice(0, 5)} striped pagination={false} />
      </ExampleSection>

      <ExampleSection
        title="Size and Border"
        description="Control table size and add borders."
        code={`import React from 'react'
import { Table } from '@edadma/petalui'
import type { ColumnType } from '@edadma/petalui'

interface User {
  id: string
  name: string
  email: string
  role: string
}

const userData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role' },
]

const App: React.FC = () => <Table<User> columns={columns} dataSource={userData} size="sm" bordered pagination={false} />

export default App`}
      >
        <Table columns={columns.slice(0, 3)} dataSource={userData.slice(0, 5)} size="sm" bordered pagination={false} />
      </ExampleSection>

      <ExampleSection
        title="Pinned Rows"
        description="Keep header rows visible while scrolling."
        code={`import React from 'react'
import { Table } from '@edadma/petalui'
import type { ColumnType } from '@edadma/petalui'

interface User {
  id: string
  name: string
  email: string
  role: string
}

const userData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role' },
]

const App: React.FC = () => <Table<User> columns={columns} dataSource={userData} pinRows striped pagination={false} />

export default App`}
      >
        <Table columns={columns.slice(0, 3)} dataSource={userData.slice(0, 5)} pinRows striped pagination={false} />
      </ExampleSection>

      <ExampleSection
        title="Extra Small"
        description="Compact table for dense information display."
        code={`import React from 'react'
import { Table } from '@edadma/petalui'
import type { ColumnType } from '@edadma/petalui'

interface User {
  id: string
  name: string
  email: string
  role: string
}

const userData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

const columns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role' },
]

const App: React.FC = () => <Table<User> columns={columns} dataSource={userData} size="xs" striped bordered pagination={false} />

export default App`}
      >
        <Table columns={columns.slice(0, 3)} dataSource={userData.slice(0, 5)} size="xs" striped bordered pagination={false} />
      </ExampleSection>
    </div>
  )
}
