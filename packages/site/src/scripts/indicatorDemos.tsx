import { createRoot } from 'react-dom/client'
import React from 'react'
import { Indicator, Button, Avatar } from 'asterui'
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: (
    <div className="flex gap-6 flex-wrap items-center">
      <Indicator>
        <Indicator.Item />
        <div className="w-16 h-16 bg-base-300 rounded"></div>
      </Indicator>
      <Indicator>
        <Indicator.Item />
        <div className="w-16 h-16 bg-base-300 rounded-full"></div>
      </Indicator>
    </div>
  ),
  positions: (
    <div className="grid grid-cols-3 gap-4">
      <Indicator>
        <Indicator.Item position="top-start" />
        <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">
          TL
        </div>
      </Indicator>
      <Indicator>
        <Indicator.Item position="top-center" />
        <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">
          TC
        </div>
      </Indicator>
      <Indicator>
        <Indicator.Item position="top-end" />
        <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">
          TR
        </div>
      </Indicator>
      <Indicator>
        <Indicator.Item position="middle-start" />
        <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">
          ML
        </div>
      </Indicator>
      <Indicator>
        <Indicator.Item position="middle-center" />
        <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">
          MC
        </div>
      </Indicator>
      <Indicator>
        <Indicator.Item position="middle-end" />
        <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">
          MR
        </div>
      </Indicator>
      <Indicator>
        <Indicator.Item position="bottom-start" />
        <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">
          BL
        </div>
      </Indicator>
      <Indicator>
        <Indicator.Item position="bottom-center" />
        <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">
          BC
        </div>
      </Indicator>
      <Indicator>
        <Indicator.Item position="bottom-end" />
        <div className="w-16 h-16 bg-base-300 rounded flex items-center justify-center text-xs">
          BR
        </div>
      </Indicator>
    </div>
  ),
  badge: (
    <div className="flex gap-6 flex-wrap items-center">
      <Indicator>
        <Indicator.Item>5</Indicator.Item>
        <Avatar size="lg">JD</Avatar>
      </Indicator>
      <Indicator>
        <Indicator.Item>99+</Indicator.Item>
        <Avatar size="lg">AB</Avatar>
      </Indicator>
      <Indicator>
        <Indicator.Item>NEW</Indicator.Item>
        <div className="w-20 h-20 bg-base-300 rounded"></div>
      </Indicator>
    </div>
  ),
  'on-button': (
    <div className="flex gap-4 flex-wrap">
      <Indicator>
        <Indicator.Item>3</Indicator.Item>
        <Button>Messages</Button>
      </Indicator>
      <Indicator>
        <Indicator.Item>12</Indicator.Item>
        <Button color="secondary">Notifications</Button>
      </Indicator>
      <Indicator>
        <Indicator.Item />
        <Button color="accent">Inbox</Button>
      </Indicator>
    </div>
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
        CheckIconSvg
      setTimeout(() => {
        btn.innerHTML = originalHTML
      }, 2000)
    }
  })
})
