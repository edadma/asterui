# Steps

Visual progress indicator showing sequential steps.

**Import:** `import { Steps } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Steps } from 'asterui'

const App: React.FC = () => (
  <Steps>
    <Steps.Step color="primary">Register</Steps.Step>
    <Steps.Step color="primary">Choose plan</Steps.Step>
    <Steps.Step>Purchase</Steps.Step>
    <Steps.Step>Receive Product</Steps.Step>
  </Steps>
)

export default App
```

### Vertical

```tsx
import React from 'react'
import { Steps } from 'asterui'

const App: React.FC = () => (
  <Steps direction="vertical">
    <Steps.Step color="primary">Register</Steps.Step>
    <Steps.Step color="primary">Choose plan</Steps.Step>
    <Steps.Step>Purchase</Steps.Step>
    <Steps.Step>Receive Product</Steps.Step>
  </Steps>
)

export default App
```

### Colors

```tsx
import React from 'react'
import { Steps } from 'asterui'

const App: React.FC = () => (
  <Steps>
    <Steps.Step color="info">Research</Steps.Step>
    <Steps.Step color="info">Design</Steps.Step>
    <Steps.Step color="warning">Develop</Steps.Step>
    <Steps.Step color="success">Deploy</Steps.Step>
  </Steps>
)

export default App
```

### Custom Content

```tsx
import React from 'react'
import { Steps } from 'asterui'

const App: React.FC = () => (
  <Steps>
    <Steps.Step color="primary" dataContent="?">Step 1</Steps.Step>
    <Steps.Step color="primary" dataContent="!">Step 2</Steps.Step>
    <Steps.Step dataContent="✓">Step 3</Steps.Step>
    <Steps.Step dataContent="✕">Step 4</Steps.Step>
  </Steps>
)

export default App
```

### Responsive

```tsx
import React from 'react'
import { Steps } from 'asterui'

const App: React.FC = () => (
  <Steps className="steps-vertical lg:steps-horizontal">
    <Steps.Step color="primary">Register</Steps.Step>
    <Steps.Step color="primary">Choose plan</Steps.Step>
    <Steps.Step>Purchase</Steps.Step>
    <Steps.Step>Receive Product</Steps.Step>
  </Steps>
)

export default App
```

### Controlled Current Step

```tsx
import React, { useState } from 'react'
import { Steps, Button } from 'asterui'

const App: React.FC = () => {
  const [current, setCurrent] = useState(1)

  return (
    <div className="space-y-4">
      <Steps current={current}>
        <Steps.Step>Register</Steps.Step>
        <Steps.Step>Verify Email</Steps.Step>
        <Steps.Step>Setup Profile</Steps.Step>
        <Steps.Step>Complete</Steps.Step>
      </Steps>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
          Previous
        </Button>
        <Button size="sm" color="primary" onClick={() => setCurrent(Math.min(3, current + 1))} disabled={current === 3}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default App
```

### Data-Driven Pattern

```tsx
import React, { useState } from 'react'
import { Steps, notification } from 'asterui'

const App: React.FC = () => {
  const [current, setCurrent] = useState(1)

  const items = [
    { key: 'cart', title: 'Cart' },
    { key: 'address', title: 'Address' },
    { key: 'payment', title: 'Payment' },
    { key: 'confirm', title: 'Confirm' },
  ]

  return (
    <Steps
      items={items}
      current={current}
      onChange={(step) => {
        setCurrent(step)
        notification.info({ message: `Navigated to step ${step + 1}` })
      }}
    />
  )
}

export default App
```

### With Icons

```tsx
import React from 'react'
import { Steps } from 'asterui'
import { CheckIcon, DocumentTextIcon, CreditCardIcon, TruckIcon } from '@aster-ui/icons'

const App: React.FC = () => (
  <Steps>
    <Steps.Step color="primary" icon={<CheckIcon size="sm" />}>
      Order Placed
    </Steps.Step>
    <Steps.Step color="primary" icon={<DocumentTextIcon size="sm" />}>
      Processing
    </Steps.Step>
    <Steps.Step icon={<CreditCardIcon size="sm" />}>
      Payment
    </Steps.Step>
    <Steps.Step icon={<TruckIcon size="sm" />}>
      Delivery
    </Steps.Step>
  </Steps>
)

export default App
```

## API

### Steps

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| children | Step items (compound pattern) | `React.ReactNode` | - |
| items | Step items (data-driven pattern) | `StepItem[]` | - |
| current | Current step index (0-based) | `number` | - |
| direction | Layout direction | `'horizontal' \| 'vertical'` | `'horizontal'` |
| vertical | Vertical layout (deprecated, use direction) | `boolean` | `false` |
| onChange | Callback when step is clicked | `(current: number) => void` | - |
| className | Additional CSS classes | `string` | - |
| `data-testid` | Test ID for testing | `string` | - |

### StepItem (for items prop)

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| key | Unique identifier | `string` | - |
| title | Step title | `React.ReactNode` | - |
| description | Step description | `React.ReactNode` | - |
| icon | Step icon | `React.ReactNode` | - |
| color | Step color | `'neutral' \| 'primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error'` | - |
| disabled | Whether step is disabled | `boolean` | `false` |
| `data-testid` | Test ID for testing | `string` | - |

### Steps.Step (compound pattern)

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| children | Step content | `React.ReactNode` | - |
| title | Step title (alternative to children) | `React.ReactNode` | - |
| description | Step description | `React.ReactNode` | - |
| icon | Step icon | `React.ReactNode` | - |
| color | Step color | `'neutral' \| 'primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error'` | - |
| dataContent | Custom content for step indicator | `string` | - |
| disabled | Whether step is disabled | `boolean` | `false` |
| className | Additional CSS classes | `string` | - |
| `data-testid` | Test ID for testing | `string` | - |
