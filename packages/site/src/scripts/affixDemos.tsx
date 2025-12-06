import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Affix, Button } from 'asterui';
import { CheckIconSvg } from './icons'

// Basic Affix demo
const BasicDemo: React.FC = () => (
  <Affix offsetTop={80}>
    <Button type="primary">Affixed Button</Button>
  </Affix>
);

// Callback demo
const CallbackDemo: React.FC = () => {
  const [affixed, setAffixed] = useState(false);

  return (
    <Affix offsetTop={80} onChange={setAffixed}>
      <Button type={affixed ? 'primary' : 'neutral'}>
        {affixed ? 'Affixed!' : 'Not Affixed'}
      </Button>
    </Affix>
  );
};

// Bottom affix demo
const BottomDemo: React.FC = () => (
  <Affix offsetBottom={20}>
    <Button type="secondary">Bottom Affixed</Button>
  </Affix>
);

// Custom target demo - uses CSS sticky within scrollable container
const TargetDemo: React.FC = () => {
  return (
    <div className="h-48 overflow-auto border border-base-300 rounded bg-base-200">
      <div className="h-96 p-2">
        <Affix offsetTop={0} target={() => window}>
          <div className="bg-primary text-primary-content p-2 rounded">
            Sticky Header
          </div>
        </Affix>
        <div className="mt-4 space-y-2">
          <p className="text-base-content/70 text-sm">Scroll this container...</p>
          <p className="text-base-content/50 text-xs">Content line 1</p>
          <p className="text-base-content/50 text-xs">Content line 2</p>
          <p className="text-base-content/50 text-xs">Content line 3</p>
          <p className="text-base-content/50 text-xs">Content line 4</p>
          <p className="text-base-content/50 text-xs">Content line 5</p>
          <p className="text-base-content/50 text-xs">Content line 6</p>
          <p className="text-base-content/50 text-xs">Content line 7</p>
          <p className="text-base-content/50 text-xs">Content line 8</p>
        </div>
      </div>
    </div>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'basic': BasicDemo,
  'callback': CallbackDemo,
  'bottom': BottomDemo,
  'target': TargetDemo,
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId && statefulDemos[exampleId]) {
    const root = createRoot(container as HTMLElement);
    const Component = statefulDemos[exampleId];
    root.render(<Component />);
  }
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code');
    if (code) {
      await navigator.clipboard.writeText(code);
      const originalHTML = btn.innerHTML;
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
