import { createRoot } from 'react-dom/client'
import { Avatar, Space } from 'asterui'
import { UserIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const imgSrc = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: <Avatar src={imgSrc} alt="User avatar" />,
  sizes: (
    <Space direction="horizontal" size="sm" align="center">
      <Avatar size="xs" src={imgSrc} />
      <Avatar size="sm" src={imgSrc} />
      <Avatar size="md" src={imgSrc} />
      <Avatar size="lg" src={imgSrc} />
      <Avatar size="xl" src={imgSrc} />
    </Space>
  ),
  shapes: (
    <Space direction="horizontal" size="sm">
      <Avatar shape="circle" src={imgSrc} />
      <Avatar shape="square" src={imgSrc} />
    </Space>
  ),
  status: (
    <Space direction="horizontal" size="sm">
      <Avatar status="online" src={imgSrc} />
      <Avatar status="offline" src={imgSrc} />
    </Space>
  ),
  text: (
    <Space direction="horizontal" size="sm" align="center">
      <Avatar size="xl">
        <span className="text-3xl">AI</span>
      </Avatar>
      <Avatar size="lg">
        <span className="text-xl">JD</span>
      </Avatar>
      <Avatar size="md">
        <span>MX</span>
      </Avatar>
    </Space>
  ),
  icon: (
    <Space direction="horizontal" size="sm">
      <Avatar icon={<UserIcon className="h-8 w-8" />} />
      <Avatar size="lg" icon={<UserCircleIcon className="h-10 w-10" />} />
    </Space>
  ),
  group: (
    <Avatar.Group>
      <Avatar size="sm" src={imgSrc} />
      <Avatar size="sm" src={imgSrc} />
      <Avatar size="sm" src={imgSrc} />
      <Avatar size="sm" src={imgSrc} />
    </Avatar.Group>
  ),
  'group-max': (
    <Avatar.Group max={3}>
      <Avatar size="sm" src={imgSrc} />
      <Avatar size="sm" src={imgSrc} />
      <Avatar size="sm" src={imgSrc} />
      <Avatar size="sm" src={imgSrc} />
      <Avatar size="sm" src={imgSrc} />
      <Avatar size="sm" src={imgSrc} />
    </Avatar.Group>
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
