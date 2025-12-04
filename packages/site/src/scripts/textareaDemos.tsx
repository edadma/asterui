import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Textarea, Form, Button, Modal, Space } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  basic: <Textarea placeholder="Type your message here" />,
  rows: <Textarea rows={6} placeholder="Tall textarea" />,
  sizes: (
    <Space size="xs">
      <Textarea size="xs" placeholder="Extra small" />
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium (default)" />
      <Textarea size="lg" placeholder="Large" />
      <Textarea size="xl" placeholder="Extra large" />
    </Space>
  ),
  colors: (
    <Space size="xs">
      <Textarea color="primary" placeholder="Primary" />
      <Textarea color="secondary" placeholder="Secondary" />
      <Textarea color="accent" placeholder="Accent" />
      <Textarea color="info" placeholder="Info" />
      <Textarea color="success" placeholder="Success" />
      <Textarea color="warning" placeholder="Warning" />
      <Textarea color="error" placeholder="Error" />
    </Space>
  ),
  ghost: <Textarea ghost placeholder="Ghost textarea" />,
  disabled: <Textarea disabled placeholder="Disabled textarea" />,
};

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
          name="message"
          label="Message"
          required
          rules={{
            required: 'Please enter a message',
            min: { value: 10, message: 'Message must be at least 10 characters' },
          }}
        >
          <Textarea rows={4} placeholder="Enter your message here" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Send Message
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

const statefulDemos: Record<string, React.FC> = {
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
