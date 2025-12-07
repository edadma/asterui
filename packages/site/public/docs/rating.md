# Rating

Star ratings for user feedback and reviews.

**Import:** `import { Rating } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => <Rating defaultValue={3} />

export default App
```

### Clearable

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => <Rating defaultValue={3} allowClear />

export default App
```

### Sizes

```tsx
import React from 'react'
import { Rating, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="sm">
    <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">xs</span><Rating size="xs" defaultValue={3} /></div>
    <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">sm</span><Rating size="sm" defaultValue={3} /></div>
    <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">md</span><Rating size="md" defaultValue={3} /></div>
    <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">lg</span><Rating size="lg" defaultValue={3} /></div>
    <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">xl</span><Rating size="xl" defaultValue={3} /></div>
  </Space>
)

export default App
```

### Half Star

```tsx
import React from 'react'
import { Rating, Space } from 'asterui'

const App: React.FC = () => (
  <Space direction="vertical" size="sm">
    <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">md</span><Rating defaultValue={2.5} allowHalf /></div>
    <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">lg</span><Rating defaultValue={2.5} allowHalf size="lg" /></div>
  </Space>
)

export default App
```

### Heart

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => <Rating defaultValue={4} mask="heart" color="bg-error" />

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

### Disabled

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => <Rating value={4} disabled />

export default App
```

### Custom Count

```tsx
import React from 'react'
import { Rating } from 'asterui'

const App: React.FC = () => <Rating defaultValue={7} count={10} />

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
      <Rating value={rating} onChange={setRating} />
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

const App: React.FC = () => <Rating defaultValue={3} mask="star" color="bg-success" />

export default App
```

### Form

```tsx
import React from 'react'
import { Rating, Form, notification, Button } from 'asterui'

const App: React.FC = () => {
  const handleSubmit = (values: { rating?: number }) => {
    notification.success({ message: 'Submitted!', description: `Rating: ${values.rating}` })
  }

  return (
    <Form onFinish={handleSubmit} initialValues={{ rating: 3 }}>
      <Form.Item
        name="rating"
        label="Your rating"
        rules={{ required: 'Please provide a rating' }}
      >
        <Rating />
      </Form.Item>
      <Button htmlType="submit" color="primary">Submit</Button>
    </Form>
  )
}

export default App
```

## API

### Rating

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Custom Rating.Item components (optional) | `React.ReactNode` | `-` |
| `value` | Controlled rating value | `number` | `-` |
| `defaultValue` | Default rating value (uncontrolled) | `number` | `0` |
| `onChange` | Callback when rating changes | `(value: number) => void` | `-` |
| `onHoverChange` | Callback when hover value changes | `(value: number) => void` | `-` |
| `count` | Number of stars | `number` | `5` |
| `size` | Rating size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `-` |
| `gap` | Space between stars | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `color` | Tailwind background color class | `string` | `'bg-warning'` |
| `mask` | Shape of the rating icons | `'star' \| 'star-2' \| 'heart'` | `'star-2'` |
| `allowClear` | Allow clearing rating by clicking same value | `boolean` | `true` |
| `allowHalf` | Allow half-star selection | `boolean` | `false` |
| `disabled` | Disabled state (non-interactive) | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |

### Rating.Item

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Rating value this item represents | `number` | `-` |
| `mask` | Shape of the rating icon | `'star' \| 'star-2' \| 'heart'` | `'star-2'` |
| `color` | Tailwind background color class | `string` | `'bg-warning'` |
| `hidden` | Hidden item for clearing rating | `boolean` | `false` |
| `half` | Half-star position | `'first' \| 'second'` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
