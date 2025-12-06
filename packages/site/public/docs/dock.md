# Dock

**Import:** `import { Dock } from 'asterui'`

## Examples

### Basic Dock

Mobile-style bottom navigation with icons and labels.

```tsx
import React, { useState } from 'react'
import { Dock } from 'asterui'
import { HomeIcon, MagnifyingGlassIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => {
  const [active, setActive] = useState(0)

  return (
    <Dock
      items={[
        { icon: <HomeIcon className="w-6 h-6" />, label: 'Home' },
        { icon: <MagnifyingGlassIcon className="w-6 h-6" />, label: 'Search' },
        { icon: <HeartIcon className="w-6 h-6" />, label: 'Favorites' },
        { icon: <UserIcon className="w-6 h-6" />, label: 'Profile' },
      ]}
      activeIndex={active}
      onChange={setActive}
    />
  )
}

export default App
```

### Sizes

Different dock sizes.

```tsx
import React from 'react'
import { Dock, Space } from 'asterui'
import { HomeIcon, Cog6ToothIcon, BellIcon } from '@heroicons/react/24/outline'

const items = [
  { icon: <HomeIcon className="w-5 h-5" /> },
  { icon: <Cog6ToothIcon className="w-5 h-5" /> },
  { icon: <BellIcon className="w-5 h-5" /> },
]

const App: React.FC = () => (
  <Space direction="vertical" size="lg" className="w-full">
    <Dock size="xs" items={items} activeIndex={0} />
    <Dock size="sm" items={items} activeIndex={0} />
    <Dock size="md" items={items} activeIndex={0} />
    <Dock size="lg" items={items} activeIndex={0} />
  </Space>
)

export default App
```

### Icons Only

Dock without labels for a minimal look.

```tsx
import React, { useState } from 'react'
import { Dock } from 'asterui'
import { HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => {
  const [active, setActive] = useState(2)

  return (
    <Dock
      items={[
        { icon: <HomeIcon className="w-6 h-6" /> },
        { icon: <MagnifyingGlassIcon className="w-6 h-6" /> },
        { icon: <PlusCircleIcon className="w-8 h-8" /> },
        { icon: <HeartIcon className="w-6 h-6" /> },
        { icon: <UserIcon className="w-6 h-6" /> },
      ]}
      activeIndex={active}
      onChange={setActive}
    />
  )
}

export default App
```

### Custom Styling

Apply custom colors to the dock.

```tsx
import React, { useState } from 'react'
import { Dock } from 'asterui'
import { HomeIcon, Cog6ToothIcon, BellIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => {
  const [active, setActive] = useState(0)

  return (
    <Dock
      className="bg-neutral text-neutral-content"
      items={[
        { icon: <HomeIcon className="w-6 h-6" />, label: 'Home' },
        { icon: <Cog6ToothIcon className="w-6 h-6" />, label: 'Settings' },
        { icon: <BellIcon className="w-6 h-6" />, label: 'Alerts' },
      ]}
      activeIndex={active}
      onChange={setActive}
    />
  )
}

export default App
```

### Using Children

For more control, use Dock.Item children instead of the items prop.

```tsx
import React from 'react'
import { Dock } from 'asterui'
import { HomeIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Dock>
    <Dock.Item active>
      <HomeIcon className="w-6 h-6" />
      <span className="dock-label">Home</span>
    </Dock.Item>
    <Dock.Item>
      <Cog6ToothIcon className="w-6 h-6" />
      <span className="dock-label">Settings</span>
    </Dock.Item>
  </Dock>
)

export default App
```

## API

### Dock

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `items` | Dock items configuration | `DockItemConfig[]` | - |
| `size` | Size variant | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `activeIndex` | Controlled active item index | `number` | - |
| `onChange` | Callback when item is clicked | `(index: number) => void` | - |
| `children` | Dock.Item children (alternative to items) | `React.ReactNode` | - |
| `className` | Additional CSS classes | `string` | - |

### DockItemConfig

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `icon` | Icon element | `React.ReactNode` | - |
| `label` | Label text | `string` | - |
| `active` | Whether item is active (when not using activeIndex) | `boolean` | `false` |
| `disabled` | Whether item is disabled | `boolean` | `false` |
| `onClick` | Click handler | `() => void` | - |

### Dock.Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `active` | Whether item is active | `boolean` | `false` |
| `children` | Item content (icon and label) | `React.ReactNode` | - |
| `className` | Additional CSS classes | `string` | - |
