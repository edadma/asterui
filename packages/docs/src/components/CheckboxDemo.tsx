import { useState } from 'react'
import { Checkbox, Space, Modal } from 'asterui'
import { SpeakerWaveIcon, SpeakerXMarkIcon, SunIcon, MoonIcon } from '@aster-ui/icons/solid'
import { Demo } from './Demo'

export function BasicDemo() {
  return (
    <Demo>
      <Checkbox>Accept terms and conditions</Checkbox>
    </Demo>
  )
}

export function ColorsDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Checkbox color="primary" defaultChecked>Primary</Checkbox>
        <Checkbox color="secondary" defaultChecked>Secondary</Checkbox>
        <Checkbox color="accent" defaultChecked>Accent</Checkbox>
        <Checkbox color="success" defaultChecked>Success</Checkbox>
        <Checkbox color="warning" defaultChecked>Warning</Checkbox>
        <Checkbox color="info" defaultChecked>Info</Checkbox>
        <Checkbox color="error" defaultChecked>Error</Checkbox>
      </Space>
    </Demo>
  )
}

export function SizesDemo() {
  return (
    <Demo>
      <Space direction="horizontal" size="md" align="center">
        <Checkbox size="xs" defaultChecked>XS</Checkbox>
        <Checkbox size="sm" defaultChecked>SM</Checkbox>
        <Checkbox size="md" defaultChecked>MD</Checkbox>
        <Checkbox size="lg" defaultChecked>LG</Checkbox>
        <Checkbox size="xl" defaultChecked>XL</Checkbox>
      </Space>
    </Demo>
  )
}

export function DisabledDemo() {
  return (
    <Demo>
      <Space direction="horizontal" size="md">
        <Checkbox disabled>Disabled</Checkbox>
        <Checkbox disabled defaultChecked>Disabled Checked</Checkbox>
      </Space>
    </Demo>
  )
}

export function IndeterminateDemo() {
  const [items, setItems] = useState([true, false, true])
  const allChecked = items.every(Boolean)
  const someChecked = items.some(Boolean) && !allChecked

  const handleSelectAll = () => {
    setItems(allChecked ? [false, false, false] : [true, true, true])
  }

  return (
    <Demo>
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
    </Demo>
  )
}

export function GroupDemo() {
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Mango', value: 'mango' },
  ]

  return (
    <Demo>
      <Checkbox.Group
        options={options}
        defaultValue={['apple', 'orange']}
        onChange={(values) => Modal.info({ title: 'Selected', content: values.join(', ') })}
      />
    </Demo>
  )
}

export function SwapDemo() {
  const [volume, setVolume] = useState(true)

  return (
    <Demo>
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
    </Demo>
  )
}

export function SwapIconsDemo() {
  const [isDark, setIsDark] = useState(false)

  return (
    <Demo>
      <Checkbox
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
        swap={{
          on: <MoonIcon size={32} />,
          off: <SunIcon size={32} />,
          effect: 'rotate',
        }}
      />
    </Demo>
  )
}
