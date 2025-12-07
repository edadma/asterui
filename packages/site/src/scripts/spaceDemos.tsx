import React from 'react';
import { createRoot } from 'react-dom/client';
import { Space, Button, Badge, Card, Divider } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  horizontal: (
    <Space>
      <Button color="primary">Button 1</Button>
      <Button color="secondary">Button 2</Button>
      <Button color="accent">Button 3</Button>
    </Space>
  ),
  vertical: (
    <Space direction="vertical">
      <Button color="primary">Button 1</Button>
      <Button color="secondary">Button 2</Button>
      <Button color="accent">Button 3</Button>
    </Space>
  ),
  sizes: (
    <Space direction="vertical">
      <Space size="xs">
        <Badge>Extra Small</Badge>
        <Badge>Spacing</Badge>
      </Space>

      <Space size="sm">
        <Badge>Small</Badge>
        <Badge>Spacing</Badge>
      </Space>

      <Space size="md">
        <Badge>Medium</Badge>
        <Badge>Spacing</Badge>
      </Space>

      <Space size="lg">
        <Badge>Large</Badge>
        <Badge>Spacing</Badge>
      </Space>

      <Space size="xl">
        <Badge>Extra Large</Badge>
        <Badge>Spacing</Badge>
      </Space>
    </Space>
  ),
  alignment: (
    <Space align="center">
      <Button color="primary" size="xs">
        Small
      </Button>
      <Button color="secondary" size="md">
        Medium
      </Button>
      <Button color="accent" size="lg">
        Large
      </Button>
    </Space>
  ),
  wrap: (
    <Space wrap>
      <Badge>Tag 1</Badge>
      <Badge>Tag 2</Badge>
      <Badge>Tag 3</Badge>
      <Badge>Tag 4</Badge>
      <Badge>Tag 5</Badge>
      <Badge>Tag 6</Badge>
      <Badge>Tag 7</Badge>
      <Badge>Tag 8</Badge>
    </Space>
  ),
  nested: (
    <Space direction="vertical">
      <Card title="Card 1">
        <Space>
          <Button color="primary" size="sm">
            Action 1
          </Button>
          <Button color="secondary" size="sm">
            Action 2
          </Button>
        </Space>
      </Card>

      <Card title="Card 2">
        <Space>
          <Button color="primary" size="sm">
            Action 1
          </Button>
          <Button color="secondary" size="sm">
            Action 2
          </Button>
        </Space>
      </Card>
    </Space>
  ),
  justify: (
    <Space justify="between" className="w-full">
      <Button variant="ghost">Cancel</Button>
      <Space>
        <Button color="secondary">Save Draft</Button>
        <Button color="primary">Submit</Button>
      </Space>
    </Space>
  ),
  split: (
    <Space split={<Divider type="vertical" />}>
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </Space>
  ),
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example && demos[example]) {
    const root = createRoot(container);
    root.render(<>{demos[example]}</>);
  }
});
