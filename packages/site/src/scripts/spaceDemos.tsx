import React from 'react';
import { createRoot } from 'react-dom/client';
import { Space, Button, Badge, Card } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  horizontal: (
    <Space>
      <Button type="primary">Button 1</Button>
      <Button type="secondary">Button 2</Button>
      <Button type="accent">Button 3</Button>
    </Space>
  ),
  vertical: (
    <Space direction="vertical">
      <Button type="primary">Button 1</Button>
      <Button type="secondary">Button 2</Button>
      <Button type="accent">Button 3</Button>
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
      <Button type="primary" size="xs">
        Small
      </Button>
      <Button type="secondary" size="md">
        Medium
      </Button>
      <Button type="accent" size="lg">
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
          <Button type="primary" size="sm">
            Action 1
          </Button>
          <Button type="secondary" size="sm">
            Action 2
          </Button>
        </Space>
      </Card>

      <Card title="Card 2">
        <Space>
          <Button type="primary" size="sm">
            Action 1
          </Button>
          <Button type="secondary" size="sm">
            Action 2
          </Button>
        </Space>
      </Card>
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
