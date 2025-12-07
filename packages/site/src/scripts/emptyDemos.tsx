import { createRoot } from 'react-dom/client';
import { Empty, Button } from 'asterui';
import { CheckIconSvg } from './icons'
import { InboxIcon } from '@heroicons/react/24/outline';

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
      image={<InboxIcon className="w-16 h-16 text-base-content/30" />}
      description="No files found"
    />
  ),
  'with-action': (
    <Empty description="No items in your cart">
      <Button color="primary">Start Shopping</Button>
    </Empty>
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
