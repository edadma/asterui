import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Rating, Space } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  basic: (
    <Rating defaultValue={3}>
      <Rating.Item value={1} />
      <Rating.Item value={2} />
      <Rating.Item value={3} />
      <Rating.Item value={4} />
      <Rating.Item value={5} />
    </Rating>
  ),
  clearable: (
    <Rating defaultValue={0}>
      <Rating.Item value={0} hidden />
      <Rating.Item value={1} />
      <Rating.Item value={2} />
      <Rating.Item value={3} />
      <Rating.Item value={4} />
      <Rating.Item value={5} />
    </Rating>
  ),
  sizes: (
    <Space>
      <Rating size="xs" defaultValue={3}>
        <Rating.Item value={1} />
        <Rating.Item value={2} />
        <Rating.Item value={3} />
        <Rating.Item value={4} />
        <Rating.Item value={5} />
      </Rating>
      <Rating size="sm" defaultValue={3}>
        <Rating.Item value={1} />
        <Rating.Item value={2} />
        <Rating.Item value={3} />
        <Rating.Item value={4} />
        <Rating.Item value={5} />
      </Rating>
      <Rating size="md" defaultValue={3}>
        <Rating.Item value={1} />
        <Rating.Item value={2} />
        <Rating.Item value={3} />
        <Rating.Item value={4} />
        <Rating.Item value={5} />
      </Rating>
      <Rating size="lg" defaultValue={3}>
        <Rating.Item value={1} />
        <Rating.Item value={2} />
        <Rating.Item value={3} />
        <Rating.Item value={4} />
        <Rating.Item value={5} />
      </Rating>
    </Space>
  ),
  heart: (
    <Rating defaultValue={4}>
      <Rating.Item value={1} mask="heart" color="bg-error" />
      <Rating.Item value={2} mask="heart" color="bg-error" />
      <Rating.Item value={3} mask="heart" color="bg-error" />
      <Rating.Item value={4} mask="heart" color="bg-error" />
      <Rating.Item value={5} mask="heart" color="bg-error" />
    </Rating>
  ),
  'custom-colors': (
    <Rating defaultValue={3}>
      <Rating.Item value={1} color="bg-error" />
      <Rating.Item value={2} color="bg-warning" />
      <Rating.Item value={3} color="bg-warning" />
      <Rating.Item value={4} color="bg-success" />
      <Rating.Item value={5} color="bg-success" />
    </Rating>
  ),
  'read-only': (
    <Rating value={4} readOnly>
      <Rating.Item value={1} />
      <Rating.Item value={2} />
      <Rating.Item value={3} />
      <Rating.Item value={4} />
      <Rating.Item value={5} />
    </Rating>
  ),
  'alt-star': (
    <Rating defaultValue={3}>
      <Rating.Item value={1} mask="star-2" color="bg-success" />
      <Rating.Item value={2} mask="star-2" color="bg-success" />
      <Rating.Item value={3} mask="star-2" color="bg-success" />
      <Rating.Item value={4} mask="star-2" color="bg-success" />
      <Rating.Item value={5} mask="star-2" color="bg-success" />
    </Rating>
  ),
};

function ControlledDemo() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <Rating value={rating} onChange={setRating}>
        <Rating.Item value={0} hidden />
        <Rating.Item value={1} />
        <Rating.Item value={2} />
        <Rating.Item value={3} />
        <Rating.Item value={4} />
        <Rating.Item value={5} />
      </Rating>
      <p className="mt-2">Current rating: {rating}</p>
    </div>
  );
}

const statefulDemos: Record<string, React.FC> = {
  controlled: ControlledDemo,
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
