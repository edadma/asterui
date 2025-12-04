import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Range, Space, Form, Button } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  basic: <Range />,
  'show-value': <Range showValue />,
  'show-steps': <Range showSteps step={10} />,
  'custom-range': <Range min={0} max={10} step={0.5} defaultValue={5} showValue />,
  colors: (
    <Space>
      <Range color="primary" defaultValue={25} />
      <Range color="secondary" defaultValue={35} />
      <Range color="accent" defaultValue={45} />
      <Range color="success" defaultValue={55} />
      <Range color="warning" defaultValue={65} />
      <Range color="info" defaultValue={75} />
      <Range color="error" defaultValue={85} />
    </Space>
  ),
  sizes: (
    <Space size="lg">
      <Range size="xs" defaultValue={25} />
      <Range size="sm" defaultValue={50} />
      <Range size="md" defaultValue={75} />
      <Range size="lg" defaultValue={90} />
    </Space>
  ),
  disabled: <Range disabled defaultValue={60} />,
};

function ControlledDemo() {
  const [value, setValue] = useState(50);
  return (
    <div>
      <Range value={value} onChange={setValue} showValue />
      <p className="mt-2 text-sm text-base-content/70">Value: {value}</p>
    </div>
  );
}

function VolumeDemo() {
  const [volume, setVolume] = useState(50);
  return (
    <div className="p-4 border border-base-300 rounded-lg">
      <div className="flex items-center gap-3">
        <span className="text-2xl">
          {volume === 0 ? '🔇' : volume < 50 ? '🔉' : '🔊'}
        </span>
        <Range
          value={volume}
          onChange={setVolume}
          color="primary"
          className="flex-1"
        />
        <span className="text-sm font-medium w-12 text-right">{volume}%</span>
      </div>
    </div>
  );
}

function FormDemo() {
  const handleSubmit = (values: Record<string, unknown>) => {
    console.log('Form values:', values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Form onFinish={handleSubmit} initialValues={{ volume: 50, brightness: 75 }}>
      <Form.Item name="volume" label="Volume">
        <Range showValue color="primary" />
      </Form.Item>

      <Form.Item name="brightness" label="Brightness">
        <Range showValue color="warning" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

const statefulDemos: Record<string, React.FC> = {
  controlled: ControlledDemo,
  volume: VolumeDemo,
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
