import { createRoot } from 'react-dom/client';
import { Fieldset, Input, Space } from 'asterui';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Fieldset>
      <Fieldset.Legend>User Information</Fieldset.Legend>
      <p className="text-sm text-base-content/70">
        Group related form controls with a descriptive legend.
      </p>
    </Fieldset>
  ),
  'with-inputs': (
    <Fieldset>
      <Fieldset.Legend>Contact Details</Fieldset.Legend>
      <Space direction="vertical" size="sm" className="w-full">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input placeholder="Enter your name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <Input type="tel" placeholder="Enter your phone" />
        </div>
      </Space>
    </Fieldset>
  ),
  'disabled': (
    <Fieldset disabled>
      <Fieldset.Legend>Disabled Form Section</Fieldset.Legend>
      <Space direction="vertical" size="sm" className="w-full">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <Input placeholder="Cannot edit" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <Input type="password" placeholder="Cannot edit" />
        </div>
      </Space>
    </Fieldset>
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
