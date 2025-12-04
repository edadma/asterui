import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { Pagination } from 'asterui';

// Basic Pagination
function BasicDemo() {
  const [current, setCurrent] = useState(1);
  return (
    <Pagination
      current={current}
      total={85}
      onChange={(page) => setCurrent(page)}
    />
  );
}

// Size Changer
function SizeChangerDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <Pagination
      current={current}
      total={500}
      pageSize={pageSize}
      showSizeChanger
      onChange={(page, size) => {
        setCurrent(page);
        setPageSize(size);
      }}
    />
  );
}

// Show Total
function ShowTotalDemo() {
  return <Pagination total={250} showTotal />;
}

// Custom Total
function CustomTotalDemo() {
  return (
    <Pagination
      total={250}
      showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`}
    />
  );
}

// Quick Jumper
function QuickJumperDemo() {
  return <Pagination total={500} showQuickJumper />;
}

// All Features
function AllFeaturesDemo() {
  const [current, setCurrent] = useState(1);
  return (
    <Pagination
      current={current}
      total={500}
      showSizeChanger
      showQuickJumper
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
      onChange={(page) => setCurrent(page)}
    />
  );
}

// Simple Mode
function SimpleDemo() {
  return <Pagination total={100} simple />;
}

// Sizes
function SizesDemo() {
  return (
    <div className="space-y-4">
      <div>
        <div className="text-sm text-base-content/60 mb-2">Extra Small</div>
        <Pagination total={100} size="xs" />
      </div>
      <div>
        <div className="text-sm text-base-content/60 mb-2">Small</div>
        <Pagination total={100} size="sm" />
      </div>
      <div>
        <div className="text-sm text-base-content/60 mb-2">Medium (default)</div>
        <Pagination total={100} size="md" />
      </div>
      <div>
        <div className="text-sm text-base-content/60 mb-2">Large</div>
        <Pagination total={100} size="lg" />
      </div>
    </div>
  );
}

// Disabled
function DisabledDemo() {
  return <Pagination total={100} disabled />;
}

const statefulDemos: Record<string, () => JSX.Element> = {
  'basic': BasicDemo,
  'size-changer': SizeChangerDemo,
  'show-total': ShowTotalDemo,
  'custom-total': CustomTotalDemo,
  'quick-jumper': QuickJumperDemo,
  'all-features': AllFeaturesDemo,
  'simple': SimpleDemo,
  'sizes': SizesDemo,
  'disabled': DisabledDemo,
};

// Mount demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId && statefulDemos[exampleId]) {
    const root = createRoot(container as HTMLElement);
    const DemoComponent = statefulDemos[exampleId];
    root.render(<DemoComponent />);
  }
});
