import React from 'react'

export interface TabsProps {
  children: React.ReactNode
  variant?: 'box' | 'border' | 'lift'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  position?: 'top' | 'bottom'
  className?: string
}

export interface TabProps {
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

function TabsRoot({ children, variant, size, position, className = '' }: TabsProps) {
  const variantClasses = {
    box: 'tabs-box',
    border: 'tabs-border',
    lift: 'tabs-lift',
  }

  const sizeClasses = {
    xs: 'tabs-xs',
    sm: 'tabs-sm',
    md: 'tabs-md',
    lg: 'tabs-lg',
    xl: 'tabs-xl',
  }

  const positionClasses = {
    top: 'tabs-top',
    bottom: 'tabs-bottom',
  }

  const classes = [
    'tabs',
    variant && variantClasses[variant],
    size && sizeClasses[size],
    position && positionClasses[position],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div role="tablist" className={classes}>
      {children}
    </div>
  )
}

function Tab({ children, active = false, disabled = false, onClick, className = '' }: TabProps) {
  const classes = ['tab', active && 'tab-active', disabled && 'tab-disabled', className]
    .filter(Boolean)
    .join(' ')

  return (
    <button role="tab" className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export const Tabs = Object.assign(TabsRoot, {
  Tab: Tab,
})
