# Hero

**Import:** `import { Hero } from 'asterui'`

## Examples

### Basic Hero

Simple hero section with title and subtitle.

```tsx
import React from 'react'
import { Hero } from 'asterui'

const App: React.FC = () => (
  <Hero contentClassName="text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae
        et a id nisi.
      </p>
    </div>
  </Hero>
)

export default App
```

### Hero with CTA Button

Hero section with a call-to-action button.

```tsx
import React from 'react'
import { Hero, Button } from 'asterui'

const App: React.FC = () => (
  <Hero contentClassName="text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi.
      </p>
      <Button type="primary">Get Started</Button>
    </div>
  </Hero>
)

export default App
```

### Hero with Figure

Hero with side image or figure element.

```tsx
import React from 'react'
import { Hero, Button } from 'asterui'

const App: React.FC = () => (
  <Hero contentClassName="flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Hero"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae
        et a id nisi.
      </p>
      <Button type="primary">Get Started</Button>
    </div>
  </Hero>
)

export default App
```

### Hero with Background Overlay

Hero with background image and overlay effect.

```tsx
import React from 'react'
import { Hero, Button } from 'asterui'

const App: React.FC = () => (
  <Hero
    overlay
    contentClassName="text-center text-neutral-content"
    style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}
  >
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae
        et a id nisi.
      </p>
      <Button type="primary">Get Started</Button>
    </div>
  </Hero>
)

export default App
```

## API

### Hero

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Hero content | `React.ReactNode` | `-` |
| `overlay` | Show overlay effect (for background images) | `boolean` | `false` |
| `contentClassName` | CSS classes for the content wrapper | `string` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
| `style` | Inline styles (useful for background images) | `React.CSSProperties` | `-` |
