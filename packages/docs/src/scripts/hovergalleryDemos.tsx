import React from 'react'
import { createRoot } from 'react-dom/client'
import { HoverGallery, Card } from 'asterui'

const productImages = [
  'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
  'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
  'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
  'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
]

const demos: Record<string, React.ReactNode> = {
  basic: (
    <HoverGallery
      images={productImages}
      className="max-w-60 rounded-lg"
    />
  ),
  card: (
    <Card
      className="max-w-60 shadow-xl"
      title="Product Name"
      cover={<HoverGallery images={productImages} />}
    >
      <p>Hover over the image to see more angles</p>
      <p className="text-lg font-bold">$49.99</p>
    </Card>
  ),
  'two-images': (
    <HoverGallery
      images={[productImages[0], productImages[1]]}
      alts={['Front view', 'Side view']}
      className="max-w-60 rounded-lg"
    />
  ),
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example')
  if (example && demos[example]) {
    const root = createRoot(container)
    root.render(<>{demos[example]}</>)
  }
})
