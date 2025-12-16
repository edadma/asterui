import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Command, Button, Space } from 'asterui';
import { CheckIconSvg } from './icons'

const BasicDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { key: 'new-file', label: 'Create New File', group: 'Actions' },
    { key: 'new-folder', label: 'Create New Folder', group: 'Actions' },
    { key: 'search', label: 'Search Files', group: 'Actions' },
    { key: 'home', label: 'Go to Home', group: 'Navigation' },
    { key: 'settings', label: 'Open Settings', group: 'Navigation' },
    { key: 'profile', label: 'View Profile', group: 'Navigation' },
  ];

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Command Palette
      </Button>
      <Command
        open={open}
        onOpenChange={setOpen}
        items={items}
        placeholder="Type a command or search..."
      />
    </>
  );
};

const FileIcon = () => (
  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const FolderIcon = () => (
  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const WithIconsDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { key: 'new-file', label: 'Create New File', group: 'Actions', icon: <FileIcon /> },
    { key: 'new-folder', label: 'Create New Folder', group: 'Actions', icon: <FolderIcon /> },
    { key: 'search', label: 'Search Files', group: 'Actions', icon: <SearchIcon /> },
    { key: 'home', label: 'Go to Home', group: 'Navigation', icon: <HomeIcon /> },
    { key: 'settings', label: 'Open Settings', group: 'Navigation', icon: <SettingsIcon /> },
  ];

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Command Palette
      </Button>
      <Command
        open={open}
        onOpenChange={setOpen}
        items={items}
        placeholder="Type a command or search..."
      />
    </>
  );
};

const KeywordsDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { key: 'new-file', label: 'Create New File', group: 'Actions', keywords: ['add', 'create', 'new', 'file'] },
    { key: 'search', label: 'Search Files', group: 'Actions', keywords: ['find', 'lookup', 'query'] },
    { key: 'settings', label: 'Open Settings', group: 'Navigation', keywords: ['preferences', 'config', 'options'] },
    { key: 'profile', label: 'View Profile', group: 'Navigation', keywords: ['user', 'account', 'me'] },
  ];

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open (try "preferences")
      </Button>
      <Command
        open={open}
        onOpenChange={setOpen}
        items={items}
        placeholder="Try 'preferences' or 'config'..."
      />
    </>
  );
};

const CompoundDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Command Palette
      </Button>
      <Command open={open} onOpenChange={setOpen}>
        <Command.List>
          <Command.Empty>No results found</Command.Empty>
          <Command.Group heading="Actions">
            <Command.Item onSelect={() => alert('Creating file...')}>
              Create New File
            </Command.Item>
            <Command.Item onSelect={() => alert('Creating folder...')}>
              Create New Folder
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Navigation">
            <Command.Item onSelect={() => alert('Going home...')}>
              Go to Home
            </Command.Item>
            <Command.Item onSelect={() => alert('Opening settings...')}>
              Open Settings
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </>
  );
};

const DisabledDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { key: 'new-file', label: 'Create New File', group: 'Actions' },
    { key: 'new-folder', label: 'Create New Folder', group: 'Actions', disabled: true },
    { key: 'search', label: 'Search Files', group: 'Actions' },
    { key: 'delete', label: 'Delete Files', group: 'Danger', disabled: true },
  ];

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Command Palette
      </Button>
      <Command
        open={open}
        onOpenChange={setOpen}
        items={items}
        placeholder="Some items are disabled..."
      />
    </>
  );
};

const CustomShortcutDemo: React.FC = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const items = [
    { key: 'action1', label: 'Action 1' },
    { key: 'action2', label: 'Action 2' },
  ];

  return (
    <>
      <Space direction="horizontal" size="sm">
        <Button onClick={() => setOpen1(true)}>Default (⌘K)</Button>
        <Button onClick={() => setOpen2(true)}>Custom (⌘J)</Button>
      </Space>
      <Command open={open1} onOpenChange={setOpen1} items={items} placeholder="Default shortcut ⌘K..." />
      <Command open={open2} onOpenChange={setOpen2} items={items} shortcut={['j']} placeholder="Custom shortcut ⌘J..." />
    </>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'basic': BasicDemo,
  'with-icons': WithIconsDemo,
  'keywords': KeywordsDemo,
  'compound': CompoundDemo,
  'disabled': DisabledDemo,
  'custom-shortcut': CustomShortcutDemo,
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId && statefulDemos[exampleId]) {
    const root = createRoot(container as HTMLElement);
    const Component = statefulDemos[exampleId];
    root.render(<Component />);
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
