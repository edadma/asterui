import React from 'react'

export interface SidebarDrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Main content area */
  children: React.ReactNode
  /** Sidebar content */
  sidebar: React.ReactNode
  /** Controlled open state */
  open?: boolean
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void
  /** Position sidebar on the right side */
  end?: boolean
  /** Additional classes for sidebar container */
  sidebarClassName?: string
}

/**
 * SidebarDrawer - A responsive sidebar layout component using DaisyUI's drawer.
 * Use for navigation sidebars that toggle on mobile.
 * For overlay panel drawers (forms, details), use the Drawer component instead.
 */
export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  children,
  sidebar,
  open = false,
  onOpenChange,
  end = false,
  className = '',
  sidebarClassName = '',
  ...rest
}) => {
  const drawerId = React.useId()

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onOpenChange?.(e.target.checked)
  }

  const drawerClasses = ['drawer', end && 'drawer-end', className]
    .filter(Boolean)
    .join(' ')

  const sidebarClasses = ['menu bg-base-200 min-h-full w-80 p-4', sidebarClassName]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={drawerClasses} data-state={open ? 'open' : 'closed'} {...rest}>
      <input
        id={drawerId}
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        onChange={handleToggle}
      />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div className={sidebarClasses}>{sidebar}</div>
      </div>
    </div>
  )
}
