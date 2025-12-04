# Masonry

**Import:** `import { Masonry } from 'asterui'`

## Examples

### Basic Masonry

Simple masonry grid with varying height items.

```tsx
import React from 'react'
import { Masonry } from 'asterui'

const App: React.FC = () => (
  <Masonry columns={3} gap={16}>
    <div style={{ background: '#0092ff', padding: '16px', color: 'white', height: '120px' }}>
      Item 1
    </div>
    <div style={{ background: '#00d084', padding: '16px', color: 'white', height: '180px' }}>
      Item 2
    </div>
    <div style={{ background: '#ff6b6b', padding: '16px', color: 'white', height: '140px' }}>
      Item 3
    </div>
    <div style={{ background: '#ffd93d', padding: '16px', color: 'white', height: '200px' }}>
      Item 4
    </div>
    <div style={{ background: '#a29bfe', padding: '16px', color: 'white', height: '160px' }}>
      Item 5
    </div>
    <div style={{ background: '#fd79a8', padding: '16px', color: 'white', height: '130px' }}>
      Item 6
    </div>
  </Masonry>
)

export default App
```

### Responsive Columns

Responsive column count at different breakpoints.

```tsx
import React from 'react'
import { Masonry } from 'asterui'

const App: React.FC = () => (
  <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={16}>
    <div style={{ background: '#0092ff', padding: '16px', color: 'white', height: '120px' }}>
      Item 1
    </div>
    <div style={{ background: '#00d084', padding: '16px', color: 'white', height: '180px' }}>
      Item 2
    </div>
    <div style={{ background: '#ff6b6b', padding: '16px', color: 'white', height: '140px' }}>
      Item 3
    </div>
    <div style={{ background: '#ffd93d', padding: '16px', color: 'white', height: '200px' }}>
      Item 4
    </div>
    <div style={{ background: '#a29bfe', padding: '16px', color: 'white', height: '160px' }}>
      Item 5
    </div>
    <div style={{ background: '#fd79a8', padding: '16px', color: 'white', height: '130px' }}>
      Item 6
    </div>
    <div style={{ background: '#74b9ff', padding: '16px', color: 'white', height: '150px' }}>
      Item 7
    </div>
    <div style={{ background: '#fab1a0', padding: '16px', color: 'white', height: '170px' }}>
      Item 8
    </div>
  </Masonry>
)

export default App
```

### Custom Gap

Different gap sizes between items.

```tsx
import React from 'react'
import { Masonry } from 'asterui'

const App: React.FC = () => (
  <Masonry columns={3} gap={32}>
    <div style={{ background: '#0092ff', padding: '16px', color: 'white', height: '120px' }}>
      Item 1
    </div>
    <div style={{ background: '#00d084', padding: '16px', color: 'white', height: '180px' }}>
      Item 2
    </div>
    <div style={{ background: '#ff6b6b', padding: '16px', color: 'white', height: '140px' }}>
      Item 3
    </div>
    <div style={{ background: '#ffd93d', padding: '16px', color: 'white', height: '200px' }}>
      Item 4
    </div>
    <div style={{ background: '#a29bfe', padding: '16px', color: 'white', height: '160px' }}>
      Item 5
    </div>
    <div style={{ background: '#fd79a8', padding: '16px', color: 'white', height: '130px' }}>
      Item 6
    </div>
  </Masonry>
)

export default App
```

## API

### Masonry

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `gap` | Spacing between items in pixels | `number` | `16` |
| `children` | Items to display in masonry layout | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
