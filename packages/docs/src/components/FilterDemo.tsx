import { useState } from 'react'
import { Filter, Space } from 'asterui'
import { Demo } from './Demo'

export function BasicDemo() {
  const [value, setValue] = useState<string | undefined>()
  return (
    <Demo>
      <Space direction="vertical" size="md">
        <Filter
          options={['Svelte', 'Vue', 'React', 'Angular']}
          value={value}
          onChange={setValue}
        />
        <p className="text-sm text-base-content/70">
          Selected: {value || 'None'}
        </p>
      </Space>
    </Demo>
  )
}

export function SizesDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="lg">
        <Filter options={['Small', 'Medium', 'Large']} size="xs" />
        <Filter options={['Small', 'Medium', 'Large']} size="sm" />
        <Filter options={['Small', 'Medium', 'Large']} size="md" />
        <Filter options={['Small', 'Medium', 'Large']} size="lg" />
      </Space>
    </Demo>
  )
}

export function ObjectOptionsDemo() {
  const [value, setValue] = useState<string | undefined>()
  return (
    <Demo>
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
    </Demo>
  )
}

export function NoResetDemo() {
  return (
    <Demo>
      <Filter
        options={['Option A', 'Option B', 'Option C']}
        showReset={false}
        defaultValue="Option A"
      />
    </Demo>
  )
}
