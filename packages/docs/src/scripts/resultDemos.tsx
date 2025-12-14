import React from 'react';
import { createRoot } from 'react-dom/client';
import { Result, Button, Space } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  success: (
    <Result
      status="success"
      title="Payment Successful"
      subTitle="Your order has been confirmed and will be shipped within 2 business days."
      extra={
        <Space>
          <Button color="primary">View Order</Button>
          <Button>Continue Shopping</Button>
        </Space>
      }
    />
  ),
  error: (
    <Result
      status="error"
      title="Submission Failed"
      subTitle="Please check your information and try again."
      extra={<Button color="error">Try Again</Button>}
    />
  ),
  info: (
    <Result
      status="info"
      title="Verification Required"
      subTitle="Please check your email to verify your account."
    />
  ),
  warning: (
    <Result
      status="warning"
      title="Account Suspended"
      subTitle="Your account has been suspended due to unusual activity."
      extra={<Button color="warning">Contact Support</Button>}
    />
  ),
  'not-found': (
    <Result
      status="404"
      title="Page Not Found"
      subTitle="The page you are looking for does not exist."
      extra={<Button color="primary">Back Home</Button>}
    />
  ),
  forbidden: (
    <Result
      status="403"
      title="Access Denied"
      subTitle="You don't have permission to access this resource."
      extra={<Button>Request Access</Button>}
    />
  ),
  'server-error': (
    <Result
      status="500"
      title="Server Error"
      subTitle="Something went wrong on our end. Please try again later."
      extra={<Button color="primary">Refresh Page</Button>}
    />
  ),
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example && demos[example]) {
    const root = createRoot(container);
    root.render(<>{demos[example]}</>);
  }
});
