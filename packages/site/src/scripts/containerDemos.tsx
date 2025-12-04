import { createRoot } from 'react-dom/client';
import { Container, Space } from 'asterui';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Container>
      <div className="bg-base-200 p-4 rounded-lg">
        Content is centered with a max-width constraint.
      </div>
    </Container>
  ),
  'sizes': (
    <Space direction="vertical" size="md">
      <Container size="sm">
        <div className="bg-primary/20 p-4 rounded-lg text-center">
          Small (max-w-screen-sm)
        </div>
      </Container>
      <Container size="md">
        <div className="bg-secondary/20 p-4 rounded-lg text-center">
          Medium (max-w-screen-md)
        </div>
      </Container>
      <Container size="lg">
        <div className="bg-accent/20 p-4 rounded-lg text-center">
          Large (max-w-screen-lg)
        </div>
      </Container>
      <Container size="xl">
        <div className="bg-info/20 p-4 rounded-lg text-center">
          XL (max-w-screen-xl)
        </div>
      </Container>
    </Space>
  ),
  'no-padding': (
    <Container padding={false}>
      <div className="bg-base-200 p-4">
        Full-width content without padding.
      </div>
    </Container>
  ),
  'page-layout': (
    <Container size="lg">
      <Space direction="vertical" size="lg">
        <header>
          <h1 className="text-3xl font-bold">Page Title</h1>
          <p className="text-base-content/70">Page description goes here.</p>
        </header>
        <main className="bg-base-200 p-6 rounded-lg">
          <p>Main content area with consistent max-width.</p>
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
      btn.innerHTML = '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
