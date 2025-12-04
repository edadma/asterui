# Avatar

**Import:** `import { Avatar } from 'asterui'`

## Examples

### Basic Avatar

Simple avatar with image using the src prop.

```tsx
import React from 'react'
import { Avatar } from 'asterui'

const App: React.FC = () => (
  <Avatar
    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    alt="User avatar"
  />
)

export default App
```

### Sizes

Control avatar size with the size prop.

```tsx
import React from 'react'
import { Avatar, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="sm" align="center">
    <Avatar size="xs" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar size="sm" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar size="md" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar size="xl" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </Space>
)

export default App
```

### Shapes

Circle or square avatars.

```tsx
import React from 'react'
import { Avatar, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="sm">
    <Avatar shape="circle" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar shape="square" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </Space>
)

export default App
```

### Status Indicators

Show online or offline presence.

```tsx
import React from 'react'
import { Avatar, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="sm">
    <Avatar status="online" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar status="offline" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </Space>
)

export default App
```

### Text Avatars

Display initials or text.

```tsx
import React from 'react'
import { Avatar, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="sm" align="center">
    <Avatar size="xl">
      <span className="text-3xl">AI</span>
    </Avatar>
    <Avatar size="lg">
      <span className="text-xl">JD</span>
    </Avatar>
    <Avatar size="md">
      <span>MX</span>
    </Avatar>
  </Space>
)

export default App
```

### Icon Avatars

Display icons instead of images.

```tsx
import React from 'react'
import { Avatar, Space } from 'asterui'
import { UserIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Space direction="horizontal" size="sm">
    <Avatar icon={<UserIcon className="h-8 w-8" />} />
    <Avatar size="lg" icon={<UserCircleIcon className="h-10 w-10" />} />
  </Space>
)

export default App
```

### Avatar Group

Group multiple avatars with overlap.

```tsx
import React from 'react'
import { Avatar } from 'asterui'

const App: React.FC = () => (
  <Avatar.Group>
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </Avatar.Group>
)

export default App
```

### Avatar Group with Max Count

Show overflow count when exceeding max.

```tsx
import React from 'react'
import { Avatar } from 'asterui'

const App: React.FC = () => (
  <Avatar.Group max={3}>
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </Avatar.Group>
)

export default App
```

## API

### Avatar

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `src` | Image source URL | `string` | `-` |
| `alt` | Image alt text | `string` | `avatar` |
| `icon` | Icon element to display | `React.ReactNode` | `-` |
| `children` | Text content (e.g., initials) or custom content | `React.ReactNode` | `-` |
| `size` | Avatar size | `xs' \| 'sm' \| 'md' \| 'lg' \| 'xl` | `md` |
| `shape` | Avatar shape | `circle' \| 'square` | `circle` |
| `status` | Presence status indicator | `online' \| 'offline` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |

### Avatar Group

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Multiple Avatar components | `React.ReactNode` | `-` |
| `max` | Maximum avatars to show before +N overflow | `number` | `-` |
| `size` | Size for all avatars in the group | `xs' \| 'sm' \| 'md' \| 'lg' \| 'xl` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles | `React.CSSProperties` | `-` |
