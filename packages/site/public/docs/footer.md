# Footer

**Import:** `import { Footer } from 'asterui'`

## Examples

### Basic Footer

Simple footer with links.

```tsx
import React from 'react'
import { Footer } from 'asterui'

const App: React.FC = () => (
  <Footer>
    <nav>
      <a href="#" className="link link-hover">About</a>
      <a href="#" className="link link-hover">Contact</a>
      <a href="#" className="link link-hover">Privacy</a>
      <a href="#" className="link link-hover">Terms</a>
    </nav>
  </Footer>
)

export default App
```

### Footer with Sections

Footer with titled sections.

```tsx
import React from 'react'
import { Footer } from 'asterui'

const App: React.FC = () => (
  <Footer>
    <div>
      <Footer.Title>Services</Footer.Title>
      <a href="#" className="link link-hover">Branding</a>
      <a href="#" className="link link-hover">Design</a>
      <a href="#" className="link link-hover">Marketing</a>
    </div>
    <div>
      <Footer.Title>Company</Footer.Title>
      <a href="#" className="link link-hover">About us</a>
      <a href="#" className="link link-hover">Contact</a>
      <a href="#" className="link link-hover">Jobs</a>
    </div>
    <div>
      <Footer.Title>Legal</Footer.Title>
      <a href="#" className="link link-hover">Terms of use</a>
      <a href="#" className="link link-hover">Privacy policy</a>
      <a href="#" className="link link-hover">Cookie policy</a>
    </div>
  </Footer>
)

export default App
```

### Centered Footer

Footer with centered content.

```tsx
import React from 'react'
import { Footer } from 'asterui'

const App: React.FC = () => (
  <Footer center>
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <a href="#" className="link link-hover">About</a>
        <a href="#" className="link link-hover">Contact</a>
        <a href="#" className="link link-hover">Privacy</a>
        <a href="#" className="link link-hover">Terms</a>
      </div>
      <p className="text-sm text-base-content/70">
        © 2024 Company Name. All rights reserved.
      </p>
    </div>
  </Footer>
)

export default App
```

## API

### Footer

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Footer content | `React.ReactNode` | `-` |
| `center` | Center the footer content | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |

### Footer Title

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Title text | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
