# Label

**Import:** `import { Label } from 'asterui'`

## Examples

### Basic Label

Simple label component for form fields.

```tsx
import React from 'react'
import { Label, Input, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md">
    <Label className="flex flex-col gap-2">
      <span>Username</span>
      <Input placeholder="Enter username" />
    </Label>
    <Label className="flex flex-col gap-2">
      <span>Email</span>
      <Input type="email" placeholder="your@email.com" />
    </Label>
  </Space>
)

export default App
```

### Required Field

Label with required indicator using custom styling.

```tsx
import React from 'react'
import { Label, Input, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md">
    <Label className="flex flex-col gap-2">
      <span>
        Email <span className="text-error">*</span>
      </span>
      <Input type="email" placeholder="your@email.com" />
    </Label>
    <Label className="flex flex-col gap-2">
      <span>
        Password <span className="text-error">*</span>
      </span>
      <Input type="password" placeholder="Enter password" />
    </Label>
  </Space>
)

export default App
```

### Floating Label

Label that floats above the input when focused or filled.

```tsx
import React, { useState } from 'react'
import { Label, Space } from 'asterui'

const App: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <Space direction="vertical" size="md">
      <Label.Floating label="Full Name">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />
      </Label.Floating>
      <Label.Floating label="Email Address">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
        />
      </Label.Floating>
    </Space>
  )
}

export default App
```

### Label with Helper Text

Label combined with helper text for additional context.

```tsx
import React from 'react'
import { Label, Input, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="md">
    <Label className="flex flex-col gap-2">
      <span>Bio</span>
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Tell us about yourself"
        rows={3}
      />
      <span className="text-sm text-base-content/60">
        Brief description for your profile. Max 200 characters.
      </span>
    </Label>
    <Label className="flex flex-col gap-2">
      <span>
        Website URL <span className="text-error">*</span>
      </span>
      <Input type="url" placeholder="https://example.com" />
      <span className="text-sm text-base-content/60">
        Your personal or company website
      </span>
    </Label>
  </Space>
)

export default App
```

## API

### Label

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Label content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Floating Label

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `label` | Label text to display | `string` | `-` |
| `children` | Input element content | `React.ReactNode` | `-` |
| `size` | Label and input size | `xs' \| 'sm' \| 'md' \| 'lg' \| 'xl` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
