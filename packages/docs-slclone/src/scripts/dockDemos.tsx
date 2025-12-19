import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'
import { Dock, Space } from 'asterui'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
  Cog6ToothIcon,
  BellIcon,
  PlusCircleIcon,
} from '@aster-ui/icons'

const BasicDemo: React.FC = () => {
  const [active, setActive] = useState(0)

  return (
    <Dock
      className="!relative"
      items={[
        { icon: <HomeIcon size="lg" />, label: 'Home' },
        { icon: <MagnifyingGlassIcon size="lg" />, label: 'Search' },
        { icon: <HeartIcon size="lg" />, label: 'Favorites' },
        { icon: <UserIcon size="lg" />, label: 'Profile' },
      ]}
      activeIndex={active}
      onChange={setActive}
    />
  )
}

const SizesDemo: React.FC = () => {
  const [activeXs, setActiveXs] = useState(0)
  const [activeSm, setActiveSm] = useState(0)
  const [activeMd, setActiveMd] = useState(0)
  const [activeLg, setActiveLg] = useState(0)

  const items = [
    { icon: <HomeIcon />, label: 'Home' },
    { icon: <Cog6ToothIcon />, label: 'Settings' },
    { icon: <BellIcon />, label: 'Alerts' },
  ]

  return (
    <Space direction="vertical" size="lg" className="w-full">
      <div>
        <div className="text-xs text-base-content/60 mb-1">xs</div>
        <Dock className="!relative" size="xs" items={items} activeIndex={activeXs} onChange={setActiveXs} />
      </div>
      <div>
        <div className="text-xs text-base-content/60 mb-1">sm</div>
        <Dock className="!relative" size="sm" items={items} activeIndex={activeSm} onChange={setActiveSm} />
      </div>
      <div>
        <div className="text-xs text-base-content/60 mb-1">md (default)</div>
        <Dock className="!relative" size="md" items={items} activeIndex={activeMd} onChange={setActiveMd} />
      </div>
      <div>
        <div className="text-xs text-base-content/60 mb-1">lg</div>
        <Dock className="!relative" size="lg" items={items} activeIndex={activeLg} onChange={setActiveLg} />
      </div>
    </Space>
  )
}

const IconsOnlyDemo: React.FC = () => {
  const [active, setActive] = useState(2)

  return (
    <Dock
      className="!relative"
      items={[
        { icon: <HomeIcon size="lg" /> },
        { icon: <MagnifyingGlassIcon size="lg" /> },
        { icon: <PlusCircleIcon size={32} /> },
        { icon: <HeartIcon size="lg" /> },
        { icon: <UserIcon size="lg" /> },
      ]}
      activeIndex={active}
      onChange={setActive}
    />
  )
}

const CustomStyleDemo: React.FC = () => {
  const [active, setActive] = useState(0)

  return (
    <Dock
      className="!relative bg-neutral text-neutral-content"
      items={[
        { icon: <HomeIcon size="lg" />, label: 'Home' },
        { icon: <Cog6ToothIcon size="lg" />, label: 'Settings' },
        { icon: <BellIcon size="lg" />, label: 'Alerts' },
      ]}
      activeIndex={active}
      onChange={setActive}
    />
  )
}

const ChildrenDemo: React.FC = () => {
  const [active, setActive] = useState(0)

  return (
    <Dock className="!relative">
      <Dock.Item active={active === 0} onClick={() => setActive(0)}>
        <HomeIcon size="lg" />
        <span className="dock-label">Home</span>
      </Dock.Item>
      <Dock.Item active={active === 1} onClick={() => setActive(1)}>
        <Cog6ToothIcon size="lg" />
        <span className="dock-label">Settings</span>
      </Dock.Item>
    </Dock>
  )
}

const statefulDemos: Record<string, React.FC> = {
  basic: BasicDemo,
  sizes: SizesDemo,
  'icons-only': IconsOnlyDemo,
  'custom-style': CustomStyleDemo,
  children: ChildrenDemo,
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && statefulDemos[exampleId]) {
    const root = createRoot(container as HTMLElement)
    const Component = statefulDemos[exampleId]
    root.render(<Component />)
  }
})

document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code')
    if (code) {
      await navigator.clipboard.writeText(code)
      btn.classList.add('btn-success')
      setTimeout(() => btn.classList.remove('btn-success'), 1000)
    }
  })
})
