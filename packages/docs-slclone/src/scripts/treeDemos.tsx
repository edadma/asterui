import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Tree } from 'asterui'
import type { TreeDataNode } from 'asterui'
import { FolderIcon, DocumentIcon } from '@aster-ui/icons/solid'

const basicTreeData: TreeDataNode[] = [
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

const fileTreeData: TreeDataNode[] = [
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
          { key: 'Modal.tsx', title: 'Modal.tsx' },
        ],
      },
      {
        key: 'pages',
        title: 'pages',
        children: [
          { key: 'Home.tsx', title: 'Home.tsx' },
          { key: 'About.tsx', title: 'About.tsx' },
        ],
      },
      { key: 'App.tsx', title: 'App.tsx' },
      { key: 'index.tsx', title: 'index.tsx' },
    ],
  },
  {
    key: 'public',
    title: 'public',
    children: [{ key: 'index.html', title: 'index.html' }],
  },
  { key: 'package.json', title: 'package.json' },
]

function BasicTree() {
  return <Tree treeData={basicTreeData} defaultExpandedKeys={['0', '0-0']} />
}

function CheckableTree() {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])

  return (
    <div>
      <Tree
        treeData={basicTreeData}
        checkable
        checkedKeys={checkedKeys}
        onCheck={setCheckedKeys}
        defaultExpandedKeys={['0', '0-0', '0-1']}
      />
      <p className="mt-4 text-sm">Checked: {checkedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

function SelectableTree() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  return (
    <div>
      <Tree
        treeData={basicTreeData}
        selectable
        selectedKeys={selectedKeys}
        onSelect={setSelectedKeys}
        defaultExpandedKeys={['0', '0-0', '0-1']}
      />
      <p className="mt-4 text-sm">Selected: {selectedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

function MultipleSelectTree() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  return (
    <div>
      <Tree
        treeData={basicTreeData}
        selectable
        multiple
        selectedKeys={selectedKeys}
        onSelect={setSelectedKeys}
        defaultExpandedKeys={['0', '0-0', '0-1']}
      />
      <p className="mt-4 text-sm">Selected: {selectedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

function ShowLineTree() {
  return <Tree treeData={fileTreeData} showLine defaultExpandedKeys={['src', 'components', 'pages']} />
}

function ShowIconTree() {
  const treeDataWithIcons: TreeDataNode[] = [
    {
      key: 'src',
      title: 'src',
      icon: <FolderIcon size="sm" />,
      children: [
        { key: 'App.tsx', title: 'App.tsx', icon: <DocumentIcon size="sm" /> },
        { key: 'index.tsx', title: 'index.tsx', icon: <DocumentIcon size="sm" /> },
      ],
    },
  ]

  return <Tree treeData={treeDataWithIcons} showIcon defaultExpandedKeys={['src']} />
}

function ExpandControlledTree() {
  const [expandedKeys, setExpandedKeys] = useState<string[]>(['0'])

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button className="btn btn-sm" onClick={() => setExpandedKeys(['0', '0-0', '0-1'])}>
          Expand All
        </button>
        <button className="btn btn-sm" onClick={() => setExpandedKeys([])}>
          Collapse All
        </button>
      </div>
      <Tree treeData={basicTreeData} expandedKeys={expandedKeys} onExpand={setExpandedKeys} />
    </div>
  )
}

function CompoundTree() {
  return (
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
}

function CheckboxColorsTree() {
  return (
    <Tree
      treeData={basicTreeData}
      checkable
      checkboxColor="success"
      checkboxSize="md"
      defaultExpandedKeys={['0']}
    />
  )
}

function CheckStrictlyTree() {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])

  return (
    <div>
      <Tree
        treeData={basicTreeData}
        checkable
        checkStrictly
        checkedKeys={checkedKeys}
        onCheck={setCheckedKeys}
        defaultExpandedKeys={['0', '0-0', '0-1']}
      />
      <p className="mt-4 text-sm">Checked: {checkedKeys.join(', ') || 'None'}</p>
    </div>
  )
}

function AsyncLoadTree() {
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

const statefulDemos: Record<string, React.FC> = {
  basic: BasicTree,
  checkable: CheckableTree,
  selectable: SelectableTree,
  multiple: MultipleSelectTree,
  'show-line': ShowLineTree,
  'show-icon': ShowIconTree,
  'expand-controlled': ExpandControlledTree,
  compound: CompoundTree,
  'checkbox-colors': CheckboxColorsTree,
  'check-strictly': CheckStrictlyTree,
  'async-load': AsyncLoadTree,
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
