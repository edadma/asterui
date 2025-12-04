import { createRoot } from 'react-dom/client';
import { Code } from 'asterui';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Code>
      <Code.Line prefix="$">npm install asterui</Code.Line>
    </Code>
  ),
  'multiline': (
    <Code>
      <Code.Line prefix="$">npm install asterui</Code.Line>
      <Code.Line prefix=">">installing dependencies...</Code.Line>
      <Code.Line prefix=">">added 42 packages</Code.Line>
      <Code.Line prefix="$">npm run dev</Code.Line>
    </Code>
  ),
  'line-numbers': (
    <Code>
      <Code.Line prefix="1">import React from 'react'</Code.Line>
      <Code.Line prefix="2">import {'{ Button }'} from 'asterui'</Code.Line>
      <Code.Line prefix="3"></Code.Line>
      <Code.Line prefix="4">export default function App() {'{'}</Code.Line>
      <Code.Line prefix="5">  return &lt;Button&gt;Click me&lt;/Button&gt;</Code.Line>
      <Code.Line prefix="6">{'}'}</Code.Line>
    </Code>
  ),
  'highlight': (
    <Code>
      <Code.Line prefix="1">function greet(name) {'{'}</Code.Line>
      <Code.Line prefix="2" highlight>  console.log('Hello, ' + name)</Code.Line>
      <Code.Line prefix="3">{'}'}</Code.Line>
      <Code.Line prefix="4"></Code.Line>
      <Code.Line prefix="5" highlight>greet('World')</Code.Line>
    </Code>
  ),
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId && demos[exampleId]) {
    const root = createRoot(container as HTMLElement);
    root.render(demos[exampleId]);
  }
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code');
    if (code) {
      await navigator.clipboard.writeText(code);
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
