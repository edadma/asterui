import { createRoot } from 'react-dom/client';
import React from 'react';
import { Empty, Button } from 'asterui';
import { CheckIconSvg } from './icons';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Empty />
  ),
  'custom-description': (
    <Empty description="No data available" />
  ),
  'custom-image': (
    <Empty
      image={
        <svg className="w-16 h-16 text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      }
      description="No files found"
    />
  ),
  'with-action': (
    <Empty description="No items in your cart">
      <Button color="primary">Start Shopping</Button>
    </Empty>
  ),
  'simple-image': (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="No results"
    />
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
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
