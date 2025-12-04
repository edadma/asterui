import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { TimePicker, Form, Button, Modal, Space } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  basic: <TimePicker placeholder="Select time" />,
  '12-hour': <TimePicker format="12" placeholder="Select time" />,
  seconds: <TimePicker showSeconds placeholder="Select time" />,
  '12-hour-seconds': <TimePicker format="12" showSeconds placeholder="Select time" />,
  sizes: (
    <Space>
      <TimePicker size="xs" placeholder="Extra small" />
      <TimePicker size="sm" placeholder="Small" />
      <TimePicker size="md" placeholder="Medium" />
      <TimePicker size="lg" placeholder="Large" />
    </Space>
  ),
  disabled: <TimePicker disabled defaultValue={new Date()} />,
};

function ControlledDemo() {
  const [time, setTime] = useState<Date | null>(null);

  return (
    <div>
      <TimePicker value={time} onChange={setTime} />
      <p className="mt-2 text-sm text-base-content/70">
        Selected: {time ? time.toLocaleTimeString() : 'None'}
      </p>
    </div>
  );
}

function FormDemo() {
  const [submittedData, setSubmittedData] = useState<Record<string, unknown> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (values: Record<string, unknown>) => {
    setSubmittedData(values);
    setIsModalOpen(true);
  };

  return (
    <>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="startTime"
          label="Start Time"
          required
          rules={{
            required: 'Please select start time',
          }}
        >
          <TimePicker placeholder="HH:MM" />
        </Form.Item>

        <Form.Item name="endTime" label="End Time">
          <TimePicker format="12" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        title="Form Submitted"
        footer={null}
      >
        <div className="py-4">
          <p className="mb-4">Form data:</p>
          <pre className="bg-base-200 p-4 rounded-lg overflow-auto max-h-96">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      </Modal>
    </>
  );
}

function TimeRangeDemo() {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  return (
    <div className="flex gap-4">
      <div>
        <label className="label">
          <span className="label-text">Start Time</span>
        </label>
        <TimePicker value={startTime} onChange={setStartTime} placeholder="Start time" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">End Time</span>
        </label>
        <TimePicker value={endTime} onChange={setEndTime} placeholder="End time" />
      </div>
    </div>
  );
}

const statefulDemos: Record<string, React.FC> = {
  controlled: ControlledDemo,
  form: FormDemo,
  'time-range': TimeRangeDemo,
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
