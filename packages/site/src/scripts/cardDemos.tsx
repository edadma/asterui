import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Card, Button, Space, Avatar } from 'asterui';
import { CheckIconSvg } from './icons'

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
          <Button color="primary">Accept</Button>
          <Button variant="ghost">Decline</Button>
        </>
      }
      className="w-full max-w-96"
    >
      <p>Card with buttons in the actions area.</p>
    </Card>
  ),
  'unbordered': (
    <Card title="Unbordered Card" className="w-full max-w-96" bordered={false}>
      <p>This card has no border.</p>
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
      actions={<Button color="primary">Buy Now</Button>}
      side
      className="w-full max-w-96"
    >
      <p>Image positioned beside the content.</p>
    </Card>
  ),
  'overlay': (
    <Card
      title="Overlay Card"
      cover={<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />}
      actions={<Button color="primary">View Details</Button>}
      imageFull
      className="w-full max-w-96"
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
        actions={<Button color="primary" size="sm">Left</Button>}
        actionsJustify="start"
        bordered
      >
        <p>Actions aligned to the left.</p>
      </Card>
      <Card
        title="Center Actions"
        actions={<Button color="primary" size="sm">Center</Button>}
        actionsJustify="center"
        bordered
      >
        <p>Actions aligned to the center.</p>
      </Card>
    </Space>
  ),
  'extra': (
    <Card
      title="Card Title"
      extra={<a href="#" className="link link-primary">More</a>}
      className="w-full max-w-96"
    >
      <p>Card with extra content in the header area.</p>
    </Card>
  ),
  'hoverable': (
    <Space size="sm">
      <Card title="Hoverable Card" hoverable className="w-64">
        <p>Hover over this card to see the shadow effect.</p>
      </Card>
      <Card title="Normal Card" className="w-64">
        <p>This card has no hover effect.</p>
      </Card>
    </Space>
  ),
  'loading': React.createElement(() => {
    const [loading, setLoading] = useState(true)
    return (
      <Space direction="vertical" size="sm">
        <Button size="sm" onClick={() => setLoading(!loading)}>
          Toggle Loading
        </Button>
        <Card
          title="Loading Card"
          cover={<img src="https://picsum.photos/400/200" alt="Placeholder" />}
          actions={<Button color="primary">Action</Button>}
          loading={loading}
          className="w-full max-w-96"
        >
          <p>Content appears when loading is false.</p>
        </Card>
      </Space>
    )
  }),
  'meta': (
    <Card className="w-full max-w-96">
      <Card.Meta
        avatar={<Avatar src="https://i.pravatar.cc/100" />}
        title="John Doe"
        description="Software Engineer at Acme Corp"
      />
      <p className="mt-4">
        This card uses Card.Meta for a structured avatar layout.
      </p>
    </Card>
  ),
  'avatar-props': (
    <Card
      avatar={<Avatar src="https://i.pravatar.cc/100?img=5" />}
      title="Jane Smith"
      description="Product Designer"
      actions={<Button color="primary" size="sm">Follow</Button>}
      className="w-full max-w-96"
    >
      <p className="mt-2">Building beautiful user experiences.</p>
    </Card>
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
