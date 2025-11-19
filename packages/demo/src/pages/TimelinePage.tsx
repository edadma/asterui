import { Timeline } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'
import { ApiTable } from '../components/ApiTable'
import type { ApiProperty } from '../components/ApiTable'

const timelineApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Timeline items',
    type: 'React.ReactNode',
  },
  {
    property: 'vertical',
    description: 'Vertical layout orientation',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'horizontal',
    description: 'Horizontal layout (default)',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'compact',
    description: 'All items on one side',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'snapIcon',
    description: 'Snap icon to start instead of center',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

export function TimelinePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Timeline</h1>
        <p className="text-base-content/70">
          Display events in chronological order with alternating or vertical layouts.
        </p>
      </div>

      <div className="columns-1 lg:columns-2 gap-x-4">
        <ExampleSection
          title="Basic Timeline"
          description="Simple timeline with alternating content."
          code={`import React from 'react'
import { Timeline } from '@edadma/petalui'

const App: React.FC = () => (
  <Timeline>
    <Timeline.Item>
      <Timeline.Start>1984</Timeline.Start>
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.End box>First Macintosh computer</Timeline.End>
      <Timeline.Connector />
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Connector />
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.Start box>iMac</Timeline.Start>
      <Timeline.End>1998</Timeline.End>
    </Timeline.Item>
  </Timeline>
)

export default App`}
        >
          <Timeline>
            <Timeline.Item>
              <Timeline.Start>1984</Timeline.Start>
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.End box>First Macintosh computer</Timeline.End>
              <Timeline.Connector />
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector />
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.Start box>iMac</Timeline.Start>
              <Timeline.End>1998</Timeline.End>
            </Timeline.Item>
          </Timeline>
        </ExampleSection>

        <ExampleSection
          title="Vertical Timeline"
          description="Stack items vertically."
          code={`import React from 'react'
import { Timeline } from '@edadma/petalui'

const App: React.FC = () => (
  <Timeline vertical>
    <Timeline.Item>
      <Timeline.Connector />
      <Timeline.Start>2015</Timeline.Start>
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-primary w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.End box>Apple Watch</Timeline.End>
      <Timeline.Connector />
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Connector />
      <Timeline.Start>2017</Timeline.Start>
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-primary w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.End box>iPhone X</Timeline.End>
      <Timeline.Connector />
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Connector />
      <Timeline.Start>2020</Timeline.Start>
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-primary w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.End box>Apple Silicon M1</Timeline.End>
      <Timeline.Connector />
    </Timeline.Item>
  </Timeline>
)

export default App`}
        >
          <Timeline vertical>
            <Timeline.Item>
              <Timeline.Connector />
              <Timeline.Start>2015</Timeline.Start>
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.End box>Apple Watch</Timeline.End>
              <Timeline.Connector />
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector />
              <Timeline.Start>2017</Timeline.Start>
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.End box>iPhone X</Timeline.End>
              <Timeline.Connector />
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector />
              <Timeline.Start>2020</Timeline.Start>
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.End box>Apple Silicon M1</Timeline.End>
              <Timeline.Connector />
            </Timeline.Item>
          </Timeline>
        </ExampleSection>

        <ExampleSection
          title="Compact Timeline"
          description="All content on one side."
          code={`import React from 'react'
import { Timeline } from '@edadma/petalui'

const App: React.FC = () => (
  <Timeline vertical compact>
    <Timeline.Item>
      <Timeline.Connector />
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.End box>
        <time>1984</time>
        <div className="text-lg font-black">First Macintosh computer</div>
      </Timeline.End>
      <Timeline.Connector />
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Connector />
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.End box>
        <time>1998</time>
        <div className="text-lg font-black">iMac</div>
      </Timeline.End>
      <Timeline.Connector />
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Connector />
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.End box>
        <time>2001</time>
        <div className="text-lg font-black">iPod</div>
      </Timeline.End>
    </Timeline.Item>
  </Timeline>
)

export default App`}
        >
          <Timeline vertical compact>
            <Timeline.Item>
              <Timeline.Connector />
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.End box>
                <time>1984</time>
                <div className="text-lg font-black">First Macintosh computer</div>
              </Timeline.End>
              <Timeline.Connector />
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector />
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.End box>
                <time>1998</time>
                <div className="text-lg font-black">iMac</div>
              </Timeline.End>
              <Timeline.Connector />
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector />
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.End box>
                <time>2001</time>
                <div className="text-lg font-black">iPod</div>
              </Timeline.End>
            </Timeline.Item>
          </Timeline>
        </ExampleSection>

        <ExampleSection
          title="Colored Connectors"
          description="Style connecting lines with colors."
          code={`import React from 'react'
import { Timeline } from '@edadma/petalui'

const App: React.FC = () => (
  <Timeline vertical>
    <Timeline.Item>
      <Timeline.Connector className="bg-primary" />
      <Timeline.Start>2015</Timeline.Start>
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-primary w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.End box>Apple Watch</Timeline.End>
      <Timeline.Connector className="bg-primary" />
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Connector className="bg-secondary" />
      <Timeline.Start>2017</Timeline.Start>
      <Timeline.Middle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-secondary w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </Timeline.Middle>
      <Timeline.End box>iPhone X</Timeline.End>
      <Timeline.Connector className="bg-secondary" />
    </Timeline.Item>
  </Timeline>
)

export default App`}
        >
          <Timeline vertical>
            <Timeline.Item>
              <Timeline.Connector className="bg-primary" />
              <Timeline.Start>2015</Timeline.Start>
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.End box>Apple Watch</Timeline.End>
              <Timeline.Connector className="bg-primary" />
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector className="bg-secondary" />
              <Timeline.Start>2017</Timeline.Start>
              <Timeline.Middle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-secondary w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Timeline.Middle>
              <Timeline.End box>iPhone X</Timeline.End>
              <Timeline.Connector className="bg-secondary" />
            </Timeline.Item>
          </Timeline>
        </ExampleSection>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Timeline API</h2>
        <ApiTable data={timelineApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Subcomponents</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>Timeline.Item</code>
                </td>
                <td>Individual timeline entry (li element)</td>
              </tr>
              <tr>
                <td>
                  <code>Timeline.Start</code>
                </td>
                <td>Content at start position (left/top)</td>
              </tr>
              <tr>
                <td>
                  <code>Timeline.Middle</code>
                </td>
                <td>Central icon or marker</td>
              </tr>
              <tr>
                <td>
                  <code>Timeline.End</code>
                </td>
                <td>Content at end position (right/bottom)</td>
              </tr>
              <tr>
                <td>
                  <code>Timeline.Connector</code>
                </td>
                <td>Connecting line between items (hr element)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
