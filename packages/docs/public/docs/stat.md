# Stats

Display statistics and data in organized blocks for dashboards and analytics.

**Import:** `import { Stats } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Stats } from 'asterui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat title="Total Page Views" value="89,400" />
  </Stats>
)

export default App
```

### Desc

```tsx
import React from 'react'
import { Stats } from 'asterui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat
      title="Downloads"
      value="31K"
      desc="Jan 1st - Feb 1st"
    />
  </Stats>
)

export default App
```

### Multiple

```tsx
import React from 'react'
import { Stats } from 'asterui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat
      title="Total Users"
      value="4,200"
      desc="↗︎ 400 (22%)"
    />
    <Stats.Stat
      title="New Users"
      value="1,200"
      desc="↘︎ 90 (14%)"
    />
    <Stats.Stat
      title="New Registers"
      value="4,200"
      desc="↗︎ 400 (22%)"
    />
  </Stats>
)

export default App
```

### Icons

```tsx
import React from 'react'
import { Stats } from 'asterui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat
      figure={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-8 h-8 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
      title="Downloads"
      value="31K"
      desc="Jan 1st - Feb 1st"
    />
    <Stats.Stat
      figure={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-8 h-8 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      }
      title="New Users"
      value="4,200"
      desc="↗︎ 400 (22%)"
    />
  </Stats>
)

export default App
```

### Colored

```tsx
import React from 'react'
import { Stats } from 'asterui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat
      title="Account balance"
      value={<span className="text-primary">$89,400</span>}
      desc="21% more than last month"
    />
    <Stats.Stat
      title="Current balance"
      value={<span className="text-secondary">$12,721</span>}
      desc="12% less than last month"
    />
  </Stats>
)

export default App
```

### Vertical

```tsx
import React from 'react'
import { Stats } from 'asterui'

const App: React.FC = () => (
  <Stats vertical className="shadow">
    <Stats.Stat
      title="Downloads"
      value="31K"
      desc="Jan 1st - Feb 1st"
    />
    <Stats.Stat
      title="New Users"
      value="4,200"
      desc="↗︎ 400 (22%)"
    />
    <Stats.Stat
      title="New Registers"
      value="1,200"
      desc="↘︎ 90 (14%)"
    />
  </Stats>
)

export default App
```

### Actions

```tsx
import React from 'react'
import { Stats, Button } from 'asterui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat
      title="Account balance"
      value="$89,400"
      actions={
        <Button size="sm" color="primary">
          Add funds
        </Button>
      }
    />
  </Stats>
)

export default App
```

## API

### Stats

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Stat items to display | `React.ReactNode` | `-` |
| `vertical` | Stack stats vertically | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |

### Stat

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `title` | Stat title | `React.ReactNode` | `-` |
| `value` | Stat value | `React.ReactNode` | `-` |
| `desc` | Description text | `React.ReactNode` | `-` |
| `figure` | Icon or image figure | `React.ReactNode` | `-` |
| `actions` | Action buttons or elements | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
