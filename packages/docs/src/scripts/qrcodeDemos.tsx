import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { QRCode } from 'asterui/qrcode';

// Static demos
const staticDemos: Record<string, React.ReactNode> = {
  'basic': (
    <QRCode value="https://github.com" />
  ),
  'sizes': (
    <div className="flex gap-4 items-center flex-wrap">
      <QRCode value="https://example.com" size={80} />
      <QRCode value="https://example.com" size={120} />
      <QRCode value="https://example.com" size={160} />
      <QRCode value="https://example.com" size={200} />
    </div>
  ),
  'colors': (
    <div className="flex gap-4 flex-wrap">
      <QRCode value="https://example.com" color="#1890ff" bgColor="#f0f0f0" />
      <QRCode value="https://example.com" color="#52c41a" bgColor="#f6ffed" />
      <QRCode value="https://example.com" color="#722ed1" bgColor="#f9f0ff" />
    </div>
  ),
  'icon': (
    <QRCode
      value="https://github.com"
      icon="https://avatars.githubusercontent.com/u/142286421"
      iconSize={40}
    />
  ),
  'error-level': (
    <div className="flex gap-4 flex-wrap">
      <div className="text-center">
        <QRCode value="https://example.com/data" errorLevel="L" size={120} />
        <div className="text-sm mt-2">Level L (7%)</div>
      </div>
      <div className="text-center">
        <QRCode value="https://example.com/data" errorLevel="M" size={120} />
        <div className="text-sm mt-2">Level M (15%)</div>
      </div>
      <div className="text-center">
        <QRCode value="https://example.com/data" errorLevel="Q" size={120} />
        <div className="text-sm mt-2">Level Q (25%)</div>
      </div>
      <div className="text-center">
        <QRCode value="https://example.com/data" errorLevel="H" size={120} />
        <div className="text-sm mt-2">Level H (30%)</div>
      </div>
    </div>
  ),
  'border': (
    <div className="flex gap-4 flex-wrap">
      <QRCode value="https://example.com" bordered />
      <QRCode value="https://example.com" bordered={false} />
    </div>
  ),
  'loading': (
    <QRCode value="https://example.com" status="loading" />
  ),
};

// Expired Status Demo
function ExpiredDemo() {
  const [status, setStatus] = useState<'active' | 'loading' | 'expired'>('expired');

  const handleRefresh = () => {
    setStatus('loading');
    setTimeout(() => setStatus('active'), 2000);
  };

  return <QRCode value="https://example.com" status={status} onRefresh={handleRefresh} />;
}

// Dynamic QR Code Demo
function DynamicDemo() {
  const [text, setText] = useState('https://github.com');

  return (
    <div className="flex flex-col gap-4 items-center">
      <QRCode value={text} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        className="input input-bordered w-full max-w-md"
      />
    </div>
  );
}

const statefulDemos: Record<string, () => JSX.Element> = {
  'expired': ExpiredDemo,
  'dynamic': DynamicDemo,
};

// Mount demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId) {
    const root = createRoot(container as HTMLElement);
    if (statefulDemos[exampleId]) {
      const DemoComponent = statefulDemos[exampleId];
      root.render(<DemoComponent />);
    } else if (staticDemos[exampleId]) {
      root.render(staticDemos[exampleId]);
    }
  }
});
