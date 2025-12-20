# Notification

**Import:** `import { Notification } from 'asterui'`

## Examples

### Basic Notifications

Different notification types with simple messages.

```tsx
import React from 'react'
import { notification, Button, Space } from 'asterui'

const App: React.FC = () => {
  return (
    <Space direction="horizontal" size="sm" wrap>
      <Button
        color="primary"
        onClick={() =>
          notification.success({
            message: 'Success',
            description: 'Your changes have been saved successfully.',
          })
        }
      >
        Success
      </Button>

      <Button
        onClick={() =>
          notification.error({
            message: 'Error',
            description: 'Failed to save changes. Please try again.',
          })
        }
      >
        Error
      </Button>

      <Button
        onClick={() =>
          notification.info({
            message: 'Information',
            description: 'This is an informational message.',
          })
        }
      >
        Info
      </Button>

      <Button
        onClick={() =>
          notification.warning({
            message: 'Warning',
            description: 'Your session will expire in 5 minutes.',
          })
        }
      >
        Warning
      </Button>
    </Space>
  )
}

export default App
```

### Placement

Show notifications in different corner positions.

```tsx
import React from 'react'
import { notification, Button, Space } from 'asterui'

const App: React.FC = () => {
  return (
    <Space direction="horizontal" size="sm" wrap>
      <Button
        onClick={() =>
          notification.success({
            message: 'Top Left',
            description: 'Notification from top left corner.',
            placement: 'topLeft',
          })
        }
      >
        Top Left
      </Button>

      <Button
        onClick={() =>
          notification.success({
            message: 'Top Right',
            description: 'Notification from top right corner.',
            placement: 'topRight',
          })
        }
      >
        Top Right
      </Button>

      <Button
        onClick={() =>
          notification.success({
            message: 'Bottom Left',
            description: 'Notification from bottom left corner.',
            placement: 'bottomLeft',
          })
        }
      >
        Bottom Left
      </Button>

      <Button
        onClick={() =>
          notification.success({
            message: 'Bottom Right',
            description: 'Notification from bottom right corner.',
            placement: 'bottomRight',
          })
        }
      >
        Bottom Right
      </Button>
    </Space>
  )
}

export default App
```

### Custom Duration

Control how long notifications stay visible.

```tsx
import React from 'react'
import { notification, Button, Space } from 'asterui'

const App: React.FC = () => {
  return (
    <Space direction="horizontal" size="sm" wrap>
      <Button
        onClick={() =>
          notification.info({
            message: 'Quick Message',
            description: 'This will close in 2 seconds.',
            duration: 2,
          })
        }
      >
        2 seconds
      </Button>

      <Button
        color="primary"
        onClick={() =>
          notification.info({
            message: 'Standard Message',
            description: 'This uses the default duration (4.5s).',
          })
        }
      >
        Default (4.5s)
      </Button>

      <Button
        onClick={() =>
          notification.info({
            message: 'Long Message',
            description: 'This will stay visible for 10 seconds.',
            duration: 10,
          })
        }
      >
        10 seconds
      </Button>

      <Button
        onClick={() =>
          notification.info({
            message: 'Persistent',
            description: 'This will not auto-close. Click to dismiss.',
            duration: 0,
          })
        }
      >
        No Auto-close
      </Button>
    </Space>
  )
}

export default App
```

## API

### Notification

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `message` | Notification title | `React.ReactNode` | `-` |
| `description` | Notification content | `React.ReactNode` | `-` |
| `duration` | Auto-close duration in seconds | `number` | `4.5` |
| `placement` | Position of notification | `topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight` | `topRight` |
| `type` | Type of notification (for notification.open) | `success' \| 'error' \| 'info' \| 'warning` | `-` |
