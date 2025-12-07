# HoverGallery

Reveal multiple images by hovering horizontally. Ideal for product galleries.

**Import:** `import { HoverGallery } from 'asterui'`

## Examples

### Basic Gallery

```tsx
import React from 'react'
import { HoverGallery } from 'asterui'

const images = [
  'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
  'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
  'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
  'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
]

export default function App() {
  return (
    <HoverGallery
      images={images}
      className="max-w-60 rounded-lg"
    />
  )
}
```

### Product Card

```tsx
import React from 'react'
import { HoverGallery, Card } from 'asterui'

const images = [
  'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
  'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
  'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
  'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
]

export default function App() {
  return (
    <Card className="max-w-60 shadow-xl">
      <figure>
        <HoverGallery images={images} />
      </figure>
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <p>Hover over the image to see more angles</p>
        <p className="text-lg font-bold">$49.99</p>
      </Card.Body>
    </Card>
  )
}
```

### Two Images

```tsx
import React from 'react'
import { HoverGallery } from 'asterui'

export default function App() {
  return (
    <HoverGallery
      images={[
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
        'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
      ]}
      alts={['Front view', 'Side view']}
      className="max-w-60 rounded-lg"
    />
  )
}
```

## API

### HoverGallery

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `images` | Array of image URLs (2-10 images) | `string[]` | `-` |
| `alts` | Alt text for each image | `string[]` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

## Notes

- Supports up to 10 images
- First image is visible by default
- Pure CSS - no JavaScript required for the hover effect
- Works best with images of the same aspect ratio
