# TreeSelect

Dropdown tree selection for hierarchical data.

**Import:** `import { TreeSelect } from 'asterui'`

## Examples

### Basic

```tsx
import React, { useState } from 'react'
import { TreeSelect } from 'asterui'

const treeData = [
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
      },
    ],
  },
]

const App: React.FC = () => {
  const [value, setValue] = useState(undefined)

  return (
    <TreeSelect
      treeData={treeData}
      value={value}
      onChange={setValue}
      placeholder="Select an item"
      className="w-64"
    />
  )
}

export default App
```

### Multiple

```tsx
import React, { useState } from 'react'
import { TreeSelect } from 'asterui'

const App: React.FC = () => {
  const [value, setValue] = useState([])

  return (
    <TreeSelect
      treeData={categoriesData}
      value={value}
      onChange={setValue}
      placeholder="Select items"
      multiple
      className="w-80"
    />
  )
}

export default App
```

### Checkable

```tsx
import React, { useState } from 'react'
import { TreeSelect } from 'asterui'

const App: React.FC = () => {
  const [value, setValue] = useState([])

  return (
    <TreeSelect
      treeData={categoriesData}
      value={value}
      onChange={setValue}
      placeholder="Check items"
      treeCheckable
      className="w-80"
    />
  )
}

export default App
```

### Searchable

```tsx
import React, { useState } from 'react'
import { TreeSelect } from 'asterui'

const App: React.FC = () => {
  const [value, setValue] = useState(undefined)

  return (
    <TreeSelect
      treeData={categoriesData}
      value={value}
      onChange={setValue}
      placeholder="Search and select"
      showSearch
      className="w-64"
    />
  )
}

export default App
```

### Form

```tsx
import React from 'react'
import { TreeSelect, Form, Button } from 'asterui'

const App: React.FC = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="category"
        label="Category"
        required
        rules={{
          required: 'Please select a category',
        }}
      >
        <TreeSelect
          treeData={categoriesData}
          placeholder="Select category"
        />
      </Form.Item>

      <Form.Item name="tags" label="Tags">
        <TreeSelect
          treeData={categoriesData}
          placeholder="Select multiple tags"
          multiple
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
```

## API

### Tree Select

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `treeData` | Tree data structure | `TreeNode[]` | `[]` |
| `value` | Selected value(s) | `string \| string[]` | `-` |
| `onChange` | Callback when selection changes | `(value: string \| string[]) => void` | `-` |
| `placeholder` | Placeholder text | `string` | `Select...` |
| `multiple` | Allow multiple selection | `boolean` | `false` |
| `treeCheckable` | Show checkbox for tree nodes | `boolean` | `false` |
| `showSearch` | Enable search functionality | `boolean` | `false` |
| `disabled` | Disable the select | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
