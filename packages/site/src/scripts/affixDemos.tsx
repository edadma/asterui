import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Affix, Button } from 'asterui';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <div className="h-24 flex items-center justify-center bg-base-200 rounded">
      <p className="text-base-content/50 text-sm">Scroll the page to see Affix in action</p>
    </div>
  ),
  'bottom': (
    <div className="h-24 flex items-center justify-center bg-base-200 rounded">
      <p className="text-base-content/50 text-sm">Use offsetBottom instead of offsetTop</p>
    </div>
  ),
  'target': (
    <div className="h-24 flex items-center justify-center bg-base-200 rounded">
      <p className="text-base-content/50 text-sm">Pass a target function for custom scroll containers</p>
    </div>
  ),
};

// Stateful demo components
const CallbackDemo: React.FC = () => {
  const [affixed, setAffixed] = useState(false);

  return (
    <div className="h-24 flex items-center justify-center bg-base-200 rounded">
      <Button type={affixed ? 'primary' : 'neutral'} size="sm">
        {affixed ? 'Affixed!' : 'Not Affixed'}
      </Button>
    </div>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'callback': CallbackDemo,
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId) {
    const root = createRoot(container as HTMLElement);
    if (demos[exampleId]) {
      root.render(demos[exampleId]);
    } else if (statefulDemos[exampleId]) {
      const Component = statefulDemos[exampleId];
      root.render(<Component />);
    }
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
