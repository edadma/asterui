import { createRoot } from 'react-dom/client';
import { Container, Space } from 'asterui';
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Container>
      <h1 className="text-xl font-bold">Page Content</h1>
      <p>Content is centered with max-width constraint.</p>
    </Container>
  ),
  'page-layout': (
    <Container size="lg">
      <Space direction="vertical" size="lg">
        <header>
          <h1 className="text-3xl font-bold">Page Title</h1>
          <p className="text-base-content/70">Description</p>
        </header>
        <main className="bg-base-200 p-6 rounded-lg">
          <p>Main content area</p>
        </main>
      </Space>
    </Container>
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
