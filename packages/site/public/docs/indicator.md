# Indicator

**Import:** `import { Indicator } from 'asterui'`

## Examples

### Basic Indicator

Simple indicator badge on elements.

```tsx
import React from 'react'
import { Indicator } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-6 flex-wrap items-center">
    <Indicator>
      <Indicator.Item />
      <div className="w-16 h-16 bg-base-300 rounded"></div>
    </Indicator>
    <Indicator>
      <Indicator.Item />
      <div className="w-16 h-16 bg-base-300 rounded-full"></div>
    </Indicator>
  </div>
)

export default App
```

### Indicator Positions

Place indicators at any of the 9 positions.

```tsx
import React from 'react'
import { Indicator } from 'asterui'

const App: React.FC = () => (
  <div className="grid grid-cols-3 gap-4">
    <Indicator>
      <Indicator.Item position="top-start" />
      <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">TL</div>
    </Indicator>
    <Indicator>
      <Indicator.Item position="top-center" />
      <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">TC</div>
    </Indicator>
    <Indicator>
      <Indicator.Item position="top-end" />
      <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">TR</div>
    </Indicator>
    <Indicator>
      <Indicator.Item position="middle-start" />
      <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">ML</div>
    </Indicator>
    <Indicator>
      <Indicator.Item position="middle-center" />
      <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">MC</div>
    </Indicator>
    <Indicator>
      <Indicator.Item position="middle-end" />
      <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">MR</div>
    </Indicator>
    <Indicator>
      <Indicator.Item position="bottom-start" />
      <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">BL</div>
    </Indicator>
    <Indicator>
      <Indicator.Item position="bottom-center" />
      <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">BC</div>
    </Indicator>
    <Indicator>
      <Indicator.Item position="bottom-end" />
      <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">BR</div>
    </Indicator>
  </div>
)

export default App
```

### Badge Content

Display numbers or text in the indicator badge.

```tsx
import React from 'react'
import { Indicator, Avatar } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-6 flex-wrap items-center">
    <Indicator>
      <Indicator.Item>5</Indicator.Item>
      <Avatar size="lg">JD</Avatar>
    </Indicator>
    <Indicator>
      <Indicator.Item>99+</Indicator.Item>
      <Avatar size="lg">AB</Avatar>
    </Indicator>
    <Indicator>
      <Indicator.Item>NEW</Indicator.Item>
      <div className="w-20 h-20 bg-base-300 rounded"></div>
    </Indicator>
  </div>
)

export default App
```

### Indicator on Button

Add indicators to buttons for notifications.

```tsx
import React from 'react'
import { Indicator, Button } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4 flex-wrap">
    <Indicator>
      <Indicator.Item>3</Indicator.Item>
      <Button>Messages</Button>
    </Indicator>
    <Indicator>
      <Indicator.Item>12</Indicator.Item>
      <Button type="secondary">Notifications</Button>
    </Indicator>
    <Indicator>
      <Indicator.Item />
      <Button type="accent">Inbox</Button>
    </Indicator>
  </div>
)

export default App
```

## API

### Indicator

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Content to wrap with indicator | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Indicator Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `position` | Position of the indicator | `top-start' \| 'top-center' \| 'top-end' \| 'middle-start' \| 'middle-center' \| 'middle-end' \| 'bottom-start' \| 'bottom-center' \| 'bottom-end` | `top-end` |
| `children` | Badge content (number or text) | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
