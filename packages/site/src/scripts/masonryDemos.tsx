import { createRoot } from 'react-dom/client'
import React from 'react'
import { Masonry } from 'asterui'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: (
    <Masonry columns={3} gap={16}>
      <div style={{ background: '#0092ff', padding: '16px', color: 'white', height: '120px' }}>
        Item 1
      </div>
      <div style={{ background: '#00d084', padding: '16px', color: 'white', height: '180px' }}>
        Item 2
      </div>
      <div style={{ background: '#ff6b6b', padding: '16px', color: 'white', height: '140px' }}>
        Item 3
      </div>
      <div style={{ background: '#ffd93d', padding: '16px', color: 'white', height: '200px' }}>
        Item 4
      </div>
      <div style={{ background: '#a29bfe', padding: '16px', color: 'white', height: '160px' }}>
        Item 5
      </div>
      <div style={{ background: '#fd79a8', padding: '16px', color: 'white', height: '130px' }}>
        Item 6
      </div>
    </Masonry>
  ),
  responsive: (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={16}>
      <div style={{ background: '#0092ff', padding: '16px', color: 'white', height: '120px' }}>
        Item 1
      </div>
      <div style={{ background: '#00d084', padding: '16px', color: 'white', height: '180px' }}>
        Item 2
      </div>
      <div style={{ background: '#ff6b6b', padding: '16px', color: 'white', height: '140px' }}>
        Item 3
      </div>
      <div style={{ background: '#ffd93d', padding: '16px', color: 'white', height: '200px' }}>
        Item 4
      </div>
      <div style={{ background: '#a29bfe', padding: '16px', color: 'white', height: '160px' }}>
        Item 5
      </div>
      <div style={{ background: '#fd79a8', padding: '16px', color: 'white', height: '130px' }}>
        Item 6
      </div>
      <div style={{ background: '#74b9ff', padding: '16px', color: 'white', height: '150px' }}>
        Item 7
      </div>
      <div style={{ background: '#fab1a0', padding: '16px', color: 'white', height: '170px' }}>
        Item 8
      </div>
    </Masonry>
  ),
  'custom-gap': (
    <Masonry columns={3} gap={32}>
      <div style={{ background: '#0092ff', padding: '16px', color: 'white', height: '120px' }}>
        Item 1
      </div>
      <div style={{ background: '#00d084', padding: '16px', color: 'white', height: '180px' }}>
        Item 2
      </div>
      <div style={{ background: '#ff6b6b', padding: '16px', color: 'white', height: '140px' }}>
        Item 3
      </div>
      <div style={{ background: '#ffd93d', padding: '16px', color: 'white', height: '200px' }}>
        Item 4
      </div>
      <div style={{ background: '#a29bfe', padding: '16px', color: 'white', height: '160px' }}>
        Item 5
      </div>
      <div style={{ background: '#fd79a8', padding: '16px', color: 'white', height: '130px' }}>
        Item 6
      </div>
    </Masonry>
  ),
}

// Mount React demos
document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const root = createRoot(container as HTMLElement)
    root.render(demos[exampleId])
  }
})

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code')
    if (code) {
      await navigator.clipboard.writeText(code)
      const originalHTML = btn.innerHTML
      btn.innerHTML =
        '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
      setTimeout(() => {
        btn.innerHTML = originalHTML
      }, 2000)
    }
  })
})
