# Mask

**Import:** `import { Mask } from 'asterui'`

## Examples

### Basic Shapes

Apply different mask shapes to images.

```tsx
import React from 'react'
import { Mask, Space } from 'asterui'

const App: React.FC = () => {
  return (
    <Space wrap>
      <Mask shape="squircle">
        <img src="https://picsum.photos/200" alt="squircle" />
      </Mask>
      <Mask shape="heart">
        <img src="https://picsum.photos/200" alt="heart" />
      </Mask>
      <Mask shape="hexagon">
        <img src="https://picsum.photos/200" alt="hexagon" />
      </Mask>
      <Mask shape="star">
        <img src="https://picsum.photos/200" alt="star" />
      </Mask>
    </Space>
  )
}

export default App
```

### All Shapes

All available mask shapes.

```tsx
import React from 'react'
import { Mask, Space } from 'asterui'

const shapes = [
  'squircle', 'heart', 'hexagon', 'hexagon-2', 'decagon',
  'pentagon', 'diamond', 'square', 'circle', 'star',
  'star-2', 'triangle', 'triangle-2', 'triangle-3', 'triangle-4'
] as const

const App: React.FC = () => {
  return (
    <Space wrap size="lg">
      {shapes.map((shape) => (
        <div key={shape} className="text-center">
          <Mask shape={shape}>
            <img src="https://picsum.photos/100" alt={shape} className="w-24 h-24" />
          </Mask>
          <div className="text-xs mt-1">{shape}</div>
        </div>
      ))}
    </Space>
  )
}

export default App
```

### Half Masks

Show only half of the masked content.

```tsx
import React from 'react'
import { Mask, Space } from 'asterui'

const App: React.FC = () => {
  return (
    <Space size="lg">
      <div className="text-center">
        <Mask shape="circle" half="half-1">
          <img src="https://picsum.photos/100" alt="half-1" className="w-24 h-24" />
        </Mask>
        <div className="text-xs mt-1">half-1</div>
      </div>
      <div className="text-center">
        <Mask shape="circle" half="half-2">
          <img src="https://picsum.photos/100" alt="half-2" className="w-24 h-24" />
        </Mask>
        <div className="text-xs mt-1">half-2</div>
      </div>
    </Space>
  )
}

export default App
```

## API

### Mask

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `shape` | Shape of the mask | `'squircle' \| 'heart' \| 'hexagon' \| 'hexagon-2' \| 'decagon' \| 'pentagon' \| 'diamond' \| 'square' \| 'circle' \| 'star' \| 'star-2' \| 'triangle' \| 'triangle-2' \| 'triangle-3' \| 'triangle-4'` | - |
| `half` | Show only half of the mask | `'half-1' \| 'half-2'` | - |
| `children` | Content to mask (typically an image) | `React.ReactNode` | - |
| `className` | Additional CSS classes | `string` | - |
