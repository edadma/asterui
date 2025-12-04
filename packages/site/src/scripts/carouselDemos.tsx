import { createRoot } from 'react-dom/client';
import { Carousel, Card, Button } from 'asterui';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Carousel className="w-full max-w-md">
      <Carousel.Item>
        <img src="https://picsum.photos/seed/1/400/200" alt="Slide 1" className="w-full" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/seed/2/400/200" alt="Slide 2" className="w-full" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/seed/3/400/200" alt="Slide 3" className="w-full" />
      </Carousel.Item>
    </Carousel>
  ),
  'autoplay': (
    <Carousel autoplay interval={2000} className="w-full max-w-md">
      <Carousel.Item>
        <div className="bg-primary text-primary-content h-40 flex items-center justify-center">
          <span className="text-2xl">Slide 1</span>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-secondary text-secondary-content h-40 flex items-center justify-center">
          <span className="text-2xl">Slide 2</span>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-accent text-accent-content h-40 flex items-center justify-center">
          <span className="text-2xl">Slide 3</span>
        </div>
      </Carousel.Item>
    </Carousel>
  ),
  'vertical': (
    <Carousel vertical className="h-64 w-full max-w-md">
      <Carousel.Item>
        <img src="https://picsum.photos/seed/4/400/200" alt="Slide 1" className="w-full" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/seed/5/400/200" alt="Slide 2" className="w-full" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/seed/6/400/200" alt="Slide 3" className="w-full" />
      </Carousel.Item>
    </Carousel>
  ),
  'custom-content': (
    <Carousel className="w-full max-w-md">
      <Carousel.Item>
        <Card title="Feature 1" className="bg-base-200">
          <p>Discover amazing features</p>
          <Button type="primary" size="sm">Learn More</Button>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card title="Feature 2" className="bg-base-200">
          <p>Powerful and flexible</p>
          <Button type="secondary" size="sm">Explore</Button>
        </Card>
      </Carousel.Item>
    </Carousel>
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
