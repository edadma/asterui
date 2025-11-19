import { Card, Button, Badge } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'
import { ApiTable } from '../components/ApiTable'
import type { ApiProperty } from '../components/ApiTable'

const cardApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Card content',
    type: 'ReactNode',
  },
  {
    property: 'size',
    description: 'Card size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
  },
  {
    property: 'bordered',
    description: 'Add border to card',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'side',
    description: 'Place image beside content (horizontal layout)',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'imageFull',
    description: 'Make image a full background overlay',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const cardBodyApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Body content',
    type: 'ReactNode',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const cardTitleApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Title content',
    type: 'ReactNode',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const cardActionsApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Action buttons or elements',
    type: 'ReactNode',
  },
  {
    property: 'justify',
    description: 'Horizontal alignment of actions',
    type: "'start' | 'center' | 'end'",
    default: "'end'",
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const cardFigureApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Figure content (usually an image)',
    type: 'ReactNode',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

export function CardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Card</h1>
        <p className="text-base-content/70">
          Container component for grouping related content with optional images, titles, and actions.
        </p>
      </div>

      <div className="columns-1 lg:columns-2 gap-x-4">
        <ExampleSection
          title="Basic Card"
          description="Simple card with title and content."
          code={`import React from 'react'
import { Card } from '@edadma/petalui'

const App: React.FC = () => (
  <Card className="w-96">
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <p>This is a basic card with some content inside it.</p>
    </Card.Body>
  </Card>
)

export default App`}
        >
          <Card className="w-96">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <p>This is a basic card with some content inside it.</p>
            </Card.Body>
          </Card>
        </ExampleSection>

        <ExampleSection
          title="Card with Image"
          description="Card with an image at the top."
          code={`import React from 'react'
import { Card } from '@edadma/petalui'

const App: React.FC = () => (
  <Card className="w-96">
    <Card.Figure>
      <img
        src="https://picsum.photos/400/200"
        alt="Placeholder"
      />
    </Card.Figure>
    <Card.Body>
      <Card.Title>Image Card</Card.Title>
      <p>A card with an image positioned at the top.</p>
    </Card.Body>
  </Card>
)

export default App`}
        >
          <Card className="w-96">
            <Card.Figure>
              <img
                src="https://picsum.photos/400/200"
                alt="Placeholder"
              />
            </Card.Figure>
            <Card.Body>
              <Card.Title>Image Card</Card.Title>
              <p>A card with an image positioned at the top.</p>
            </Card.Body>
          </Card>
        </ExampleSection>

        <ExampleSection
          title="Card with Actions"
          description="Card with action buttons."
          code={`import React from 'react'
import { Card, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Card className="w-96">
    <Card.Body>
      <Card.Title>Action Card</Card.Title>
      <p>Card with buttons in the actions area.</p>
      <Card.Actions>
        <Button type="primary">Accept</Button>
        <Button type="ghost">Decline</Button>
      </Card.Actions>
    </Card.Body>
  </Card>
)

export default App`}
        >
          <Card className="w-96">
            <Card.Body>
              <Card.Title>Action Card</Card.Title>
              <p>Card with buttons in the actions area.</p>
              <Card.Actions>
                <Button type="primary">Accept</Button>
                <Button type="ghost">Decline</Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </ExampleSection>

        <ExampleSection
          title="Bordered Card"
          description="Card with a border."
          code={`import React from 'react'
import { Card } from '@edadma/petalui'

const App: React.FC = () => (
  <Card className="w-96" bordered>
    <Card.Body>
      <Card.Title>Bordered Card</Card.Title>
      <p>This card has a border around it.</p>
    </Card.Body>
  </Card>
)

export default App`}
        >
          <Card className="w-96" bordered>
            <Card.Body>
              <Card.Title>Bordered Card</Card.Title>
              <p>This card has a border around it.</p>
            </Card.Body>
          </Card>
        </ExampleSection>

        <ExampleSection
          title="Card Sizes"
          description="Cards in different sizes."
          code={`import React from 'react'
import { Card } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex flex-col gap-4">
    <Card className="w-96" size="xs" bordered>
      <Card.Body>
        <Card.Title>Extra Small</Card.Title>
        <p>Compact card with minimal padding.</p>
      </Card.Body>
    </Card>
    <Card className="w-96" size="sm" bordered>
      <Card.Body>
        <Card.Title>Small</Card.Title>
        <p>Small card with reduced padding.</p>
      </Card.Body>
    </Card>
    <Card className="w-96" size="lg" bordered>
      <Card.Body>
        <Card.Title>Large</Card.Title>
        <p>Large card with increased padding.</p>
      </Card.Body>
    </Card>
  </div>
)

export default App`}
        >
          <div className="flex flex-col gap-4 w-96">
            <Card size="xs" bordered>
              <Card.Body>
                <Card.Title>Extra Small</Card.Title>
                <p>Compact card with minimal padding.</p>
              </Card.Body>
            </Card>
            <Card size="sm" bordered>
              <Card.Body>
                <Card.Title>Small</Card.Title>
                <p>Small card with reduced padding.</p>
              </Card.Body>
            </Card>
            <Card size="lg" bordered>
              <Card.Body>
                <Card.Title>Large</Card.Title>
                <p>Large card with increased padding.</p>
              </Card.Body>
            </Card>
          </div>
        </ExampleSection>

        <ExampleSection
          title="Side Layout"
          description="Horizontal card with image on the side."
          code={`import React from 'react'
import { Card, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Card className="w-96" side>
    <Card.Figure>
      <img
        src="https://picsum.photos/200/300"
        alt="Placeholder"
        className="w-32 h-full object-cover"
      />
    </Card.Figure>
    <Card.Body>
      <Card.Title>Side Card</Card.Title>
      <p>Image positioned beside the content.</p>
      <Card.Actions>
        <Button type="primary">Buy Now</Button>
      </Card.Actions>
    </Card.Body>
  </Card>
)

export default App`}
        >
          <Card className="w-96" side>
            <Card.Figure>
              <img
                src="https://picsum.photos/200/300"
                alt="Placeholder"
                className="w-32 h-full object-cover"
              />
            </Card.Figure>
            <Card.Body>
              <Card.Title>Side Card</Card.Title>
              <p>Image positioned beside the content.</p>
              <Card.Actions>
                <Button type="primary">Buy Now</Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </ExampleSection>

        <ExampleSection
          title="Full Background Image"
          description="Card with image as full background overlay."
          code={`import React from 'react'
import { Card, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Card className="w-96 h-64" imageFull>
    <Card.Figure>
      <img
        src="https://picsum.photos/400/300"
        alt="Placeholder"
      />
    </Card.Figure>
    <Card.Body className="text-neutral-content">
      <Card.Title>Overlay Card</Card.Title>
      <p>Text appears over the background image.</p>
      <Card.Actions>
        <Button type="primary">View Details</Button>
      </Card.Actions>
    </Card.Body>
  </Card>
)

export default App`}
        >
          <Card className="w-96 h-64" imageFull>
            <Card.Figure>
              <img
                src="https://picsum.photos/400/300"
                alt="Placeholder"
              />
            </Card.Figure>
            <Card.Body className="text-neutral-content">
              <Card.Title>Overlay Card</Card.Title>
              <p>Text appears over the background image.</p>
              <Card.Actions>
                <Button type="primary">View Details</Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </ExampleSection>

        <ExampleSection
          title="Card with Badge"
          description="Card with badge in title."
          code={`import React from 'react'
import { Card, Badge, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Card className="w-96" bordered>
    <Card.Body>
      <Card.Title>
        New Product
        <Badge type="primary" content="NEW" size="sm" />
      </Card.Title>
      <p>Check out our latest offering with special features.</p>
      <Card.Actions>
        <Button type="primary">Learn More</Button>
      </Card.Actions>
    </Card.Body>
  </Card>
)

export default App`}
        >
          <Card className="w-96" bordered>
            <Card.Body>
              <Card.Title>
                New Product
                <Badge type="primary" content="NEW" size="sm" />
              </Card.Title>
              <p>Check out our latest offering with special features.</p>
              <Card.Actions>
                <Button type="primary">Learn More</Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </ExampleSection>

        <ExampleSection
          title="Centered Content"
          description="Card with centered text and items."
          code={`import React from 'react'
import { Card, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Card className="w-96" bordered>
    <Card.Body className="items-center text-center">
      <Card.Title>Centered Card</Card.Title>
      <p>All content is centered in this card.</p>
      <Card.Actions>
        <Button type="primary">Action</Button>
        <Button type="ghost">Cancel</Button>
      </Card.Actions>
    </Card.Body>
  </Card>
)

export default App`}
        >
          <Card className="w-96" bordered>
            <Card.Body className="items-center text-center">
              <Card.Title>Centered Card</Card.Title>
              <p>All content is centered in this card.</p>
              <Card.Actions>
                <Button type="primary">Action</Button>
                <Button type="ghost">Cancel</Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </ExampleSection>

        <ExampleSection
          title="Custom Colors"
          description="Card with custom background colors."
          code={`import React from 'react'
import { Card } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex flex-col gap-4">
    <Card className="w-96 bg-primary text-primary-content">
      <Card.Body>
        <Card.Title>Primary Card</Card.Title>
        <p>Card with primary background color.</p>
      </Card.Body>
    </Card>
    <Card className="w-96 bg-neutral text-neutral-content">
      <Card.Body>
        <Card.Title>Neutral Card</Card.Title>
        <p>Card with neutral background color.</p>
      </Card.Body>
    </Card>
  </div>
)

export default App`}
        >
          <div className="flex flex-col gap-4 w-96">
            <Card className="bg-primary text-primary-content">
              <Card.Body>
                <Card.Title>Primary Card</Card.Title>
                <p>Card with primary background color.</p>
              </Card.Body>
            </Card>
            <Card className="bg-neutral text-neutral-content">
              <Card.Body>
                <Card.Title>Neutral Card</Card.Title>
                <p>Card with neutral background color.</p>
              </Card.Body>
            </Card>
          </div>
        </ExampleSection>

        <ExampleSection
          title="Image at Bottom"
          description="Card with image positioned at the bottom."
          code={`import React from 'react'
import { Card, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Card className="w-96" bordered>
    <Card.Body>
      <Card.Title>Bottom Image</Card.Title>
      <p>The image appears below the content.</p>
      <Card.Actions>
        <Button type="primary" size="sm">View</Button>
      </Card.Actions>
    </Card.Body>
    <Card.Figure>
      <img
        src="https://picsum.photos/400/150"
        alt="Placeholder"
      />
    </Card.Figure>
  </Card>
)

export default App`}
        >
          <Card className="w-96" bordered>
            <Card.Body>
              <Card.Title>Bottom Image</Card.Title>
              <p>The image appears below the content.</p>
              <Card.Actions>
                <Button type="primary" size="sm">View</Button>
              </Card.Actions>
            </Card.Body>
            <Card.Figure>
              <img
                src="https://picsum.photos/400/150"
                alt="Placeholder"
              />
            </Card.Figure>
          </Card>
        </ExampleSection>

        <ExampleSection
          title="Action Alignment"
          description="Different action button alignments."
          code={`import React from 'react'
import { Card, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <div className="flex flex-col gap-4">
    <Card className="w-96" bordered>
      <Card.Body>
        <Card.Title>Left Actions</Card.Title>
        <p>Actions aligned to the left.</p>
        <Card.Actions justify="start">
          <Button type="primary" size="sm">Left</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
    <Card className="w-96" bordered>
      <Card.Body>
        <Card.Title>Center Actions</Card.Title>
        <p>Actions aligned to the center.</p>
        <Card.Actions justify="center">
          <Button type="primary" size="sm">Center</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  </div>
)

export default App`}
        >
          <div className="flex flex-col gap-4 w-96">
            <Card bordered>
              <Card.Body>
                <Card.Title>Left Actions</Card.Title>
                <p>Actions aligned to the left.</p>
                <Card.Actions justify="start">
                  <Button type="primary" size="sm">Left</Button>
                </Card.Actions>
              </Card.Body>
            </Card>
            <Card bordered>
              <Card.Body>
                <Card.Title>Center Actions</Card.Title>
                <p>Actions aligned to the center.</p>
                <Card.Actions justify="center">
                  <Button type="primary" size="sm">Center</Button>
                </Card.Actions>
              </Card.Body>
            </Card>
          </div>
        </ExampleSection>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Card API</h2>
        <ApiTable data={cardApi} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Card.Body API</h2>
        <ApiTable data={cardBodyApi} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Card.Title API</h2>
        <ApiTable data={cardTitleApi} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Card.Actions API</h2>
        <ApiTable data={cardActionsApi} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Card.Figure API</h2>
        <ApiTable data={cardFigureApi} />
      </div>
    </div>
  )
}
