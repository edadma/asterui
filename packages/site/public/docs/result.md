# Result

Display result pages for success, error, or informational states.

**Import:** `import { Result } from 'asterui'`

## Examples

### Success

```tsx
import React from 'react'
import { Result, Button, Space } from 'asterui'

const App: React.FC = () => (
  <Result
    status="success"
    title="Payment Successful"
    subTitle="Your order has been confirmed and will be shipped within 2 business days."
    extra={
      <Space>
        <Button color="primary">View Order</Button>
        <Button>Continue Shopping</Button>
      </Space>
    }
  />
)

export default App
```

### Error

```tsx
import React from 'react'
import { Result, Button } from 'asterui'

const App: React.FC = () => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check your information and try again."
    extra={<Button color="error">Try Again</Button>}
  />
)

export default App
```

### Info

```tsx
import React from 'react'
import { Result } from 'asterui'

const App: React.FC = () => (
  <Result
    status="info"
    title="Verification Required"
    subTitle="Please check your email to verify your account."
  />
)

export default App
```

### Warning

```tsx
import React from 'react'
import { Result, Button } from 'asterui'

const App: React.FC = () => (
  <Result
    status="warning"
    title="Account Suspended"
    subTitle="Your account has been suspended due to unusual activity."
    extra={<Button color="warning">Contact Support</Button>}
  />
)

export default App
```

### Not Found

```tsx
import React from 'react'
import { Result, Button } from 'asterui'

const App: React.FC = () => (
  <Result
    status="404"
    title="Page Not Found"
    subTitle="The page you are looking for does not exist."
    extra={<Button color="primary">Back Home</Button>}
  />
)

export default App
```

### Forbidden

```tsx
import React from 'react'
import { Result, Button } from 'asterui'

const App: React.FC = () => (
  <Result
    status="403"
    title="Access Denied"
    subTitle="You don't have permission to access this resource."
    extra={<Button>Request Access</Button>}
  />
)

export default App
```

### Server Error

```tsx
import React from 'react'
import { Result, Button } from 'asterui'

const App: React.FC = () => (
  <Result
    status="500"
    title="Server Error"
    subTitle="Something went wrong on our end. Please try again later."
    extra={<Button color="primary">Refresh Page</Button>}
  />
)

export default App
```
