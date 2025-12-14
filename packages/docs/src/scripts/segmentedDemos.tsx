import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Segmented, Space } from 'asterui'
import { Bars3Icon, Squares2X2Icon } from '@aster-ui/icons'

const demos: Record<string, React.ReactNode> = {
  sizes: (
    <Space direction="vertical" gap="md">
      <Segmented size="xs" defaultValue="M">
        <Segmented.Item value="S">S</Segmented.Item>
        <Segmented.Item value="M">M</Segmented.Item>
        <Segmented.Item value="L">L</Segmented.Item>
      </Segmented>
      <Segmented size="sm" defaultValue="M">
        <Segmented.Item value="S">S</Segmented.Item>
        <Segmented.Item value="M">M</Segmented.Item>
        <Segmented.Item value="L">L</Segmented.Item>
      </Segmented>
      <Segmented size="md" defaultValue="M">
        <Segmented.Item value="S">S</Segmented.Item>
        <Segmented.Item value="M">M</Segmented.Item>
        <Segmented.Item value="L">L</Segmented.Item>
      </Segmented>
      <Segmented size="lg" defaultValue="M">
        <Segmented.Item value="S">S</Segmented.Item>
        <Segmented.Item value="M">M</Segmented.Item>
        <Segmented.Item value="L">L</Segmented.Item>
      </Segmented>
    </Space>
  ),
  disabled: (
    <Segmented defaultValue="A" disabled>
      <Segmented.Item value="A">Option A</Segmented.Item>
      <Segmented.Item value="B">Option B</Segmented.Item>
      <Segmented.Item value="C">Option C</Segmented.Item>
    </Segmented>
  ),
}

function BasicSegmented() {
  const [view, setView] = useState('List')

  return (
    <div>
      <Segmented value={view} onChange={(v) => setView(v as string)}>
        <Segmented.Item value="List">List</Segmented.Item>
        <Segmented.Item value="Grid">Grid</Segmented.Item>
        <Segmented.Item value="Table">Table</Segmented.Item>
      </Segmented>
      <p className="mt-2 text-sm text-base-content/70">Selected: {view}</p>
    </div>
  )
}

function ObjectOptionsSegmented() {
  const [period, setPeriod] = useState('week')

  return (
    <div>
      <Segmented value={period} onChange={(v) => setPeriod(v as string)}>
        <Segmented.Item value="day">Daily</Segmented.Item>
        <Segmented.Item value="week">Weekly</Segmented.Item>
        <Segmented.Item value="month">Monthly</Segmented.Item>
        <Segmented.Item value="year" disabled>Yearly</Segmented.Item>
      </Segmented>
      <p className="mt-2 text-sm text-base-content/70">Selected: {period}</p>
    </div>
  )
}

function BlockSegmented() {
  const [align, setAlign] = useState('Center')

  return (
    <div className="w-full max-w-md">
      <Segmented value={align} onChange={(v) => setAlign(v as string)} block>
        <Segmented.Item value="Left">Left</Segmented.Item>
        <Segmented.Item value="Center">Center</Segmented.Item>
        <Segmented.Item value="Right">Right</Segmented.Item>
      </Segmented>
    </div>
  )
}

function IconSegmented() {
  const [view, setView] = useState('list')

  return (
    <div>
      <Segmented value={view} onChange={(v) => setView(v as string)}>
        <Segmented.Item value="list" icon={<Bars3Icon size="sm" />}>List</Segmented.Item>
        <Segmented.Item value="grid" icon={<Squares2X2Icon size="sm" />}>Grid</Segmented.Item>
      </Segmented>
      <p className="mt-2 text-sm text-base-content/70">View: {view}</p>
    </div>
  )
}

const statefulDemos: Record<string, React.FC> = {
  basic: BasicSegmented,
  objects: ObjectOptionsSegmented,
  block: BlockSegmented,
  icons: IconSegmented,
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('.demo-container').forEach((container) => {
    const example = container.dataset.example
    if (example) {
      const root = createRoot(container)
      if (statefulDemos[example]) {
        const Component = statefulDemos[example]
        root.render(<Component />)
      } else if (demos[example]) {
        root.render(demos[example])
      }
    }
  })
})
