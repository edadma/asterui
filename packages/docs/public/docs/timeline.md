# Timeline

Display events in chronological order with alternating or vertical layouts.

**Import:** `import { Timeline } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Timeline } from 'asterui'
import { CheckCircleIcon } from '@aster-ui/icons/solid'

const CheckIcon = () => <CheckCircleIcon />

const App: React.FC = () => (
  <Timeline>
    <Timeline.Item start="1984" icon={<CheckIcon />} end="First Macintosh computer" endBox />
    <Timeline.Item start="iMac" icon={<CheckIcon />} end="1998" startBox />
  </Timeline>
)

export default App
```

### Vertical

```tsx
import React from 'react'
import { Timeline } from 'asterui'
import { CheckCircleIcon } from '@aster-ui/icons/solid'

const CheckIcon = () => <CheckCircleIcon className="text-primary" />

const App: React.FC = () => (
  <Timeline vertical>
    <Timeline.Item start="2015" icon={<CheckIcon />} end="Apple Watch" endBox />
    <Timeline.Item start="2017" icon={<CheckIcon />} end="iPhone X" endBox />
    <Timeline.Item start="2020" icon={<CheckIcon />} end="Apple Silicon M1" endBox />
  </Timeline>
)

export default App
```

### Horizontal

```tsx
import React from 'react'
import { Timeline } from 'asterui'
import { CheckCircleIcon, ClockIcon } from '@aster-ui/icons/solid'

const App: React.FC = () => (
  <Timeline horizontal>
    <Timeline.Item start="Step 1" icon={<CheckCircleIcon />} end="Planning" endBox />
    <Timeline.Item start="Step 2" icon={<CheckCircleIcon />} end="Development" endBox />
    <Timeline.Item start="Step 3" icon={<ClockIcon />} end="Testing" endBox />
    <Timeline.Item start="Step 4" icon={<ClockIcon />} end="Launch" endBox />
  </Timeline>
)

export default App
```

### Compact

```tsx
import React from 'react'
import { Timeline } from 'asterui'
import { CheckCircleIcon } from '@aster-ui/icons/solid'

const CheckIcon = () => <CheckCircleIcon />

const App: React.FC = () => (
  <Timeline vertical compact>
    <Timeline.Item
      icon={<CheckIcon />}
      end={
        <div>
          <time>1984</time>
          <div className="text-lg font-black">First Macintosh computer</div>
        </div>
      }
      endBox
    />
    <Timeline.Item
      icon={<CheckIcon />}
      end={
        <div>
          <time>1998</time>
          <div className="text-lg font-black">iMac</div>
        </div>
      }
      endBox
    />
    <Timeline.Item
      icon={<CheckIcon />}
      end={
        <div>
          <time>2001</time>
          <div className="text-lg font-black">iPod</div>
        </div>
      }
      endBox
    />
  </Timeline>
)

export default App
```

### Colors

```tsx
import React from 'react'
import { Timeline } from 'asterui'
import { CheckCircleIcon, ClockIcon, ExclamationCircleIcon } from '@aster-ui/icons/solid'

const App: React.FC = () => (
  <Timeline vertical>
    <Timeline.Item start="Completed" icon={<CheckCircleIcon />} end="Task 1" endBox color="success" />
    <Timeline.Item start="In Progress" icon={<ClockIcon />} end="Task 2" endBox color="info" />
    <Timeline.Item start="Warning" icon={<ExclamationCircleIcon />} end="Task 3" endBox color="warning" />
    <Timeline.Item start="Error" icon={<ExclamationCircleIcon />} end="Task 4" endBox color="error" />
  </Timeline>
)

export default App
```

### Mode

```tsx
import React from 'react'
import { Timeline } from 'asterui'

// Mode: start - all items on start side
<Timeline vertical mode="start">
  <Timeline.Item start="2020" icon={<CheckIcon />} end="Event One" endBox />
  <Timeline.Item start="2021" icon={<CheckIcon />} end="Event Two" endBox />
</Timeline>

// Mode: end - all items on end side
<Timeline vertical mode="end">
  <Timeline.Item start="2020" icon={<CheckIcon />} end="Event One" endBox />
  <Timeline.Item start="2021" icon={<CheckIcon />} end="Event Two" endBox />
</Timeline>

// Mode: alternate (default) - items alternate sides
<Timeline vertical mode="alternate">
  <Timeline.Item start="2020" icon={<CheckIcon />} end="Event One" endBox />
  <Timeline.Item start="2021" icon={<CheckIcon />} end="Event Two" endBox />
</Timeline>
```

### Pending State

```tsx
import React from 'react'
import { Timeline } from 'asterui'
import { CheckCircleIcon } from '@aster-ui/icons/solid'

const App: React.FC = () => (
  <Timeline vertical pending="Recording in progress...">
    <Timeline.Item start="9:00 AM" icon={<CheckCircleIcon />} end="Meeting started" endBox color="success" />
    <Timeline.Item start="9:30 AM" icon={<CheckCircleIcon />} end="Presentation complete" endBox color="success" />
    <Timeline.Item start="10:00 AM" icon={<CheckCircleIcon />} end="Q&A session" endBox color="success" />
  </Timeline>
)

export default App
```

