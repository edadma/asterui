import { createRoot } from 'react-dom/client';
import { Loading, Space } from 'asterui';
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Loading />
  ),
  'types': (
    <Space direction="horizontal" size="md" align="center" wrap>
      <Loading type="spinner" />
      <Loading type="dots" />
      <Loading type="ring" />
      <Loading type="ball" />
      <Loading type="bars" />
      <Loading type="infinity" />
    </Space>
  ),
  'sizes': (
    <Space direction="horizontal" size="md" align="center">
      <Loading size="xs" />
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
    </Space>
  ),
  'colors': (
    <Space direction="horizontal" size="md" align="center" wrap>
      <Loading color="primary" />
      <Loading color="secondary" />
      <Loading color="accent" />
      <Loading color="neutral" />
      <Loading color="info" />
      <Loading color="success" />
      <Loading color="warning" />
      <Loading color="error" />
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
