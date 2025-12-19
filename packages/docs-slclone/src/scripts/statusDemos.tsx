import React from 'react'
import { createRoot } from 'react-dom/client'
import { Status, Space } from 'asterui'

const BasicDemo = () => (
  <Space size="md">
    <Status type="success" />
    <Status type="warning" />
    <Status type="error" />
    <Status type="info" />
  </Space>
)

const SizesDemo = () => (
  <Space size="md" align="center">
    <Status type="primary" size="xs" />
    <Status type="primary" size="sm" />
    <Status type="primary" size="md" />
    <Status type="primary" size="lg" />
    <Status type="primary" size="xl" />
  </Space>
)

const AnimatedDemo = () => (
  <Space size="lg" align="center">
    <Status type="error" ping />
    <Status type="success" ping />
    <Status type="info" bounce />
  </Space>
)

const ColorsDemo = () => (
  <Space size="md">
    <Status type="neutral" />
    <Status type="primary" />
    <Status type="secondary" />
    <Status type="accent" />
    <Status type="info" />
    <Status type="success" />
    <Status type="warning" />
    <Status type="error" />
  </Space>
)

const demos: Record<string, React.FC> = {
  basic: BasicDemo,
  sizes: SizesDemo,
  animated: AnimatedDemo,
  colors: ColorsDemo,
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const Demo = demos[exampleId]
    createRoot(container).render(<Demo />)
  }
})
