import { createRoot } from 'react-dom/client';
import React from 'react';
import { Dropdown, Button, Space } from 'asterui';
import { PencilIcon, DocumentDuplicateIcon, TrashIcon } from '@heroicons/react/24/outline';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Dropdown>
      <Dropdown.Trigger>
        <Button type="primary">Actions</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Duplicate</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
  'placement': (
    <Space direction="horizontal" size="sm" wrap>
      <Dropdown placement="top">
        <Dropdown.Trigger>
          <Button>Top</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>Option 1</Dropdown.Item>
          <Dropdown.Item>Option 2</Dropdown.Item>
          <Dropdown.Item>Option 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown placement="bottom">
        <Dropdown.Trigger>
          <Button>Bottom</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>Option 1</Dropdown.Item>
          <Dropdown.Item>Option 2</Dropdown.Item>
          <Dropdown.Item>Option 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown placement="left">
        <Dropdown.Trigger>
          <Button>Left</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>Option 1</Dropdown.Item>
          <Dropdown.Item>Option 2</Dropdown.Item>
          <Dropdown.Item>Option 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown placement="right">
        <Dropdown.Trigger>
          <Button>Right</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>Option 1</Dropdown.Item>
          <Dropdown.Item>Option 2</Dropdown.Item>
          <Dropdown.Item>Option 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Space>
  ),
  'hover': (
    <Dropdown hover>
      <Dropdown.Trigger>
        <Button type="secondary">Hover Me</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
  'with-icons': (
    <Dropdown>
      <Dropdown.Trigger>
        <Button type="primary">Options</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>
          <PencilIcon className="w-4 h-4 mr-2" />
          Edit
        </Dropdown.Item>
        <Dropdown.Item>
          <DocumentDuplicateIcon className="w-4 h-4 mr-2" />
          Duplicate
        </Dropdown.Item>
        <Dropdown.Item>
          <TrashIcon className="w-4 h-4 mr-2" />
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
