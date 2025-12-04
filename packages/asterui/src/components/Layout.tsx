import React, { createContext, useContext, useState, useCallback } from 'react'

export interface LayoutProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface LayoutHeaderProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface LayoutFooterProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface LayoutContentProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface LayoutSiderProps {
  children: React.ReactNode
  width?: number | string
  collapsedWidth?: number | string
  collapsed?: boolean
  defaultCollapsed?: boolean
  collapsible?: boolean
  onCollapse?: (collapsed: boolean) => void
  trigger?: React.ReactNode | null
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  onBreakpoint?: (broken: boolean) => void
  className?: string
  style?: React.CSSProperties
}

interface SiderContextValue {
  collapsed: boolean
  collapsedWidth: number | string
  width: number | string
}

const SiderContext = createContext<SiderContextValue | null>(null)

export function useSiderContext() {
  return useContext(SiderContext)
}

function LayoutRoot({ children, className = '', style }: LayoutProps) {
  // Check if any child is a Sider to determine flex direction
  const childArray = React.Children.toArray(children)
  const hasSider = childArray.some(
    (child) => React.isValidElement(child) && (child.type as any).displayName === 'LayoutSider'
  )

  const layoutClasses = [
    'flex',
    'min-h-0',
    hasSider ? 'flex-row' : 'flex-col',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // If we have a Sider, auto-add flex-1 to non-Sider Layout children
  const processedChildren = hasSider
    ? childArray.map((child) => {
        if (
          React.isValidElement(child) &&
          (child.type === LayoutRoot || (child.type as any).displayName === 'LayoutRoot') &&
          (child.type as any).displayName !== 'LayoutSider'
        ) {
          // Clone the Layout child and add flex-1 if not already present
          const existingClassName = (child.props as any).className || ''
          if (!existingClassName.includes('flex-1')) {
            return React.cloneElement(child as React.ReactElement<any>, {
              className: `flex-1 ${existingClassName}`.trim(),
            })
          }
        }
        return child
      })
    : children

  return (
    <div className={layoutClasses} style={style}>
      {processedChildren}
    </div>
  )
}

LayoutRoot.displayName = 'LayoutRoot'

function LayoutHeader({ children, className = '', style }: LayoutHeaderProps) {
  const headerClasses = [
    'flex',
    'items-center',
    'px-6',
    'h-16',
    'bg-base-300',
    'flex-shrink-0',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClasses} style={style}>
      {children}
    </header>
  )
}

function LayoutFooter({ children, className = '', style }: LayoutFooterProps) {
  const footerClasses = [
    'px-6',
    'py-4',
    'text-center',
    'bg-base-300',
    'flex-shrink-0',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <footer className={footerClasses} style={style}>
      {children}
    </footer>
  )
}

function LayoutContent({ children, className = '', style }: LayoutContentProps) {
  // flex-1 by default so Content fills available space
  const contentClasses = ['flex-1', 'min-h-0', 'overflow-auto', className].filter(Boolean).join(' ')

  return (
    <main className={contentClasses} style={style}>
      {children}
    </main>
  )
}

function LayoutSider({
  children,
  width = 200,
  collapsedWidth = 80,
  collapsed: controlledCollapsed,
  defaultCollapsed = false,
  collapsible = false,
  onCollapse,
  trigger,
  className = '',
  style,
}: LayoutSiderProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)

  const collapsed = controlledCollapsed ?? internalCollapsed

  const handleCollapse = useCallback(() => {
    const newCollapsed = !collapsed
    if (controlledCollapsed === undefined) {
      setInternalCollapsed(newCollapsed)
    }
    onCollapse?.(newCollapsed)
  }, [collapsed, controlledCollapsed, onCollapse])

  const currentWidth = collapsed ? collapsedWidth : width

  const siderClasses = [
    'flex',
    'flex-col',
    'bg-base-200',
    'flex-shrink-0',
    'transition-all',
    'duration-200',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const defaultTrigger = collapsible && trigger !== null && (
    <button
      onClick={handleCollapse}
      className="flex items-center justify-center h-10 w-full bg-base-300 hover:bg-base-content/10 transition-colors"
      aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
    >
      <svg
        className={`w-4 h-4 transition-transform ${collapsed ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  )

  return (
    <SiderContext.Provider value={{ collapsed, collapsedWidth, width }}>
      <aside
        className={siderClasses}
        style={{
          width: typeof currentWidth === 'number' ? `${currentWidth}px` : currentWidth,
          ...style,
        }}
      >
        <div className="flex-1 overflow-auto">{children}</div>
        {trigger !== null && (trigger ?? defaultTrigger)}
      </aside>
    </SiderContext.Provider>
  )
}

LayoutSider.displayName = 'LayoutSider'

export const Layout = Object.assign(LayoutRoot, {
  Header: LayoutHeader,
  Footer: LayoutFooter,
  Content: LayoutContent,
  Sider: LayoutSider,
})
