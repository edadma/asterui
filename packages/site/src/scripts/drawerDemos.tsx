import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Drawer, Button, Space } from 'asterui';
import { CheckIconSvg } from './icons'

// Stateful demo components
const BasicDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Basic Drawer"
      >
        <p>Drawer content goes here.</p>
      </Drawer>
    </>
  );
};

const PlacementDemo: React.FC = () => {
  const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');
  const [open, setOpen] = useState(false);

  const showDrawer = (p: typeof placement) => {
    setPlacement(p);
    setOpen(true);
  };

  return (
    <>
      <Space direction="horizontal" size="sm" wrap>
        <Button onClick={() => showDrawer('left')}>Left</Button>
        <Button onClick={() => showDrawer('right')}>Right</Button>
        <Button onClick={() => showDrawer('top')}>Top</Button>
        <Button onClick={() => showDrawer('bottom')}>Bottom</Button>
      </Space>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement={placement}
        title={`${placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer`}
      >
        <p>This drawer slides in from the {placement}.</p>
      </Drawer>
    </>
  );
};

const FooterDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Profile"
        footer={
          <Space direction="horizontal" size="sm">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button color="primary" onClick={() => setOpen(false)}>
              Save
            </Button>
          </Space>
        }
      >
        <p>Form content would go here...</p>
      </Drawer>
    </>
  );
};

const CustomWidthDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Large Drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Large Drawer"
        width={500}
      >
        <p>This drawer is 500px wide.</p>
      </Drawer>
    </>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'basic': BasicDemo,
  'placement': PlacementDemo,
  'with-footer': FooterDemo,
  'custom-width': CustomWidthDemo,
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
