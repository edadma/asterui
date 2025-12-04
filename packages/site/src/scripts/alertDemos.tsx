import { createRoot } from 'react-dom/client';
import { Alert, Button, Space } from 'asterui';
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Alert>
      <InformationCircleIcon className="h-6 w-6 shrink-0" />
      <span>This is a basic alert</span>
    </Alert>
  ),
  'types': (
    <Space direction="vertical" size="sm">
      <Alert type="info">
        <InformationCircleIcon className="h-6 w-6 shrink-0" />
        <span>Info: New software update available</span>
      </Alert>
      <Alert type="success">
        <CheckCircleIcon className="h-6 w-6 shrink-0" />
        <span>Success: Your purchase has been confirmed</span>
      </Alert>
      <Alert type="warning">
        <ExclamationTriangleIcon className="h-6 w-6 shrink-0" />
        <span>Warning: Invalid email address</span>
      </Alert>
      <Alert type="error">
        <XCircleIcon className="h-6 w-6 shrink-0" />
        <span>Error: Invalid credentials</span>
      </Alert>
    </Space>
  ),
  'action': (
    <Alert type="warning">
      <ExclamationTriangleIcon className="h-6 w-6 shrink-0" />
      <span>We use cookies for no reason</span>
      <div>
        <Button size="sm">Accept</Button>
      </div>
    </Alert>
  ),
  'outline': (
    <Space direction="vertical" size="sm">
      <Alert type="info" outline>
        <InformationCircleIcon className="h-6 w-6 shrink-0" />
        <span>Info outline alert</span>
      </Alert>
      <Alert type="success" outline>
        <CheckCircleIcon className="h-6 w-6 shrink-0" />
        <span>Success outline alert</span>
      </Alert>
    </Space>
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
      btn.innerHTML = '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
