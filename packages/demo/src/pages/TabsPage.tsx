import { Tabs } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'
import { ApiTable } from '../components/ApiTable'
import type { ApiProperty } from '../components/ApiTable'
import { useState } from 'react'

const tabsApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Tab buttons',
    type: 'React.ReactNode',
  },
  {
    property: 'variant',
    description: 'Visual style variant',
    type: "'box' | 'border' | 'lift'",
  },
  {
    property: 'size',
    description: 'Tab size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
  },
  {
    property: 'position',
    description: 'Position relative to content',
    type: "'top' | 'bottom'",
    default: "'top'",
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const tabApi: ApiProperty[] = [
  {
    property: 'children',
    description: 'Tab label content',
    type: 'React.ReactNode',
  },
  {
    property: 'active',
    description: 'Mark tab as active',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'disabled',
    description: 'Disable tab',
    type: 'boolean',
    default: 'false',
  },
  {
    property: 'onClick',
    description: 'Click handler',
    type: '() => void',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

export function TabsPage() {
  const [activeTab1, setActiveTab1] = useState('tab1')
  const [activeTab2, setActiveTab2] = useState('home')
  const [activeTab3, setActiveTab3] = useState('updates')
  const [activeTab4, setActiveTab4] = useState('profile')
  const [activeTab5, setActiveTab5] = useState('settings')

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Tabs</h1>
        <p className="text-base-content/70">
          Tabbed interface for organizing and switching between content sections.
        </p>
      </div>

      <div className="columns-1 lg:columns-2 gap-x-4">
        <ExampleSection
          title="Basic Tabs"
          description="Simple tab navigation with active state."
          code={`import React, { useState } from 'react'
import { Tabs } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <Tabs>
      <Tabs.Tab
        active={activeTab === 'tab1'}
        onClick={() => setActiveTab('tab1')}
      >
        Tab 1
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'tab2'}
        onClick={() => setActiveTab('tab2')}
      >
        Tab 2
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'tab3'}
        onClick={() => setActiveTab('tab3')}
      >
        Tab 3
      </Tabs.Tab>
    </Tabs>
  )
}

export default App`}
        >
          <Tabs>
            <Tabs.Tab active={activeTab1 === 'tab1'} onClick={() => setActiveTab1('tab1')}>
              Tab 1
            </Tabs.Tab>
            <Tabs.Tab active={activeTab1 === 'tab2'} onClick={() => setActiveTab1('tab2')}>
              Tab 2
            </Tabs.Tab>
            <Tabs.Tab active={activeTab1 === 'tab3'} onClick={() => setActiveTab1('tab3')}>
              Tab 3
            </Tabs.Tab>
          </Tabs>
        </ExampleSection>

        <ExampleSection
          title="Boxed Tabs"
          description="Tabs with enclosed box styling."
          code={`import React, { useState } from 'react'
import { Tabs } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <Tabs variant="box">
      <Tabs.Tab
        active={activeTab === 'home'}
        onClick={() => setActiveTab('home')}
      >
        Home
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'messages'}
        onClick={() => setActiveTab('messages')}
      >
        Messages
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'settings'}
        onClick={() => setActiveTab('settings')}
      >
        Settings
      </Tabs.Tab>
    </Tabs>
  )
}

export default App`}
        >
          <Tabs variant="box">
            <Tabs.Tab active={activeTab2 === 'home'} onClick={() => setActiveTab2('home')}>
              Home
            </Tabs.Tab>
            <Tabs.Tab active={activeTab2 === 'messages'} onClick={() => setActiveTab2('messages')}>
              Messages
            </Tabs.Tab>
            <Tabs.Tab active={activeTab2 === 'settings'} onClick={() => setActiveTab2('settings')}>
              Settings
            </Tabs.Tab>
          </Tabs>
        </ExampleSection>

        <ExampleSection
          title="Bordered Tabs"
          description="Tabs with bottom border highlight."
          code={`import React, { useState } from 'react'
import { Tabs } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('updates')

  return (
    <Tabs variant="border">
      <Tabs.Tab
        active={activeTab === 'overview'}
        onClick={() => setActiveTab('overview')}
      >
        Overview
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'updates'}
        onClick={() => setActiveTab('updates')}
      >
        Updates
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'reports'}
        onClick={() => setActiveTab('reports')}
      >
        Reports
      </Tabs.Tab>
    </Tabs>
  )
}

export default App`}
        >
          <Tabs variant="border">
            <Tabs.Tab active={activeTab3 === 'overview'} onClick={() => setActiveTab3('overview')}>
              Overview
            </Tabs.Tab>
            <Tabs.Tab active={activeTab3 === 'updates'} onClick={() => setActiveTab3('updates')}>
              Updates
            </Tabs.Tab>
            <Tabs.Tab active={activeTab3 === 'reports'} onClick={() => setActiveTab3('reports')}>
              Reports
            </Tabs.Tab>
          </Tabs>
        </ExampleSection>

        <ExampleSection
          title="Lifted Tabs"
          description="Tabs with 3D lifted appearance."
          code={`import React, { useState } from 'react'
import { Tabs } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <Tabs variant="lift">
      <Tabs.Tab
        active={activeTab === 'profile'}
        onClick={() => setActiveTab('profile')}
      >
        Profile
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'account'}
        onClick={() => setActiveTab('account')}
      >
        Account
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'privacy'}
        onClick={() => setActiveTab('privacy')}
      >
        Privacy
      </Tabs.Tab>
    </Tabs>
  )
}

export default App`}
        >
          <Tabs variant="lift">
            <Tabs.Tab active={activeTab4 === 'profile'} onClick={() => setActiveTab4('profile')}>
              Profile
            </Tabs.Tab>
            <Tabs.Tab active={activeTab4 === 'account'} onClick={() => setActiveTab4('account')}>
              Account
            </Tabs.Tab>
            <Tabs.Tab active={activeTab4 === 'privacy'} onClick={() => setActiveTab4('privacy')}>
              Privacy
            </Tabs.Tab>
          </Tabs>
        </ExampleSection>

        <ExampleSection
          title="Tab Sizes"
          description="Different tab sizes from xs to xl."
          code={`import React, { useState } from 'react'
import { Tabs } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab2')

  return (
    <div className="flex flex-col gap-4">
      <Tabs size="xs">
        <Tabs.Tab active={activeTab === 'tab1'}>Tab XS</Tabs.Tab>
        <Tabs.Tab>Tab XS</Tabs.Tab>
      </Tabs>
      <Tabs size="sm">
        <Tabs.Tab active={activeTab === 'tab1'}>Tab SM</Tabs.Tab>
        <Tabs.Tab>Tab SM</Tabs.Tab>
      </Tabs>
      <Tabs size="md">
        <Tabs.Tab active={activeTab === 'tab1'}>Tab MD</Tabs.Tab>
        <Tabs.Tab>Tab MD</Tabs.Tab>
      </Tabs>
      <Tabs size="lg">
        <Tabs.Tab active={activeTab === 'tab1'}>Tab LG</Tabs.Tab>
        <Tabs.Tab>Tab LG</Tabs.Tab>
      </Tabs>
      <Tabs size="xl">
        <Tabs.Tab active={activeTab === 'tab1'}>Tab XL</Tabs.Tab>
        <Tabs.Tab>Tab XL</Tabs.Tab>
      </Tabs>
    </div>
  )
}

export default App`}
        >
          <div className="flex flex-col gap-4">
            <Tabs size="xs">
              <Tabs.Tab active>Tab XS</Tabs.Tab>
              <Tabs.Tab>Tab XS</Tabs.Tab>
            </Tabs>
            <Tabs size="sm">
              <Tabs.Tab active>Tab SM</Tabs.Tab>
              <Tabs.Tab>Tab SM</Tabs.Tab>
            </Tabs>
            <Tabs size="md">
              <Tabs.Tab active>Tab MD</Tabs.Tab>
              <Tabs.Tab>Tab MD</Tabs.Tab>
            </Tabs>
            <Tabs size="lg">
              <Tabs.Tab active>Tab LG</Tabs.Tab>
              <Tabs.Tab>Tab LG</Tabs.Tab>
            </Tabs>
            <Tabs size="xl">
              <Tabs.Tab active>Tab XL</Tabs.Tab>
              <Tabs.Tab>Tab XL</Tabs.Tab>
            </Tabs>
          </div>
        </ExampleSection>

        <ExampleSection
          title="Disabled Tab"
          description="Tabs with disabled state."
          code={`import React, { useState } from 'react'
import { Tabs } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('settings')

  return (
    <Tabs variant="box">
      <Tabs.Tab
        active={activeTab === 'settings'}
        onClick={() => setActiveTab('settings')}
      >
        Settings
      </Tabs.Tab>
      <Tabs.Tab
        active={activeTab === 'security'}
        onClick={() => setActiveTab('security')}
      >
        Security
      </Tabs.Tab>
      <Tabs.Tab disabled>
        Disabled
      </Tabs.Tab>
    </Tabs>
  )
}

export default App`}
        >
          <Tabs variant="box">
            <Tabs.Tab active={activeTab5 === 'settings'} onClick={() => setActiveTab5('settings')}>
              Settings
            </Tabs.Tab>
            <Tabs.Tab active={activeTab5 === 'security'} onClick={() => setActiveTab5('security')}>
              Security
            </Tabs.Tab>
            <Tabs.Tab disabled>Disabled</Tabs.Tab>
          </Tabs>
        </ExampleSection>

        <ExampleSection
          title="Tabs with Content"
          description="Tabs with conditional content display."
          code={`import React, { useState } from 'react'
import { Tabs } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <>
      <Tabs variant="border">
        <Tabs.Tab
          active={activeTab === 'profile'}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </Tabs.Tab>
        <Tabs.Tab
          active={activeTab === 'activity'}
          onClick={() => setActiveTab('activity')}
        >
          Activity
        </Tabs.Tab>
        <Tabs.Tab
          active={activeTab === 'notifications'}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications
        </Tabs.Tab>
      </Tabs>
      <div className="p-4 bg-base-200 mt-2 rounded-box">
        {activeTab === 'profile' && (
          <div>
            <h3 className="font-bold mb-2">Profile Content</h3>
            <p>Your profile information and settings.</p>
          </div>
        )}
        {activeTab === 'activity' && (
          <div>
            <h3 className="font-bold mb-2">Activity Content</h3>
            <p>Recent activity and history.</p>
          </div>
        )}
        {activeTab === 'notifications' && (
          <div>
            <h3 className="font-bold mb-2">Notifications Content</h3>
            <p>Your notifications and alerts.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App`}
        >
          <>
            <Tabs variant="border">
              <Tabs.Tab active={activeTab5 === 'profile'} onClick={() => setActiveTab5('profile')}>
                Profile
              </Tabs.Tab>
              <Tabs.Tab active={activeTab5 === 'activity'} onClick={() => setActiveTab5('activity')}>
                Activity
              </Tabs.Tab>
              <Tabs.Tab
                active={activeTab5 === 'notifications'}
                onClick={() => setActiveTab5('notifications')}
              >
                Notifications
              </Tabs.Tab>
            </Tabs>
            <div className="p-4 bg-base-200 mt-2 rounded-box">
              {activeTab5 === 'profile' && (
                <div>
                  <h3 className="font-bold mb-2">Profile Content</h3>
                  <p>Your profile information and settings.</p>
                </div>
              )}
              {activeTab5 === 'activity' && (
                <div>
                  <h3 className="font-bold mb-2">Activity Content</h3>
                  <p>Recent activity and history.</p>
                </div>
              )}
              {activeTab5 === 'notifications' && (
                <div>
                  <h3 className="font-bold mb-2">Notifications Content</h3>
                  <p>Your notifications and alerts.</p>
                </div>
              )}
            </div>
          </>
        </ExampleSection>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Tabs API</h2>
        <ApiTable data={tabsApi} />

        <h2 className="text-2xl font-bold mb-4 mt-8">Tabs.Tab API</h2>
        <ApiTable data={tabApi} />

        <div className="alert alert-info mt-8">
          <div>
            <strong>Usage Tips:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Use controlled state with onClick and active props</li>
              <li>Manage content visibility based on activeTab state</li>
              <li>Variants: box, border, lift for different visual styles</li>
              <li>Combine with conditional rendering for tab panels</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
