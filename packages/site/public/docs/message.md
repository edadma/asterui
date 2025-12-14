# Message

**Import:** `import { message } from 'asterui'`

Lightweight feedback messages displayed at the top center of the screen. For more detailed notifications with titles and descriptions, use the `notification` component.

## Examples

### Basic Messages

Lightweight feedback messages for user actions.

```tsx
import React from 'react'
import { message, Button, Space } from 'asterui'

const App: React.FC = () => {
  return (
    <Space direction="horizontal" size="sm" wrap>
      <Button
        color="primary"
        onClick={() => message.success('Changes saved successfully')}
      >
        Success
      </Button>

      <Button
        onClick={() => message.error('Failed to save changes')}
      >
        Error
      </Button>

      <Button
        onClick={() => message.info('New updates available')}
      >
        Info
      </Button>

      <Button
        onClick={() => message.warning('Session expires in 5 minutes')}
      >
        Warning
      </Button>
    </Space>
  )
}

export default App
```

### Loading Message

Show a loading message that can be dismissed programmatically.

```tsx
import React, { useState } from 'react'
import { message, Button } from 'asterui'

const App: React.FC = () => {
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const handleClick = () => {
    const id = message.loading('Processing...')
    setLoadingId(id)

    setTimeout(() => {
      message.destroy(id)
      message.success('Done!')
      setLoadingId(null)
    }, 2000)
  }

  return (
    <Button onClick={handleClick} disabled={!!loadingId}>
      {loadingId ? 'Processing...' : 'Submit'}
    </Button>
  )
}

export default App
```

### Custom Duration

Control how long messages stay visible.

```tsx
import React from 'react'
import { message, Button, Space } from 'asterui'

const App: React.FC = () => {
  return (
    <Space direction="horizontal" size="sm" wrap>
      <Button
        onClick={() => message.info('Quick message', { duration: 1 })}
      >
        1 second
      </Button>

      <Button
        color="primary"
        onClick={() => message.info('Default duration')}
      >
        Default (3s)
      </Button>

      <Button
        onClick={() => message.info('Longer message', { duration: 6 })}
      >
        6 seconds
      </Button>
    </Space>
  )
}

export default App
```

### Stacking Messages

Multiple messages stack at the top center of the screen.

```tsx
import React from 'react'
import { message, Button } from 'asterui'

const App: React.FC = () => {
  return (
    <Button
      color="primary"
      onClick={() => {
        message.success('First message')
        setTimeout(() => message.info('Second message'), 300)
        setTimeout(() => message.warning('Third message'), 600)
      }}
    >
      Show Multiple
    </Button>
  )
}

export default App
```

## API

### Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `message.success(content, config?)` | Show success message | `string` (message id) |
| `message.error(content, config?)` | Show error message | `string` (message id) |
| `message.info(content, config?)` | Show info message | `string` (message id) |
| `message.warning(content, config?)` | Show warning message | `string` (message id) |
| `message.loading(content, config?)` | Show loading message (no auto-dismiss) | `string` (message id) |
| `message.destroy(id?)` | Close message by id, or all if no id | `void` |

### MessageConfig

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `duration` | Auto-close duration in seconds | `number` | `3` |
| `key` | Unique identifier for the message. If provided, updating the same key will update the existing message | `string` | `-` |
| `icon` | Custom icon to display | `React.ReactNode` | `-` |
| `className` | Additional CSS class | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
| `data-testid` | Test ID for testing frameworks | `string` | `-` |
| `onClick` | Callback when message is clicked | `() => void` | `-` |
| `onClose` | Callback when message is closed | `() => void` | `-` |

## Message vs Notification

| Feature | Message | Notification |
|---------|---------|--------------|
| Position | Top center | Corners (configurable) |
| Style | Compact, icon + text | Card with title + description |
| Default duration | 3 seconds | 4.5 seconds |
| Close button | No | Yes |
| Use case | Quick feedback | Detailed alerts |
