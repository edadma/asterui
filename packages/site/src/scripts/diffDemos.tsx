import React from 'react'
import { createRoot } from 'react-dom/client'
import { Diff, Space } from 'asterui'

const BasicDemo = () => (
  <Diff
    item1={<img src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" alt="Original" />}
    item2={<img src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" alt="Blurred" />}
  />
)

const TextDemo = () => (
  <Diff
    item1={
      <div className="bg-primary text-primary-content grid place-content-center text-7xl font-black h-full">
        DAISY
      </div>
    }
    item2={
      <div className="bg-base-200 grid place-content-center text-7xl font-black h-full">
        DAISY
      </div>
    }
  />
)

const AspectDemo = () => (
  <Space direction="vertical" size="lg">
    <Diff
      aspect="aspect-square"
      className="max-w-xs"
      item1={<img src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" alt="Original" />}
      item2={<img src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" alt="Blurred" />}
    />
    <Diff
      aspect="aspect-4/3"
      className="max-w-md"
      item1={<img src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" alt="Original" />}
      item2={<img src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" alt="Blurred" />}
    />
  </Space>
)

const demos: Record<string, React.FC> = {
  basic: BasicDemo,
  text: TextDemo,
  aspect: AspectDemo,
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const Demo = demos[exampleId]
    createRoot(container).render(<Demo />)
  }
})
