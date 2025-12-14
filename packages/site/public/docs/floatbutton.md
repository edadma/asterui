# FloatButton

**Import:** `import { FloatButton } from 'asterui'`

## Examples

### Basic

Simple floating action button.

```tsx
import React from 'react'
import { FloatButton } from 'asterui'
import { PlusIcon } from '@aster-ui/icons'

const App: React.FC = () => (
  <FloatButton
    icon={<PlusIcon />}
    onClick={() => console.log('Clicked!')}
  />
)

export default App
```

### With Tooltip

Float button with tooltip on hover.

```tsx
import React from 'react'
import { FloatButton } from 'asterui'
import { PlusIcon } from '@aster-ui/icons'

const App: React.FC = () => (
  <FloatButton
    icon={<PlusIcon />}
    tooltip="Add new item"
    type="primary"
    onClick={() => console.log('Add clicked!')}
  />
)

export default App
```

### Float Button Group

Group of float buttons that expand on click.

```tsx
import React from 'react'
import { FloatButton } from 'asterui'
import { QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ArrowPathIcon } from '@aster-ui/icons'

const App: React.FC = () => (
  <FloatButton.Group trigger="click">
    <FloatButton
      icon={<QuestionMarkCircleIcon />}
      tooltip="Help"
      onClick={() => console.log('Help')}
    />
    <FloatButton
      icon={<ChatBubbleLeftRightIcon />}
      tooltip="Support"
      onClick={() => console.log('Support')}
    />
    <FloatButton
      icon={<ArrowPathIcon />}
      tooltip="Refresh"
      onClick={() => console.log('Refresh')}
    />
  </FloatButton.Group>
)

export default App
```

### Back to Top

Scroll to top button that appears after scrolling down.

```tsx
import React from 'react'
import { FloatButton } from 'asterui'

const App: React.FC = () => (
  <FloatButton.BackTop
    visibilityHeight={400}
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  />
)

export default App
```

## API

### Float Button

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `icon` | Icon to display in the button | `React.ReactNode` | `-` |
| `onClick` | Click event handler | `() => void` | `-` |
| `type` | Button type | `primary' \| 'default` | `default` |
| `shape` | Button shape | `circle' \| 'square` | `circle` |
| `tooltip` | Tooltip text on hover | `string` | `-` |
| `badge` | Badge content to show | `number \| React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Float Button Group

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | FloatButton components to group | `React.ReactNode` | `-` |
| `trigger` | Trigger method to open the group | `click' \| 'hover` | `click` |
| `className` | Additional CSS classes | `string` | `-` |

### Float Button Back Top

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `visibilityHeight` | Height at which button becomes visible (pixels) | `number` | `400` |
| `onClick` | Click event handler | `() => void` | `-` |
| `target` | Scroll target element | `() => HTMLElement \| Window` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
