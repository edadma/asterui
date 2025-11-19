import React, { createContext, useContext, useId, useState } from 'react'

export interface CollapseProps {
  children: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onChange?: (open: boolean) => void
  icon?: 'arrow' | 'plus' | 'none'
  className?: string
}

export interface CollapseTitleProps {
  children: React.ReactNode
  className?: string
}

export interface CollapseContentProps {
  children: React.ReactNode
  className?: string
}

interface CollapseContextValue {
  isOpen: boolean
  toggle: () => void
  checkboxId: string
}

const CollapseContext = createContext<CollapseContextValue | null>(null)

function CollapseRoot({
  children,
  open,
  defaultOpen = false,
  onChange,
  icon = 'arrow',
  className = '',
}: CollapseProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isOpen = open !== undefined ? open : internalOpen
  const checkboxId = useId()

  const toggle = () => {
    const newOpen = !isOpen
    if (open === undefined) {
      setInternalOpen(newOpen)
    }
    onChange?.(newOpen)
  }

  const iconClasses = {
    arrow: 'collapse-arrow',
    plus: 'collapse-plus',
    none: '',
  }

  const classes = [
    'collapse',
    'bg-base-200',
    iconClasses[icon],
    isOpen && 'collapse-open',
    !isOpen && 'collapse-close',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CollapseContext.Provider value={{ isOpen, toggle, checkboxId }}>
      <div className={classes}>
        <input
          type="checkbox"
          id={checkboxId}
          className="peer"
          checked={isOpen}
          onChange={toggle}
          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
        />
        {children}
      </div>
    </CollapseContext.Provider>
  )
}

function CollapseTitle({ children, className = '' }: CollapseTitleProps) {
  const context = useContext(CollapseContext)
  if (!context) {
    throw new Error('Collapse.Title must be used within Collapse')
  }

  return (
    <label htmlFor={context.checkboxId} className={`collapse-title text-xl font-medium ${className}`}>
      {children}
    </label>
  )
}

function CollapseContent({ children, className = '' }: CollapseContentProps) {
  return <div className={`collapse-content ${className}`}>{children}</div>
}

export const Collapse = Object.assign(CollapseRoot, {
  Title: CollapseTitle,
  Content: CollapseContent,
})
