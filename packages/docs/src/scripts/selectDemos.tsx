import React from 'react';
import { createRoot } from 'react-dom/client';
import { Select, Space, Form, Button } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  basic: (
    <Select>
      <option disabled selected>
        Pick your favorite
      </option>
      <option>Apple</option>
      <option>Orange</option>
      <option>Banana</option>
      <option>Grape</option>
    </Select>
  ),
  'default-value': (
    <Select defaultValue="orange">
      <option value="apple">Apple</option>
      <option value="orange">Orange</option>
      <option value="banana">Banana</option>
      <option value="grape">Grape</option>
    </Select>
  ),
  sizes: (
    <Space size="xs">
      <Select size="xs">
        <option>Extra small</option>
      </Select>
      <Select size="sm">
        <option>Small</option>
      </Select>
      <Select size="md">
        <option>Medium (default)</option>
      </Select>
      <Select size="lg">
        <option>Large</option>
      </Select>
      <Select size="xl">
        <option>Extra large</option>
      </Select>
    </Space>
  ),
  colors: (
    <Space size="xs">
      <Select color="primary">
        <option>Primary</option>
      </Select>
      <Select color="secondary">
        <option>Secondary</option>
      </Select>
      <Select color="accent">
        <option>Accent</option>
      </Select>
      <Select color="info">
        <option>Info</option>
      </Select>
      <Select color="success">
        <option>Success</option>
      </Select>
      <Select color="warning">
        <option>Warning</option>
      </Select>
      <Select color="error">
        <option>Error</option>
      </Select>
    </Space>
  ),
  ghost: (
    <Select ghost>
      <option disabled selected>
        Pick one
      </option>
      <option>Option 1</option>
      <option>Option 2</option>
    </Select>
  ),
  disabled: (
    <Select disabled>
      <option>Disabled select</option>
    </Select>
  ),
};

function FormDemo() {
  const handleSubmit = (values: Record<string, unknown>) => {
    console.log('Form values:', values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Form onFinish={handleSubmit} initialValues={{ country: 'canada' }}>
      <Form.Item
        name="country"
        label="Country"
        required
        rules={{ required: 'Please select a country' }}
      >
        <Select>
          <option value="">Select a country</option>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
          <option value="uk">United Kingdom</option>
        </Select>
      </Form.Item>

      <Form.Item
        name="language"
        label="Language"
        required
        rules={{ required: 'Please select a language' }}
      >
        <Select>
          <option value="">Select a language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" color="primary">
          Save Settings
        </Button>
      </Form.Item>
    </Form>
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
