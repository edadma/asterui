import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeController, Modal, Space } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  swap: <ThemeController.Swap />,
  'custom-themes': <ThemeController.Swap lightTheme="cupcake" darkTheme="dracula" />,
  'swap-callback': (
    <ThemeController.Swap
      onChange={(theme) => {
        Modal.info({ title: 'Theme Changed', content: `Theme changed to: ${theme}` });
      }}
    />
  ),
  dropdown: (
    <ThemeController.Dropdown
      themes={[
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
      ]}
    />
  ),
  'dropdown-default': (
    <ThemeController.Dropdown
      themes={['light', 'dark', 'synthwave', 'retro', 'cyberpunk']}
      defaultTheme="synthwave"
    />
  ),
  'dropdown-callback': (
    <ThemeController.Dropdown
      themes={['light', 'dark', 'cupcake', 'dracula']}
      onChange={(theme) => {
        Modal.info({ title: 'Theme Selected', content: `Selected theme: ${theme}` });
      }}
    />
  ),
  toggle: <ThemeController.Toggle />,
  'toggle-sizes': (
    <Space>
      <ThemeController.Toggle size="xs" />
      <ThemeController.Toggle size="sm" />
      <ThemeController.Toggle size="md" />
      <ThemeController.Toggle size="lg" />
    </Space>
  ),
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example && demos[example]) {
    const root = createRoot(container);
    root.render(<>{demos[example]}</>);
  }
});
