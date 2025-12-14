import { createRoot } from 'react-dom/client';
import React from 'react';
import { message, Button, Space } from 'asterui';
import { CheckIconSvg } from './icons'

const BasicDemo: React.FC = () => {
  return (
    <Space direction="horizontal" size="sm" wrap>
      <Button
        color="primary"
        onClick={() => message.success('Changes saved successfully')}
      >
        Success
      </Button>

      <Button
        onClick={() => message.error('Failed to save changes')}
      >
        Error
      </Button>

      <Button
        onClick={() => message.info('New updates available')}
      >
        Info
      </Button>

      <Button
        onClick={() => message.warning('Session expires in 5 minutes')}
      >
        Warning
      </Button>
    </Space>
  );
};

const LoadingDemo: React.FC = () => {
  const [loadingId, setLoadingId] = React.useState<string | null>(null);

  const handleClick = () => {
    const id = message.loading('Processing...');
    setLoadingId(id);

    setTimeout(() => {
      message.destroy(id);
      message.success('Done!');
      setLoadingId(null);
    }, 2000);
  };

  return (
    <Button onClick={handleClick} disabled={!!loadingId}>
      {loadingId ? 'Processing...' : 'Submit'}
    </Button>
  );
};

const DurationDemo: React.FC = () => {
  return (
    <Space direction="horizontal" size="sm" wrap>
      <Button
        onClick={() => message.info('Quick message', { duration: 1 })}
      >
        1 second
      </Button>

      <Button
        color="primary"
        onClick={() => message.info('Default duration')}
      >
        Default (3s)
      </Button>

      <Button
        onClick={() => message.info('Longer message', { duration: 6 })}
      >
        6 seconds
      </Button>
    </Space>
  );
};

const StackingDemo: React.FC = () => {
  return (
    <Button
      color="primary"
      onClick={() => {
        message.success('First message');
        setTimeout(() => message.info('Second message'), 300);
        setTimeout(() => message.warning('Third message'), 600);
      }}
    >
      Show Multiple
    </Button>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'basic': BasicDemo,
  'loading': LoadingDemo,
  'duration': DurationDemo,
  'stacking': StackingDemo,
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId && statefulDemos[exampleId]) {
    const root = createRoot(container as HTMLElement);
    const Component = statefulDemos[exampleId];
    root.render(<Component />);
  }
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code');
    if (code) {
      await navigator.clipboard.writeText(code);
      const originalHTML = btn.innerHTML;
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
