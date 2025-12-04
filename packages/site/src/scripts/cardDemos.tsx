import { createRoot } from 'react-dom/client';
import React from 'react';
import { Card, Button, Space } from 'asterui';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Card title="Card Title" className="w-full max-w-96">
      <p>This is a basic card with some content inside it.</p>
    </Card>
  ),
  'image': (
    <Card
      title="Image Card"
      cover={<img src="https://picsum.photos/400/200" alt="Placeholder" />}
      className="w-full max-w-96"
    >
      <p>A card with an image positioned at the top.</p>
    </Card>
  ),
  'actions': (
    <Card
      title="Action Card"
      actions={
        <>
          <Button type="primary">Accept</Button>
          <Button type="ghost">Decline</Button>
        </>
      }
      className="w-full max-w-96"
    >
      <p>Card with buttons in the actions area.</p>
    </Card>
  ),
  'bordered': (
    <Card title="Bordered Card" className="w-full max-w-96" bordered>
      <p>This card has a border around it.</p>
    </Card>
  ),
  'sizes': (
    <Space direction="vertical" size="sm" className="w-full max-w-96">
      <Card title="Extra Small" size="xs" bordered>
        <p>Compact card with minimal padding.</p>
      </Card>
      <Card title="Small" size="sm" bordered>
        <p>Small card with reduced padding.</p>
      </Card>
      <Card title="Large" size="lg" bordered>
        <p>Large card with increased padding.</p>
      </Card>
    </Space>
  ),
  'side': (
    <Card
      title="Side Card"
      cover={
        <img
          src="https://picsum.photos/200/300"
          alt="Placeholder"
          className="w-32 h-full object-cover"
        />
      }
      actions={<Button type="primary">Buy Now</Button>}
      side
      className="w-full max-w-96"
    >
      <p>Image positioned beside the content.</p>
    </Card>
  ),
  'overlay': (
    <Card
      title="Overlay Card"
      cover={<img src="https://picsum.photos/400/300" alt="Placeholder" />}
      actions={<Button type="primary">View Details</Button>}
      imageFull
      className="w-full max-w-96 h-64 text-neutral-content"
    >
      <p>Text appears over the background image.</p>
    </Card>
  ),
  'colors': (
    <Space direction="vertical" size="sm" className="w-full max-w-96">
      <Card title="Primary Card" className="bg-primary text-primary-content">
        <p>Card with primary background color.</p>
      </Card>
      <Card title="Neutral Card" className="bg-neutral text-neutral-content">
        <p>Card with neutral background color.</p>
      </Card>
    </Space>
  ),
  'alignment': (
    <Space direction="vertical" size="sm" className="w-full max-w-96">
      <Card
        title="Left Actions"
        actions={<Button type="primary" size="sm">Left</Button>}
        actionsJustify="start"
        bordered
      >
        <p>Actions aligned to the left.</p>
      </Card>
      <Card
        title="Center Actions"
        actions={<Button type="primary" size="sm">Center</Button>}
        actionsJustify="center"
        bordered
      >
        <p>Actions aligned to the center.</p>
      </Card>
    </Space>
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
