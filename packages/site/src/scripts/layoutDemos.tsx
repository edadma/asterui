import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Layout, Button } from 'asterui';
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Layout className="min-h-[300px] w-full border border-base-300">
      <Layout.Header className="bg-primary text-primary-content p-4">
        <div className="text-xl font-bold">Header</div>
      </Layout.Header>
      <Layout.Content className="bg-base-200 p-8">
        <div className="bg-base-100 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Content</h2>
          <p>Main content area</p>
        </div>
      </Layout.Content>
      <Layout.Footer className="bg-neutral text-neutral-content p-4 text-center">
        Footer
      </Layout.Footer>
    </Layout>
  ),
  'with-sider': (
    <Layout className="min-h-[300px] w-full border border-base-300">
      <Layout.Header className="bg-primary text-primary-content p-4">
        <div className="text-xl font-bold">Header</div>
      </Layout.Header>
      <Layout className="flex-1">
        <Layout.Sider className="bg-base-300 p-4 w-48">
          <nav className="space-y-2">
            <div className="p-2 bg-base-100 rounded">Menu Item 1</div>
            <div className="p-2 bg-base-100 rounded">Menu Item 2</div>
            <div className="p-2 bg-base-100 rounded">Menu Item 3</div>
          </nav>
        </Layout.Sider>
        <Layout.Content className="bg-base-200 p-8">
          <div className="bg-base-100 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Content</h2>
            <p>Main content area with sidebar navigation</p>
          </div>
        </Layout.Content>
      </Layout>
      <Layout.Footer className="bg-neutral text-neutral-content p-4 text-center">
        Footer
      </Layout.Footer>
    </Layout>
  ),
  'sider-right': (
    <Layout className="min-h-[300px] w-full border border-base-300">
      <Layout.Header className="bg-primary text-primary-content p-4">
        <div className="text-xl font-bold">Header</div>
      </Layout.Header>
      <Layout className="flex-1">
        <Layout.Content className="bg-base-200 p-8">
          <div className="bg-base-100 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Content</h2>
            <p>Main content area with right sidebar</p>
          </div>
        </Layout.Content>
        <Layout.Sider className="bg-base-300 p-4 w-48">
          <div className="space-y-2">
            <div className="p-2 bg-base-100 rounded">Info Panel</div>
            <div className="p-2 bg-base-100 rounded">Quick Links</div>
            <div className="p-2 bg-base-100 rounded">Related Items</div>
          </div>
        </Layout.Sider>
      </Layout>
      <Layout.Footer className="bg-neutral text-neutral-content p-4 text-center">
        Footer
      </Layout.Footer>
    </Layout>
  ),
};

// Responsive demo with state
const ResponsiveDemo: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-[300px] w-full border border-base-300">
      <Layout.Header className="bg-primary text-primary-content p-4 flex items-center justify-between">
        <div className="text-xl font-bold">Header</div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </Layout.Header>
      <Layout className="flex-1">
        <Layout.Sider
          collapsible
          collapsed={collapsed}
          className="bg-base-300 p-4"
        >
          {!collapsed && (
            <nav className="space-y-2">
              <div className="p-2 bg-base-100 rounded">Dashboard</div>
              <div className="p-2 bg-base-100 rounded">Settings</div>
              <div className="p-2 bg-base-100 rounded">Profile</div>
            </nav>
          )}
          {collapsed && (
            <div className="space-y-2">
              <div className="p-2 bg-base-100 rounded text-center">D</div>
              <div className="p-2 bg-base-100 rounded text-center">S</div>
              <div className="p-2 bg-base-100 rounded text-center">P</div>
            </div>
          )}
        </Layout.Sider>
        <Layout.Content className="bg-base-200 p-8">
          <div className="bg-base-100 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Content</h2>
            <p>Click the button to toggle the sidebar</p>
          </div>
        </Layout.Content>
      </Layout>
      <Layout.Footer className="bg-neutral text-neutral-content p-4 text-center">
        Footer
      </Layout.Footer>
    </Layout>
  );
};

demos['responsive'] = <ResponsiveDemo />;

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
