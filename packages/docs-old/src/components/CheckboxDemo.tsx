import { useState } from 'react'
import { Checkbox, Space } from 'asterui'
import { Demo } from './Demo'

export function BasicDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="md">
        <Checkbox>Remember me</Checkbox>
        <Checkbox defaultChecked>Subscribed</Checkbox>
      </Space>
    </Demo>
  )
}

export function ColorsDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="md">
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
      <Space direction="horizontal" wrap size="md" align="center">
        <Checkbox size="xs" defaultChecked>Extra Small</Checkbox>
        <Checkbox size="sm" defaultChecked>Small</Checkbox>
        <Checkbox size="md" defaultChecked>Medium</Checkbox>
        <Checkbox size="lg" defaultChecked>Large</Checkbox>
        <Checkbox size="xl" defaultChecked>Extra Large</Checkbox>
      </Space>
    </Demo>
  )
}

export function DisabledDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="md">
        <Checkbox disabled>Disabled</Checkbox>
        <Checkbox disabled defaultChecked>Disabled Checked</Checkbox>
      </Space>
    </Demo>
  )
}

export function IndeterminateDemo() {
  const [checkedList, setCheckedList] = useState<string[]>(['Apple'])
  const options = ['Apple', 'Pear', 'Orange']

  const indeterminate = checkedList.length > 0 && checkedList.length < options.length
  const checkAll = checkedList.length === options.length

  const onCheckAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedList(e.target.checked ? options : [])
  }

  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Checkbox
          indeterminate={indeterminate}
          checked={checkAll}
          onChange={onCheckAllChange}
        >
          Check all
        </Checkbox>
        <div className="border-t border-base-300 my-2" />
        <Checkbox.Group
          value={checkedList}
          onChange={(values) => setCheckedList(values as string[])}
          options={options}
        />
      </Space>
    </Demo>
  )
}

export function GroupDemo() {
  const [values, setValues] = useState<(string | number)[]>(['B'])

  return (
    <Demo>
      <Space direction="vertical" size="md">
        <Checkbox.Group
          value={values}
          onChange={setValues}
          options={['A', 'B', 'C', 'D']}
        />
        <span className="text-sm text-base-content/70">Selected: {values.join(', ') || 'None'}</span>
      </Space>
    </Demo>
  )
}

export function GroupOptionsDemo() {
  return (
    <Demo>
      <Checkbox.Group
        defaultValue={['red']}
        options={[
          { label: 'Red', value: 'red' },
          { label: 'Green', value: 'green' },
          { label: 'Blue', value: 'blue' },
          { label: 'Yellow', value: 'yellow', disabled: true },
        ]}
      />
    </Demo>
  )
}

export function GroupDirectionDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="lg">
        <div>
          <span className="text-sm text-base-content/70 mb-2 block">Vertical (default):</span>
          <Checkbox.Group
            defaultValue={['A']}
            options={['A', 'B', 'C']}
          />
        </div>
        <div>
          <span className="text-sm text-base-content/70 mb-2 block">Horizontal:</span>
          <Checkbox.Group
            direction="horizontal"
            defaultValue={['A']}
            options={['A', 'B', 'C']}
          />
        </div>
      </Space>
    </Demo>
  )
}

export function ControlledDemo() {
  const [checked, setChecked] = useState(false)

  return (
    <Demo>
      <Space direction="horizontal" wrap size="md" align="center">
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        >
          Controlled checkbox
        </Checkbox>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setChecked(!checked)}
        >
          Toggle
        </button>
      </Space>
    </Demo>
  )
}

export function SwapDemo() {
  return (
    <Demo>
      <Space direction="horizontal" wrap size="lg">
        <Checkbox
          swap={{
            on: '🌙',
            off: '☀️',
          }}
          className="text-3xl"
        />
        <Checkbox
          swap={{
            on: '❤️',
            off: '🤍',
            effect: 'flip',
          }}
          className="text-3xl"
        />
        <Checkbox
          swap={{
            on: '🔔',
            off: '🔕',
            effect: 'rotate',
          }}
          className="text-3xl"
        />
      </Space>
    </Demo>
  )
}
