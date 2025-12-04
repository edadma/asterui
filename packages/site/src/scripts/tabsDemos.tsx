import React from 'react'
import { createRoot } from 'react-dom/client'
import { Tabs, Input, Button } from 'asterui'

const demos: Record<string, React.ReactNode> = {
  basic: (
    <Tabs>
      <Tabs.Panel tab="Tab 1" tabKey="1">
        Content of Tab 1
      </Tabs.Panel>
      <Tabs.Panel tab="Tab 2" tabKey="2">
        Content of Tab 2
      </Tabs.Panel>
      <Tabs.Panel tab="Tab 3" tabKey="3">
        Content of Tab 3
      </Tabs.Panel>
    </Tabs>
  ),
  settings: (
    <Tabs defaultActiveKey="account" variant="border">
      <Tabs.Panel tab="Account" tabKey="account">
        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <Input placeholder="john_doe" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <Input type="email" placeholder="john@example.com" />
          </div>
          <Button type="primary">Save</Button>
        </div>
      </Tabs.Panel>
      <Tabs.Panel tab="Security" tabKey="security">
        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Current Password</span>
            </label>
            <Input type="password" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <Input type="password" />
          </div>
          <Button type="primary">Update</Button>
        </div>
      </Tabs.Panel>
    </Tabs>
  ),
  box: (
    <Tabs variant="box">
      <Tabs.Panel tab="Home" tabKey="home">
        Home content
      </Tabs.Panel>
      <Tabs.Panel tab="Profile" tabKey="profile">
        Profile content
      </Tabs.Panel>
      <Tabs.Panel tab="Settings" tabKey="settings">
        Settings content
      </Tabs.Panel>
    </Tabs>
  ),
  lift: (
    <Tabs variant="lift">
      <Tabs.Panel tab="Overview" tabKey="1">
        Overview content
      </Tabs.Panel>
      <Tabs.Panel tab="Reports" tabKey="2">
        Reports content
      </Tabs.Panel>
      <Tabs.Panel tab="Analytics" tabKey="3">
        Analytics content
      </Tabs.Panel>
    </Tabs>
  ),
  sizes: (
    <div className="space-y-4">
      <Tabs size="sm">
        <Tabs.Panel tab="Small" tabKey="1">
          Small tabs
        </Tabs.Panel>
        <Tabs.Panel tab="Tab 2" tabKey="2">
          Content 2
        </Tabs.Panel>
      </Tabs>
      <Tabs size="lg">
        <Tabs.Panel tab="Large" tabKey="1">
          Large tabs
        </Tabs.Panel>
        <Tabs.Panel tab="Tab 2" tabKey="2">
          Content 2
        </Tabs.Panel>
      </Tabs>
    </div>
  ),
  disabled: (
    <Tabs>
      <Tabs.Panel tab="Active" tabKey="1">
        Active content
      </Tabs.Panel>
      <Tabs.Panel tab="Disabled" tabKey="2" disabled>
        Cannot see this
      </Tabs.Panel>
      <Tabs.Panel tab="Also Active" tabKey="3">
        Active content
      </Tabs.Panel>
    </Tabs>
  ),
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example')
  if (example && demos[example]) {
    const root = createRoot(container)
    root.render(<>{demos[example]}</>)
  }
})
