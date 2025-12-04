import { createRoot } from 'react-dom/client';
import { Breadcrumb } from 'asterui';
import { FolderIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/documents">Documents</Breadcrumb.Item>
      <Breadcrumb.Item>Add Document</Breadcrumb.Item>
    </Breadcrumb>
  ),
  'icons': (
    <Breadcrumb>
      <Breadcrumb.Item href="/">
        <FolderIcon className="w-4 h-4" />
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/documents">
        <FolderIcon className="w-4 h-4" />
        Documents
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <DocumentTextIcon className="w-4 h-4" />
        Add Document
      </Breadcrumb.Item>
    </Breadcrumb>
  ),
  'scroll': (
    <Breadcrumb className="max-w-xs">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/documents">Documents</Breadcrumb.Item>
      <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
      <Breadcrumb.Item href="/team">Team</Breadcrumb.Item>
      <Breadcrumb.Item>Add New Member</Breadcrumb.Item>
    </Breadcrumb>
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
