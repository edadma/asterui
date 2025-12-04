import { createRoot } from 'react-dom/client'
import React from 'react'
import { Badge, Button, Avatar, Space } from 'asterui'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: (
    <div className="flex gap-6 flex-wrap">
      <Badge count={5}>
        <Button>Messages</Button>
      </Badge>
      <Badge count={99}>
        <Button type="secondary">Notifications</Button>
      </Badge>
      <Badge count={0}>
        <Button type="accent">No Count</Button>
      </Badge>
    </div>
  ),
  overflow: (
    <div className="flex gap-6 flex-wrap items-center">
      <Badge count={99}>
        <Avatar size="lg">U</Avatar>
      </Badge>
      <Badge count={100} overflowCount={99}>
        <Avatar size="lg">U</Avatar>
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <Avatar size="lg">U</Avatar>
      </Badge>
    </div>
  ),
  position: (
    <div className="flex gap-6 flex-wrap">
      <Badge count={5} position="top-start">
        <Avatar size="lg">TL</Avatar>
      </Badge>
      <Badge count={5} position="top-center">
        <Avatar size="lg">TC</Avatar>
      </Badge>
      <Badge count={5} position="top-end">
        <Avatar size="lg">TR</Avatar>
      </Badge>
      <Badge count={5} position="bottom-start">
        <Avatar size="lg">BL</Avatar>
      </Badge>
      <Badge count={5} position="bottom-end">
        <Avatar size="lg">BR</Avatar>
      </Badge>
    </div>
  ),
  status: (
    <Space direction="vertical" size="sm">
      <Badge status="success" text="Success" />
      <Badge status="processing" text="Processing" />
      <Badge status="error" text="Error" />
      <Badge status="warning" text="Warning" />
      <Badge status="default" text="Default" />
    </Space>
  ),
  ribbon: (
    <div className="flex gap-6 flex-wrap">
      <Badge ribbon="Recommended">
        <div className="card bg-base-200 w-48 p-4">
          <h3 className="font-bold">Premium Plan</h3>
          <p>Best value for teams</p>
        </div>
      </Badge>
      <Badge ribbon="New" ribbonPlacement="start">
        <div className="card bg-base-200 w-48 p-4">
          <h3 className="font-bold">Pro Plan</h3>
          <p>For professionals</p>
        </div>
      </Badge>
    </div>
  ),
  dot: (
    <div className="flex gap-6 flex-wrap">
      <Badge dot type="error">
        <Button>Notifications</Button>
      </Badge>
      <Badge dot type="success">
        <Button type="ghost">Online</Button>
      </Badge>
      <Badge dot type="warning">
        <Button type="secondary">Pending</Button>
      </Badge>
    </div>
  ),
  colors: (
    <Space direction="horizontal" size="sm" wrap>
      <Badge count={5} />
      <Badge count={5} type="primary" />
      <Badge count={5} type="secondary" />
      <Badge count={5} type="accent" />
      <Badge count={5} type="info" />
      <Badge count={5} type="success" />
      <Badge count={5} type="warning" />
      <Badge count={5} type="error" />
    </Space>
  ),
  sizes: (
    <Space direction="horizontal" size="sm" align="center">
      <Badge count={5} type="primary" size="xs" />
      <Badge count={5} type="primary" size="sm" />
      <Badge count={5} type="primary" size="md" />
      <Badge count={5} type="primary" size="lg" />
    </Space>
  ),
  'show-zero': (
    <Space direction="horizontal" size="lg">
      <Badge count={0} showZero>
        <Button>Messages</Button>
      </Badge>
      <Badge count={0}>
        <Button type="secondary">Hidden Zero</Button>
      </Badge>
    </Space>
  ),
  outline: (
    <Space direction="horizontal" size="sm" wrap>
      <Badge count={5} type="primary" outline />
      <Badge count={5} type="secondary" outline />
      <Badge count={5} type="accent" outline />
      <Badge count={5} type="info" outline />
      <Badge count={5} type="success" outline />
    </Space>
  ),
}

// Mount React demos
document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const root = createRoot(container as HTMLElement)
    root.render(demos[exampleId])
  }
})

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code')
    if (code) {
      await navigator.clipboard.writeText(code)
      const originalHTML = btn.innerHTML
      btn.innerHTML =
        '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
      setTimeout(() => {
        btn.innerHTML = originalHTML
      }, 2000)
    }
  })
})
