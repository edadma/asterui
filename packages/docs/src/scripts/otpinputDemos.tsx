import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { OTPInput, Space } from 'asterui'

const BasicDemo = () => {
  const [value, setValue] = useState('')
  return (
    <OTPInput
      value={value}
      onChange={setValue}
      onComplete={(otp) => console.log('Complete:', otp)}
    />
  )
}

const FourDigitDemo = () => {
  const [value, setValue] = useState('')
  return (
    <OTPInput
      length={4}
      value={value}
      onChange={setValue}
    />
  )
}

const SizesDemo = () => (
  <Space direction="vertical" size="lg">
    <OTPInput length={4} size="xs" />
    <OTPInput length={4} size="sm" />
    <OTPInput length={4} size="md" />
    <OTPInput length={4} size="lg" />
  </Space>
)

const MaskedDemo = () => {
  const [value, setValue] = useState('')
  return (
    <OTPInput
      value={value}
      onChange={setValue}
      mask
    />
  )
}

const AlphanumericDemo = () => {
  const [value, setValue] = useState('')
  return (
    <OTPInput
      value={value}
      onChange={setValue}
      type="text"
      length={5}
    />
  )
}

const ErrorDemo = () => {
  const [value, setValue] = useState('123')
  return (
    <OTPInput
      value={value}
      onChange={setValue}
      error
      length={4}
    />
  )
}

const DisabledDemo = () => (
  <OTPInput
    value="123456"
    disabled
  />
)

const demos: Record<string, React.FC> = {
  basic: BasicDemo,
  'four-digit': FourDigitDemo,
  sizes: SizesDemo,
  masked: MaskedDemo,
  alphanumeric: AlphanumericDemo,
  error: ErrorDemo,
  disabled: DisabledDemo,
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const Demo = demos[exampleId]
    createRoot(container).render(<Demo />)
  }
})
