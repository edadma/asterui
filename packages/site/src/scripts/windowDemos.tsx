import React from 'react'
import { createRoot } from 'react-dom/client'
import { Window, Code } from 'asterui'

const demos: Record<string, React.ReactNode> = {
  basic: (
    <Window>
      <p>Hello from the window!</p>
    </Window>
  ),
  'with-code': (
    <Window>
      <Code className="bg-base-300">
        <Code.Line>npm install asterui</Code.Line>
      </Code>
    </Window>
  ),
  'multi-line': (
    <Window>
      <Code className="bg-base-300">
        <Code.Line>import {'{ Button }'} from 'asterui'</Code.Line>
        <Code.Line></Code.Line>
        <Code.Line>function App() {'{'}</Code.Line>
        <Code.Line>  return {'<Button>Click me</Button>'}</Code.Line>
        <Code.Line>{'}'}</Code.Line>
      </Code>
    </Window>
  ),
  'with-prefix': (
    <Window>
      <Code className="bg-base-300">
        <Code.Line prefix="$">npm install asterui</Code.Line>
        <Code.Line prefix="$">npm run dev</Code.Line>
        <Code.Line prefix=">">Server running on http://localhost:3000</Code.Line>
      </Code>
    </Window>
  ),
  styled: (
    <Window className="bg-neutral">
      <Code className="bg-neutral text-neutral-content">
        <Code.Line prefix="~">echo "Custom styled window"</Code.Line>
        <Code.Line>Custom styled window</Code.Line>
      </Code>
    </Window>
  ),
  content: (
    <Window contentClassName="p-4">
      <div className="space-y-2">
        <h3 className="font-bold">Window Content</h3>
        <p>This window has custom content styling.</p>
        <p className="text-sm opacity-70">You can put any content here.</p>
      </div>
    </Window>
  ),
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('.demo-container').forEach((container) => {
    const example = container.dataset.example
    if (example && demos[example]) {
      const root = createRoot(container)
      root.render(demos[example])
    }
  })
})
