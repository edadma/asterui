import { createRoot } from 'react-dom/client';
import React from 'react';
import { Navbar, Button, Dropdown } from 'asterui';
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Navbar
      start={<a className="text-xl font-bold">AsterUI</a>}
      end={
        <>
          <Button type="ghost">Home</Button>
          <Button type="ghost">About</Button>
          <Button type="primary">Sign In</Button>
        </>
      }
    />
  ),
  'with-menu': (
    <Navbar
      start={<a className="text-xl font-bold">AsterUI</a>}
      end={
        <>
          <Button type="ghost">Home</Button>
          <Dropdown>
            <Dropdown.Trigger>
              <Button type="ghost">
                Products
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.Item>Product 1</Dropdown.Item>
              <Dropdown.Item>Product 2</Dropdown.Item>
              <Dropdown.Item>Product 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button type="ghost">About</Button>
          <Button type="primary">Sign In</Button>
        </>
      }
    />
  ),
  'centered': (
    <Navbar
      start={<Button type="ghost" shape="circle">☰</Button>}
      center={<a className="text-xl font-bold">AsterUI</a>}
      end={<Button type="ghost" shape="circle">⚙</Button>}
    />
  ),
  'responsive': (
    <Navbar
      start={
        <>
          <Dropdown>
            <Dropdown.Trigger>
              <Button type="ghost" shape="circle" className="lg:hidden">
                <Bars3Icon className="w-6 h-6" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.Item>Home</Dropdown.Item>
              <Dropdown.Item>Products</Dropdown.Item>
              <Dropdown.Item>About</Dropdown.Item>
              <Dropdown.Item>Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a className="text-xl font-bold ml-2">AsterUI</a>
        </>
      }
      end={
        <>
          <div className="hidden lg:flex gap-2">
            <Button type="ghost">Home</Button>
            <Button type="ghost">Products</Button>
            <Button type="ghost">About</Button>
            <Button type="ghost">Contact</Button>
          </div>
          <Button type="primary">Sign In</Button>
        </>
      }
    />
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
