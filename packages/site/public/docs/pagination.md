# Pagination

Navigate through pages of data.

**Import:** `import { Pagination } from 'asterui'`

## Examples

### Basic

```tsx
import React, { useState } from 'react'
import { Pagination } from 'asterui'

const App: React.FC = () => {
  const [current, setCurrent] = useState(1)

  return (
    <Pagination
      current={current}
      total={85}
      onChange={setCurrent}
    />
  )
}

export default App
```

### Size Changer

```tsx
import React, { useState } from 'react'
import { Pagination } from 'asterui'

const App: React.FC = () => {
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  return (
    <Pagination
      current={current}
      total={500}
      pageSize={pageSize}
      showSizeChanger
      onChange={(page, size) => {
        setCurrent(page)
        setPageSize(size)
      }}
    />
  )
}

export default App
```

### Show Total

```tsx
import React from 'react'
import { Pagination } from 'asterui'

const App: React.FC = () => (
  <Pagination total={250} showTotal />
)

export default App
```

### Custom Total

```tsx
import React from 'react'
import { Pagination } from 'asterui'

const App: React.FC = () => (
  <Pagination
    total={250}
    showTotal={(total, range) =>
      \`Showing \${range[0]}-\${range[1]} of \${total} items\`
    }
  />
)

export default App
```

### Quick Jumper

```tsx
import React from 'react'
import { Pagination } from 'asterui'

const App: React.FC = () => (
  <Pagination total={500} showQuickJumper />
)

export default App
```

### All Features

```tsx
import React, { useState } from 'react'
import { Pagination } from 'asterui'

const App: React.FC = () => {
  const [current, setCurrent] = useState(1)

  return (
    <Pagination
      current={current}
      total={500}
      showSizeChanger
      showQuickJumper
      showTotal={(total, range) =>
        \`\${range[0]}-\${range[1]} of \${total}\`
      }
      onChange={setCurrent}
    />
  )
}

export default App
```

### Simple

```tsx
import React from 'react'
import { Pagination } from 'asterui'

const App: React.FC = () => (
  <Pagination total={100} simple />
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Pagination } from 'asterui'

const App: React.FC = () => (
  <div className="space-y-4">
    <Pagination total={100} size="xs" />
    <Pagination total={100} size="sm" />
    <Pagination total={100} size="md" />
    <Pagination total={100} size="lg" />
  </div>
)

export default App
```

### Disabled

```tsx
import React from 'react'
import { Pagination } from 'asterui'

const App: React.FC = () => (
  <Pagination total={100} disabled />
)

export default App
```
