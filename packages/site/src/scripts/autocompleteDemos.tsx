import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'
import { Autocomplete, Space, Form, Button, Modal } from 'asterui'

const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France']

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'orange', label: 'Orange' },
]

const languages = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']

const options = ['Option 1', 'Option 2', 'Option 3']

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: <Autocomplete options={countries} placeholder="Select a country" />,
  objects: <Autocomplete options={fruits} placeholder="Select a fruit" />,
  'no-custom': (
    <Autocomplete options={languages} allowCustomValue={false} placeholder="Select a language" />
  ),
  filter: (
    <Autocomplete
      options={countries}
      filterOption={(option, input) => option.label.toLowerCase().startsWith(input.toLowerCase())}
      placeholder="Type to filter (starts with)"
    />
  ),
  sizes: (
    <Space direction="vertical" size="sm">
      <Autocomplete size="xs" options={options} placeholder="Extra small" />
      <Autocomplete size="sm" options={options} placeholder="Small" />
      <Autocomplete size="md" options={options} placeholder="Medium" />
      <Autocomplete size="lg" options={options} placeholder="Large" />
    </Space>
  ),
  disabled: <Autocomplete options={fruits} disabled defaultValue="apple" />,
  'not-found': (
    <Autocomplete
      options={['Apple', 'Banana', 'Cherry']}
      notFoundContent="Sorry, no matches found!"
      placeholder="Search fruits"
    />
  ),
}

// Stateful demo components
const ControlledDemo: React.FC = () => {
  const [country, setCountry] = useState('')

  return (
    <div>
      <Autocomplete
        value={country}
        onChange={setCountry}
        options={countries}
        placeholder="Select a country"
      />
      <p className="mt-2 text-sm text-base-content/70">Selected: {country || 'None'}</p>
    </div>
  )
}

const EmailDemo: React.FC = () => {
  const [email, setEmail] = useState('')
  const domains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@hotmail.com']

  const emailOptions = email.includes('@')
    ? domains.map((domain) => email.split('@')[0] + domain)
    : domains.map((domain) => email + domain)

  return (
    <div>
      <Autocomplete
        value={email}
        onChange={setEmail}
        options={emailOptions}
        placeholder="Enter email address"
      />
      <p className="mt-2 text-sm text-base-content/70">Email: {email || 'None'}</p>
    </div>
  )
}

const FormDemo: React.FC = () => {
  const handleSubmit = (values: { country: string }) => {
    Modal.success({
      title: 'Form Submitted',
      content: `Country: ${values.country}`,
    })
  }

  return (
    <Form onFinish={handleSubmit} initialValues={{ country: 'Canada' }}>
      <Form.Item
        name="country"
        label="Country"
        required
        rules={{ required: 'Please select a country' }}
      >
        <Autocomplete
          options={['United States', 'Canada', 'United Kingdom']}
          placeholder="Select a country"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const statefulDemos: Record<string, React.FC> = {
  controlled: ControlledDemo,
  email: EmailDemo,
  form: FormDemo,
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
        '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
      setTimeout(() => {
        btn.innerHTML = originalHTML
      }, 2000)
    }
  })
})
