import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Modal, Button, Space } from 'asterui';
import { CheckIconSvg } from './icons'

// Stateful demo components
const BasicDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
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
    setOpen(false);
    Modal.success({ title: 'Success', content: 'Action completed successfully!' });
  };

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmation"
        footer={
          <Space direction="horizontal" size="sm">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button color="primary" onClick={handleOk}>
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
      <Button color="primary" onClick={() => setOpen(true)}>
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

const StaticMethodsDemo: React.FC = () => {
  return (
    <Space direction="horizontal" size="sm" wrap>
      <Button onClick={() => Modal.info({ title: 'Info', content: 'This is an informational message.' })}>
        Info
      </Button>
      <Button onClick={() => Modal.success({ title: 'Success', content: 'Operation completed successfully!' })}>
        Success
      </Button>
      <Button onClick={() => Modal.warning({ title: 'Warning', content: 'Please proceed with caution.' })}>
        Warning
      </Button>
      <Button onClick={() => Modal.error({ title: 'Error', content: 'Something went wrong.' })}>
        Error
      </Button>
    </Space>
  );
};

const ConfirmDemo: React.FC = () => {
  return (
    <Button
      onClick={() =>
        Modal.confirm({
          title: 'Delete Item',
          content: 'Are you sure you want to delete this item? This action cannot be undone.',
          okText: 'Delete',
          cancelText: 'Cancel',
          onOk: () => Modal.success({ title: 'Deleted', content: 'Item has been deleted.' }),
        })
      }
    >
      Delete Item
    </Button>
  );
};

const DefaultFooterDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onOk={() => {
          setOpen(false);
          Modal.success({ title: 'Submitted', content: 'Form submitted successfully!' });
        }}
        onCancel={() => setOpen(false)}
        title="Submit Form"
        okText="Submit"
        cancelText="Cancel"
      >
        <p>Click OK to submit the form or Cancel to close.</p>
      </Modal>
    </>
  );
};

const ResponsiveDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Responsive Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Responsive Modal"
        position={{ base: 'bottom', sm: 'middle' }}
      >
        <p>This modal appears at the bottom on mobile and centered on larger screens.</p>
        <p className="text-sm text-base-content/70 mt-2">Resize your browser to see the effect.</p>
      </Modal>
    </>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'basic': BasicDemo,
  'with-footer': FooterDemo,
  'default-footer': DefaultFooterDemo,
  'centered': CenteredDemo,
  'sizes': SizesDemo,
  'responsive': ResponsiveDemo,
  'static-methods': StaticMethodsDemo,
  'confirm': ConfirmDemo,
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
