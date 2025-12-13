import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Menu, Space, notification } from 'asterui';
import { HomeIcon, FolderIcon, UsersIcon, Cog6ToothIcon } from '@aster-ui/icons';
import { CheckIconSvg } from './icons'

// Demo components
const BasicDemo: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <Menu selectedKeys={[selected]} onSelect={setSelected}>
      <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
      <Menu.Item itemKey="projects">Projects</Menu.Item>
      <Menu.Item itemKey="team">Team</Menu.Item>
      <Menu.Item itemKey="settings">Settings</Menu.Item>
    </Menu>
  )
}

const HorizontalDemo: React.FC = () => {
  const [selected, setSelected] = useState('home')

  return (
    <Menu mode="horizontal" selectedKeys={[selected]} onSelect={setSelected}>
      <Menu.Item itemKey="home">Home</Menu.Item>
      <Menu.Item itemKey="about">About</Menu.Item>
      <Menu.Item itemKey="services">Services</Menu.Item>
      <Menu.Item itemKey="contact">Contact</Menu.Item>
    </Menu>
  )
}

const WithIconsDemo: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <Menu selectedKeys={[selected]} onSelect={setSelected}>
      <Menu.Item itemKey="dashboard" icon={<HomeIcon />}>
        Dashboard
      </Menu.Item>
      <Menu.Item itemKey="projects" icon={<FolderIcon />}>
        Projects
      </Menu.Item>
      <Menu.Item itemKey="team" icon={<UsersIcon />}>
        Team
      </Menu.Item>
      <Menu.Item itemKey="settings" icon={<Cog6ToothIcon />}>
        Settings
      </Menu.Item>
    </Menu>
  )
}

const SubmenuDemo: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <Menu selectedKeys={[selected]} onSelect={setSelected} defaultOpenKeys={['projects']}>
      <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
      <Menu.SubMenu itemKey="projects" label="Projects">
        <Menu.Item itemKey="active">Active Projects</Menu.Item>
        <Menu.Item itemKey="archived">Archived</Menu.Item>
        <Menu.Item itemKey="templates">Templates</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu itemKey="team" label="Team">
        <Menu.Item itemKey="members">Members</Menu.Item>
        <Menu.Item itemKey="roles">Roles</Menu.Item>
        <Menu.Item itemKey="permissions">Permissions</Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.Title>Admin</Menu.Title>
      <Menu.Item itemKey="admin-settings">Settings</Menu.Item>
      <Menu.Item itemKey="billing">Billing</Menu.Item>
    </Menu>
  )
}

const SizesDemo: React.FC = () => (
  <Space direction="horizontal" size="lg" wrap>
    <div>
      <div className="text-sm font-semibold mb-2">Extra Small</div>
      <Menu size="xs" defaultSelectedKeys={['dashboard']}>
        <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
        <Menu.Item itemKey="projects">Projects</Menu.Item>
        <Menu.Item itemKey="team">Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Small</div>
      <Menu size="sm" defaultSelectedKeys={['dashboard']}>
        <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
        <Menu.Item itemKey="projects">Projects</Menu.Item>
        <Menu.Item itemKey="team">Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Medium</div>
      <Menu size="md" defaultSelectedKeys={['dashboard']}>
        <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
        <Menu.Item itemKey="projects">Projects</Menu.Item>
        <Menu.Item itemKey="team">Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Large</div>
      <Menu size="lg" defaultSelectedKeys={['dashboard']}>
        <Menu.Item itemKey="dashboard">Dashboard</Menu.Item>
        <Menu.Item itemKey="projects">Projects</Menu.Item>
        <Menu.Item itemKey="team">Team</Menu.Item>
      </Menu>
    </div>
  </Space>
)

const DataDrivenDemo: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: <HomeIcon /> },
    { key: 'projects', label: 'Projects', icon: <FolderIcon />, children: [
      { key: 'active', label: 'Active Projects' },
      { key: 'archived', label: 'Archived' },
    ]},
    { key: 'divider1', divider: true },
    { key: 'admin', label: 'Admin', title: true },
    { key: 'settings', label: 'Settings', icon: <Cog6ToothIcon /> },
  ]

  return (
    <Menu
      items={items}
      selectedKeys={[selected]}
      onSelect={(key) => {
        setSelected(key)
        notification.info({ message: `Selected: ${key}` })
      }}
    />
  )
}

const demos: Record<string, React.FC> = {
  'basic': BasicDemo,
  'horizontal': HorizontalDemo,
  'with-icons': WithIconsDemo,
  'submenu': SubmenuDemo,
  'sizes': SizesDemo,
  'datadriven': DataDrivenDemo,
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId && demos[exampleId]) {
    const root = createRoot(container as HTMLElement);
    const Demo = demos[exampleId];
    root.render(<Demo />);
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
