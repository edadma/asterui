import { createRoot } from 'react-dom/client'
import { Join, Button, Input, Radio } from 'asterui'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: (
    <Join>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Join>
  ),
  vertical: (
    <Join direction="vertical">
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </Join>
  ),
  'with-inputs': (
    <Join>
      <Input placeholder="Search..." />
      <Button type="primary">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </Button>
    </Join>
  ),
  'radio-group': (
    <Join>
      <Radio name="options" aria-label="Option 1">
        Radio 1
      </Radio>
      <Radio name="options" aria-label="Option 2">
        Radio 2
      </Radio>
      <Radio name="options" aria-label="Option 3">
        Radio 3
      </Radio>
    </Join>
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
