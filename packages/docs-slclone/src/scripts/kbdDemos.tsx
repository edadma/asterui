import { createRoot } from 'react-dom/client';
import { Kbd, Space, Typography } from 'asterui';
import { CheckIconSvg } from './icons';

const { Paragraph } = Typography;

const demos: Record<string, React.ReactNode> = {
  'basic': <Kbd>K</Kbd>,
  'sizes': (
    <Space align="center">
      <Kbd size="xs">xs</Kbd>
      <Kbd size="sm">sm</Kbd>
      <Kbd size="md">md</Kbd>
      <Kbd size="lg">lg</Kbd>
      <Kbd size="xl">xl</Kbd>
    </Space>
  ),
  'combination': (
    <Space align="center" size="xs">
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </Space>
  ),
  'in-text': (
    <Paragraph>
      Press <Kbd size="sm">F</Kbd> to pay respects.
    </Paragraph>
  ),
  'arrows': (
    <div className="flex flex-col items-center gap-1">
      <Kbd>▲</Kbd>
      <Space size="xs">
        <Kbd>◀</Kbd>
        <Kbd>▼</Kbd>
        <Kbd>▶</Kbd>
      </Space>
    </div>
  ),
  'full-keyboard': (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <Kbd>q</Kbd><Kbd>w</Kbd><Kbd>e</Kbd><Kbd>r</Kbd><Kbd>t</Kbd>
        <Kbd>y</Kbd><Kbd>u</Kbd><Kbd>i</Kbd><Kbd>o</Kbd><Kbd>p</Kbd>
      </div>
      <div className="flex gap-1 ml-2">
        <Kbd>a</Kbd><Kbd>s</Kbd><Kbd>d</Kbd><Kbd>f</Kbd><Kbd>g</Kbd>
        <Kbd>h</Kbd><Kbd>j</Kbd><Kbd>k</Kbd><Kbd>l</Kbd>
      </div>
      <div className="flex gap-1 ml-6">
        <Kbd>z</Kbd><Kbd>x</Kbd><Kbd>c</Kbd><Kbd>v</Kbd>
        <Kbd>b</Kbd><Kbd>n</Kbd><Kbd>m</Kbd>
      </div>
    </div>
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
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
