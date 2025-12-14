import { createRoot } from 'react-dom/client'
import { Divider, Space } from 'asterui'
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: (
    <div>
      <p>Content above the divider</p>
      <Divider />
      <p>Content below the divider</p>
    </div>
  ),
  'with-text': (
    <div>
      <p>Section 1 content</p>
      <Divider>OR</Divider>
      <p>Section 2 content</p>
    </div>
  ),
  position: (
    <Space direction="vertical" size="md" className="w-full">
      <Divider position="start">Start</Divider>
      <Divider position="center">Center</Divider>
      <Divider position="end">End</Divider>
    </Space>
  ),
  vertical: (
    <div className="flex items-center h-8">
      <span>Home</span>
      <Divider orientation="vertical" />
      <span>Products</span>
      <Divider orientation="vertical" />
      <span>About</span>
    </div>
  ),
  colors: (
    <Space direction="vertical" size="md" className="w-full">
      <Divider type="primary">Primary</Divider>
      <Divider type="secondary">Secondary</Divider>
      <Divider type="accent">Accent</Divider>
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
        CheckIconSvg
      setTimeout(() => {
        btn.innerHTML = originalHTML
      }, 2000)
    }
  })
})
