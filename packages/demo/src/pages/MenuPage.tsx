import { useState } from 'react'
import { Menu } from '@edadma/petalui'
import type { MenuItem, MenuGroup } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'
import { ApiTable } from '../components/ApiTable'
import type { ApiProperty } from '../components/ApiTable'

const menuApi: ApiProperty[] = [
  {
    property: 'items',
    description: 'Array of menu items',
    type: 'MenuItem[]',
  },
  {
    property: 'groups',
    description: 'Array of menu groups with titles',
    type: 'MenuGroup[]',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
]

const menuItemApi: ApiProperty[] = [
  {
    property: 'key',
    description: 'Unique identifier for the menu item',
    type: 'string',
  },
  {
    property: 'label',
    description: 'Text to display for the menu item',
    type: 'string',
  },
  {
    property: 'onClick',
    description: 'Click handler function',
    type: '() => void',
  },
  {
    property: 'active',
    description: 'Whether the menu item is active/selected',
    type: 'boolean',
    default: 'false',
  },
]

const menuGroupApi: ApiProperty[] = [
  {
    property: 'title',
    description: 'Optional group title/header',
    type: 'string',
  },
  {
    property: 'items',
    description: 'Array of menu items in this group',
    type: 'MenuItem[]',
  },
]

export function MenuPage() {
  const [activeKey1, setActiveKey1] = useState('home')
  const [activeKey2, setActiveKey2] = useState('dashboard')

  const basicItems: MenuItem[] = [
    { key: 'home', label: 'Home', onClick: () => setActiveKey1('home'), active: activeKey1 === 'home' },
    { key: 'about', label: 'About', onClick: () => setActiveKey1('about'), active: activeKey1 === 'about' },
    { key: 'contact', label: 'Contact', onClick: () => setActiveKey1('contact'), active: activeKey1 === 'contact' },
  ]

  const groupedMenu: MenuGroup[] = [
    {
      title: 'Main',
      items: [
        { key: 'dashboard', label: 'Dashboard', onClick: () => setActiveKey2('dashboard'), active: activeKey2 === 'dashboard' },
        { key: 'analytics', label: 'Analytics', onClick: () => setActiveKey2('analytics'), active: activeKey2 === 'analytics' },
      ],
    },
    {
      title: 'Settings',
      items: [
        { key: 'profile', label: 'Profile', onClick: () => setActiveKey2('profile'), active: activeKey2 === 'profile' },
        { key: 'preferences', label: 'Preferences', onClick: () => setActiveKey2('preferences'), active: activeKey2 === 'preferences' },
      ],
    },
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Menu</h1>
        <p className="text-base-content/70">
          Vertical menu component for navigation lists and grouped items.
        </p>
      </div>

      <div className="columns-1 lg:columns-2 gap-x-4">
        <ExampleSection
          title="Basic Menu"
          description="Simple menu with clickable items."
          code={`import React, { useState } from 'react'
import { Menu } from '@edadma/petalui'
import type { MenuItem } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState('home')

  const items: MenuItem[] = [
    { key: 'home', label: 'Home', onClick: () => setActiveKey('home'), active: activeKey === 'home' },
    { key: 'about', label: 'About', onClick: () => setActiveKey('about'), active: activeKey === 'about' },
    { key: 'contact', label: 'Contact', onClick: () => setActiveKey('contact'), active: activeKey === 'contact' },
  ]

  return <Menu items={items} />
}

export default App`}
        >
          <div className="w-64">
            <Menu items={basicItems} />
          </div>
        </ExampleSection>

        <ExampleSection
          title="Grouped Menu"
          description="Menu with titled sections."
          code={`import React, { useState } from 'react'
import { Menu } from '@edadma/petalui'
import type { MenuGroup } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState('dashboard')

  const groups: MenuGroup[] = [
    {
      title: 'Main',
      items: [
        { key: 'dashboard', label: 'Dashboard', onClick: () => setActiveKey('dashboard'), active: activeKey === 'dashboard' },
        { key: 'analytics', label: 'Analytics', onClick: () => setActiveKey('analytics'), active: activeKey === 'analytics' },
      ],
    },
    {
      title: 'Settings',
      items: [
        { key: 'profile', label: 'Profile', onClick: () => setActiveKey('profile'), active: activeKey === 'profile' },
        { key: 'preferences', label: 'Preferences', onClick: () => setActiveKey('preferences'), active: activeKey === 'preferences' },
      ],
    },
  ]

  return <Menu groups={groups} />
}

export default App`}
        >
          <div className="w-64">
            <Menu groups={groupedMenu} />
          </div>
        </ExampleSection>

        <ExampleSection
          title="Menu in Card"
          description="Menu styled within a card container."
          code={`import React, { useState } from 'react'
import { Menu } from '@edadma/petalui'
import type { MenuItem } from '@edadma/petalui'

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState('inbox')

  const items: MenuItem[] = [
    { key: 'inbox', label: 'Inbox', onClick: () => setActiveKey('inbox'), active: activeKey === 'inbox' },
    { key: 'sent', label: 'Sent', onClick: () => setActiveKey('sent'), active: activeKey === 'sent' },
    { key: 'drafts', label: 'Drafts', onClick: () => setActiveKey('drafts'), active: activeKey === 'drafts' },
    { key: 'trash', label: 'Trash', onClick: () => setActiveKey('trash'), active: activeKey === 'trash' },
  ]

  return (
    <div className="bg-base-100 rounded-box border border-base-content/10">
      <Menu items={items} />
    </div>
  )
}

export default App`}
        >
          <div className="w-64 bg-base-100 rounded-box border border-base-content/10">
            <Menu items={[
              { key: 'inbox', label: 'Inbox', active: true },
              { key: 'sent', label: 'Sent' },
              { key: 'drafts', label: 'Drafts' },
              { key: 'trash', label: 'Trash' },
            ]} />
          </div>
        </ExampleSection>

        <ExampleSection
          title="Compact Menu"
          description="Menu with compact spacing."
          code={`import React from 'react'
import { Menu } from '@edadma/petalui'
import type { MenuItem } from '@edadma/petalui'

const App: React.FC = () => {
  const items: MenuItem[] = [
    { key: 'file', label: 'File' },
    { key: 'edit', label: 'Edit' },
    { key: 'view', label: 'View' },
    { key: 'help', label: 'Help' },
  ]

  return <Menu items={items} className="menu-compact" />
}

export default App`}
        >
          <div className="w-64">
            <Menu items={[
              { key: 'file', label: 'File' },
              { key: 'edit', label: 'Edit' },
              { key: 'view', label: 'View' },
              { key: 'help', label: 'Help' },
            ]} className="menu-compact" />
          </div>
        </ExampleSection>

        <ExampleSection
          title="Multi-Group Menu"
          description="Menu with multiple titled groups."
          code={`import React from 'react'
import { Menu } from '@edadma/petalui'
import type { MenuGroup } from '@edadma/petalui'

const App: React.FC = () => {
  const groups: MenuGroup[] = [
    {
      title: 'Navigation',
      items: [
        { key: 'home', label: 'Home' },
        { key: 'explore', label: 'Explore' },
      ],
    },
    {
      title: 'Content',
      items: [
        { key: 'library', label: 'Library' },
        { key: 'history', label: 'History' },
      ],
    },
    {
      title: 'Account',
      items: [
        { key: 'settings', label: 'Settings' },
        { key: 'logout', label: 'Logout' },
      ],
    },
  ]

  return <Menu groups={groups} />
}

export default App`}
        >
          <div className="w-64">
            <Menu groups={[
              {
                title: 'Navigation',
                items: [
                  { key: 'home', label: 'Home' },
                  { key: 'explore', label: 'Explore' },
                ],
              },
              {
                title: 'Content',
                items: [
                  { key: 'library', label: 'Library' },
                  { key: 'history', label: 'History' },
                ],
              },
              {
                title: 'Account',
                items: [
                  { key: 'settings', label: 'Settings' },
                  { key: 'logout', label: 'Logout' },
                ],
              },
            ]} />
          </div>
        </ExampleSection>

        <ExampleSection
          title="Simple List"
          description="Menu without active states or handlers."
          code={`import React from 'react'
import { Menu } from '@edadma/petalui'
import type { MenuItem } from '@edadma/petalui'

const App: React.FC = () => {
  const items: MenuItem[] = [
    { key: '1', label: 'Getting Started' },
    { key: '2', label: 'Installation' },
    { key: '3', label: 'Configuration' },
    { key: '4', label: 'Usage Examples' },
  ]

  return <Menu items={items} />
}

export default App`}
        >
          <div className="w-64">
            <Menu items={[
              { key: '1', label: 'Getting Started' },
              { key: '2', label: 'Installation' },
              { key: '3', label: 'Configuration' },
              { key: '4', label: 'Usage Examples' },
            ]} />
          </div>
        </ExampleSection>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Menu API</h2>
        <ApiTable data={menuApi} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">MenuItem API</h2>
        <ApiTable data={menuItemApi} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">MenuGroup API</h2>
        <ApiTable data={menuGroupApi} />
      </div>
    </div>
  )
}
