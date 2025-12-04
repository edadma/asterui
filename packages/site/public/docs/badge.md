# Badge

**Import:** `import { Badge } from 'asterui'`

## Examples

### Basic Notification Badges

Display count badges on elements.

```tsx
import React from 'react'
import { Badge, Button } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-6 flex-wrap">
    <Badge count={5}>
      <Button>Messages</Button>
    </Badge>
    <Badge count={99}>
      <Button type="secondary">Notifications</Button>
    </Badge>
    <Badge count={0}>
      <Button type="accent">No Count</Button>
    </Badge>
  </div>
)

export default App
```

### Overflow Count

Show count+ when exceeding the overflow threshold.

```tsx
import React from 'react'
import { Badge, Avatar } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-6 flex-wrap items-center">
    <Badge count={99}>
      <Avatar size="lg">U</Avatar>
    </Badge>
    <Badge count={100} overflowCount={99}>
      <Avatar size="lg">U</Avatar>
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <Avatar size="lg">U</Avatar>
    </Badge>
  </div>
)

export default App
```

### Badge Positioning

Position badges at any of the 9 corners.

```tsx
import React from 'react'
import { Badge, Avatar } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-6 flex-wrap">
    <Badge count={5} position="top-start">
      <Avatar size="lg">TL</Avatar>
    </Badge>
    <Badge count={5} position="top-center">
      <Avatar size="lg">TC</Avatar>
    </Badge>
    <Badge count={5} position="top-end">
      <Avatar size="lg">TR</Avatar>
    </Badge>
    <Badge count={5} position="bottom-start">
      <Avatar size="lg">BL</Avatar>
    </Badge>
    <Badge count={5} position="bottom-end">
      <Avatar size="lg">BR</Avatar>
    </Badge>
  </div>
)

export default App
```

### Status Badges

Status indicators with optional text labels.

```tsx
import React from 'react'
import { Badge, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="sm">
    <Badge status="success" text="Success" />
    <Badge status="processing" text="Processing" />
    <Badge status="error" text="Error" />
    <Badge status="warning" text="Warning" />
    <Badge status="default" text="Default" />
  </Space>
)

export default App
```

### Ribbon Badges

Decorative ribbon-style badges.

```tsx
import React from 'react'
import { Badge } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-6 flex-wrap">
    <Badge ribbon="Recommended">
      <div className="card bg-base-200 w-48 p-4">
        <h3 className="font-bold">Premium Plan</h3>
        <p>Best value for teams</p>
      </div>
    </Badge>
    <Badge ribbon="New" ribbonPlacement="start">
      <div className="card bg-base-200 w-48 p-4">
        <h3 className="font-bold">Pro Plan</h3>
        <p>For professionals</p>
      </div>
    </Badge>
  </div>
)

export default App
```

### Dot Badges

Small circular indicators for presence or status.

```tsx
import React from 'react'
import { Badge, Button } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-6 flex-wrap">
    <Badge dot type="error">
      <Button>Notifications</Button>
    </Badge>
    <Badge dot type="success">
      <Button type="ghost">Online</Button>
    </Badge>
    <Badge dot type="warning">
      <Button type="secondary">Pending</Button>
    </Badge>
  </div>
)

export default App
```

### Badge Colors

Standalone count badges with different colors.

```tsx
import React from 'react'
import { Badge, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="sm" wrap>
    <Badge count={5} />
    <Badge count={5} type="primary" />
    <Badge count={5} type="secondary" />
    <Badge count={5} type="accent" />
    <Badge count={5} type="info" />
    <Badge count={5} type="success" />
    <Badge count={5} type="warning" />
    <Badge count={5} type="error" />
  </Space>
)

export default App
```

### Badge Sizes

Four sizes available for badges.

```tsx
import React from 'react'
import { Badge, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="sm" align="center">
    <Badge count={5} type="primary" size="xs" />
    <Badge count={5} type="primary" size="sm" />
    <Badge count={5} type="primary" size="md" />
    <Badge count={5} type="primary" size="lg" />
  </Space>
)

export default App
```

### Show Zero

Display badge even when count is 0.

```tsx
import React from 'react'
import { Badge, Button, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="lg">
    <Badge count={0} showZero>
      <Button>Messages</Button>
    </Badge>
    <Badge count={0}>
      <Button type="secondary">Hidden Zero</Button>
    </Badge>
  </Space>
)

export default App
```

### Outline Style

Subtle outline style for count badges.

```tsx
import React from 'react'
import { Badge, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="sm" wrap>
    <Badge count={5} type="primary" outline />
    <Badge count={5} type="secondary" outline />
    <Badge count={5} type="accent" outline />
    <Badge count={5} type="info" outline />
    <Badge count={5} type="success" outline />
  </Space>
)

export default App
```

## API

### Badge

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `count` | Number to display in the badge | `number` | `-` |
| `showZero` | Whether to display badge when count is 0 | `boolean` | `false` |
| `overflowCount` | Max count to show before displaying count+ | `number` | `99` |
| `position` | Position of badge when wrapping children | `BadgePosition` | `top-end` |
| `status` | Status badge mode with colored dot | `success' \| 'processing' \| 'error' \| 'default' \| 'warning` | `-` |
| `text` | Text to display with status badge | `string` | `-` |
| `ribbon` | Ribbon text to display | `string` | `-` |
| `ribbonPlacement` | Ribbon placement | `start' \| 'end` | `end` |
| `dot` | Show a small circular dot instead of count | `boolean` | `false` |
| `type` | Badge color type | `default' \| 'primary' \| 'secondary' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'ghost` | `error` |
| `size` | Badge size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `outline` | Outline style variant | `boolean` | `false` |
| `children` | Element to wrap with badge (notification mode) | `ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
