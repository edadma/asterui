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
} from '@heroicons/react/24/outline'

const BasicDemo: React.FC = () => {
  const [active, setActive] = useState(0)

  return (
    <Dock
      items={[
        { icon: <HomeIcon className="w-6 h-6" />, label: 'Home' },
        { icon: <MagnifyingGlassIcon className="w-6 h-6" />, label: 'Search' },
        { icon: <HeartIcon className="w-6 h-6" />, label: 'Favorites' },
        { icon: <UserIcon className="w-6 h-6" />, label: 'Profile' },
      ]}
      activeIndex={active}
      onChange={setActive}
    />
  )
}

const SizesDemo: React.FC = () => {
  const items = [
    { icon: <HomeIcon className="w-5 h-5" /> },
    { icon: <Cog6ToothIcon className="w-5 h-5" /> },
    { icon: <BellIcon className="w-5 h-5" /> },
  ]

  return (
    <Space direction="vertical" size="lg" className="w-full">
      <div>
        <div className="text-xs text-base-content/60 mb-1">xs</div>
        <Dock size="xs" items={items} activeIndex={0} />
      </div>
      <div>
        <div className="text-xs text-base-content/60 mb-1">sm</div>
        <Dock size="sm" items={items} activeIndex={0} />
      </div>
      <div>
        <div className="text-xs text-base-content/60 mb-1">md (default)</div>
        <Dock size="md" items={items} activeIndex={0} />
      </div>
      <div>
        <div className="text-xs text-base-content/60 mb-1">lg</div>
        <Dock size="lg" items={items} activeIndex={0} />
      </div>
    </Space>
  )
}

const IconsOnlyDemo: React.FC = () => {
  const [active, setActive] = useState(2)

  return (
    <Dock
      items={[
        { icon: <HomeIcon className="w-6 h-6" /> },
        { icon: <MagnifyingGlassIcon className="w-6 h-6" /> },
        { icon: <PlusCircleIcon className="w-8 h-8" /> },
        { icon: <HeartIcon className="w-6 h-6" /> },
        { icon: <UserIcon className="w-6 h-6" /> },
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
      className="bg-neutral text-neutral-content"
      items={[
        { icon: <HomeIcon className="w-6 h-6" />, label: 'Home' },
        { icon: <Cog6ToothIcon className="w-6 h-6" />, label: 'Settings' },
        { icon: <BellIcon className="w-6 h-6" />, label: 'Alerts' },
      ]}
      activeIndex={active}
      onChange={setActive}
    />
  )
}

const ChildrenDemo: React.FC = () => (
  <Dock>
    <Dock.Item active>
      <HomeIcon className="w-6 h-6" />
      <span className="dock-label">Home</span>
    </Dock.Item>
    <Dock.Item>
      <Cog6ToothIcon className="w-6 h-6" />
      <span className="dock-label">Settings</span>
    </Dock.Item>
  </Dock>
)

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
