import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Label, Input, Space } from 'asterui';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Space direction="vertical" size="md">
      <Label className="flex flex-col gap-2">
        <span>Username</span>
        <Input placeholder="Enter username" />
      </Label>
      <Label className="flex flex-col gap-2">
        <span>Email</span>
        <Input type="email" placeholder="your@email.com" />
      </Label>
    </Space>
  ),
  'required': (
    <Space direction="vertical" size="md">
      <Label className="flex flex-col gap-2">
        <span>
          Email <span className="text-error">*</span>
        </span>
        <Input type="email" placeholder="your@email.com" />
      </Label>
      <Label className="flex flex-col gap-2">
        <span>
          Password <span className="text-error">*</span>
        </span>
        <Input type="password" placeholder="Enter password" />
      </Label>
    </Space>
  ),
  'with-helper': (
    <Space direction="vertical" size="md">
      <Label className="flex flex-col gap-2">
        <span>Bio</span>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Tell us about yourself"
          rows={3}
        />
        <span className="text-sm text-base-content/60">
          Brief description for your profile. Max 200 characters.
        </span>
      </Label>
      <Label className="flex flex-col gap-2">
        <span>
          Website URL <span className="text-error">*</span>
        </span>
        <Input type="url" placeholder="https://example.com" />
        <span className="text-sm text-base-content/60">
          Your personal or company website
        </span>
      </Label>
    </Space>
  ),
};

// Stateful demo components
const FloatingDemo: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Space direction="vertical" size="md">
      <Label.Floating label="Full Name">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />
      </Label.Floating>
      <Label.Floating label="Email Address">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
        />
      </Label.Floating>
    </Space>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'floating': FloatingDemo,
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId) {
    const root = createRoot(container as HTMLElement);
    if (demos[exampleId]) {
      root.render(demos[exampleId]);
    } else if (statefulDemos[exampleId]) {
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
      btn.innerHTML = '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
