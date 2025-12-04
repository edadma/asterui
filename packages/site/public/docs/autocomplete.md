# Autocomplete

**Import:** `import { Autocomplete } from 'asterui'`

## Examples

### Basic Autocomplete

Simple autocomplete with string array options.

```tsx
import React from 'react'
import { Autocomplete } from 'asterui'

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
]

const App: React.FC = () => (
  <Autocomplete
    options={countries}
    placeholder="Select a country"
  />
)

export default App
```

### With Object Options

Autocomplete with value/label object options.

```tsx
import React from 'react'
import { Autocomplete } from 'asterui'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'orange', label: 'Orange' },
]

const App: React.FC = () => (
  <Autocomplete
    options={fruits}
    placeholder="Select a fruit"
  />
)

export default App
```

### Controlled

Controlled autocomplete with state management.

```tsx
import React, { useState } from 'react'
import { Autocomplete } from 'asterui'

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
]

const App: React.FC = () => {
  const [country, setCountry] = useState('')

  return (
    <div>
      <Autocomplete
        value={country}
        onChange={setCountry}
        options={countries}
        placeholder="Select a country"
      />
      <p className="mt-2 text-sm">
        Selected: {country || 'None'}
      </p>
    </div>
  )
}

export default App
```

### No Custom Values

Autocomplete that only allows selection from options.

```tsx
import React from 'react'
import { Autocomplete } from 'asterui'

const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
]

const App: React.FC = () => (
  <Autocomplete
    options={languages}
    allowCustomValue={false}
    placeholder="Select a language"
  />
)

export default App
```

### Custom Filter

Autocomplete with custom filtering logic (starts with).

```tsx
import React from 'react'
import { Autocomplete } from 'asterui'

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
]

const App: React.FC = () => (
  <Autocomplete
    options={countries}
    filterOption={(option, input) =>
      option.label.toLowerCase().startsWith(input.toLowerCase())
    }
    placeholder="Type to filter (starts with)"
  />
)

export default App
```

### Different Sizes

Autocomplete in various sizes.

```tsx
import React from 'react'
import { Autocomplete, Space } from 'asterui'

const options = ['Option 1', 'Option 2', 'Option 3']

const App: React.FC = () => (
  <Space direction="vertical" size="sm">
    <Autocomplete size="xs" options={options} placeholder="Extra small" />
    <Autocomplete size="sm" options={options} placeholder="Small" />
    <Autocomplete size="md" options={options} placeholder="Medium" />
    <Autocomplete size="lg" options={options} placeholder="Large" />
  </Space>
)

export default App
```

### Disabled

Disabled autocomplete.

```tsx
import React from 'react'
import { Autocomplete } from 'asterui'

const App: React.FC = () => (
  <Autocomplete
    options={['Option 1', 'Option 2']}
    disabled
    defaultValue="Option 1"
  />
)

export default App
```

### Custom Not Found Content

Autocomplete with custom message when no results.

```tsx
import React from 'react'
import { Autocomplete } from 'asterui'

const App: React.FC = () => (
  <Autocomplete
    options={['Apple', 'Banana', 'Cherry']}
    notFoundContent="Sorry, no matches found!"
    placeholder="Search fruits"
  />
)

export default App
```

### Email Domain Autocomplete

Practical example with email domain suggestions.

```tsx
import React, { useState } from 'react'
import { Autocomplete } from 'asterui'

const App: React.FC = () => {
  const [email, setEmail] = useState('')

  const domains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@hotmail.com']

  const emailOptions = email.includes('@')
    ? domains.map(domain => email.split('@')[0] + domain)
    : domains.map(domain => email + domain)

  return (
    <Autocomplete
      value={email}
      onChange={setEmail}
      options={emailOptions}
      placeholder="Enter email address"
    />
  )
}

export default App
```

### In Form

Autocomplete integrated with Form component.

```tsx
import React from 'react'
import { Autocomplete, Form, Button, Modal } from 'asterui'

const App: React.FC = () => {
  const handleSubmit = (values: { country: string }) => {
    Modal.success({
      title: 'Form Submitted',
      content: \
```

## API

### Autocomplete

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Controlled value | `string` | `-` |
| `defaultValue` | Default value (uncontrolled) | `string` | `-` |
| `onChange` | Callback when value changes | `(value: string) => void` | `-` |
| `options` | Array of options to display | `string[] \| AutocompleteOption[]` | `-` |
| `placeholder` | Input placeholder text | `string` | `Type to search...` |
| `disabled` | Disable the autocomplete | `boolean` | `false` |
| `size` | Input size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `allowCustomValue` | Allow user to enter custom values not in options | `boolean` | `true` |
| `notFoundContent` | Content to show when no options match | `React.ReactNode` | `No results found` |
| `className` | Additional CSS classes | `string` | `-` |

### Option Type

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | The value of the option | `string` | `-` |
| `label` | The display text of the option | `string` | `-` |
