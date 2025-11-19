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

function DropdownItem({ children, onClick, active = false, className = '' }: DropdownItemProps) {
  return (
    <li className={className}>
      <a className={active ? 'active' : ''} onClick={onClick}>
        {children}
      </a>
    </li>
  )
}

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Item: DropdownItem,
})
