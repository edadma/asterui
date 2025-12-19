# Progress

Display task completion or time passage with progress bars.

**Import:** `import { Progress } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Progress } from 'asterui'

const App: React.FC = () => (
  <Progress value={70} className="w-56" />
)

export default App
```

### Colors

```tsx
import React from 'react'
import { Progress } from 'asterui'

const App: React.FC = () => (
  <div className="space-y-4">
    <Progress value={20} className="w-56" />
    <Progress type="primary" value={40} className="w-56" />
    <Progress type="secondary" value={60} className="w-56" />
    <Progress type="accent" value={80} className="w-56" />
  </div>
)

export default App
```

### Status

```tsx
import React from 'react'
import { Progress } from 'asterui'

const App: React.FC = () => (
  <div className="space-y-4">
    <Progress type="info" value={40} className="w-56" />
    <Progress type="success" value={60} className="w-56" />
    <Progress type="warning" value={80} className="w-56" />
    <Progress type="error" value={100} className="w-56" />
  </div>
)

export default App
```

### Indeterminate

```tsx
import React from 'react'
import { Progress } from 'asterui'

const App: React.FC = () => (
  <Progress className="w-56" />
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Progress } from 'asterui'

const App: React.FC = () => (
  <div className="space-y-4">
    <Progress type="primary" value={70} className="w-32" />
    <Progress type="primary" value={70} className="w-56" />
    <Progress type="primary" value={70} className="w-full" />
  </div>
)

export default App
```

### Label

```tsx
import React from 'react'
import { Progress } from 'asterui'

const App: React.FC = () => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Uploading...</span>
      <span>75%</span>
    </div>
    <Progress type="primary" value={75} className="w-full" />
  </div>
)

export default App
```
