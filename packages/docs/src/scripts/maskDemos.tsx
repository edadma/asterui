import { createRoot } from 'react-dom/client'
import React from 'react'
import { Mask, Space } from 'asterui'

const BasicDemo: React.FC = () => (
  <Space wrap>
    <Mask shape="squircle">
      <img src="https://picsum.photos/seed/squircle/200" alt="squircle" className="w-24 h-24" />
    </Mask>
    <Mask shape="heart">
      <img src="https://picsum.photos/seed/heart/200" alt="heart" className="w-24 h-24" />
    </Mask>
    <Mask shape="hexagon">
      <img src="https://picsum.photos/seed/hexagon/200" alt="hexagon" className="w-24 h-24" />
    </Mask>
    <Mask shape="star">
      <img src="https://picsum.photos/seed/star/200" alt="star" className="w-24 h-24" />
    </Mask>
  </Space>
)

const shapes = [
  'squircle', 'heart', 'hexagon', 'hexagon-2', 'decagon',
  'pentagon', 'diamond', 'square', 'circle', 'star',
  'star-2', 'triangle', 'triangle-2', 'triangle-3', 'triangle-4'
] as const

const AllShapesDemo: React.FC = () => (
  <Space wrap size="lg">
    {shapes.map((shape) => (
      <div key={shape} className="text-center">
        <Mask shape={shape}>
          <img src={`https://picsum.photos/seed/${shape}/100`} alt={shape} className="w-20 h-20" />
        </Mask>
        <div className="text-xs mt-1 text-base-content/70">{shape}</div>
      </div>
    ))}
  </Space>
)

const HalfDemo: React.FC = () => (
  <Space size="lg">
    <div className="text-center">
      <Mask shape="circle" half="half-1">
        <img src="https://picsum.photos/seed/half1/100" alt="half-1" className="w-20 h-20" />
      </Mask>
      <div className="text-xs mt-1 text-base-content/70">half-1</div>
    </div>
    <div className="text-center">
      <Mask shape="circle" half="half-2">
        <img src="https://picsum.photos/seed/half2/100" alt="half-2" className="w-20 h-20" />
      </Mask>
      <div className="text-xs mt-1 text-base-content/70">half-2</div>
    </div>
  </Space>
)

const statefulDemos: Record<string, React.FC> = {
  basic: BasicDemo,
  'all-shapes': AllShapesDemo,
  half: HalfDemo,
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && statefulDemos[exampleId]) {
    const root = createRoot(container as HTMLElement)
    const Component = statefulDemos[exampleId]
    root.render(<Component />)
  }
})

document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code')
    if (code) {
      await navigator.clipboard.writeText(code)
      btn.classList.add('btn-success')
      setTimeout(() => btn.classList.remove('btn-success'), 1000)
    }
  })
})
