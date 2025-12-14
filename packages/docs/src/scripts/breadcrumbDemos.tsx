import { createRoot } from 'react-dom/client';
import { Breadcrumb } from 'asterui';
import { FolderIcon, DocumentTextIcon, ChevronRightIcon } from '@aster-ui/icons';
import { CheckIconSvg } from './icons'

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
      <Breadcrumb.Item href="/" icon={<FolderIcon size="sm" />}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/documents" icon={<FolderIcon size="sm" />}>
        Documents
      </Breadcrumb.Item>
      <Breadcrumb.Item icon={<DocumentTextIcon size="sm" />}>
        Add Document
      </Breadcrumb.Item>
    </Breadcrumb>
  ),
  'separator': (
    <div className="space-y-4">
      <Breadcrumb separator="/">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item>Details</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb separator={<ChevronRightIcon size="sm" />}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item>Details</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  ),
  'items': (
    <Breadcrumb
      items={[
        { title: 'Home', href: '/' },
        { title: 'Products', href: '/products' },
        { title: 'Category', href: '/products/category' },
        { title: 'Item Details' },
      ]}
    />
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
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
