import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeController } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  swap: <ThemeController.Swap />,
  'custom-themes': <ThemeController.Swap lightTheme="cupcake" darkTheme="dracula" />,
  'swap-callback': (
    <ThemeController.Swap
      onChange={(theme) => {
        console.log('Theme changed to:', theme);
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
  'dropdown-initial': (
    <ThemeController.Dropdown
      themes={['light', 'dark', 'synthwave', 'retro', 'cyberpunk']}
      initialTheme="synthwave"
    />
  ),
  'dropdown-callback': (
    <ThemeController.Dropdown
      themes={['light', 'dark', 'cupcake', 'dracula']}
      onChange={(theme) => {
        console.log('Selected theme:', theme);
      }}
    />
  ),
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example && demos[example]) {
    const root = createRoot(container);
    root.render(<>{demos[example]}</>);
  }
});
