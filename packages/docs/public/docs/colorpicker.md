# ColorPicker

**Import:** `import { ColorPicker } from 'asterui'`

## Examples

### Basic ColorPicker

Simple color picker.

```tsx
import React from 'react'
import { ColorPicker } from 'asterui'

const App: React.FC = () => (
  <ColorPicker defaultValue="#6366f1" />
)

export default App
```

### With Text Display

Color picker showing the color value.

```tsx
import React from 'react'
import { ColorPicker } from 'asterui'

const App: React.FC = () => (
  <ColorPicker defaultValue="#10b981" showText />
)

export default App
```

### With Presets

Color picker with preset color options.

```tsx
import React from 'react'
import { ColorPicker } from 'asterui'

const presets = [
  '#f43f5e', '#ec4899', '#d946ef', '#a855f7',
  '#8b5cf6', '#6366f1', '#3b82f6', '#0ea5e9',
  '#06b6d4', '#14b8a6', '#10b981', '#22c55e',
]

const App: React.FC = () => (
  <ColorPicker defaultValue="#6366f1" presets={presets} />
)

export default App
```

### Sizes

Different color picker sizes.

```tsx
import React from 'react'
import { ColorPicker, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="horizontal" size="md" align="center">
    <ColorPicker size="sm" defaultValue="#f43f5e" />
    <ColorPicker size="md" defaultValue="#6366f1" />
    <ColorPicker size="lg" defaultValue="#10b981" />
  </Space>
)

export default App
```

### Controlled

Controlled color picker with state.

```tsx
import React, { useState } from 'react'
import { ColorPicker, Space } from 'asterui'

const App: React.FC = () => {
  const [color, setColor] = useState('#6366f1')

  return (
    <Space direction="vertical" size="sm">
      <ColorPicker value={color} onChange={setColor} showText />
      <div
        className="w-full h-16 rounded-lg"
        style={{ backgroundColor: color }}
      />
    </Space>
  )
}

export default App
```

## API

### Color Picker

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Controlled color value | `string` | `-` |
| `defaultValue` | Initial color value | `string` | `#1677ff` |
| `onChange` | Change handler | `(color: string) => void` | `-` |
| `format` | Color format | `hex' \| 'rgb' \| 'hsl` | `hex` |
| `presets` | Preset color options | `string[]` | `-` |
| `showText` | Show color value text | `boolean` | `false` |
| `disabled` | Disable the picker | `boolean` | `false` |
| `size` | Picker size | `sm' \| 'md' \| 'lg` | `md` |
| `className` | Additional CSS classes | `string` | `-` |
