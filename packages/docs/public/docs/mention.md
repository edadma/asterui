# Mention

**Import:** `import { Mention } from 'asterui'`

## Examples

### Basic Mention

Simple mention input with @ trigger.

```tsx
import React, { useState } from 'react'
import { Mention } from 'asterui'

const users = [
  { value: 'john', label: 'John Doe' },
  { value: 'jane', label: 'Jane Smith' },
  { value: 'bob', label: 'Bob Johnson' },
  { value: 'alice', label: 'Alice Williams' },
]

const App: React.FC = () => {
  const [text, setText] = useState('')

  return (
    <div>
      <Mention
        options={users}
        value={text}
        onChange={setText}
        placeholder="Type @ to mention someone"
      />
      <div className="mt-2 text-sm text-base-content/70">
        Text: {text || '(empty)'}
      </div>
    </div>
  )
}

export default App
```

### Custom Prefix

Using # prefix for hashtag mentions.

```tsx
import React, { useState } from 'react'
import { Mention } from 'asterui'

const tags = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'webdev', label: 'Web Development' },
]

const App: React.FC = () => {
  const [text, setText] = useState('')

  return (
    <div>
      <Mention
        options={tags}
        value={text}
        onChange={setText}
        prefix="#"
        placeholder="Type # to add hashtag"
      />
      <div className="mt-2 text-sm text-base-content/70">
        Text: {text || '(empty)'}
      </div>
    </div>
  )
}

export default App
```

### Multiple Triggers

Using multiple mention components with different prefixes.

```tsx
import React, { useState } from 'react'
import { Mention, Space } from 'asterui'

const users = [
  { value: 'john', label: 'John Doe' },
  { value: 'jane', label: 'Jane Smith' },
]

const tags = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
]

const App: React.FC = () => {
  const [userText, setUserText] = useState('')
  const [tagText, setTagText] = useState('')

  return (
    <Space direction="vertical" size="md">
      <div>
        <label className="block mb-2 text-sm font-medium">
          Mention Users (@)
        </label>
        <Mention
          options={users}
          value={userText}
          onChange={setUserText}
          prefix="@"
          placeholder="Type @ to mention users"
        />
        <div className="mt-1 text-xs text-base-content/70">
          {userText || '(empty)'}
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Add Tags (#)
        </label>
        <Mention
          options={tags}
          value={tagText}
          onChange={setTagText}
          prefix="#"
          placeholder="Type # to add tags"
        />
        <div className="mt-1 text-xs text-base-content/70">
          {tagText || '(empty)'}
        </div>
      </div>
    </Space>
  )
}

export default App
```

## API

### Mention

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Controlled value | `string` | `-` |
| `onChange` | Callback when value changes | `(value: string) => void` | `-` |
| `prefix` | Character that triggers mention suggestions | `string` | `@` |
| `split` | Character used to split mentions in the input | `string` | `-` |
| `placeholder` | Input placeholder text | `string` | `-` |
| `disabled` | Disable the mention input | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
