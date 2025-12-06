import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Filter, Modal, Space } from 'asterui'

const BasicDemo = () => {
  const [value, setValue] = useState<string | undefined>()

  return (
    <Space direction="vertical" size="md">
      <Filter
        options={['Svelte', 'Vue', 'React', 'Angular']}
        value={value}
        onChange={(v) => {
          setValue(v)
          if (v) Modal.info({ title: 'Selected', content: `You selected: ${v}` })
        }}
      />
      <p className="text-sm text-base-content/70">
        Selected: {value || 'None'}
      </p>
    </Space>
  )
}

const SizesDemo = () => (
  <Space direction="vertical" size="lg">
    <Filter options={['Small', 'Medium', 'Large']} size="xs" />
    <Filter options={['Small', 'Medium', 'Large']} size="sm" />
    <Filter options={['Small', 'Medium', 'Large']} size="md" />
    <Filter options={['Small', 'Medium', 'Large']} size="lg" />
  </Space>
)

const ObjectOptionsDemo = () => {
  const [value, setValue] = useState<string | undefined>()

  return (
    <Space direction="vertical" size="md">
      <Filter
        options={[
          { label: 'JavaScript', value: 'js' },
          { label: 'TypeScript', value: 'ts' },
          { label: 'Python', value: 'py' },
          { label: 'Rust', value: 'rust', disabled: true },
        ]}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-base-content/70">
        Selected value: {value || 'None'}
      </p>
    </Space>
  )
}

const NoResetDemo = () => (
  <Filter
    options={['Option A', 'Option B', 'Option C']}
    showReset={false}
    defaultValue="Option A"
  />
)

const demos: Record<string, React.FC> = {
  basic: BasicDemo,
  sizes: SizesDemo,
  'object-options': ObjectOptionsDemo,
  'no-reset': NoResetDemo,
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const Demo = demos[exampleId]
    createRoot(container).render(<Demo />)
  }
})
