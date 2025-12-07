import { createRoot } from 'react-dom/client';
import { Hero, Button } from 'asterui';
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Hero contentClassName="text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae
          et a id nisi.
        </p>
      </div>
    </Hero>
  ),
  'with-button': (
    <Hero contentClassName="text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi.
        </p>
        <Button type="primary">Get Started</Button>
      </div>
    </Hero>
  ),
  'with-figure': (
    <Hero contentClassName="flex-col lg:flex-row-reverse">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        alt="Hero"
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae
          et a id nisi.
        </p>
        <Button type="primary">Get Started</Button>
      </div>
    </Hero>
  ),
  'overlay': (
    <Hero
      overlay
      contentClassName="text-center text-neutral-content"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae
          et a id nisi.
        </p>
        <Button type="primary">Get Started</Button>
      </div>
    </Hero>
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
