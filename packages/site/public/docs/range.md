# Range

Select numeric values using an interactive slider.

**Import:** `import { Range } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Range } from 'asterui'

const App: React.FC = () => (
  <Range />
)

export default App
```

### Show Value

```tsx
import React from 'react'
import { Range } from 'asterui'

const App: React.FC = () => (
  <Range showValue />
)

export default App
```

### Show Steps

```tsx
import React from 'react'
import { Range } from 'asterui'

const App: React.FC = () => (
  <Range showSteps step={10} />
)

export default App
```

### Controlled

```tsx
import React, { useState } from 'react'
import { Range } from 'asterui'

const App: React.FC = () => {
  const [value, setValue] = useState(50)

  return (
    <div>
      <Range value={value} onChange={setValue} showValue />
      <p className="mt-2 text-sm">Value: {value}</p>
    </div>
  )
}

export default App
```

### Custom Range

```tsx
import React from 'react'
import { Range } from 'asterui'

const App: React.FC = () => (
  <Range min={0} max={10} step={0.5} defaultValue={5} showValue />
)

export default App
```

### Colors

```tsx
import React from 'react'
import { Range, Space } from 'asterui'

const App: React.FC = () => (
  <Space>
    <Range color="primary" defaultValue={25} />
    <Range color="secondary" defaultValue={35} />
    <Range color="accent" defaultValue={45} />
    <Range color="success" defaultValue={55} />
    <Range color="warning" defaultValue={65} />
    <Range color="info" defaultValue={75} />
    <Range color="error" defaultValue={85} />
  </Space>
)

export default App
```

### Sizes

```tsx
import React from 'react'
import { Range, Space } from 'asterui'

const App: React.FC = () => (
  <Space size="lg">
    <Range size="xs" defaultValue={25} />
    <Range size="sm" defaultValue={50} />
    <Range size="md" defaultValue={75} />
    <Range size="lg" defaultValue={90} />
  </Space>
)

export default App
```

### Disabled

```tsx
import React from 'react'
import { Range } from 'asterui'

const App: React.FC = () => (
  <Range disabled defaultValue={60} />
)

export default App
```

### Volume

```tsx
import React, { useState } from 'react'
import { Range } from 'asterui'

const App: React.FC = () => {
  const [volume, setVolume] = useState(50)

  return (
    <div className="p-4 border border-base-300 rounded-lg">
      <div className="flex items-center gap-3">
        <span className="text-2xl">
          {volume === 0 ? '🔇' : volume < 50 ? '🔉' : '🔊'}
        </span>
        <Range
          value={volume}
          onChange={setVolume}
          color="primary"
          className="flex-1"
        />
        <span className="text-sm font-medium w-12 text-right">
          {volume}%
        </span>
      </div>
    </div>
  )
}

export default App
```

### Form

```tsx
import React from 'react'
import { Range, Form, Button } from 'asterui'

const App: React.FC = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form onFinish={handleSubmit} initialValues={{ volume: 50, brightness: 75 }}>
      <Form.Item name="volume" label="Volume">
        <Range showValue color="primary" />
      </Form.Item>

      <Form.Item name="brightness" label="Brightness">
        <Range showValue color="warning" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
```
