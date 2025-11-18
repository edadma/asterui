import { Button } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'

export function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Button</h1>
        <p className="text-base-content/70">
          Button component with DaisyUI styling and multiple types.
        </p>
      </div>

      <ExampleSection
        title="Types"
        description="Use the type prop to set the button style."
        code={`import React from 'react'
import { Button } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex gap-4 flex-wrap">
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="accent">Accent</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="link">Link</Button>
  </div>
)

export default App`}
      >
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="accent">Accent</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="link">Link</Button>
      </ExampleSection>

      <ExampleSection
        title="Sizes"
        description="Buttons come in four sizes: xs, sm, md (default), and lg."
        code={`import React from 'react'
import { Button } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex gap-4 items-center flex-wrap">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
)

export default App`}
      >
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </ExampleSection>

      <ExampleSection
        title="States"
        description="Buttons support disabled state through the standard disabled attribute."
        code={`import React from 'react'
import { Button } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex gap-4 flex-wrap">
    <Button type="primary">Normal</Button>
    <Button type="primary" disabled>
      Disabled
    </Button>
  </div>
)

export default App`}
      >
        <Button type="primary">Normal</Button>
        <Button type="primary" disabled>
          Disabled
        </Button>
      </ExampleSection>

      <ExampleSection
        title="Combinations"
        description="Combine type and size props to create different button variations."
        code={`import React from 'react'
import { Button } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex gap-4 flex-wrap">
    <Button type="primary" size="sm">
      Small Primary
    </Button>
    <Button type="secondary" size="lg">
      Large Secondary
    </Button>
    <Button type="accent" size="xs">
      XS Accent
    </Button>
  </div>
)

export default App`}
      >
        <Button type="primary" size="sm">
          Small Primary
        </Button>
        <Button type="secondary" size="lg">
          Large Secondary
        </Button>
        <Button type="accent" size="xs">
          XS Accent
        </Button>
      </ExampleSection>
    </div>
  )
}
