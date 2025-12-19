import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Mention, Space } from 'asterui';
import { CheckIconSvg } from './icons'

const users = [
  { value: 'john', label: 'John Doe' },
  { value: 'jane', label: 'Jane Smith' },
  { value: 'bob', label: 'Bob Johnson' },
  { value: 'alice', label: 'Alice Williams' },
];

const tags = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'webdev', label: 'Web Development' },
];

// Stateful demo components
const BasicDemo: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <Mention
        options={users}
        value={text}
        onChange={setText}
        placeholder="Type @ to mention someone"
      />
      <div className="mt-2 text-sm text-base-content/70">
        Text: {text || '(empty)'}
      </div>
    </div>
  );
};

const CustomPrefixDemo: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <Mention
        options={tags}
        value={text}
        onChange={setText}
        prefix="#"
        placeholder="Type # to add hashtag"
      />
      <div className="mt-2 text-sm text-base-content/70">
        Text: {text || '(empty)'}
      </div>
    </div>
  );
};

const MultiTriggerDemo: React.FC = () => {
  const [userText, setUserText] = useState('');
  const [tagText, setTagText] = useState('');

  return (
    <Space direction="vertical" size="md">
      <div>
        <label className="block mb-2 text-sm font-medium">
          Mention Users (@)
        </label>
        <Mention
          options={users}
          value={userText}
          onChange={setUserText}
          prefix="@"
          placeholder="Type @ to mention users"
        />
        <div className="mt-1 text-xs text-base-content/70">
          {userText || '(empty)'}
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Add Tags (#)
        </label>
        <Mention
          options={tags}
          value={tagText}
          onChange={setTagText}
          prefix="#"
          placeholder="Type # to add tags"
        />
        <div className="mt-1 text-xs text-base-content/70">
          {tagText || '(empty)'}
        </div>
      </div>
    </Space>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'basic': BasicDemo,
  'custom-prefix': CustomPrefixDemo,
  'multi-trigger': MultiTriggerDemo,
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId) {
    const root = createRoot(container as HTMLElement);
    if (statefulDemos[exampleId]) {
      const Component = statefulDemos[exampleId];
      root.render(<Component />);
    }
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
