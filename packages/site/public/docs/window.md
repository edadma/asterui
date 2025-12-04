# Window

OS-style window mockup component for showcasing code or content.

**Import:** `import { Window } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Window } from 'asterui'

const App: React.FC = () => (
  <Window>
    <p>Hello from the window!</p>
  </Window>
)

export default App
```

### With Code

```tsx
import React from 'react'
import { Window, Code } from 'asterui'

const App: React.FC = () => (
  <Window>
    <Code className="bg-base-300">
      <Code.Line>npm install asterui</Code.Line>
    </Code>
  </Window>
)

export default App
```

### Multi Line

```tsx
import React from 'react'
import { Window, Code } from 'asterui'

const App: React.FC = () => (
  <Window>
    <Code className="bg-base-300">
      <Code.Line>import { Button } from 'asterui'</Code.Line>
      <Code.Line></Code.Line>
      <Code.Line>function App() {'{'}</Code.Line>
      <Code.Line>  return {'<Button>Click me</Button>'}</Code.Line>
      <Code.Line>{'}'}</Code.Line>
    </Code>
  </Window>
)

export default App
```

### With Prefix

```tsx
import React from 'react'
import { Window, Code } from 'asterui'

const App: React.FC = () => (
  <Window>
    <Code className="bg-base-300">
      <Code.Line prefix="$">npm install asterui</Code.Line>
      <Code.Line prefix="$">npm run dev</Code.Line>
      <Code.Line prefix=">">Server running on http://localhost:3000</Code.Line>
    </Code>
  </Window>
)

export default App
```

### Styled

```tsx
import React from 'react'
import { Window, Code } from 'asterui'

const App: React.FC = () => (
  <Window className="bg-neutral">
    <Code className="bg-neutral text-neutral-content">
      <Code.Line prefix="~">echo "Custom styled window"</Code.Line>
      <Code.Line>Custom styled window</Code.Line>
    </Code>
  </Window>
)

export default App
```

### Content

```tsx
import React from 'react'
import { Window } from 'asterui'

const App: React.FC = () => (
  <Window contentClassName="p-4">
    <div className="space-y-2">
      <h3 className="font-bold">Window Content</h3>
      <p>This window has custom content styling.</p>
      <p className="text-sm opacity-70">You can put any content here.</p>
    </div>
  </Window>
)

export default App
```

## API

### Window

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Window content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes for the window | `string` | `-` |
| `contentClassName` | Additional CSS classes for the content area | `string` | `-` |
