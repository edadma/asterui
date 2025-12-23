# Anchor

Navigate to page sections with scroll spy highlighting.

**Import:** `import { Anchor } from 'asterui'`

## Examples

### Basic

```tsx
import React from 'react'
import { Anchor, Flex } from 'asterui'

const App: React.FC = () => {
  const getContainer = () => document.getElementById('scroll-container') as HTMLElement

  return (
    <Flex gap="md">
      <Anchor
        items={[
          { href: 'section-1', title: 'Section 1' },
          { href: 'section-2', title: 'Section 2' },
          { href: 'section-3', title: 'Section 3' },
        ]}
        getContainer={getContainer}
      />
      <div id="scroll-container" className="flex-1 h-48 overflow-y-auto border rounded p-2">
        <section id="section-1" className="h-32 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Section 1</h3>
          <p className="text-sm">Scroll to see active link change</p>
        </section>
        <section id="section-2" className="h-32 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Section 2</h3>
          <p className="text-sm">Content for section 2</p>
        </section>
        <section id="section-3" className="h-32 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Section 3</h3>
          <p className="text-sm">Content for section 3</p>
        </section>
      </div>
    </Flex>
  )
}

export default App
```

### Horizontal

```tsx
import React from 'react'
import { Anchor } from 'asterui'

const App: React.FC = () => {
  const getContainer = () => document.getElementById('scroll-container') as HTMLElement

  return (
    <div>
      <Anchor
        direction="horizontal"
        items={[
          { href: 'intro', title: 'Introduction' },
          { href: 'features', title: 'Features' },
          { href: 'pricing', title: 'Pricing' },
          { href: 'faq', title: 'FAQ' },
        ]}
        getContainer={getContainer}
      />
      <div id="scroll-container" className="h-32 overflow-y-auto border rounded p-2 mt-2">
        <section id="intro" className="h-24 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Introduction</h3>
        </section>
        <section id="features" className="h-24 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Features</h3>
        </section>
        <section id="pricing" className="h-24 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Pricing</h3>
        </section>
        <section id="faq" className="h-24 p-3 bg-base-200 rounded">
          <h3 className="font-bold">FAQ</h3>
        </section>
      </div>
    </div>
  )
}

export default App
```

### Nested Links

```tsx
import React from 'react'
import { Anchor, Flex } from 'asterui'

const App: React.FC = () => {
  const getContainer = () => document.getElementById('scroll-container') as HTMLElement

  return (
    <Flex gap="md">
      <Anchor
        items={[
          {
            href: 'getting-started',
            title: 'Getting Started',
            children: [
              { href: 'installation', title: 'Installation' },
              { href: 'configuration', title: 'Configuration' },
            ],
          },
          {
            href: 'components',
            title: 'Components',
            children: [
              { href: 'buttons', title: 'Buttons' },
              { href: 'forms', title: 'Forms' },
            ],
          },
        ]}
        getContainer={getContainer}
      />
      <div id="scroll-container" className="flex-1 h-48 overflow-y-auto border rounded p-2">
        <section id="getting-started" className="h-20 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Getting Started</h3>
        </section>
        <section id="installation" className="h-20 mb-2 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Installation</h4>
        </section>
        <section id="configuration" className="h-20 mb-2 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Configuration</h4>
        </section>
        <section id="components" className="h-20 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Components</h3>
        </section>
        <section id="buttons" className="h-20 mb-2 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Buttons</h4>
        </section>
        <section id="forms" className="h-20 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Forms</h4>
        </section>
      </div>
    </Flex>
  )
}

export default App
```

### Using Anchor.Link

```tsx
import React from 'react'
import { Anchor, Flex } from 'asterui'

const App: React.FC = () => {
  const getContainer = () => document.getElementById('content') as HTMLElement

  return (
    <Flex gap="md">
      <Anchor getContainer={getContainer}>
        <Anchor.Link href="overview" title="Overview" />
        <Anchor.Link href="api" title="API">
          <Anchor.Link href="props" title="Props" />
          <Anchor.Link href="methods" title="Methods" />
        </Anchor.Link>
        <Anchor.Link href="examples" title="Examples" />
      </Anchor>
      <div id="content" className="flex-1 h-48 overflow-y-auto">
        {/* Content sections */}
      </div>
    </Flex>
  )
}

export default App
```

### Affix Mode

```tsx
import React from 'react'
import { Anchor } from 'asterui'

const App: React.FC = () => (
  <Anchor
    affix
    affixOffsetTop={80}
    items={[
      { href: 'section-1', title: 'Section 1' },
      { href: 'section-2', title: 'Section 2' },
    ]}
  />
)

export default App
```

## API

### Anchor

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `items` | Anchor links configuration | `AnchorLinkItem[]` | `-` |
| `direction` | Layout direction | `'horizontal' \| 'vertical'` | `'vertical'` |
| `offsetTop` | Offset from top when calculating scroll position | `number` | `0` |
| `bounds` | Bounding distance of anchor area | `number` | `5` |
| `getContainer` | Scroll container (default: window) | `() => HTMLElement \| Window` | `-` |
| `getCurrentAnchor` | Customize the anchor highlight | `(activeLink: string) => string` | `-` |
| `activeLink` | Currently active link (controlled) | `string` | `-` |
| `onChange` | Callback when active link changes | `(activeLink: string) => void` | `-` |
| `onClick` | Callback when link is clicked | `(e: MouseEvent, link: { href: string; title: ReactNode }) => void` | `-` |
| `affix` | Fix anchor when scrolling | `boolean` | `false` |
| `affixOffsetTop` | Pixels offset from top when affix is true | `number` | `0` |
| `replace` | Replace history instead of push | `boolean` | `false` |
| `className` | Custom CSS class | `string` | `-` |
| `children` | Anchor.Link children (alternative to items) | `React.ReactNode` | `-` |
| `data-testid` | Test ID for testing | `string` | - |

### AnchorLinkItem

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `href` | Target element id (without #) | `string` | `-` |
| `title` | Link title | `React.ReactNode` | `-` |
| `children` | Nested link items | `AnchorLinkItem[]` | `-` |
| `data-testid` | Test ID for testing | `string` | - |

### Anchor.Link

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `href` | Target element id (without #) | `string` | `-` |
| `title` | Link title | `React.ReactNode` | `-` |
| `children` | Nested Anchor.Link components | `React.ReactNode` | `-` |
| `className` | Custom CSS class | `string` | `-` |
| `data-testid` | Test ID for testing | `string` | - |
