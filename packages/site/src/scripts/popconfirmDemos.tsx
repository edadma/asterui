import { createRoot } from 'react-dom/client';
import { Popconfirm, Button, notification } from 'asterui';

const handleDelete = () => {
  notification.success({
    message: 'Deleted',
    description: 'The item has been deleted successfully.',
  });
};

const handleAsyncDelete = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      notification.success({
        message: 'Deleted',
        description: 'The item has been deleted after async operation.',
      });
      resolve();
    }, 2000);
  });
};

const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Popconfirm title="Are you sure?" onConfirm={handleDelete}>
      <Button type="error">Delete</Button>
    </Popconfirm>
  ),
  'description': (
    <Popconfirm
      title="Delete this task?"
      description="This action cannot be undone. Are you sure you want to continue?"
      onConfirm={handleDelete}
    >
      <Button type="error">Delete</Button>
    </Popconfirm>
  ),
  'placements': (
    <div className="flex gap-4 flex-wrap">
      <Popconfirm title="Delete?" placement="top">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm title="Delete?" placement="right">
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm title="Delete?" placement="bottom">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm title="Delete?" placement="left">
        <Button>Left</Button>
      </Popconfirm>
    </div>
  ),
  'custom-text': (
    <Popconfirm
      title="Confirm submission?"
      okText="Yes, submit"
      cancelText="No, cancel"
      okType="success"
      cancelType="error"
      onConfirm={() => {
        notification.success({ message: 'Submitted!', description: 'Form submitted successfully.' });
      }}
    >
      <Button type="primary">Submit</Button>
    </Popconfirm>
  ),
  'async': (
    <Popconfirm
      title="Delete this item?"
      description="This will take a moment..."
      onConfirm={handleAsyncDelete}
    >
      <Button type="error">Delete (Async)</Button>
    </Popconfirm>
  ),
  'custom-icon': (
    <div className="flex gap-4">
      <Popconfirm title="Delete this?" icon={<span className="text-2xl">🗑️</span>}>
        <Button>Custom Icon</Button>
      </Popconfirm>
      <Popconfirm title="Proceed?" icon={null}>
        <Button>No Icon</Button>
      </Popconfirm>
    </div>
  ),
  'no-cancel': (
    <Popconfirm
      title="Acknowledge this message"
      description="Click OK to dismiss."
      showCancel={false}
      okText="Got it"
    >
      <Button type="info">Show Info</Button>
    </Popconfirm>
  ),
  'disabled': (
    <Popconfirm title="Are you sure?" disabled>
      <Button disabled>Disabled</Button>
    </Popconfirm>
  ),
};

// Mount demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId && demos[exampleId]) {
    const root = createRoot(container as HTMLElement);
    root.render(demos[exampleId]);
  }
});
