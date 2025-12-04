import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Modal, Button, Space } from 'asterui';

// Stateful demo components
const BasicDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Basic Modal"
      >
        <p>This is the modal content.</p>
        <p>You can put any content here.</p>
      </Modal>
    </>
  );
};

const FooterDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    console.log('OK clicked');
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmation"
        footer={
          <Space direction="horizontal" size="sm">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="primary" onClick={handleOk}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Are you sure you want to proceed with this action?</p>
      </Modal>
    </>
  );
};

const CenteredDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Centered Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Centered Modal"
        centered
      >
        <p>This modal is vertically centered on the screen.</p>
      </Modal>
    </>
  );
};

const SizesDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState<number | string>(520);

  const showModal = (w: number | string, title: string) => {
    setWidth(w);
    setOpen(true);
  };

  return (
    <>
      <Space direction="horizontal" size="sm" wrap>
        <Button onClick={() => showModal(400, 'Small Modal')}>
          Small (400px)
        </Button>
        <Button onClick={() => showModal(520, 'Default Modal')}>
          Default (520px)
        </Button>
        <Button onClick={() => showModal(800, 'Large Modal')}>
          Large (800px)
        </Button>
      </Space>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`Modal Width: ${width}px`}
        width={width}
      >
        <p>This modal has a width of {width}px.</p>
      </Modal>
    </>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'basic': BasicDemo,
  'with-footer': FooterDemo,
  'centered': CenteredDemo,
  'sizes': SizesDemo,
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
      btn.innerHTML = '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
