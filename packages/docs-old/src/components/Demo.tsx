import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface DemoProps {
  children: ReactNode
}

export function Demo({ children }: DemoProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const syncTheme = () => {
      const isDark = document.documentElement.dataset.theme === 'dark' ||
        document.documentElement.classList.contains('dark') ||
        (document.querySelector('[data-theme]') as HTMLElement)?.dataset.theme === 'dark'
      setTheme(isDark ? 'dark' : 'light')
    }

    syncTheme()

    const observer = new MutationObserver(syncTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="demo-area not-content" data-theme={theme} style={{ padding: '1rem', borderRadius: '0.5rem' }}>
      {children}
      <style>{`
        .demo-area {
          padding: 1rem !important;
          border-radius: 0.5rem !important;
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.05) 1px,
            transparent 1px,
            transparent 6px
          );
        }
        [data-theme="dark"] .demo-area {
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 6px
          );
        }
        /* Override Starlight's styles for Tailwind utilities */
        .demo-area .flex { display: flex !important; }
        .demo-area .inline-flex { display: inline-flex !important; }
        .demo-area .flex-row { flex-direction: row !important; }
        .demo-area .flex-col { flex-direction: column !important; }
        .demo-area .flex-wrap { flex-wrap: wrap !important; }
        .demo-area .flex-shrink-0 { flex-shrink: 0 !important; }
        .demo-area .items-start { align-items: flex-start !important; }
        .demo-area .items-end { align-items: flex-end !important; }
        .demo-area .items-center { align-items: center !important; }
        .demo-area .items-baseline { align-items: baseline !important; }
        .demo-area .items-stretch { align-items: stretch !important; }
        .demo-area .justify-start { justify-content: flex-start !important; }
        .demo-area .justify-end { justify-content: flex-end !important; }
        .demo-area .justify-center { justify-content: center !important; }
        .demo-area .justify-between { justify-content: space-between !important; }
        .demo-area .justify-around { justify-content: space-around !important; }
        .demo-area .justify-evenly { justify-content: space-evenly !important; }
        .demo-area .gap-1 { gap: 0.25rem !important; }
        .demo-area .gap-2 { gap: 0.5rem !important; }
        .demo-area .gap-4 { gap: 1rem !important; }
        .demo-area .gap-6 { gap: 1.5rem !important; }
        .demo-area .gap-8 { gap: 2rem !important; }
      `}</style>
    </div>
  )
}
