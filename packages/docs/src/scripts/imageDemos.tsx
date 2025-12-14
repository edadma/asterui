import { createRoot } from 'react-dom/client';
import React from 'react';
import { Image, Space } from 'asterui';
import { CheckIconSvg } from './icons'

const imgSrc = 'https://picsum.photos/seed/asterui/800/600';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Image
      src={imgSrc}
      alt="Landscape"
      width={400}
      height={300}
    />
  ),
  'sizes': (
    <Space direction="horizontal" size="md" align="center">
      <Image
        src={imgSrc}
        alt="Small"
        width={100}
        height={100}
      />
      <Image
        src={imgSrc}
        alt="Medium"
        width={200}
        height={150}
      />
      <Image
        src={imgSrc}
        alt="Large"
        width={300}
        height={200}
      />
    </Space>
  ),
  'preview': (
    <Image
      src={imgSrc}
      alt="Landscape with preview"
      width={400}
      height={300}
      preview
    />
  ),
  'fallback': (
    <Space direction="horizontal" size="md">
      <Image
        src="https://invalid-url.example.com/broken.jpg"
        alt="Broken image"
        width={200}
        height={150}
        fallback={imgSrc}
      />
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
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
