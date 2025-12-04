# FloatButton

**Import:** `import { FloatButton } from 'asterui'`

## Examples

### Basic

Simple floating action button.

```tsx
import React from 'react'
import { FloatButton } from 'asterui'
import { PlusIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <FloatButton
    icon={<PlusIcon className="w-5 h-5" />}
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
import { PlusIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <FloatButton
    icon={<PlusIcon className="w-5 h-5" />}
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
import { QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <FloatButton.Group trigger="click">
    <FloatButton
      icon={<QuestionMarkCircleIcon className="w-5 h-5" />}
      tooltip="Help"
      onClick={() => console.log('Help')}
    />
    <FloatButton
      icon={<ChatBubbleLeftRightIcon className="w-5 h-5" />}
      tooltip="Support"
      onClick={() => console.log('Support')}
    />
    <FloatButton
      icon={<ArrowPathIcon className="w-5 h-5" />}
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
