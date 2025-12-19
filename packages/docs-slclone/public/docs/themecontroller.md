# Theme Controller

Components for switching between daisyUI themes. Uses DaisyUI's native `theme-controller` class for CSS-based theme switching.

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
import { ThemeController, Modal } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Swap
    onChange={(theme) => {
      Modal.info({ title: 'Theme Changed', content: `Theme changed to: ${theme}` })
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

### Dropdown with Default Theme

```tsx
import React from 'react'
import { ThemeController } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Dropdown
    themes={['light', 'dark', 'synthwave', 'retro', 'cyberpunk']}
    defaultTheme="synthwave"
  />
)

export default App
```

### Dropdown Callback

```tsx
import React from 'react'
import { ThemeController, Modal } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Dropdown
    themes={['light', 'dark', 'cupcake', 'dracula']}
    onChange={(theme) => {
      Modal.info({ title: 'Theme Selected', content: `Selected theme: ${theme}` })
    }}
  />
)

export default App
```

### Toggle Switch

```tsx
import React from 'react'
import { ThemeController } from 'asterui'

const App: React.FC = () => (
  <ThemeController.Toggle />
)

export default App
```

### Toggle Sizes

```tsx
import React from 'react'
import { ThemeController, Space } from 'asterui'

const App: React.FC = () => (
  <Space>
    <ThemeController.Toggle size="xs" />
    <ThemeController.Toggle size="sm" />
    <ThemeController.Toggle size="md" />
    <ThemeController.Toggle size="lg" />
  </Space>
)

export default App
```

## API

### Swap

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `lightTheme` | Theme name for light mode | `string` | `light` |
| `darkTheme` | Theme name for dark mode | `string` | `dark` |
| `defaultChecked` | Initially checked (dark theme) | `boolean` | `-` |
| `onChange` | Callback when theme changes | `(theme: string) => void` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Toggle

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `lightTheme` | Theme name for light mode | `string` | `light` |
| `darkTheme` | Theme name for dark mode | `string` | `dark` |
| `defaultChecked` | Initially checked (dark theme) | `boolean` | `-` |
| `onChange` | Callback when theme changes | `(theme: string) => void` | `-` |
| `size` | Toggle size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `md` |
| `className` | Additional CSS classes | `string` | `-` |

### Dropdown

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `themes` | Array of available theme names | `string[]` | `-` |
| `defaultTheme` | Initially selected theme | `string` | `-` |
| `onChange` | Callback when theme changes | `(theme: string) => void` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

## Note

For themes to work, your project must have DaisyUI configured with the themes you want to use:

```css
@plugin "daisyui" {
  themes: all;
}
```

Or specify individual themes:

```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, synthwave, cyberpunk;
}
```
