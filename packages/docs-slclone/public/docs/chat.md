# Chat

Chat message bubbles for displaying conversations with avatars and metadata.

**Import:** `import { Chat } from 'asterui'`

## Examples

### Basic Chat

Simple chat bubbles with different positions.

```tsx
import React from 'react'
import { Chat } from 'asterui'

const App: React.FC = () => (
  <div>
    <Chat position="start" message="Hey! How are you?" />
    <Chat position="end" message="I'm doing great, thanks for asking!" />
  </div>
)

export default App
```

### With Avatars

Chat bubbles with user avatars.

```tsx
import React from 'react'
import { Chat } from 'asterui'

const App: React.FC = () => (
  <div>
    <Chat
      position="start"
      avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      avatarAlt="User"
      message="Hey! Did you see the new updates?"
    />
    <Chat
      position="end"
      avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      avatarAlt="Me"
      message="Yes! They look amazing!"
    />
  </div>
)

export default App
```

### With Headers

Chat bubbles with name and timestamp headers.

```tsx
import React from 'react'
import { Chat } from 'asterui'

const App: React.FC = () => (
  <div>
    <Chat
      position="start"
      avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      header={<span>Alice <time className="text-xs opacity-50">12:45</time></span>}
      message="Good morning! Ready for the meeting?"
    />
    <Chat
      position="end"
      avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      header={<span>Bob <time className="text-xs opacity-50">12:46</time></span>}
      message="Yes, joining now!"
    />
  </div>
)

export default App
```

### Colored Bubbles

Chat bubbles with different color variants.

```tsx
import React from 'react'
import { Chat } from 'asterui'

const App: React.FC = () => (
  <div>
    <Chat position="start" color="primary" message="Primary color message" />
    <Chat position="end" color="secondary" message="Secondary color message" />
    <Chat position="start" color="success" message="Success color message" />
    <Chat position="end" color="error" message="Error color message" />
  </div>
)

export default App
```

### With Footer

Chat bubbles with delivery status footer.

```tsx
import React from 'react'
import { Chat } from 'asterui'

const App: React.FC = () => (
  <div>
    <Chat
      position="end"
      avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      footer={<span className="text-xs opacity-50">Delivered</span>}
      message="Did you get my message?"
    />
    <Chat
      position="end"
      avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      footer={<span className="text-xs opacity-50">Seen at 12:46</span>}
      message="Hello?"
    />
  </div>
)

export default App
```

## API

### Chat Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `message` | Message content | `React.ReactNode` | `-` |
| `position` | Bubble position | `'start' \| 'end'` | `'start'` |
| `avatar` | Avatar image URL | `string` | `-` |
| `avatarAlt` | Avatar alt text | `string` | `-` |
| `header` | Header content (name, time) | `React.ReactNode` | `-` |
| `footer` | Footer content (status) | `React.ReactNode` | `-` |
| `color` | Bubble color variant | `'primary' \| 'secondary' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error'` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

## Accessibility

- Use meaningful alt text for avatar images
- Message content is readable by screen readers
- Position classes help convey conversation flow
