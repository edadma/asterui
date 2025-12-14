import React from 'react'
import { createRoot } from 'react-dom/client'
import { Anchor, Flex } from 'asterui'
import { CheckIconSvg } from './icons'

// Basic vertical demo
const BasicDemo: React.FC = () => {
  const getContainer = () => document.getElementById('scroll-container-basic') as HTMLElement

  return (
    <Flex gap="md">
      <Anchor
        items={[
          { href: 'section-1', title: 'Section 1' },
          { href: 'section-2', title: 'Section 2' },
          { href: 'section-3', title: 'Section 3' },
        ]}
        getContainer={getContainer}
      />
      <div id="scroll-container-basic" className="flex-1 h-48 overflow-y-auto border rounded p-2">
        <section id="section-1" className="h-32 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Section 1</h3>
          <p className="text-sm">Scroll to see active link change</p>
        </section>
        <section id="section-2" className="h-32 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Section 2</h3>
          <p className="text-sm">Content for section 2</p>
        </section>
        <section id="section-3" className="h-32 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Section 3</h3>
          <p className="text-sm">Content for section 3</p>
        </section>
      </div>
    </Flex>
  )
}

// Horizontal demo
const HorizontalDemo: React.FC = () => {
  const getContainer = () => document.getElementById('scroll-container-horizontal') as HTMLElement

  return (
    <div>
      <Anchor
        direction="horizontal"
        items={[
          { href: 'intro', title: 'Introduction' },
          { href: 'features', title: 'Features' },
          { href: 'pricing', title: 'Pricing' },
          { href: 'faq', title: 'FAQ' },
        ]}
        getContainer={getContainer}
      />
      <div id="scroll-container-horizontal" className="h-32 overflow-y-auto border rounded p-2 mt-2">
        <section id="intro" className="h-24 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Introduction</h3>
          <p className="text-sm">Welcome to our product</p>
        </section>
        <section id="features" className="h-24 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Features</h3>
          <p className="text-sm">Amazing features</p>
        </section>
        <section id="pricing" className="h-24 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Pricing</h3>
          <p className="text-sm">Affordable plans</p>
        </section>
        <section id="faq" className="h-24 p-3 bg-base-200 rounded">
          <h3 className="font-bold">FAQ</h3>
          <p className="text-sm">Common questions</p>
        </section>
      </div>
    </div>
  )
}

// Nested demo
const NestedDemo: React.FC = () => {
  const getContainer = () => document.getElementById('scroll-container-nested') as HTMLElement

  return (
    <Flex gap="md">
      <Anchor
        items={[
          {
            href: 'getting-started',
            title: 'Getting Started',
            children: [
              { href: 'installation', title: 'Installation' },
              { href: 'configuration', title: 'Configuration' },
            ],
          },
          {
            href: 'components',
            title: 'Components',
            children: [
              { href: 'buttons', title: 'Buttons' },
              { href: 'forms', title: 'Forms' },
            ],
          },
        ]}
        getContainer={getContainer}
      />
      <div id="scroll-container-nested" className="flex-1 h-48 overflow-y-auto border rounded p-2">
        <section id="getting-started" className="h-20 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Getting Started</h3>
        </section>
        <section id="installation" className="h-20 mb-2 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Installation</h4>
        </section>
        <section id="configuration" className="h-20 mb-2 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Configuration</h4>
        </section>
        <section id="components" className="h-20 mb-2 p-3 bg-base-200 rounded">
          <h3 className="font-bold">Components</h3>
        </section>
        <section id="buttons" className="h-20 mb-2 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Buttons</h4>
        </section>
        <section id="forms" className="h-20 p-3 bg-base-200 rounded ml-4">
          <h4 className="font-semibold text-sm">Forms</h4>
        </section>
      </div>
    </Flex>
  )
}

const demos: Record<string, React.ReactNode> = {
  'basic': <BasicDemo />,
  'horizontal': <HorizontalDemo />,
  'nested': <NestedDemo />,
}

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const root = createRoot(container as HTMLElement)
    root.render(demos[exampleId])
  }
})

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code')
    if (code) {
      await navigator.clipboard.writeText(code)
      const originalHTML = btn.innerHTML
      btn.innerHTML = CheckIconSvg
      setTimeout(() => {
        btn.innerHTML = originalHTML
      }, 2000)
    }
  })
})
