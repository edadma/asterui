import { createRoot } from 'react-dom/client'
import { Divider, Space } from 'asterui'

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
  orientation: (
    <Space direction="vertical" size="md" className="w-full">
      <Divider orientation="left">Left</Divider>
      <Divider orientation="center">Center</Divider>
      <Divider orientation="right">Right</Divider>
    </Space>
  ),
  dashed: (
    <Space direction="vertical" size="md" className="w-full">
      <Divider dashed />
      <Divider dashed>Dashed with text</Divider>
    </Space>
  ),
  vertical: (
    <div className="flex items-center">
      <span>Home</span>
      <Divider type="vertical" />
      <span>Products</span>
      <Divider type="vertical" />
      <span>About</span>
      <Divider type="vertical" />
      <span>Contact</span>
    </div>
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
