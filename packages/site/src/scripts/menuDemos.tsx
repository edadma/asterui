import { createRoot } from 'react-dom/client';
import React from 'react';
import { Menu, Space } from 'asterui';
import { HomeIcon, FolderIcon, UsersIcon, CogIcon } from '@heroicons/react/24/outline';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Menu>
      <Menu.Item active>Dashboard</Menu.Item>
      <Menu.Item>Projects</Menu.Item>
      <Menu.Item>Team</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
    </Menu>
  ),
  'horizontal': (
    <Menu mode="horizontal">
      <Menu.Item active>Home</Menu.Item>
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    </Menu>
  ),
  'with-icons': (
    <Menu>
      <Menu.Item active>
        <HomeIcon className="w-5 h-5 mr-2" />
        Dashboard
      </Menu.Item>
      <Menu.Item>
        <FolderIcon className="w-5 h-5 mr-2" />
        Projects
      </Menu.Item>
      <Menu.Item>
        <UsersIcon className="w-5 h-5 mr-2" />
        Team
      </Menu.Item>
      <Menu.Item>
        <CogIcon className="w-5 h-5 mr-2" />
        Settings
      </Menu.Item>
    </Menu>
  ),
  'submenu': (
    <Menu>
      <Menu.Item active>Dashboard</Menu.Item>
      <Menu.SubMenu title="Projects">
        <Menu.Item>Active Projects</Menu.Item>
        <Menu.Item>Archived</Menu.Item>
        <Menu.Item>Templates</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="Team">
        <Menu.Item>Members</Menu.Item>
        <Menu.Item>Roles</Menu.Item>
        <Menu.Item>Permissions</Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.Title>Admin</Menu.Title>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item>Billing</Menu.Item>
    </Menu>
  ),
  'sizes': (
    <Space direction="horizontal" size="lg" wrap>
      <div>
        <div className="text-sm font-semibold mb-2">Extra Small</div>
        <Menu size="xs">
          <Menu.Item active>Dashboard</Menu.Item>
          <Menu.Item>Projects</Menu.Item>
          <Menu.Item>Team</Menu.Item>
        </Menu>
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">Small</div>
        <Menu size="sm">
          <Menu.Item active>Dashboard</Menu.Item>
          <Menu.Item>Projects</Menu.Item>
          <Menu.Item>Team</Menu.Item>
        </Menu>
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">Medium</div>
        <Menu size="md">
          <Menu.Item active>Dashboard</Menu.Item>
          <Menu.Item>Projects</Menu.Item>
          <Menu.Item>Team</Menu.Item>
        </Menu>
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">Large</div>
        <Menu size="lg">
          <Menu.Item active>Dashboard</Menu.Item>
          <Menu.Item>Projects</Menu.Item>
          <Menu.Item>Team</Menu.Item>
        </Menu>
      </div>
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
      btn.innerHTML = '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
