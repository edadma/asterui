# Tree

Hierarchical tree structure for displaying nested data.

**Import:** `import { Tree } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Tree } from 'asterui'

const treeData = [
  {
    key: '0',
    title: 'Parent Node',
    children: [
      {
        key: '0-0',
        title: 'Child Node 1',
        children: [
          { key: '0-0-0', title: 'Leaf Node 1' },
          { key: '0-0-1', title: 'Leaf Node 2' },
        ],
      },
      {
        key: '0-1',
        title: 'Child Node 2',
        children: [{ key: '0-1-0', title: 'Leaf Node 3' }],
      },
    ],
  },
]

const App: React.FC = () => (
  <Tree treeData={treeData} defaultExpandedKeys={['0', '0-0']} />
)

export default App
```

### Checkable

```tsx
import React, { useState } from 'react'
import { Tree } from 'asterui'

const App: React.FC = () => {
  const [checkedKeys, setCheckedKeys] = useState([])

  return (
    <div>
      <Tree
        treeData={treeData}
        checkable
        checkedKeys={checkedKeys}
        onCheck={setCheckedKeys}
        defaultExpandedKeys={['0', '0-0', '0-1']}
      />
      <p>Checked: {checkedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

export default App
```

### Selectable

```tsx
import React, { useState } from 'react'
import { Tree } from 'asterui'

const App: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState([])

  return (
    <div>
      <Tree
        treeData={treeData}
        selectable
        selectedKeys={selectedKeys}
        onSelect={setSelectedKeys}
        defaultExpandedKeys={['0', '0-0', '0-1']}
      />
      <p>Selected: {selectedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

export default App
```

### Show Line

```tsx
import React from 'react'
import { Tree } from 'asterui'

const fileTreeData = [
  {
    key: 'src',
    title: 'src',
    children: [
      {
        key: 'components',
        title: 'components',
        children: [
          { key: 'Button.tsx', title: 'Button.tsx' },
          { key: 'Input.tsx', title: 'Input.tsx' },
        ],
      },
      { key: 'App.tsx', title: 'App.tsx' },
    ],
  },
]

const App: React.FC = () => (
  <Tree
    treeData={fileTreeData}
    showLine
    defaultExpandedKeys={['src', 'components']}
  />
)

export default App
```

## API

### Tree

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `treeData` | Tree data structure | `TreeNode[]` | `[]` |
| `checkable` | Show checkbox for each node | `boolean` | `false` |
| `checkedKeys` | Controlled checked keys | `string[]` | `-` |
| `onCheck` | Callback when node is checked | `(keys: string[]) => void` | `-` |
| `selectable` | Enable node selection | `boolean` | `false` |
| `selectedKeys` | Controlled selected keys | `string[]` | `-` |
| `onSelect` | Callback when node is selected | `(keys: string[]) => void` | `-` |
| `multiple` | Allow multiple selection | `boolean` | `false` |
| `expandedKeys` | Controlled expanded keys | `string[]` | `-` |
| `defaultExpandedKeys` | Default expanded keys | `string[]` | `[]` |
| `onExpand` | Callback when node is expanded | `(keys: string[]) => void` | `-` |
| `showLine` | Show connecting lines | `boolean` | `false` |
| `showIcon` | Show node icons | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |

### Tree Node

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `key` | Unique identifier | `string` | `-` |
| `title` | Display title | `string` | `-` |
| `children` | Child nodes | `TreeNode[]` | `-` |
| `icon` | Custom icon | `React.ReactNode` | `-` |
| `disabled` | Disable the node | `boolean` | `false` |
