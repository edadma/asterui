import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { ColorPicker, Space } from 'asterui';

const presets = [
  '#f43f5e', '#ec4899', '#d946ef', '#a855f7',
  '#8b5cf6', '#6366f1', '#3b82f6', '#0ea5e9',
  '#06b6d4', '#14b8a6', '#10b981', '#22c55e',
];

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <ColorPicker defaultValue="#6366f1" />
  ),
  'show-text': (
    <ColorPicker defaultValue="#10b981" showText />
  ),
  'presets': (
    <ColorPicker defaultValue="#6366f1" presets={presets} />
  ),
  'sizes': (
    <Space direction="horizontal" size="md" align="center">
      <ColorPicker size="sm" defaultValue="#f43f5e" />
      <ColorPicker size="md" defaultValue="#6366f1" />
      <ColorPicker size="lg" defaultValue="#10b981" />
    </Space>
  ),
};

// Stateful demo components
const ControlledDemo: React.FC = () => {
  const [color, setColor] = useState('#6366f1');

  return (
    <Space direction="vertical" size="sm">
      <ColorPicker value={color} onChange={setColor} showText />
      <div
        className="w-full h-16 rounded-lg"
        style={{ backgroundColor: color }}
      />
    </Space>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'controlled': ControlledDemo,
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId) {
    const root = createRoot(container as HTMLElement);
    if (demos[exampleId]) {
      root.render(demos[exampleId]);
    } else if (statefulDemos[exampleId]) {
      const Component = statefulDemos[exampleId];
      root.render(<Component />);
    }
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
