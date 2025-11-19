import React, { createContext } from 'react'

interface DropdownContextValue {
  position?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
}

const DropdownContext = createContext<DropdownContextValue | undefined>(undefined)

export interface DropdownProps {
  children: React.ReactNode
  hover?: boolean
  position?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  className?: string
}

export interface DropdownTriggerProps {
  children: React.ReactNode
  className?: string
}

export interface DropdownMenuProps {
  children: React.ReactNode
  className?: string
}

export interface DropdownItemProps {
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
  disabled?: boolean
  danger?: boolean
  className?: string
}

export interface DropdownDividerProps {
  className?: string
}

function DropdownRoot({
  children,
  hover = false,
  position = 'bottom',
  align = 'start',
  className = '',
}: DropdownProps) {
  const positionClasses: Record<string, string> = {
    top: 'dropdown-top',
    bottom: 'dropdown-bottom',
    left: 'dropdown-left',
    right: 'dropdown-right',
  }

  const alignClasses: Record<string, string> = {
    start: '',
    center: 'dropdown-center',
    end: 'dropdown-end',
  }

  const dropdownClasses = [
    'dropdown',
    positionClasses[position],
    alignClasses[align],
    hover && 'dropdown-hover',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <DropdownContext.Provider value={{ position, align }}>
      <div className={dropdownClasses}>{children}</div>
    </DropdownContext.Provider>
  )
}

function DropdownTrigger({ children, className = '' }: DropdownTriggerProps) {
  return (
    <label tabIndex={0} className={className}>
      {children}
    </label>
  )
}

function DropdownMenu({ children, className = '' }: DropdownMenuProps) {
  const menuClasses = [
    'dropdown-content',
    'menu',
    'bg-base-100',
    'rounded-box',
    'z-[1]',
    'shadow',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <ul tabIndex={0} className={menuClasses}>
      {children}
    </ul>
  )
}

function DropdownItem({
  children,
  onClick,
  active = false,
  disabled = false,
  danger = false,
  className = '',
}: DropdownItemProps) {
  const itemClasses = [active && 'active', disabled && 'disabled', className].filter(Boolean).join(' ')

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <li className={itemClasses}>
      <a className={danger ? 'text-error' : ''} onClick={handleClick}>
        {children}
      </a>
    </li>
  )
}

function DropdownDivider({ className = '' }: DropdownDividerProps) {
  const classes = ['border-base-content/10', className].filter(Boolean).join(' ')
  return (
    <li className="my-1">
      <hr className={classes} />
    </li>
  )
}

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Divider: DropdownDivider,
})
