# Carousel

**Import:** `import { Carousel } from 'asterui'`

## Examples

### Basic Carousel

Simple carousel with navigation controls.

```tsx
import React from 'react'
import { Carousel } from 'asterui'

const App: React.FC = () => (
  <Carousel className="w-full max-w-md">
    <Carousel.Item>
      <img src="https://picsum.photos/seed/1/400/200" alt="Slide 1" className="w-full" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://picsum.photos/seed/2/400/200" alt="Slide 2" className="w-full" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://picsum.photos/seed/3/400/200" alt="Slide 3" className="w-full" />
    </Carousel.Item>
  </Carousel>
)

export default App
```

### Autoplay

Carousel with automatic slide advancement.

```tsx
import React from 'react'
import { Carousel } from 'asterui'

const App: React.FC = () => (
  <Carousel autoplay interval={2000} className="w-full max-w-md">
    <Carousel.Item>
      <div className="bg-primary text-primary-content h-40 flex items-center justify-center">
        <span className="text-2xl">Slide 1</span>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="bg-secondary text-secondary-content h-40 flex items-center justify-center">
        <span className="text-2xl">Slide 2</span>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="bg-accent text-accent-content h-40 flex items-center justify-center">
        <span className="text-2xl">Slide 3</span>
      </div>
    </Carousel.Item>
  </Carousel>
)

export default App
```

### Vertical Carousel

Carousel with vertical orientation.

```tsx
import React from 'react'
import { Carousel } from 'asterui'

const App: React.FC = () => (
  <Carousel vertical className="h-64 w-full max-w-md">
    <Carousel.Item>
      <img src="https://picsum.photos/seed/4/400/200" alt="Slide 1" className="w-full" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://picsum.photos/seed/5/400/200" alt="Slide 2" className="w-full" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://picsum.photos/seed/6/400/200" alt="Slide 3" className="w-full" />
    </Carousel.Item>
  </Carousel>
)

export default App
```

### Custom Content

Carousel with custom slide content.

```tsx
import React from 'react'
import { Carousel, Card, Button } from 'asterui'

const App: React.FC = () => (
  <Carousel className="w-full max-w-md">
    <Carousel.Item>
      <Card title="Feature 1" className="bg-base-200">
        <p>Discover amazing features</p>
        <Button type="primary" size="sm">Learn More</Button>
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card title="Feature 2" className="bg-base-200">
        <p>Powerful and flexible</p>
        <Button type="secondary" size="sm">Explore</Button>
      </Card>
    </Carousel.Item>
  </Carousel>
)

export default App
```

## API

### Carousel

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Carousel slides | `React.ReactNode` | `-` |
| `autoplay` | Auto-advance slides | `boolean` | `false` |
| `interval` | Autoplay interval in milliseconds | `number` | `3000` |
| `showControls` | Show prev/next navigation buttons | `boolean` | `true` |
| `showIndicators` | Show slide indicator dots | `boolean` | `true` |
| `vertical` | Vertical carousel orientation | `boolean` | `false` |
| `className` | Additional CSS classes | `string` | `-` |
