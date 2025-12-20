# Radial Progress

Circular progress indicator with customizable appearance.

**Import:** `import { RadialProgress } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { RadialProgress } from 'asterui'

const App: React.FC = () => (
  <RadialProgress value={70} />
)

export default App
```

### Values

```tsx
import React from 'react'
import { RadialProgress } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4">
    <RadialProgress value={0} />
    <RadialProgress value={25} />
    <RadialProgress value={50} />
    <RadialProgress value={75} />
    <RadialProgress value={100} />
  </div>
)

export default App
```

### Colors

```tsx
import React from 'react'
import { RadialProgress } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4">
    <RadialProgress value={70} color="primary" />
    <RadialProgress value={70} color="secondary" />
    <RadialProgress value={70} color="accent" />
    <RadialProgress value={70} color="success" />
    <RadialProgress value={70} color="warning" />
    <RadialProgress value={70} color="error" />
    <RadialProgress value={70} color="info" />
  </div>
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { RadialProgress } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4 items-center">
    <RadialProgress value={70} size={3} />
    <RadialProgress value={70} size={5} />
    <RadialProgress value={70} size={8} />
    <RadialProgress value={70} size={12} />
  </div>
)

export default App
```

### Thickness

```tsx
import React from 'react'
import { RadialProgress } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4">
    <RadialProgress value={70} thickness={2} />
    <RadialProgress value={70} thickness={5} />
    <RadialProgress value={70} thickness={10} />
    <RadialProgress value={70} thickness={20} />
  </div>
)

export default App
```

### Custom Content

```tsx
import React from 'react'
import { RadialProgress } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4">
    <RadialProgress value={85}>
      <div className="text-xs">85/100</div>
    </RadialProgress>
    <RadialProgress value={60}>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold">60</div>
        <div className="text-xs">days</div>
      </div>
    </RadialProgress>
    <RadialProgress value={100} color="success">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </RadialProgress>
  </div>
)

export default App
```

### No Value

```tsx
import React from 'react'
import { RadialProgress } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4">
    <RadialProgress value={30} showValue={false} />
    <RadialProgress value={60} showValue={false} color="primary" />
    <RadialProgress value={90} showValue={false} color="success" />
  </div>
)

export default App
```

### Background

```tsx
import React from 'react'
import { RadialProgress } from 'asterui'

const App: React.FC = () => (
  <div className="flex gap-4">
    <RadialProgress
      value={70}
      color="primary"
      className="bg-primary text-primary-content border-4 border-primary"
    />
    <RadialProgress
      value={50}
      color="secondary"
      className="bg-secondary text-secondary-content border-4 border-secondary"
    />
    <RadialProgress
      value={90}
      color="accent"
      className="bg-accent text-accent-content border-4 border-accent"
    />
  </div>
)

export default App
```
