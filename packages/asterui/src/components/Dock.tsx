import React, { forwardRef } from 'react'
import { useConfig } from '../providers/ConfigProvider'

// DaisyUI classes
const dDock = 'dock'
const dDockXs = 'dock-xs'
const dDockSm = 'dock-sm'
const dDockMd = 'dock-md'
const dDockLg = 'dock-lg'
const dDockXl = 'dock-xl'
const dDockActive = 'dock-active'
const dDockLabel = 'dock-label'

export interface DockItemConfig {
  /** Icon element */
  icon: React.ReactNode
  /** Label text */
  label?: string
  /** Accessible label for screen readers (required if no label provided) */
  ariaLabel?: string
  /** Whether this item is active */
  active?: boolean
  /** Whether this item is disabled */
  disabled?: boolean
  /** Click handler for this item */
  onClick?: () => void
}

export interface DockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Dock items configuration */
  items?: DockItemConfig[]
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Controlled active index */
  activeIndex?: number
  /** Callback when an item is clicked */
  onChange?: (index: number) => void
  /** Children (alternative to items prop) */
  children?: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Accessible label for the dock */
  'aria-label'?: string
  'data-testid'?: string
}

export interface DockItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this item is active */
  active?: boolean
  /** Children (icon and optional label) */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  'data-testid'?: string
}

const DockItem = forwardRef<HTMLButtonElement, DockItemProps>(
  ({ active, children, className = '', 'data-testid': testId, ...props }, ref) => {
    const classes = [active && dDockActive, className].filter(Boolean).join(' ')

    return (
      <button
        ref={ref}
        className={classes || undefined}
        type="button"
        aria-pressed={active}
        data-testid={testId}
        {...props}
      >
        {children}
      </button>
    )
  }
)

DockItem.displayName = 'Dock.Item'

const DockRoot = forwardRef<HTMLDivElement, DockProps>(
  ({ items, size, activeIndex, onChange, children, className = '', 'data-testid': testId, ...props }, ref) => {
    const { componentSize } = useConfig()
    const effectiveSize = size ?? componentSize ?? 'md'

    const sizeClasses = {
      xs: dDockXs,
      sm: dDockSm,
      md: dDockMd,
      lg: dDockLg,
      xl: dDockXl,
    }

    const classes = [dDock, sizeClasses[effectiveSize], className].filter(Boolean).join(' ')
    const getTestId = (suffix: string) => (testId ? `${testId}-${suffix}` : undefined)

    // If items array is provided, render from config
    if (items) {
      return (
        <div
          ref={ref}
          className={classes}
          role="toolbar"
          aria-label={props['aria-label'] || 'Dock'}
          data-testid={testId}
          {...props}
        >
          {items.map((item, index) => {
            const isActive = activeIndex !== undefined ? activeIndex === index : item.active

            return (
              <button
                key={index}
                type="button"
                className={isActive ? dDockActive : undefined}
                disabled={item.disabled}
                aria-pressed={isActive}
                aria-label={item.ariaLabel || item.label}
                data-testid={getTestId(`item-${index}`)}
                onClick={() => {
                  item.onClick?.()
                  onChange?.(index)
                }}
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.label && <span className={dDockLabel}>{item.label}</span>}
              </button>
            )
          })}
        </div>
      )
    }

    // Otherwise render children
    return (
      <div
        ref={ref}
        className={classes}
        role="toolbar"
        aria-label={props['aria-label'] || 'Dock'}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DockRoot.displayName = 'Dock'

export const Dock = Object.assign(DockRoot, {
  Item: DockItem,
})
