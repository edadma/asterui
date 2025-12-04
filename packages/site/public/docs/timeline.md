# Timeline

Display events in chronological order with alternating or vertical layouts.

**Import:** `import { Timeline } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Timeline } from 'asterui'

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
)

const App: React.FC = () => (
  <Timeline>
    <Timeline.Item
      start="1984"
      icon={<CheckIcon />}
      end="First Macintosh computer"
      endBox
    />
    <Timeline.Item
      start="iMac"
      icon={<CheckIcon />}
      end="1998"
      startBox
    />
  </Timeline>
)

export default App
```

### Vertical

```tsx
import React from 'react'
import { Timeline } from 'asterui'

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="text-primary w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
)

const App: React.FC = () => (
  <Timeline vertical>
    <Timeline.Item
      start="2015"
      icon={<CheckIcon />}
      end="Apple Watch"
      endBox
    />
    <Timeline.Item
      start="2017"
      icon={<CheckIcon />}
      end="iPhone X"
      endBox
    />
    <Timeline.Item
      start="2020"
      icon={<CheckIcon />}
      end="Apple Silicon M1"
      endBox
    />
  </Timeline>
)

export default App
```

### Compact

```tsx
import React from 'react'
import { Timeline } from 'asterui'

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
)

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

## API

### Timeline

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Timeline items | `React.ReactNode` | `-` |
| `vertical` | Vertical layout orientation | `boolean` | `false` |
| `horizontal` | Horizontal layout (default) | `boolean` | `false` |
| `compact` | All items on one side | `boolean` | `false` |
| `snapIcon` | Snap icon to start instead of center | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |

### Timeline Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `start` | Content at start position (left/top) | `React.ReactNode` | `-` |
| `end` | Content at end position (right/bottom) | `React.ReactNode` | `-` |
| `icon` | Central icon or marker | `React.ReactNode` | `-` |
| `startBox` | Wrap start content in timeline-box | `boolean` | `false` |
| `endBox` | Wrap end content in timeline-box | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
