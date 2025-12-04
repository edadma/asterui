# Rating

Star ratings for user feedback and reviews.

**Import:** `import { Rating } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => (
  <Rating defaultValue={3}>
    <Rating.Item value={1} />
    <Rating.Item value={2} />
    <Rating.Item value={3} />
    <Rating.Item value={4} />
    <Rating.Item value={5} />
  </Rating>
)

export default App
```

### Clearable

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => (
  <Rating defaultValue={0}>
    <Rating.Item value={0} hidden />
    <Rating.Item value={1} />
    <Rating.Item value={2} />
    <Rating.Item value={3} />
    <Rating.Item value={4} />
    <Rating.Item value={5} />
  </Rating>
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Rating, Space } from 'asterui'

const App: React.FC = () => (
  <Space>
    <Rating size="xs" defaultValue={3}>
      <Rating.Item value={1} />
      <Rating.Item value={2} />
      <Rating.Item value={3} />
      <Rating.Item value={4} />
      <Rating.Item value={5} />
    </Rating>
    <Rating size="sm" defaultValue={3}>
      <Rating.Item value={1} />
      <Rating.Item value={2} />
      <Rating.Item value={3} />
      <Rating.Item value={4} />
      <Rating.Item value={5} />
    </Rating>
    <Rating size="md" defaultValue={3}>
      <Rating.Item value={1} />
      <Rating.Item value={2} />
      <Rating.Item value={3} />
      <Rating.Item value={4} />
      <Rating.Item value={5} />
    </Rating>
    <Rating size="lg" defaultValue={3}>
      <Rating.Item value={1} />
      <Rating.Item value={2} />
      <Rating.Item value={3} />
      <Rating.Item value={4} />
      <Rating.Item value={5} />
    </Rating>
  </Space>
)

export default App
```

### Heart

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => (
  <Rating defaultValue={4}>
    <Rating.Item value={1} mask="heart" color="bg-error" />
    <Rating.Item value={2} mask="heart" color="bg-error" />
    <Rating.Item value={3} mask="heart" color="bg-error" />
    <Rating.Item value={4} mask="heart" color="bg-error" />
    <Rating.Item value={5} mask="heart" color="bg-error" />
  </Rating>
)

export default App
```

### Custom Colors

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => (
  <Rating defaultValue={3}>
    <Rating.Item value={1} color="bg-error" />
    <Rating.Item value={2} color="bg-warning" />
    <Rating.Item value={3} color="bg-warning" />
    <Rating.Item value={4} color="bg-success" />
    <Rating.Item value={5} color="bg-success" />
  </Rating>
)

export default App
```

### Read Only

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => (
  <Rating value={4} readOnly>
    <Rating.Item value={1} />
    <Rating.Item value={2} />
    <Rating.Item value={3} />
    <Rating.Item value={4} />
    <Rating.Item value={5} />
  </Rating>
)

export default App
```

### Controlled

```tsx
import React, { useState } from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => {
  const [rating, setRating] = useState(0)

  return (
    <div>
      <Rating value={rating} onChange={setRating}>
        <Rating.Item value={0} hidden />
        <Rating.Item value={1} />
        <Rating.Item value={2} />
        <Rating.Item value={3} />
        <Rating.Item value={4} />
        <Rating.Item value={5} />
      </Rating>
      <p className="mt-2">Current rating: {rating}</p>
    </div>
  )
}

export default App
```

### Alt Star

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => (
  <Rating defaultValue={3}>
    <Rating.Item value={1} mask="star-2" color="bg-success" />
    <Rating.Item value={2} mask="star-2" color="bg-success" />
    <Rating.Item value={3} mask="star-2" color="bg-success" />
    <Rating.Item value={4} mask="star-2" color="bg-success" />
    <Rating.Item value={5} mask="star-2" color="bg-success" />
  </Rating>
)

export default App
```

## API

### Rating

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Rating.Item components | `React.ReactNode` | `-` |
| `value` | Controlled rating value | `number` | `-` |
| `defaultValue` | Default rating value (uncontrolled) | `number` | `0` |
| `onChange` | Callback when rating changes | `(value: number) => void` | `-` |
| `size` | Rating size | `xs' \| 'sm' \| 'md' \| 'lg' \| 'xl` | `md` |
| `readOnly` | Display as read-only (non-interactive) | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |

### Rating Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Rating value this item represents | `number` | `-` |
| `mask` | Shape of the rating icon | `star' \| 'star-2' \| 'heart` | `star` |
| `color` | Tailwind background color class | `string` | `bg-warning` |
| `hidden` | Hidden item for clearing rating | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
