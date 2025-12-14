import { createRoot } from 'react-dom/client'
import React from 'react'
import { Browser } from 'asterui'
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  basic: (
    <Browser url="https://daisyui.com" className="w-full">
      <div className="grid place-content-center h-40 bg-base-200">Hello!</div>
    </Browser>
  ),
  preview: (
    <Browser url="https://mysite.com" className="w-full">
      <div className="bg-base-100">
        <div className="bg-primary text-primary-content p-4">
          <span className="font-bold">MySite</span>
        </div>
        <div className="p-4 h-32">
          <h2 className="text-xl font-bold">Welcome</h2>
          <p className="text-base-content/70">Your content goes here...</p>
        </div>
      </div>
    </Browser>
  ),
  gradient: (
    <Browser url="https://app.example.com" className="w-full">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-48 grid place-content-center">
        <span className="text-white text-2xl font-bold">Gradient</span>
      </div>
    </Browser>
  ),
  dashboard: (
    <Browser url="https://dashboard.example.com" className="w-full">
      <div className="bg-base-100 p-4 h-56">
        <div className="flex gap-4 mb-4">
          <div className="bg-primary/10 rounded-lg p-3 flex-1">
            <div className="text-xs text-base-content/60">Users</div>
            <div className="text-xl font-bold">1,234</div>
          </div>
          <div className="bg-secondary/10 rounded-lg p-3 flex-1">
            <div className="text-xs text-base-content/60">Revenue</div>
            <div className="text-xl font-bold">$5,678</div>
          </div>
        </div>
        <div className="bg-base-200 rounded-lg h-24"></div>
      </div>
    </Browser>
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
