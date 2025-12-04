import { createRoot } from 'react-dom/client';
import { Footer } from 'asterui';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Footer>
      <nav>
        <a href="#" className="link link-hover">About</a>
        <a href="#" className="link link-hover">Contact</a>
        <a href="#" className="link link-hover">Privacy</a>
        <a href="#" className="link link-hover">Terms</a>
      </nav>
    </Footer>
  ),
  'with-title': (
    <Footer>
      <div>
        <Footer.Title>Services</Footer.Title>
        <a href="#" className="link link-hover">Branding</a>
        <a href="#" className="link link-hover">Design</a>
        <a href="#" className="link link-hover">Marketing</a>
      </div>
      <div>
        <Footer.Title>Company</Footer.Title>
        <a href="#" className="link link-hover">About us</a>
        <a href="#" className="link link-hover">Contact</a>
        <a href="#" className="link link-hover">Jobs</a>
      </div>
      <div>
        <Footer.Title>Legal</Footer.Title>
        <a href="#" className="link link-hover">Terms of use</a>
        <a href="#" className="link link-hover">Privacy policy</a>
        <a href="#" className="link link-hover">Cookie policy</a>
      </div>
    </Footer>
  ),
  'centered': (
    <Footer center>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="#" className="link link-hover">About</a>
          <a href="#" className="link link-hover">Contact</a>
          <a href="#" className="link link-hover">Privacy</a>
          <a href="#" className="link link-hover">Terms</a>
        </div>
        <p className="text-sm text-base-content/70">
          © 2024 Company Name. All rights reserved.
        </p>
      </div>
    </Footer>
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