### Loading State

```tsx
import React from 'react'
import { Timeline } from 'asterui'
import { CheckCircleIcon, ClockIcon } from '@aster-ui/icons/solid'

const App: React.FC = () => (
  <Timeline vertical>
    <Timeline.Item start="Step 1" icon={<CheckCircleIcon />} end="Complete" endBox color="success" />
    <Timeline.Item start="Step 2" loading end="Processing..." endBox />
    <Timeline.Item start="Step 3" icon={<ClockIcon />} end="Pending" endBox />
  </Timeline>
)

export default App
```

### Reverse Order

```tsx
import React, { useState } from 'react'
import { Timeline, Button } from 'asterui'

const App: React.FC = () => {
  const [reversed, setReversed] = useState(false)

  return (
    <>
      <Button size="sm" onClick={() => setReversed(!reversed)}>
        {reversed ? 'Normal Order' : 'Reverse Order'}
      </Button>
      <Timeline vertical reverse={reversed}>
        <Timeline.Item start="1st" icon={<CheckIcon />} end="First Event" endBox />
        <Timeline.Item start="2nd" icon={<CheckIcon />} end="Second Event" endBox />
        <Timeline.Item start="3rd" icon={<CheckIcon />} end="Third Event" endBox />
      </Timeline>
    </>
  )
}

export default App
```

### Declarative API

```tsx
import React from 'react'
import { Timeline } from 'asterui'
import type { TimelineItemConfig } from 'asterui'
import { CheckCircleIcon } from '@aster-ui/icons/solid'

const CheckIcon = () => <CheckCircleIcon />

const items: TimelineItemConfig[] = [
  { key: '1', start: '2020', end: 'Company Founded', endBox: true, icon: <CheckIcon />, color: 'primary' },
  { key: '2', start: '2021', end: 'Series A Funding', endBox: true, icon: <CheckIcon />, color: 'success' },
  { key: '3', start: '2022', end: 'Global Expansion', endBox: true, icon: <CheckIcon />, color: 'info' },
  { key: '4', start: '2023', end: 'IPO', endBox: true, icon: <CheckIcon />, color: 'warning' },
]

const App: React.FC = () => (
  <Timeline vertical items={items} />
)

export default App
```

## API

### Timeline

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Timeline items (compound pattern) | `React.ReactNode` | `-` |
| `items` | Timeline items (declarative API) | `TimelineItemConfig[]` | `-` |
| `vertical` | Vertical layout orientation | `boolean` | `false` |
| `horizontal` | Horizontal layout (default) | `boolean` | `false` |
| `compact` | All items on one side | `boolean` | `false` |
| `snapIcon` | Snap icon to start instead of center | `boolean` | `false` |
| `mode` | Item distribution layout | `'start' \| 'alternate' \| 'end'` | `'alternate'` |
| `reverse` | Reverse item order | `boolean` | `false` |
| `pending` | Show pending/loading indicator at end | `React.ReactNode` | `-` |
| `pendingIcon` | Custom icon for pending item | `React.ReactNode` | `-` |
| `data-testid` | Test ID for the component | `string` | `'timeline'` |
| `aria-label` | Accessible label for the timeline | `string` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Timeline.Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `start` | Content at start position (left/top) | `React.ReactNode` | `-` |
| `end` | Content at end position (right/bottom) | `React.ReactNode` | `-` |
| `icon` | Central icon or marker | `React.ReactNode` | `-` |
| `startBox` | Wrap start content in timeline-box | `boolean` | `false` |
| `endBox` | Wrap end content in timeline-box | `boolean` | `false` |
| `color` | Color of the timeline dot/connector | `'primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `-` |
| `loading` | Show loading spinner instead of icon | `boolean` | `false` |
| `data-testid` | Test ID for this item | `string` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### TimelineItemConfig

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `key` | Unique key for the item | `React.Key` | `-` |
| `start` | Content at start position | `React.ReactNode` | `-` |
| `end` | Content at end position | `React.ReactNode` | `-` |
| `icon` | Central icon or marker | `React.ReactNode` | `-` |
| `startBox` | Wrap start content in timeline-box | `boolean` | `false` |
| `endBox` | Wrap end content in timeline-box | `boolean` | `false` |
| `color` | Color of the timeline dot/connector | `TimelineColor` | `-` |
| `loading` | Show loading spinner | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |

## Accessibility

The Timeline component follows accessibility best practices:

- Uses semantic list structure (`role="list"`) for screen readers
- Timeline items are announced in order
- Supports `aria-label` for describing the timeline purpose
- Connectors are decorative and hidden from assistive technology
- Loading states include visual spinner indicators

## Testing

The component exposes `data-testid` attributes:

| Element | Test ID |
|---------|---------|
| Root wrapper | `{baseTestId}` |
| Timeline items | `{baseTestId}-item-{index}` |
