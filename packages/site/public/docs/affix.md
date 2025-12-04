# Affix

**Import:** `import { Affix } from 'asterui'`

## Examples

### Basic Affix

Element becomes fixed when scrolled past its position.

```tsx
import React from 'react'
import { Affix, Button } from 'asterui'

const App: React.FC = () => (
  <Affix offsetTop={80}>
    <Button type="primary">Affixed Button</Button>
  </Affix>
)

export default App
```

### With Callback

Get notified when affix state changes.

```tsx
import React, { useState } from 'react'
import { Affix, Button } from 'asterui'

const App: React.FC = () => {
  const [affixed, setAffixed] = useState(false)

  return (
    <Affix offsetTop={80} onChange={setAffixed}>
      <Button type={affixed ? 'primary' : 'neutral'}>
        {affixed ? 'Affixed!' : 'Not Affixed'}
      </Button>
    </Affix>
  )
}

export default App
```

### Affix to Bottom

Fix element to bottom of viewport.

```tsx
import React from 'react'
import { Affix, Button } from 'asterui'

const App: React.FC = () => (
  <Affix offsetBottom={20}>
    <Button type="secondary">Bottom Affixed</Button>
  </Affix>
)

export default App
```

### Custom Target

Affix within a scrollable container.

```tsx
import React from 'react'
import { Affix } from 'asterui'

const App: React.FC = () => (
  <div id="scroll-container" className="h-64 overflow-auto">
    <Affix offsetTop={0} target={() => document.getElementById('scroll-container')!}>
      <div className="bg-primary text-primary-content p-2">
        Sticky Header
      </div>
    </Affix>
    {/* Scrollable content */}
  </div>
)

export default App
```

## API

### Affix

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Content to make sticky | `React.ReactNode` | `-` |
| `offsetTop` | Offset from top when fixed (pixels) | `number` | `-` |
| `offsetBottom` | Offset from bottom when fixed (pixels) | `number` | `-` |
| `target` | Scroll target element | `() => HTMLElement \| Window` | `-` |
| `onChange` | Callback when affix state changes | `(affixed: boolean) => void` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
