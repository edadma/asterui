import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { TreeSelect, Form, Button } from 'asterui'

interface TreeNode {
  key: string
  title: string
  value: string
  children?: TreeNode[]
  disabled?: boolean
}

const basicTreeData: TreeNode[] = [
  {
    key: '0',
    title: 'Parent Node',
    value: 'parent',
    children: [
      {
        key: '0-0',
        title: 'Child Node 1',
        value: 'child1',
        children: [
          { key: '0-0-0', title: 'Leaf 1', value: 'leaf1' },
          { key: '0-0-1', title: 'Leaf 2', value: 'leaf2' },
        ],
      },
      {
        key: '0-1',
        title: 'Child Node 2',
        value: 'child2',
        children: [{ key: '0-1-0', title: 'Leaf 3', value: 'leaf3' }],
      },
    ],
  },
]

const categoriesData: TreeNode[] = [
  {
    key: 'electronics',
    title: 'Electronics',
    value: 'electronics',
    children: [
      {
        key: 'phones',
        title: 'Phones',
        value: 'phones',
        children: [
          { key: 'iphone', title: 'iPhone', value: 'iphone' },
          { key: 'samsung', title: 'Samsung', value: 'samsung' },
          { key: 'pixel', title: 'Pixel', value: 'pixel' },
        ],
      },
      {
        key: 'laptops',
        title: 'Laptops',
        value: 'laptops',
        children: [
          { key: 'macbook', title: 'MacBook', value: 'macbook' },
          { key: 'thinkpad', title: 'ThinkPad', value: 'thinkpad' },
        ],
      },
    ],
  },
  {
    key: 'clothing',
    title: 'Clothing',
    value: 'clothing',
    children: [
      { key: 'shirts', title: 'Shirts', value: 'shirts' },
      { key: 'pants', title: 'Pants', value: 'pants' },
      { key: 'shoes', title: 'Shoes', value: 'shoes' },
    ],
  },
]

function BasicTreeSelect() {
  const [value, setValue] = useState<string | undefined>(undefined)

  return (
    <div className="w-64">
      <TreeSelect
        treeData={basicTreeData}
        value={value}
        onChange={setValue}
        placeholder="Select an item"
        className="w-full"
      />
      <p className="mt-2 text-sm">Selected: {value || 'None'}</p>
    </div>
  )
}

function MultipleTreeSelect() {
  const [value, setValue] = useState<string[]>([])

  return (
    <div className="w-80">
      <TreeSelect
        treeData={categoriesData}
        value={value}
        onChange={setValue}
        placeholder="Select items"
        multiple
        className="w-full"
      />
      <p className="mt-2 text-sm">Selected: {value.join(', ') || 'None'}</p>
    </div>
  )
}

function CheckableTreeSelect() {
  const [value, setValue] = useState<string[]>([])

  return (
    <div className="w-80">
      <TreeSelect
        treeData={categoriesData}
        value={value}
        onChange={setValue}
        placeholder="Check items"
        treeCheckable
        className="w-full"
      />
      <p className="mt-2 text-sm">Checked: {value.join(', ') || 'None'}</p>
    </div>
  )
}

function SearchableTreeSelect() {
  const [value, setValue] = useState<string | undefined>(undefined)

  return (
    <div className="w-64">
      <TreeSelect
        treeData={categoriesData}
        value={value}
        onChange={setValue}
        placeholder="Search and select"
        showSearch
        className="w-full"
      />
    </div>
  )
}

function DisabledItemsTreeSelect() {
  const [value, setValue] = useState<string | undefined>(undefined)

  const treeDataWithDisabled: TreeNode[] = [
    {
      key: '0',
      title: 'Available Parent',
      value: 'parent',
      children: [
        { key: '0-0', title: 'Available Child', value: 'child1' },
        { key: '0-1', title: 'Disabled Child', value: 'child2', disabled: true },
        { key: '0-2', title: 'Another Available', value: 'child3' },
      ],
    },
  ]

  return (
    <div className="w-64">
      <TreeSelect
        treeData={treeDataWithDisabled}
        value={value}
        onChange={setValue}
        placeholder="Select an item"
        className="w-full"
      />
    </div>
  )
}

function FormTreeSelect() {
  const handleSubmit = (values: Record<string, unknown>) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Form onFinish={handleSubmit} className="max-w-md">
      <Form.Item
        name="category"
        label="Category"
        required
        rules={{
          required: 'Please select a category',
        }}
      >
        <TreeSelect treeData={categoriesData} placeholder="Select category" className="w-full" />
      </Form.Item>

      <Form.Item name="tags" label="Tags">
        <TreeSelect
          treeData={categoriesData}
          placeholder="Select multiple tags"
          multiple
          className="w-full"
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" color="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const statefulDemos: Record<string, React.FC> = {
  basic: BasicTreeSelect,
  multiple: MultipleTreeSelect,
  checkable: CheckableTreeSelect,
  searchable: SearchableTreeSelect,
  'disabled-items': DisabledItemsTreeSelect,
  form: FormTreeSelect,
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('.demo-container').forEach((container) => {
    const example = container.dataset.example
    if (example && statefulDemos[example]) {
      const root = createRoot(container)
      const Component = statefulDemos[example]
      root.render(<Component />)
    }
  })
})
