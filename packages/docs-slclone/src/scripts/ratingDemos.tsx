import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Rating, Space, Form, notification, Button } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  basic: <Rating defaultValue={3} />,
  clearable: <Rating defaultValue={3} allowClear />,
  sizes: (
    <Space direction="vertical" size="sm">
      <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">xs</span><Rating size="xs" defaultValue={3} /></div>
      <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">sm</span><Rating size="sm" defaultValue={3} /></div>
      <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">md</span><Rating size="md" defaultValue={3} /></div>
      <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">lg</span><Rating size="lg" defaultValue={3} /></div>
      <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">xl</span><Rating size="xl" defaultValue={3} /></div>
    </Space>
  ),
  half: (
    <Space direction="vertical" size="sm">
      <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">md</span><Rating defaultValue={2.5} allowHalf /></div>
      <div className="flex items-center gap-4"><span className="w-8 text-xs opacity-70">lg</span><Rating defaultValue={2.5} allowHalf size="lg" /></div>
    </Space>
  ),
  heart: <Rating defaultValue={4} mask="heart" color="bg-error" />,
  'custom-colors': (
    <Rating defaultValue={3}>
      <Rating.Item value={1} color="bg-error" />
      <Rating.Item value={2} color="bg-warning" />
      <Rating.Item value={3} color="bg-warning" />
      <Rating.Item value={4} color="bg-success" />
      <Rating.Item value={5} color="bg-success" />
    </Rating>
  ),
  disabled: <Rating value={4} disabled />,
  count: <Rating defaultValue={7} count={10} />,
  'alt-star': <Rating defaultValue={3} mask="star" color="bg-success" />,
};

function ControlledDemo() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <Rating value={rating} onChange={setRating} />
      <p className="mt-2">Current rating: {rating}</p>
    </div>
  );
}

function FormDemo() {
  const handleSubmit = (values: { rating?: number }) => {
    notification.success({ message: 'Submitted!', description: `Rating: ${values.rating}` });
  };

  return (
    <Form onFinish={handleSubmit} initialValues={{ rating: 3 }}>
      <Form.Item
        name="rating"
        label="Your rating"
        rules={{ required: 'Please provide a rating' }}
      >
        <Rating />
      </Form.Item>
      <Button htmlType="submit" color="primary">Submit</Button>
    </Form>
  );
}

const statefulDemos: Record<string, React.FC> = {
  controlled: ControlledDemo,
  form: FormDemo,
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example) {
    const root = createRoot(container);
    const StatefulComponent = statefulDemos[example];
    if (StatefulComponent) {
      root.render(<StatefulComponent />);
    } else if (demos[example]) {
      root.render(<>{demos[example]}</>);
    }
  }
});
