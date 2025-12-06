import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Button, Space, Input, Form, Modal } from 'asterui';
import { XMarkIcon, ArrowUpTrayIcon, CheckIcon, TrashIcon } from '@heroicons/react/24/outline';
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'brand-colors': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="accent">Accent</Button>
      <Button type="neutral">Neutral</Button>
    </Space>
  ),
  'state-colors': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </Space>
  ),
  'minimal-styles': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="ghost">Ghost</Button>
      <Button type="link">Link</Button>
      <Button>No Type</Button>
    </Space>
  ),
  'sizes': (
    <Space direction="horizontal" wrap size="sm" align="center">
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XL</Button>
    </Space>
  ),
  'outline': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary" outline>Primary</Button>
      <Button type="secondary" outline>Secondary</Button>
      <Button type="accent" outline>Accent</Button>
    </Space>
  ),
  'dash': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary" dash>Primary</Button>
      <Button type="secondary" dash>Secondary</Button>
      <Button type="accent" dash>Accent</Button>
    </Space>
  ),
  'soft': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary" soft>Primary</Button>
      <Button type="secondary" soft>Secondary</Button>
      <Button type="accent" soft>Accent</Button>
      <Button type="success" soft>Success</Button>
      <Button type="warning" soft>Warning</Button>
    </Space>
  ),
  'states': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary">Normal</Button>
      <Button type="primary" active>Active</Button>
      <Button type="primary" loading>Loading</Button>
      <Button type="primary" disabled>Disabled</Button>
    </Space>
  ),
  'shapes': (
    <Space direction="horizontal" wrap size="sm" align="center">
      <Button type="primary" shape="square">
        <XMarkIcon className="h-6 w-6" />
      </Button>
      <Button type="primary" shape="circle">
        <XMarkIcon className="h-6 w-6" />
      </Button>
    </Space>
  ),
  'wide': (
    <Space direction="vertical" size="sm">
      <Button type="primary" shape="wide">Wide Button</Button>
      <Button type="secondary" shape="wide">Another Wide</Button>
    </Space>
  ),
  'block': (
    <Space direction="vertical" className="w-full">
      <Button type="primary" shape="block">Block Button</Button>
      <Button type="secondary" shape="block">Another Block</Button>
    </Space>
  ),
  'loading': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary" loading>Loading</Button>
      <Button type="success" loading>Processing</Button>
      <Button type="error" loading>Deleting</Button>
    </Space>
  ),
  'link-buttons': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary" href="https://github.com" target="_blank">GitHub</Button>
      <Button type="ghost" href="https://npmjs.com" target="_blank">npm</Button>
      <Button href="/components" type="link">Internal Link</Button>
    </Space>
  ),
  'with-icons': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary" icon={<ArrowUpTrayIcon className="w-4 h-4" />}>
        Upload
      </Button>
      <Button type="success" icon={<CheckIcon className="w-4 h-4" />}>
        Save
      </Button>
      <Button type="error" icon={<TrashIcon className="w-4 h-4" />} iconPosition="end">
        Delete
      </Button>
    </Space>
  ),
  'danger': (
    <Space direction="horizontal" wrap size="sm">
      <Button danger>Delete</Button>
      <Button danger icon={<TrashIcon className="w-4 h-4" />}>
        Remove Item
      </Button>
      <Button danger outline>Cancel Account</Button>
    </Space>
  ),
  'round': (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary" shape="round">Get Started</Button>
      <Button type="secondary" shape="round">Learn More</Button>
      <Button type="accent" shape="round">Subscribe</Button>
    </Space>
  ),
};

// Stateful demo components
const FormSubmitDemo: React.FC = () => {
  const handleFinish = (values: { email: string }) => {
    Modal.success({
      title: 'Form Submitted',
      content: `Email: ${values.email}`,
    });
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item name="email" label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Form.Item>
      <Form.Item>
        <Space direction="horizontal" size="sm">
          <Button type="primary" htmlType="submit">Submit</Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

const EventHandlingDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleAsync = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <Space direction="horizontal" wrap size="sm">
      <Button type="primary" onClick={() => setCount(c => c + 1)}>
        Clicked {count} times
      </Button>
      <Button type="secondary" onClick={handleAsync} loading={loading}>
        {loading ? 'Processing...' : 'Async Action'}
      </Button>
    </Space>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'form-submit': FormSubmitDemo,
  'event-handling': EventHandlingDemo,
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
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
