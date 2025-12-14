import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'
import { Checkbox, Space, Modal } from 'asterui'
import { SunIcon, MoonIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@aster-ui/icons/solid'
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox />
      <span>Accept terms and conditions</span>
    </label>
  ),
  colors: (
    <Space direction="vertical" size="sm">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox color="primary" defaultChecked />
        <span>Primary</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox color="secondary" defaultChecked />
        <span>Secondary</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox color="accent" defaultChecked />
        <span>Accent</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox color="success" defaultChecked />
        <span>Success</span>
      </label>
    </Space>
  ),
  sizes: (
    <Space direction="horizontal" size="md" align="center">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="xs" defaultChecked />
        <span className="text-xs">XS</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="sm" defaultChecked />
        <span className="text-sm">SM</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="md" defaultChecked />
        <span>MD</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="lg" defaultChecked />
        <span className="text-lg">LG</span>
      </label>
    </Space>
  ),
  disabled: (
    <Space direction="horizontal" size="md">
      <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
        <Checkbox disabled />
        <span>Disabled</span>
      </label>
      <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
        <Checkbox disabled defaultChecked />
        <span>Disabled Checked</span>
      </label>
    </Space>
  ),
  group: (
    <Checkbox.Group
      options={[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' },
        { label: 'Mango', value: 'mango' },
      ]}
      defaultValue={['apple', 'orange']}
      onChange={(values) => Modal.info({ title: 'Selected', content: values.join(', ') })}
    />
  ),
}

// Stateful demo components
const IndeterminateDemo: React.FC = () => {
  const [items, setItems] = useState([true, false, true])
  const allChecked = items.every(Boolean)
  const someChecked = items.some(Boolean) && !allChecked

  const handleSelectAll = () => {
    setItems(allChecked ? [false, false, false] : [true, true, true])
  }

  return (
    <Space direction="vertical" size="sm">
      <label className="flex items-center gap-2 cursor-pointer font-medium">
        <Checkbox checked={allChecked} indeterminate={someChecked} onChange={handleSelectAll} />
        <span>Select All</span>
      </label>
      <div className="ml-6">
        <Space direction="vertical" size="xs">
          {['Item 1', 'Item 2', 'Item 3'].map((item, i) => (
            <label key={i} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={items[i]}
                onChange={() => {
                  const newItems = [...items]
                  newItems[i] = !newItems[i]
                  setItems(newItems)
                }}
              />
              <span>{item}</span>
            </label>
          ))}
        </Space>
      </div>
    </Space>
  )
}

const SwapDemo: React.FC = () => {
  const [volume, setVolume] = useState(true)

  return (
    <Space size="lg">
      <Checkbox
        checked={volume}
        onChange={(e) => setVolume(e.target.checked)}
        swap={{
          on: <SpeakerWaveIcon size={32} />,
          off: <SpeakerXMarkIcon size={32} />,
        }}
      />
      <Checkbox
        swap={{
          on: <span className="text-2xl">😀</span>,
          off: <span className="text-2xl">😴</span>,
          effect: 'rotate',
        }}
      />
      <Checkbox
        swap={{
          on: <span className="text-xl font-bold text-success">ON</span>,
          off: <span className="text-xl font-bold text-error">OFF</span>,
          effect: 'flip',
        }}
      />
    </Space>
  )
}

const SwapIconsDemo: React.FC = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <Checkbox
      checked={isDark}
      onChange={(e) => setIsDark(e.target.checked)}
      swap={{
        on: <MoonIcon size={32} />,
        off: <SunIcon size={32} />,
        effect: 'rotate',
      }}
    />
  )
}

const statefulDemos: Record<string, React.FC> = {
  indeterminate: IndeterminateDemo,
  swap: SwapDemo,
  'swap-icons': SwapIconsDemo,
}

// Mount React demos
document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId) {
    const root = createRoot(container as HTMLElement)
    if (demos[exampleId]) {
      root.render(demos[exampleId])
    } else if (statefulDemos[exampleId]) {
      const Component = statefulDemos[exampleId]
      root.render(<Component />)
    }
  }
})

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code')
    if (code) {
      await navigator.clipboard.writeText(code)
      const originalHTML = btn.innerHTML
      btn.innerHTML =
        CheckIconSvg
      setTimeout(() => {
        btn.innerHTML = originalHTML
      }, 2000)
    }
  })
})
