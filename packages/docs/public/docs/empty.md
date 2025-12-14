# Empty

No data available

**Import:** `import { Empty } from 'asterui'`

## Examples

### Basic Empty

Simple empty state with default image.

```tsx
import React from 'react'
import { Empty } from 'asterui'

const App: React.FC = () => (
  <Empty />
)

export default App
```

### Custom Description

Empty state with custom description text.

```tsx
import React from 'react'
import { Empty } from 'asterui'

const App: React.FC = () => (
  <Empty description="No data available" />
)

export default App
```

### Custom Image

Empty state with custom image or icon.

```tsx
import React from 'react'
import { Empty } from 'asterui'

const App: React.FC = () => (
  <Empty
    image={
      <svg className="w-16 h-16 text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    }
    description="No files found"
  />
)

export default App
```

### With Action Button

Empty state with action button.

```tsx
import React from 'react'
import { Empty, Button } from 'asterui'

const App: React.FC = () => (
  <Empty description="No items in your cart">
    <Button color="primary">Start Shopping</Button>
  </Empty>
)

export default App
```

## API

### Empty

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `description` | Text to display in the empty state | `React.ReactNode` | `-` |
| `image` | Custom image or icon | `React.ReactNode` | `-` |
| `children` | Extra content like buttons or actions | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
