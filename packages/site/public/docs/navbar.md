# Navbar

**Import:** `import { Navbar } from 'asterui'`

## Examples

### Basic Navbar

Simple navbar with title and navigation buttons.

```tsx
import React from 'react'
import { Navbar, Button } from 'asterui'

const App: React.FC = () => (
  <Navbar
    start={<a className="text-xl font-bold">AsterUI</a>}
    end={
      <>
        <Button type="ghost">Home</Button>
        <Button type="ghost">About</Button>
        <Button type="primary">Sign In</Button>
      </>
    }
  />
)

export default App
```

### With Dropdown Menu

Navbar with a dropdown menu for additional options.

```tsx
import React from 'react'
import { Navbar, Button, Dropdown } from 'asterui'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Navbar
    start={<a className="text-xl font-bold">AsterUI</a>}
    end={
      <>
        <Button type="ghost">Home</Button>
        <Dropdown>
          <Dropdown.Trigger>
            <Button type="ghost">
              Products
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item>Product 1</Dropdown.Item>
            <Dropdown.Item>Product 2</Dropdown.Item>
            <Dropdown.Item>Product 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button type="ghost">About</Button>
        <Button type="primary">Sign In</Button>
      </>
    }
  />
)

export default App
```

### Centered Content

Navbar with content in all three sections for balanced layout.

```tsx
import React from 'react'
import { Navbar, Button } from 'asterui'

const App: React.FC = () => (
  <Navbar
    start={<Button type="ghost" shape="circle">☰</Button>}
    center={<a className="text-xl font-bold">AsterUI</a>}
    end={<Button type="ghost" shape="circle">⚙</Button>}
  />
)

export default App
```

### Responsive with Mobile Menu

Navbar that adapts to mobile with a menu icon and dropdown.

```tsx
import React from 'react'
import { Navbar, Button, Dropdown } from 'asterui'
import { Bars3Icon } from '@heroicons/react/24/outline'

const App: React.FC = () => (
  <Navbar
    start={
      <>
        <Dropdown>
          <Dropdown.Trigger>
            <Button type="ghost" shape="circle" className="lg:hidden">
              <Bars3Icon className="w-6 h-6" />
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item>Home</Dropdown.Item>
            <Dropdown.Item>Products</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a className="text-xl font-bold ml-2">AsterUI</a>
      </>
    }
    end={
      <>
        <div className="hidden lg:flex gap-2">
          <Button type="ghost">Home</Button>
          <Button type="ghost">Products</Button>
          <Button type="ghost">About</Button>
          <Button type="ghost">Contact</Button>
        </div>
        <Button type="primary">Sign In</Button>
      </>
    }
  />
)

export default App
```

## API

### Navbar

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `start` | Content for the start section of the navbar (typically logo/brand) | `React.ReactNode` | `-` |
| `center` | Content for the center section of the navbar | `React.ReactNode` | `-` |
| `end` | Content for the end section of the navbar (typically actions/menu) | `React.ReactNode` | `-` |
| `children` | Custom content that replaces the three-section layout | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
