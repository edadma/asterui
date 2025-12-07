import { createRoot } from 'react-dom/client';
import { Collapse, Button, Space } from 'asterui';
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Collapse
      items={[
        {
          key: '1',
          label: 'What is AsterUI?',
          children: 'AsterUI is a React component library built on DaisyUI and Tailwind CSS.',
        },
        {
          key: '2',
          label: 'How do I install it?',
          children: 'Run npm install asterui to get started.',
        },
        {
          key: '3',
          label: 'Is it free?',
          children: 'Yes, AsterUI is open source and free to use.',
        },
      ]}
      defaultActiveKey={['1']}
    />
  ),
  'accordion': (
    <Collapse
      items={[
        {
          key: '1',
          label: 'Section 1',
          children: 'Content for section 1. Click another section to close this one.',
        },
        {
          key: '2',
          label: 'Section 2',
          children: 'Content for section 2. Only one section can be open.',
        },
        {
          key: '3',
          label: 'Section 3',
          children: 'Content for section 3. This is accordion behavior.',
        },
      ]}
      accordion
      defaultActiveKey="1"
    />
  ),
  'borderless': (
    <Collapse
      items={[
        {
          key: '1',
          label: 'Panel 1',
          children: 'Content without borders for a cleaner look.',
        },
        {
          key: '2',
          label: 'Panel 2',
          children: 'Great for FAQ sections or sidebars.',
        },
      ]}
      bordered={false}
    />
  ),
  'nested': (
    <Collapse
      items={[
        {
          key: '1',
          label: 'Getting Started',
          children: (
            <Space direction="vertical" size="sm">
              <p>Follow these steps to get started:</p>
              <ol className="list-decimal list-inside">
                <li>Install the package</li>
                <li>Import components</li>
                <li>Start building</li>
              </ol>
              <Button color="primary" size="sm">Read Docs</Button>
            </Space>
          ),
        },
        {
          key: '2',
          label: 'Advanced Usage',
          children: 'Learn about advanced patterns and customization options.',
        },
      ]}
    />
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
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
