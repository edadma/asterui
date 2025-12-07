import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Table, Button, Tag } from 'asterui';
import type { ColumnType } from 'asterui';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  age?: number;
}

const userData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', age: 32 },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', age: 28 },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive', age: 45 },
  { id: '4', name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'active', age: 35 },
  { id: '5', name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'active', age: 29 },
  { id: '6', name: 'David Lee', email: 'david@example.com', role: 'User', status: 'active', age: 41 },
  { id: '7', name: 'Emma Wilson', email: 'emma@example.com', role: 'Editor', status: 'active', age: 31 },
  { id: '8', name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'inactive', age: 38 },
  { id: '9', name: 'Grace Taylor', email: 'grace@example.com', role: 'Admin', status: 'active', age: 42 },
  { id: '10', name: 'Henry Davis', email: 'henry@example.com', role: 'User', status: 'active', age: 27 },
  { id: '11', name: 'Iris Martin', email: 'iris@example.com', role: 'Editor', status: 'active', age: 33 },
  { id: '12', name: 'Jack White', email: 'jack@example.com', role: 'User', status: 'inactive', age: 36 },
];

const basicColumns: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role' },
];

const columnsWithRender: ColumnType<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', width: 150 },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role', align: 'center' },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
    render: (value: string) => (
      <Tag color={value === 'active' ? 'success' : 'ghost'} size="sm">
        {value}
      </Tag>
    ),
  },
  {
    key: 'actions',
    title: 'Actions',
    align: 'right',
    render: () => (
      <div className="flex gap-2 justify-end">
        <Button size="xs" variant="ghost">
          Edit
        </Button>
        <Button size="xs" variant="ghost">
          Delete
        </Button>
      </div>
    ),
  },
];

const demos: Record<string, React.ReactNode> = {
  basic: <Table columns={basicColumns} dataSource={userData.slice(0, 5)} />,
  'custom-render': (
    <Table columns={columnsWithRender} dataSource={userData.slice(0, 4)} pagination={false} />
  ),
  striped: (
    <Table columns={basicColumns} dataSource={userData.slice(0, 5)} striped pagination={false} />
  ),
  bordered: (
    <Table columns={basicColumns} dataSource={userData.slice(0, 5)} bordered pagination={false} />
  ),
  'size-xs': (
    <Table
      columns={basicColumns}
      dataSource={userData.slice(0, 5)}
      size="xs"
      striped
      bordered
      pagination={false}
    />
  ),
  'size-lg': (
    <Table columns={basicColumns} dataSource={userData.slice(0, 4)} size="lg" pagination={false} />
  ),
  empty: <Table columns={basicColumns} dataSource={[]} pagination={false} />,
  'no-hover': (
    <Table
      columns={basicColumns}
      dataSource={userData.slice(0, 4)}
      hoverable={false}
      pagination={false}
    />
  ),
  pagination: <Table columns={basicColumns} dataSource={userData} pagination={{ pageSize: 5 }} />,
  pinned: (
    <div className="max-h-64 overflow-auto border border-base-content/10 rounded-lg">
      <Table columns={basicColumns} dataSource={userData} pinRows striped pagination={false} />
    </div>
  ),
  sorting: (
    <Table
      columns={[
        { key: 'name', title: 'Name', dataIndex: 'name', sorter: true },
        { key: 'age', title: 'Age', dataIndex: 'age', sorter: true },
        { key: 'email', title: 'Email', dataIndex: 'email', sorter: true },
      ]}
      dataSource={userData.slice(0, 5)}
      pagination={false}
    />
  ),
  filtering: (
    <Table
      columns={[
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
      ]}
      dataSource={userData.slice(0, 6)}
      pagination={false}
    />
  ),
  complete: (
    <Table
      columns={columnsWithRender}
      dataSource={userData}
      size="sm"
      striped
      bordered
      pagination={{ pageSize: 5 }}
    />
  ),
};

function LoadingDemo() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-4">
      <Button size="sm" onClick={() => setIsLoading(!isLoading)}>
        {isLoading ? 'Hide' : 'Show'} Loading
      </Button>
      <Table columns={basicColumns} dataSource={userData.slice(0, 5)} loading={isLoading} />
    </div>
  );
}

function RowClickDemo() {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {selectedRow && <div className="text-sm">Selected: {selectedRow}</div>}
      <Table
        columns={basicColumns}
        dataSource={userData.slice(0, 5)}
        pagination={false}
        onRow={(record) => ({
          onClick: () => setSelectedRow(record.id),
          className: selectedRow === record.id ? 'bg-primary/10' : '',
          style: { cursor: 'pointer' },
        })}
      />
    </div>
  );
}

function SelectionDemo() {
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

  return (
    <div className="space-y-4">
      <div className="text-sm">Selected: {selectedKeys.join(', ') || 'None'}</div>
      <Table
        columns={basicColumns}
        dataSource={userData.slice(0, 5)}
        rowSelection={{
          selectedRowKeys: selectedKeys,
          onChange: (keys) => setSelectedKeys(keys),
        }}
        pagination={false}
      />
    </div>
  );
}

const statefulDemos: Record<string, React.FC> = {
  loading: LoadingDemo,
  'row-click': RowClickDemo,
  selection: SelectionDemo,
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example) {
    const root = createRoot(container);
    const StatefulComponent = statefulDemos[example];
    if (StatefulComponent) {
      root.render(<StatefulComponent />);
    } else if (demos[example]) {
      root.render(<>{demos[example]}</>);
    }
  }
});
