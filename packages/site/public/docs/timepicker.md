# TimePicker

Select time with an interactive picker interface.

**Import:** `import { TimePicker } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { TimePicker } from 'asterui'

const App: React.FC = () => (
  <TimePicker placeholder="Select time" />
)

export default App
```

### Format12

```tsx
import React from 'react'
import { TimePicker } from 'asterui'

const App: React.FC = () => (
  <TimePicker format="12" placeholder="Select time" />
)

export default App
```

### Seconds

```tsx
import React from 'react'
import { TimePicker } from 'asterui'

const App: React.FC = () => (
  <TimePicker showSeconds placeholder="Select time" />
)

export default App
```

### Controlled

```tsx
import React, { useState } from 'react'
import { TimePicker } from 'asterui'

const App: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null)

  return (
    <div>
      <TimePicker value={time} onChange={setTime} />
      <p className="mt-2 text-sm">
        Selected: {time ? time.toLocaleTimeString() : 'None'}
      </p>
    </div>
  )
}

export default App
```

### Sizes

```tsx
import React from 'react'
import { TimePicker, Space } from 'asterui'

const App: React.FC = () => (
  <Space>
    <TimePicker size="xs" placeholder="Extra small" />
    <TimePicker size="sm" placeholder="Small" />
    <TimePicker size="md" placeholder="Medium" />
    <TimePicker size="lg" placeholder="Large" />
  </Space>
)

export default App
```

### Form

```tsx
import React from 'react'
import { TimePicker, Form, Button } from 'asterui'

const App: React.FC = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="startTime"
        label="Start Time"
        required
        rules={{
          required: 'Please select start time',
        }}
      >
        <TimePicker placeholder="HH:MM" />
      </Form.Item>

      <Form.Item
        name="endTime"
        label="End Time"
      >
        <TimePicker format="12" />
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

### Time Range

```tsx
import React, { useState } from 'react'
import { TimePicker } from 'asterui'

const App: React.FC = () => {
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [endTime, setEndTime] = useState<Date | null>(null)

  return (
    <div className="flex gap-4">
      <div>
        <label className="label">
          <span className="label-text">Start Time</span>
        </label>
        <TimePicker
          value={startTime}
          onChange={setStartTime}
          placeholder="Start time"
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">End Time</span>
        </label>
        <TimePicker
          value={endTime}
          onChange={setEndTime}
          placeholder="End time"
        />
      </div>
    </div>
  )
}

export default App
```

## API

### Time Picker

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `value` | Controlled selected time | `Date` | `-` |
| `defaultValue` | Default selected time (uncontrolled) | `Date` | `-` |
| `onChange` | Callback when time is selected | `(date: Date \| null) => void` | `-` |
| `format` | Time display format | `12' \| '24` | `24` |
| `placeholder` | Input placeholder text | `string` | `Select time` |
| `disabled` | Disable the time picker | `boolean` | `false` |
| `size` | Input size | `xs' \| 'sm' \| 'md' \| 'lg` | `md` |
| `showSeconds` | Show seconds in the time picker | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
