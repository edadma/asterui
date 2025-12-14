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
      <Menu.Item key="dashboard">Dashboard</Menu.Item>
      <Menu.Item key="projects">Projects</Menu.Item>
      <Menu.Item key="team">Team</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
    </Menu>
  )
}

const HorizontalDemo: React.FC = () => {
  const [selected, setSelected] = useState('home')

  return (
    <Menu mode="horizontal" selectedKeys={[selected]} onSelect={setSelected}>
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="services">Services</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item>
    </Menu>
  )
}

const WithIconsDemo: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <Menu selectedKeys={[selected]} onSelect={setSelected}>
      <Menu.Item key="dashboard" icon={<HomeIcon />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="projects" icon={<FolderIcon />}>
        Projects
      </Menu.Item>
      <Menu.Item key="team" icon={<UsersIcon />}>
        Team
      </Menu.Item>
      <Menu.Item key="settings" icon={<Cog6ToothIcon />}>
        Settings
      </Menu.Item>
    </Menu>
  )
}

const SubmenuDemo: React.FC = () => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <Menu selectedKeys={[selected]} onSelect={setSelected} defaultOpenKeys={['projects']}>
      <Menu.Item key="dashboard">Dashboard</Menu.Item>
      <Menu.SubMenu key="projects" label="Projects">
        <Menu.Item key="active">Active Projects</Menu.Item>
        <Menu.Item key="archived">Archived</Menu.Item>
        <Menu.Item key="templates">Templates</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="team" label="Team">
        <Menu.Item key="members">Members</Menu.Item>
        <Menu.Item key="roles">Roles</Menu.Item>
        <Menu.Item key="permissions">Permissions</Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.Title>Admin</Menu.Title>
      <Menu.Item key="admin-settings">Settings</Menu.Item>
      <Menu.Item key="billing">Billing</Menu.Item>
    </Menu>
  )
}

const SizesDemo: React.FC = () => (
  <Space direction="horizontal" size="lg" wrap>
    <div>
      <div className="text-sm font-semibold mb-2">Extra Small</div>
      <Menu size="xs" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="team">Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Small</div>
      <Menu size="sm" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="team">Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Medium</div>
      <Menu size="md" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="team">Team</Menu.Item>
      </Menu>
    </div>

    <div>
      <div className="text-sm font-semibold mb-2">Large</div>
      <Menu size="lg" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="team">Team</Menu.Item>
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
