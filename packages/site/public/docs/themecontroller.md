# Theme Controller

Components for switching between daisyUI themes.

**Import:** `import { ThemeController } from 'asterui'`

## Examples

### Swap

```tsx
import React from 'react'
import { ThemeController } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Swap />
)

export default App
```

### Custom Themes

```tsx
import React from 'react'
import { ThemeController } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Swap
    lightTheme="cupcake"
    darkTheme="dracula"
  />
)

export default App
```

### Swap Callback

```tsx
import React from 'react'
import { ThemeController } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Swap
    onChange={(theme) => {
      console.log('Theme changed to:', theme)
      localStorage.setItem('theme', theme)
    }}
  />
)

export default App
```

### Dropdown

```tsx
import React from 'react'
import { ThemeController } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Dropdown
    themes={[
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
    ]}
  />
)

export default App
```

### Dropdown Initial

```tsx
import React from 'react'
import { ThemeController } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Dropdown
    themes={['light', 'dark', 'synthwave', 'retro', 'cyberpunk']}
    initialTheme="synthwave"
  />
)

export default App
```

### Dropdown Callback

```tsx
import React from 'react'
import { ThemeController } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Dropdown
    themes={['light', 'dark', 'cupcake', 'dracula']}
    onChange={(theme) => {
      console.log('Selected theme:', theme)
      localStorage.setItem('theme', theme)
    }}
  />
)

export default App
```

## API

### Swap

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `lightTheme` | Theme name for light mode | `string` | `light` |
| `darkTheme` | Theme name for dark mode | `string` | `dark` |
| `initialTheme` | Initial theme | `string` | `-` |
| `onChange` | Callback when theme changes | `(theme: string) => void` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Dropdown

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `themes` | Array of available theme names | `string[]` | `-` |
| `initialTheme` | Initial theme | `string` | `-` |
| `onChange` | Callback when theme changes | `(theme: string) => void` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
