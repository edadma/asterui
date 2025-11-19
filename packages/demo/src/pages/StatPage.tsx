import { Stats, Button } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'
import { ApiTable } from '../components/ApiTable'
import type { ApiProperty } from '../components/ApiTable'

const statsApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Stat items to display',
    type: 'React.ReactNode',
  },
  {
    property: 'vertical',
    description: 'Stack stats vertically',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const statApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Stat content (Title, Value, Desc, etc.)',
    type: 'React.ReactNode',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

export function StatPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Stats</h1>
        <p className="text-base-content/70">
          Display statistics and data in organized blocks for dashboards and analytics.
        </p>
      </div>

      <div className="columns-1 lg:columns-2 gap-x-4">
        <ExampleSection
          title="Basic Stat"
          description="Simple stat with title and value."
          code={`import React from 'react'
import { Stats } from '@edadma/petalui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat>
      <Stats.Title>Total Page Views</Stats.Title>
      <Stats.Value>89,400</Stats.Value>
    </Stats.Stat>
  </Stats>
)

export default App`}
        >
          <Stats className="shadow">
            <Stats.Stat>
              <Stats.Title>Total Page Views</Stats.Title>
              <Stats.Value>89,400</Stats.Value>
            </Stats.Stat>
          </Stats>
        </ExampleSection>

        <ExampleSection
          title="With Description"
          description="Adding description text below the value."
          code={`import React from 'react'
import { Stats } from '@edadma/petalui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat>
      <Stats.Title>Downloads</Stats.Title>
      <Stats.Value>31K</Stats.Value>
      <Stats.Desc>Jan 1st - Feb 1st</Stats.Desc>
    </Stats.Stat>
  </Stats>
)

export default App`}
        >
          <Stats className="shadow">
            <Stats.Stat>
              <Stats.Title>Downloads</Stats.Title>
              <Stats.Value>31K</Stats.Value>
              <Stats.Desc>Jan 1st - Feb 1st</Stats.Desc>
            </Stats.Stat>
          </Stats>
        </ExampleSection>

        <ExampleSection
          title="Multiple Stats"
          description="Display multiple stats horizontally."
          code={`import React from 'react'
import { Stats } from '@edadma/petalui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat>
      <Stats.Title>Total Users</Stats.Title>
      <Stats.Value>4,200</Stats.Value>
      <Stats.Desc>↗︎ 400 (22%)</Stats.Desc>
    </Stats.Stat>

    <Stats.Stat>
      <Stats.Title>New Users</Stats.Title>
      <Stats.Value>1,200</Stats.Value>
      <Stats.Desc>↘︎ 90 (14%)</Stats.Desc>
    </Stats.Stat>

    <Stats.Stat>
      <Stats.Title>New Registers</Stats.Title>
      <Stats.Value>4,200</Stats.Value>
      <Stats.Desc>↗︎ 400 (22%)</Stats.Desc>
    </Stats.Stat>
  </Stats>
)

export default App`}
        >
          <Stats className="shadow">
            <Stats.Stat>
              <Stats.Title>Total Users</Stats.Title>
              <Stats.Value>4,200</Stats.Value>
              <Stats.Desc>↗︎ 400 (22%)</Stats.Desc>
            </Stats.Stat>

            <Stats.Stat>
              <Stats.Title>New Users</Stats.Title>
              <Stats.Value>1,200</Stats.Value>
              <Stats.Desc>↘︎ 90 (14%)</Stats.Desc>
            </Stats.Stat>

            <Stats.Stat>
              <Stats.Title>New Registers</Stats.Title>
              <Stats.Value>4,200</Stats.Value>
              <Stats.Desc>↗︎ 400 (22%)</Stats.Desc>
            </Stats.Stat>
          </Stats>
        </ExampleSection>

        <ExampleSection
          title="With Icons"
          description="Adding icons using stat-figure."
          code={`import React from 'react'
import { Stats } from '@edadma/petalui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat>
      <Stats.Figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-8 h-8 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </Stats.Figure>
      <Stats.Title>Downloads</Stats.Title>
      <Stats.Value>31K</Stats.Value>
      <Stats.Desc>Jan 1st - Feb 1st</Stats.Desc>
    </Stats.Stat>

    <Stats.Stat>
      <Stats.Figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-8 h-8 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          ></path>
        </svg>
      </Stats.Figure>
      <Stats.Title>New Users</Stats.Title>
      <Stats.Value>4,200</Stats.Value>
      <Stats.Desc>↗︎ 400 (22%)</Stats.Desc>
    </Stats.Stat>
  </Stats>
)

export default App`}
        >
          <Stats className="shadow">
            <Stats.Stat>
              <Stats.Figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </Stats.Figure>
              <Stats.Title>Downloads</Stats.Title>
              <Stats.Value>31K</Stats.Value>
              <Stats.Desc>Jan 1st - Feb 1st</Stats.Desc>
            </Stats.Stat>

            <Stats.Stat>
              <Stats.Figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </Stats.Figure>
              <Stats.Title>New Users</Stats.Title>
              <Stats.Value>4,200</Stats.Value>
              <Stats.Desc>↗︎ 400 (22%)</Stats.Desc>
            </Stats.Stat>
          </Stats>
        </ExampleSection>

        <ExampleSection
          title="Colored Values"
          description="Using color classes for stat values."
          code={`import React from 'react'
import { Stats } from '@edadma/petalui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat>
      <Stats.Title>Account balance</Stats.Title>
      <Stats.Value className="text-primary">$89,400</Stats.Value>
      <Stats.Desc>21% more than last month</Stats.Desc>
    </Stats.Stat>

    <Stats.Stat>
      <Stats.Title>Current balance</Stats.Title>
      <Stats.Value className="text-secondary">$12,721</Stats.Value>
      <Stats.Desc>12% less than last month</Stats.Desc>
    </Stats.Stat>
  </Stats>
)

export default App`}
        >
          <Stats className="shadow">
            <Stats.Stat>
              <Stats.Title>Account balance</Stats.Title>
              <Stats.Value className="text-primary">$89,400</Stats.Value>
              <Stats.Desc>21% more than last month</Stats.Desc>
            </Stats.Stat>

            <Stats.Stat>
              <Stats.Title>Current balance</Stats.Title>
              <Stats.Value className="text-secondary">$12,721</Stats.Value>
              <Stats.Desc>12% less than last month</Stats.Desc>
            </Stats.Stat>
          </Stats>
        </ExampleSection>

        <ExampleSection
          title="Vertical Layout"
          description="Stack stats vertically."
          code={`import React from 'react'
import { Stats } from '@edadma/petalui'

const App: React.FC = () => (
  <Stats vertical className="shadow">
    <Stats.Stat>
      <Stats.Title>Downloads</Stats.Title>
      <Stats.Value>31K</Stats.Value>
      <Stats.Desc>Jan 1st - Feb 1st</Stats.Desc>
    </Stats.Stat>

    <Stats.Stat>
      <Stats.Title>New Users</Stats.Title>
      <Stats.Value>4,200</Stats.Value>
      <Stats.Desc>↗︎ 400 (22%)</Stats.Desc>
    </Stats.Stat>

    <Stats.Stat>
      <Stats.Title>New Registers</Stats.Title>
      <Stats.Value>1,200</Stats.Value>
      <Stats.Desc>↘︎ 90 (14%)</Stats.Desc>
    </Stats.Stat>
  </Stats>
)

export default App`}
        >
          <Stats vertical className="shadow">
            <Stats.Stat>
              <Stats.Title>Downloads</Stats.Title>
              <Stats.Value>31K</Stats.Value>
              <Stats.Desc>Jan 1st - Feb 1st</Stats.Desc>
            </Stats.Stat>

            <Stats.Stat>
              <Stats.Title>New Users</Stats.Title>
              <Stats.Value>4,200</Stats.Value>
              <Stats.Desc>↗︎ 400 (22%)</Stats.Desc>
            </Stats.Stat>

            <Stats.Stat>
              <Stats.Title>New Registers</Stats.Title>
              <Stats.Value>1,200</Stats.Value>
              <Stats.Desc>↘︎ 90 (14%)</Stats.Desc>
            </Stats.Stat>
          </Stats>
        </ExampleSection>

        <ExampleSection
          title="With Actions"
          description="Adding buttons below the stat."
          code={`import React from 'react'
import { Stats, Button } from '@edadma/petalui'

const App: React.FC = () => (
  <Stats className="shadow">
    <Stats.Stat>
      <Stats.Title>Account balance</Stats.Title>
      <Stats.Value>$89,400</Stats.Value>
      <Stats.Actions>
        <Button size="sm" type="primary">
          Add funds
        </Button>
      </Stats.Actions>
    </Stats.Stat>
  </Stats>
)

export default App`}
        >
          <Stats className="shadow">
            <Stats.Stat>
              <Stats.Title>Account balance</Stats.Title>
              <Stats.Value>$89,400</Stats.Value>
              <Stats.Actions>
                <Button size="sm" type="primary">
                  Add funds
                </Button>
              </Stats.Actions>
            </Stats.Stat>
          </Stats>
        </ExampleSection>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Stats API</h2>
        <ApiTable data={statsApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Stats.Stat API</h2>
        <ApiTable data={statApi} />

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
                  <code>Stats.Title</code>
                </td>
                <td>Label or heading for the stat</td>
              </tr>
              <tr>
                <td>
                  <code>Stats.Value</code>
                </td>
                <td>Main numeric value display</td>
              </tr>
              <tr>
                <td>
                  <code>Stats.Desc</code>
                </td>
                <td>Supporting description text</td>
              </tr>
              <tr>
                <td>
                  <code>Stats.Figure</code>
                </td>
                <td>Space for icons or images</td>
              </tr>
              <tr>
                <td>
                  <code>Stats.Actions</code>
                </td>
                <td>Area for buttons or controls</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
