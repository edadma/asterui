import React from 'react';
import { createRoot } from 'react-dom/client';
import { Anchor } from 'asterui';
import { CheckIconSvg } from './icons';

// Basic demo with scrollable content
const BasicDemo: React.FC = () => {
  const items = [
    { href: 'demo-section-1', title: 'Section 1' },
    { href: 'demo-section-2', title: 'Section 2' },
    { href: 'demo-section-3', title: 'Section 3' },
  ];

  return (
    <div className="flex gap-4">
      <Anchor items={items} className="shrink-0" />
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
    </div>
  );
};

// Horizontal demo
const HorizontalDemo: React.FC = () => {
  const items = [
    { href: 'intro', title: 'Introduction' },
    { href: 'features', title: 'Features' },
    { href: 'pricing', title: 'Pricing' },
    { href: 'faq', title: 'FAQ' },
  ];

  return <Anchor items={items} direction="horizontal" />;
};

// Nested demo
const NestedDemo: React.FC = () => {
  const items = [
    {
      href: 'getting-started',
      title: 'Getting Started',
      children: [
        { href: 'installation', title: 'Installation' },
        { href: 'configuration', title: 'Configuration' },
      ],
    },
    {
      href: 'components',
      title: 'Components',
      children: [
        { href: 'buttons', title: 'Buttons' },
        { href: 'forms', title: 'Forms' },
      ],
    },
  ];

  return <Anchor items={items} />;
};

// Compound components demo
const CompoundDemo: React.FC = () => {
  return (
    <Anchor>
      <Anchor.Link href="overview" title="Overview" />
      <Anchor.Link href="api" title="API Reference">
        <Anchor.Link href="props" title="Props" />
        <Anchor.Link href="methods" title="Methods" />
      </Anchor.Link>
      <Anchor.Link href="examples" title="Examples" />
    </Anchor>
  );
};

const demos: Record<string, React.ReactNode> = {
  'basic': <BasicDemo />,
  'horizontal': <HorizontalDemo />,
  'nested': <NestedDemo />,
  'compound': <CompoundDemo />,
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
