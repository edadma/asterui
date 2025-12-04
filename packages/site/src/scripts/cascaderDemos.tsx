import { createRoot } from 'react-dom/client';
import { Cascader, Space } from 'asterui';

const locationOptions = [
  {
    value: 'usa',
    label: 'United States',
    children: [
      {
        value: 'ca',
        label: 'California',
        children: [
          { value: 'sf', label: 'San Francisco' },
          { value: 'la', label: 'Los Angeles' },
        ],
      },
      {
        value: 'ny',
        label: 'New York',
        children: [
          { value: 'nyc', label: 'New York City' },
          { value: 'buf', label: 'Buffalo' },
        ],
      },
    ],
  },
];

const categoryOptions = [
  {
    value: 'electronics',
    label: 'Electronics',
    children: [
      {
        value: 'phones',
        label: 'Phones',
        children: [
          { value: 'iphone', label: 'iPhone' },
          { value: 'android', label: 'Android' },
        ],
      },
      {
        value: 'computers',
        label: 'Computers',
        children: [
          { value: 'laptop', label: 'Laptop' },
          { value: 'desktop', label: 'Desktop' },
        ],
      },
    ],
  },
];

const simpleOptions = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' },
];

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Cascader options={locationOptions} placeholder="Select location" />
  ),
  'hover': (
    <Cascader options={categoryOptions} expandTrigger="hover" placeholder="Select category" />
  ),
  'sizes': (
    <Space direction="vertical" size="sm">
      <Cascader size="xs" options={simpleOptions} placeholder="Extra small" />
      <Cascader size="sm" options={simpleOptions} placeholder="Small" />
      <Cascader size="md" options={simpleOptions} placeholder="Medium" />
      <Cascader size="lg" options={simpleOptions} placeholder="Large" />
    </Space>
  ),
  'disabled': (
    <Cascader options={simpleOptions} disabled defaultValue={['opt1']} />
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
