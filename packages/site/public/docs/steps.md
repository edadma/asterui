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
  <Steps vertical>
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
    <Steps.Step color="info">Fly to moon</Steps.Step>
    <Steps.Step color="info">Shrink the moon</Steps.Step>
    <Steps.Step color="info">Grab the moon</Steps.Step>
    <Steps.Step color="success">Sit on toilet</Steps.Step>
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

## API

### Steps

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Steps.Step components | `React.ReactNode` | `-` |
| `vertical` | Vertical layout orientation | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |

### Step

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Step content | `React.ReactNode` | `-` |
| `color` | Step color (marks as completed) | `neutral' \| 'primary' \| 'secondary' \| 'accent' \| 'info' \| 'success' \| 'warning' \| 'error` | `-` |
| `dataContent` | Custom content for step indicator | `string` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
