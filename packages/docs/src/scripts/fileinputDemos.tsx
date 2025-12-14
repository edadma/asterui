import { createRoot } from 'react-dom/client';
import React from 'react';
import { FileInput, Space } from 'asterui';
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <FileInput />
  ),
  'accept-types': (
    <Space direction="vertical" size="md">
      <div>
        <label className="block text-sm font-medium mb-2">Images only</label>
        <FileInput accept="image/*" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">PDF files only</label>
        <FileInput accept=".pdf" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Images and PDFs</label>
        <FileInput accept="image/*,.pdf" />
      </div>
    </Space>
  ),
  'multiple': (
    <FileInput multiple />
  ),
  'sizes': (
    <Space direction="vertical" size="md">
      <FileInput size="xs" />
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
    </Space>
  ),
  'colors': (
    <Space direction="vertical" size="md">
      <FileInput color="primary" />
      <FileInput color="secondary" />
      <FileInput color="accent" />
      <FileInput color="success" />
      <FileInput color="warning" />
      <FileInput color="error" />
    </Space>
  ),
  'styles': (
    <Space direction="vertical" size="md">
      <FileInput bordered color="primary" />
      <FileInput ghost color="secondary" />
    </Space>
  ),
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId) {
    const root = createRoot(container as HTMLElement);
    if (demos[exampleId]) {
      root.render(demos[exampleId]);
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
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
