import { Descriptions, Button, Badge, Space } from 'asterui'
import { Demo } from './Demo'

export function BasicDemo() {
  const items = [
    { key: 'name', label: 'Name', children: 'John Doe' },
    { key: 'email', label: 'Email', children: 'john@example.com' },
    { key: 'phone', label: 'Phone', children: '+1 234 567 890' },
    { key: 'location', label: 'Location', children: 'San Francisco, CA' },
    { key: 'status', label: 'Status', children: 'Active' },
  ]

  return (
    <Demo>
      <Descriptions items={items} />
    </Demo>
  )
}

export function BorderedDemo() {
  const items = [
    { key: 'product', label: 'Product', children: 'AsterUI Pro' },
    { key: 'price', label: 'Price', children: '$99.00' },
    { key: 'quantity', label: 'Quantity', children: '2' },
    { key: 'total', label: 'Total', children: '$198.00' },
  ]

  return (
    <Demo>
      <Descriptions items={items} bordered title="Order Details" />
    </Demo>
  )
}

export function SizesDemo() {
  const items = [
    { key: 'name', label: 'Name', children: 'Jane Smith' },
    { key: 'role', label: 'Role', children: 'Engineer' },
    { key: 'team', label: 'Team', children: 'Frontend' },
  ]

  return (
    <Demo>
      <Space direction="vertical" size="lg" className="w-full">
        <Descriptions items={items} size="sm" bordered title="Small" />
        <Descriptions items={items} size="md" bordered title="Medium" />
        <Descriptions items={items} size="lg" bordered title="Large" />
      </Space>
    </Demo>
  )
}

export function VerticalDemo() {
  const items = [
    { key: 'created', label: 'Created', children: '2024-01-15 10:30:00' },
    { key: 'updated', label: 'Updated', children: '2024-01-20 14:45:00' },
    { key: 'author', label: 'Author', children: 'Jane Smith' },
  ]

  return (
    <Demo>
      <Descriptions items={items} layout="vertical" bordered />
    </Demo>
  )
}

export function ColumnsDemo() {
  const items = [
    { key: 'name', label: 'Name', children: 'Alice Johnson' },
    { key: 'age', label: 'Age', children: '28' },
    { key: 'gender', label: 'Gender', children: 'Female' },
    { key: 'occupation', label: 'Occupation', children: 'Software Engineer' },
    { key: 'department', label: 'Department', children: 'Engineering' },
    { key: 'start-date', label: 'Start Date', children: '2022-03-15' },
  ]

  return (
    <Demo>
      <Descriptions items={items} column={2} bordered />
    </Demo>
  )
}

export function WithSpanDemo() {
  const items = [
    { key: 'name', label: 'Name', children: 'Product X' },
    { key: 'sku', label: 'SKU', children: 'PRD-12345' },
    { key: 'category', label: 'Category', children: 'Electronics' },
    { key: 'description', label: 'Description', children: 'A detailed product description that spans multiple columns for better readability.', span: 3 },
  ]

  return (
    <Demo>
      <Descriptions items={items} bordered />
    </Demo>
  )
}

export function FilledSpanDemo() {
  const items = [
    { key: 'name', label: 'Name', children: 'John Doe' },
    { key: 'notes', label: 'Notes', children: 'This field fills the remaining space in the row.', span: 'filled' as const },
    { key: 'email', label: 'Email', children: 'john@example.com' },
    { key: 'phone', label: 'Phone', children: '+1 234 567 890' },
    { key: 'address', label: 'Address', children: '123 Main St, San Francisco, CA 94102', span: 'filled' as const },
  ]

  return (
    <Demo>
      <Descriptions items={items} bordered />
    </Demo>
  )
}

export function TitleExtraDemo() {
  const items = [
    { key: 'name', label: 'Name', children: 'John Doe' },
    { key: 'email', label: 'Email', children: 'john@example.com' },
    { key: 'status', label: 'Status', children: <Badge color="success">Active</Badge> },
  ]

  return (
    <Demo>
      <Descriptions
        items={items}
        bordered
        title="User Profile"
        extra={<Button size="sm">Edit</Button>}
      />
    </Demo>
  )
}

export function NoColonDemo() {
  const items = [
    { key: 'field1', label: 'Field One', children: 'Value One' },
    { key: 'field2', label: 'Field Two', children: 'Value Two' },
    { key: 'field3', label: 'Field Three', children: 'Value Three' },
  ]

  return (
    <Demo>
      <Descriptions items={items} colon={false} bordered />
    </Demo>
  )
}

export function CustomStylesDemo() {
  const items = [
    { key: 'name', label: 'Name', children: 'Jane Doe' },
    { key: 'highlight', label: 'Highlighted', children: 'This item has custom styles', labelClassName: 'text-primary', contentClassName: 'text-accent font-bold' },
    { key: 'status', label: 'Status', children: 'Active' },
  ]

  return (
    <Demo>
      <Descriptions
        items={items}
        bordered
        styles={{
          label: { backgroundColor: 'oklch(var(--b2))' },
          content: { backgroundColor: 'oklch(var(--b1))' },
        }}
        classNames={{
          title: 'text-primary',
        }}
        title="Custom Styled"
      />
    </Demo>
  )
}

export function CompoundDemo() {
  return (
    <Demo>
      <Descriptions bordered title="Using Compound Pattern">
        <Descriptions.Item key="name" label="Name">John Doe</Descriptions.Item>
        <Descriptions.Item key="email" label="Email">john@example.com</Descriptions.Item>
        <Descriptions.Item key="phone" label="Phone">+1 234 567 890</Descriptions.Item>
        <Descriptions.Item key="address" label="Address" span={3}>
          123 Main Street, San Francisco, CA 94102
        </Descriptions.Item>
      </Descriptions>
    </Demo>
  )
}

export function ResponsiveDemo() {
  const items = [
    { key: 'field1', label: 'Field 1', children: 'Value 1' },
    { key: 'field2', label: 'Field 2', children: 'Value 2' },
    { key: 'field3', label: 'Field 3', children: 'Value 3' },
    { key: 'field4', label: 'Field 4', children: 'Value 4' },
    { key: 'field5', label: 'Field 5', children: 'Value 5' },
    { key: 'field6', label: 'Field 6', children: 'Value 6' },
  ]

  return (
    <Demo>
      <Descriptions
        items={items}
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        title="Resize window to see columns change"
      />
    </Demo>
  )
}
