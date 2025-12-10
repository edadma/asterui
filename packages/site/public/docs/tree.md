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

const treeData = [
  {
    key: '0',
    title: 'Parent Node',
    children: [
      { key: '0-0', title: 'Child Node 1' },
      { key: '0-1', title: 'Child Node 2' },
    ],
  },
]

const App: React.FC = () => {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])

  return (
    <div>
      <Tree
        treeData={treeData}
        checkable
        checkedKeys={checkedKeys}
        onCheck={setCheckedKeys}
        defaultExpandedKeys={['0']}
      />
      <p>Checked: {checkedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

export default App
```

### Compound Pattern

```tsx
import React from 'react'
import { Tree } from 'asterui'

const App: React.FC = () => (
  <Tree defaultExpandedKeys={['parent']}>
    <Tree.Node key="parent" title="Parent Node">
      <Tree.Node key="child-1" title="Child Node 1">
        <Tree.Node key="leaf-1" title="Leaf Node 1" />
        <Tree.Node key="leaf-2" title="Leaf Node 2" />
      </Tree.Node>
      <Tree.Node key="child-2" title="Child Node 2" />
    </Tree.Node>
  </Tree>
)

export default App
```

### Checkbox Colors (DaisyUI)

```tsx
import React from 'react'
import { Tree } from 'asterui'

const App: React.FC = () => (
  <Tree
    treeData={treeData}
    checkable
    checkboxColor="success"
    checkboxSize="md"
    defaultExpandedKeys={['0']}
  />
)

export default App
```

### Async Loading

```tsx
import React, { useState } from 'react'
import { Tree, TreeDataNode } from 'asterui'

const App: React.FC = () => {
  const [treeData, setTreeData] = useState<TreeDataNode[]>([
    { key: '0', title: 'Expand to load' },
    { key: '1', title: 'Expand to load' },
  ])

  const loadData = async (node: TreeDataNode) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    setTreeData(prev => {
      const update = (nodes: TreeDataNode[]): TreeDataNode[] =>
        nodes.map(n => n.key === node.key
          ? { ...n, children: [
              { key: `${n.key}-0`, title: 'Child 1', isLeaf: true },
              { key: `${n.key}-1`, title: 'Child 2', isLeaf: true },
            ]}
          : { ...n, children: n.children ? update(n.children) : undefined }
        )
      return update(prev)
    })
  }

  return <Tree treeData={treeData} loadData={loadData} />
}

export default App
```

## API

### Tree

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `treeData` | Tree data structure (alternative to compound pattern) | `TreeDataNode[]` | `[]` |
| `children` | Tree.Node children for compound pattern | `React.ReactNode` | `-` |
| `checkable` | Show checkbox for each node | `boolean` | `false` |
| `checkboxColor` | Checkbox color (DaisyUI) | `'primary' \| 'secondary' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'primary'` |
| `checkboxSize` | Checkbox size (DaisyUI) | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'` |
| `checkedKeys` | Controlled checked keys | `string[]` | `-` |
| `defaultCheckedKeys` | Default checked keys | `string[]` | `[]` |
| `checkStrictly` | Decouple parent-child checkbox relationship | `boolean` | `false` |
| `onCheck` | Callback when node is checked | `(keys: string[], info: { node, checked }) => void` | `-` |
| `selectable` | Enable node selection | `boolean` | `true` |
| `selectedKeys` | Controlled selected keys | `string[]` | `-` |
| `defaultSelectedKeys` | Default selected keys | `string[]` | `[]` |
| `onSelect` | Callback when node is selected | `(keys: string[], info: { node, selected }) => void` | `-` |
| `multiple` | Allow multiple selection | `boolean` | `false` |
| `expandedKeys` | Controlled expanded keys | `string[]` | `-` |
| `defaultExpandedKeys` | Default expanded keys | `string[]` | `[]` |
| `defaultExpandAll` | Expand all nodes by default | `boolean` | `false` |
| `autoExpandParent` | Auto expand parent nodes | `boolean` | `true` |
| `onExpand` | Callback when node is expanded | `(keys: string[], info: { node, expanded }) => void` | `-` |
| `showLine` | Show connecting lines | `boolean` | `false` |
| `showIcon` | Show node icons | `boolean` | `false` |
| `blockNode` | Make nodes fill horizontal space | `boolean` | `false` |
| `switcherIcon` | Custom expand/collapse icon | `ReactNode \| ((expanded: boolean) => ReactNode)` | `-` |
| `titleRender` | Custom title render function | `(node: TreeDataNode) => ReactNode` | `-` |
| `filterTreeNode` | Filter function to highlight nodes | `(node: TreeDataNode) => boolean` | `-` |
| `loadData` | Async data loading function | `(node: TreeDataNode) => Promise<void>` | `-` |
| `onRightClick` | Right click handler | `(info: { event, node }) => void` | `-` |
| `fieldNames` | Custom field names for data mapping | `{ key?: string; title?: string; children?: string }` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### TreeDataNode (for treeData prop)

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `key` | Unique identifier | `string` | `-` |
| `title` | Display title | `React.ReactNode` | `-` |
| `children` | Child nodes | `TreeDataNode[]` | `-` |
| `icon` | Custom icon | `React.ReactNode` | `-` |
| `disabled` | Disable the node | `boolean` | `false` |
| `disableCheckbox` | Disable checkbox for the node | `boolean` | `false` |
| `selectable` | Whether node can be selected | `boolean` | `true` |
| `checkable` | Whether node shows checkbox | `boolean` | `true` |
| `isLeaf` | Force node to be a leaf (no expand icon) | `boolean` | `-` |

### Tree.Node (compound pattern)

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `key` | Unique identifier (React key prop) | `string` | `-` |
| `title` | Display title | `React.ReactNode` | `-` |
| `children` | Child Tree.Node elements | `React.ReactNode` | `-` |
| `icon` | Custom icon | `React.ReactNode` | `-` |
| `disabled` | Disable the node | `boolean` | `false` |
| `disableCheckbox` | Disable checkbox for the node | `boolean` | `false` |
| `selectable` | Whether node can be selected | `boolean` | `true` |
| `checkable` | Whether node shows checkbox | `boolean` | `true` |
| `isLeaf` | Force node to be a leaf (no expand icon) | `boolean` | `-` |

## Accessibility

The Tree component implements full WAI-ARIA tree pattern:

- Uses `role="tree"` on container and `role="treeitem"` on nodes
- `aria-expanded` indicates node expansion state
- `aria-selected` indicates selection state
- `aria-checked` indicates checkbox state (with `"mixed"` for indeterminate)
- `aria-disabled` indicates disabled state
- `aria-level` indicates nesting depth

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `↓` | Move focus to next visible node |
| `↑` | Move focus to previous visible node |
| `→` | Expand collapsed node, or move to first child |
| `←` | Collapse expanded node |
| `Enter` / `Space` | Toggle checkbox, select node, or expand/collapse |
| `Home` | Move focus to first node |
| `End` | Move focus to last visible node |

## Testing

The component includes data attributes for testing:

- `data-testid="tree"` on the tree container
- `data-testid="tree-node-{key}"` on each node
- `data-state="selected|expanded|collapsed"` indicates node state
- `data-key="{key}"` provides the node key
