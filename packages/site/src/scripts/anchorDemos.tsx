import React from 'react';
import { createRoot } from 'react-dom/client';
import { Anchor, Flex } from 'asterui';
import { CheckIconSvg } from './icons';

// Basic vertical demo
const BasicDemo: React.FC = () => {
  const getContainer = () => document.getElementById('basic-scroll-container') as HTMLElement;

  return (
    <Flex gap="md">
      <Anchor
        items={[
          { href: 'demo-section-1', title: 'Section 1' },
          { href: 'demo-section-2', title: 'Section 2' },
          { href: 'demo-section-3', title: 'Section 3' },
        ]}
        getContainer={getContainer}
      />
      <div className="flex-1 h-48 overflow-y-auto border border-base-300 rounded p-2" id="basic-scroll-container">
        <section id="demo-section-1" className="h-32 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Section 1</h3>
          <p className="text-sm text-base-content/70">Scroll to see active link change</p>
        </section>
        <section id="demo-section-2" className="h-32 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Section 2</h3>
          <p className="text-sm text-base-content/70">Content for section 2</p>
        </section>
        <section id="demo-section-3" className="h-32 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Section 3</h3>
          <p className="text-sm text-base-content/70">Content for section 3</p>
        </section>
      </div>
    </Flex>
  );
};

// Horizontal demo
const HorizontalDemo: React.FC = () => {
  const getContainer = () => document.getElementById('horizontal-scroll-container') as HTMLElement;

  return (
    <div>
      <Anchor
        direction="horizontal"
        items={[
          { href: 'h-intro', title: 'Introduction' },
          { href: 'h-features', title: 'Features' },
          { href: 'h-pricing', title: 'Pricing' },
          { href: 'h-faq', title: 'FAQ' },
        ]}
        getContainer={getContainer}
      />
      <div className="h-32 overflow-y-auto border border-base-300 rounded p-2 mt-2" id="horizontal-scroll-container">
        <section id="h-intro" className="h-24 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Introduction</h3>
          <p className="text-sm text-base-content/70">Welcome to our product</p>
        </section>
        <section id="h-features" className="h-24 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Features</h3>
          <p className="text-sm text-base-content/70">Amazing features</p>
        </section>
        <section id="h-pricing" className="h-24 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Pricing</h3>
          <p className="text-sm text-base-content/70">Affordable plans</p>
        </section>
        <section id="h-faq" className="h-24 p-3 bg-base-200 rounded">
          <h3 className="font-bold">FAQ</h3>
          <p className="text-sm text-base-content/70">Common questions</p>
        </section>
      </div>
    </div>
  );
};

// Nested demo
const NestedDemo: React.FC = () => {
  const getContainer = () => document.getElementById('nested-scroll-container') as HTMLElement;

  return (
    <Flex gap="md">
      <Anchor
        items={[
          {
            href: 'n-getting-started',
            title: 'Getting Started',
            children: [
              { href: 'n-installation', title: 'Installation' },
              { href: 'n-configuration', title: 'Configuration' },
            ],
          },
          {
            href: 'n-components',
            title: 'Components',
            children: [
              { href: 'n-buttons', title: 'Buttons' },
              { href: 'n-forms', title: 'Forms' },
            ],
          },
        ]}
        getContainer={getContainer}
      />
      <div className="flex-1 h-48 overflow-y-auto border border-base-300 rounded p-2" id="nested-scroll-container">
        <section id="n-getting-started" className="h-20 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Getting Started</h3>
        </section>
        <section id="n-installation" className="h-20 mb-2 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Installation</h4>
        </section>
        <section id="n-configuration" className="h-20 mb-2 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Configuration</h4>
        </section>
        <section id="n-components" className="h-20 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Components</h3>
        </section>
        <section id="n-buttons" className="h-20 mb-2 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Buttons</h4>
        </section>
        <section id="n-forms" className="h-20 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Forms</h4>
        </section>
      </div>
    </Flex>
  );
};

const demos: Record<string, React.ReactNode> = {
  'basic': <BasicDemo />,
  'horizontal': <HorizontalDemo />,
  'nested': <NestedDemo />,
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
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
