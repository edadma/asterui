# Code

**Import:** `import { Code } from 'asterui'`

## Examples

### Basic Code Block

Simple code mockup with command prefix.

```tsx
import React from 'react'
import { Code } from 'asterui'

const App: React.FC = () => (
  <Code>
    <Code.Line prefix="$">npm install asterui</Code.Line>
  </Code>
)

export default App
```

### Multiple Lines

Code block with multiple lines and different prefixes.

```tsx
import React from 'react'
import { Code } from 'asterui'

const App: React.FC = () => (
  <Code>
    <Code.Line prefix="$">npm install asterui</Code.Line>
    <Code.Line prefix=">">installing dependencies...</Code.Line>
    <Code.Line prefix=">">added 42 packages</Code.Line>
    <Code.Line prefix="$">npm run dev</Code.Line>
  </Code>
)

export default App
```

### Line Numbers

Code block with line number prefixes.

```tsx
import React from 'react'
import { Code } from 'asterui'

const App: React.FC = () => (
  <Code>
    <Code.Line prefix="1">import React from 'react'</Code.Line>
    <Code.Line prefix="2">import {'{ Button }'} from 'asterui'</Code.Line>
    <Code.Line prefix="3"></Code.Line>
    <Code.Line prefix="4">export default function App() {'{'}</Code.Line>
    <Code.Line prefix="5">  return &lt;Button&gt;Click me&lt;/Button&gt;</Code.Line>
    <Code.Line prefix="6">{'}'}</Code.Line>
  </Code>
)

export default App
```

### Highlighted Lines

Code block with highlighted lines for emphasis.

```tsx
import React from 'react'
import { Code } from 'asterui'

const App: React.FC = () => (
  <Code>
    <Code.Line prefix="1">function greet(name) {'{'}</Code.Line>
    <Code.Line prefix="2" highlight>  console.log('Hello, ' + name)</Code.Line>
    <Code.Line prefix="3">{'}'}</Code.Line>
    <Code.Line prefix="4"></Code.Line>
    <Code.Line prefix="5" highlight>greet('World')</Code.Line>
  </Code>
)

export default App
```

## API

### Code

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Code lines content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Code Line

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Line content | `React.ReactNode` | `-` |
| `prefix` | Line prefix (e.g., $, >, line number) | `string` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `highlight` | Highlight this line | `boolean` | `false` |
