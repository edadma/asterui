import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { FloatButton } from 'asterui';
import { PlusIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

// Demo components for each example
const BasicDemo: React.FC = () => {
  return (
    <div className="h-48 flex items-center justify-center bg-base-200 rounded relative">
      <p className="text-base-content/50 text-sm">Floating action button in corner</p>
      <div className="absolute bottom-4 right-4">
        <FloatButton
          icon={<PlusIcon className="w-5 h-5" />}
          onClick={() => alert('Basic FloatButton clicked!')}
        />
      </div>
    </div>
  );
};

const WithTooltipDemo: React.FC = () => {
  return (
    <div className="h-48 flex items-center justify-center bg-base-200 rounded relative">
      <p className="text-base-content/50 text-sm">Hover to see tooltip</p>
      <div className="absolute bottom-4 right-4">
        <FloatButton
          icon={<PlusIcon className="w-5 h-5" />}
          tooltip="Add new item"
          type="primary"
          onClick={() => alert('Add new item clicked!')}
        />
      </div>
    </div>
  );
};

const GroupDemo: React.FC = () => {
  return (
    <div className="h-64 flex items-center justify-center bg-base-200 rounded relative">
      <p className="text-base-content/50 text-sm">Click button to expand group</p>
      <div className="absolute bottom-4 right-4">
        <FloatButton.Group trigger="click">
          <FloatButton
            icon={<QuestionMarkCircleIcon className="w-5 h-5" />}
            tooltip="Help"
            onClick={() => alert('Help clicked!')}
          />
          <FloatButton
            icon={<ChatBubbleLeftRightIcon className="w-5 h-5" />}
            tooltip="Support"
            onClick={() => alert('Support clicked!')}
          />
          <FloatButton
            icon={<ArrowPathIcon className="w-5 h-5" />}
            tooltip="Refresh"
            onClick={() => alert('Refresh clicked!')}
          />
        </FloatButton.Group>
      </div>
    </div>
  );
};

const BackTopDemo: React.FC = () => {
  return (
    <div className="h-48 flex items-center justify-center bg-base-200 rounded relative overflow-auto" id="backtop-demo">
      <div className="p-8">
        <p className="text-base-content/50 text-sm mb-4">Scroll down in this area to see BackTop button</p>
        <div className="h-96 flex items-center justify-center bg-base-300 rounded">
          <p className="text-base-content/50">Scroll content</p>
        </div>
      </div>
      <FloatButton.BackTop
        visibilityHeight={100}
        target={() => document.getElementById('backtop-demo')!}
        onClick={() => {
          const container = document.getElementById('backtop-demo');
          if (container) {
            container.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
};

const statefulDemos: Record<string, React.FC> = {
  'basic': BasicDemo,
  'with-tooltip': WithTooltipDemo,
  'group': GroupDemo,
  'back-top': BackTopDemo,
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
      btn.innerHTML = '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
