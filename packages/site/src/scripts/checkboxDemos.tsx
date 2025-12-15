import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'
import { Checkbox, Space, Modal } from 'asterui'
import { SunIcon, MoonIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@aster-ui/icons/solid'
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: <Checkbox>Accept terms and conditions</Checkbox>,
  colors: (
    <Space direction="vertical" size="sm">
      <Checkbox color="primary" defaultChecked>Primary</Checkbox>
      <Checkbox color="secondary" defaultChecked>Secondary</Checkbox>
      <Checkbox color="accent" defaultChecked>Accent</Checkbox>
      <Checkbox color="success" defaultChecked>Success</Checkbox>
      <Checkbox color="warning" defaultChecked>Warning</Checkbox>
      <Checkbox color="info" defaultChecked>Info</Checkbox>
      <Checkbox color="error" defaultChecked>Error</Checkbox>
    </Space>
  ),
  sizes: (
    <Space direction="horizontal" size="md" align="center">
      <Checkbox size="xs" defaultChecked>XS</Checkbox>
      <Checkbox size="sm" defaultChecked>SM</Checkbox>
      <Checkbox size="md" defaultChecked>MD</Checkbox>
      <Checkbox size="lg" defaultChecked>LG</Checkbox>
      <Checkbox size="xl" defaultChecked>XL</Checkbox>
    </Space>
  ),
  disabled: (
    <Space direction="horizontal" size="md">
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled defaultChecked>Disabled Checked</Checkbox>
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
      <Checkbox
        checked={allChecked}
        indeterminate={someChecked}
        onChange={handleSelectAll}
        className="font-medium"
      >
        Select All
      </Checkbox>
      <div className="ml-6">
        <Space direction="vertical" size="xs">
          {['Item 1', 'Item 2', 'Item 3'].map((item, i) => (
            <Checkbox
              key={i}
              checked={items[i]}
              onChange={() => {
                const newItems = [...items]
                newItems[i] = !newItems[i]
                setItems(newItems)
              }}
            >
              {item}
            </Checkbox>
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
