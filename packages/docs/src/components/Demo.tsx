import { useRef, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface DemoProps {
  children: ReactNode
}

export function Demo({ children }: DemoProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (hostRef.current && !hostRef.current.shadowRoot) {
      const shadow = hostRef.current.attachShadow({ mode: 'open' })

      // Add Tailwind + DaisyUI CSS (built at build time)
      const cssLink = document.createElement('link')
      cssLink.rel = 'stylesheet'
      cssLink.href = '/demo.css'
      shadow.appendChild(cssLink)

      // Add base styles and CSS variable fixes for shadow DOM
      const style = document.createElement('style')
      style.textContent = `
        *, *::before, *::after {
          box-sizing: border-box;
        }
        :host {
          display: block;
        }
        :host > div {
          padding: 0.75rem;
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.05) 1px,
            transparent 1px,
            transparent 6px
          );
        }
        :host > div[data-theme="dark"] {
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 6px
          );
        }
      `
      shadow.appendChild(style)

      // Create container for React content
      const div = document.createElement('div')
      shadow.appendChild(div)

      // Sync theme with Starlight
      const syncTheme = () => {
        const isDark = document.documentElement.dataset.theme === 'dark' ||
          document.documentElement.classList.contains('dark') ||
          (document.querySelector('[data-theme]') as HTMLElement)?.dataset.theme === 'dark'
        div.setAttribute('data-theme', isDark ? 'dark' : 'light')
      }

      syncTheme()

      // Watch for theme changes
      const observer = new MutationObserver(syncTheme)
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme', 'class']
      })

      setContainer(div)

      return () => observer.disconnect()
    }
  }, [])

  return (
    <div ref={hostRef}>
      {container && createPortal(children, container)}
    </div>
  )
}
