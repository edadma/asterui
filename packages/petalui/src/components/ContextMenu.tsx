import React, { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

export interface ContextMenuItem {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  danger?: boolean
  divider?: boolean
  children?: ContextMenuItem[]
}

export interface ContextMenuProps {
  /** Element that triggers the context menu on right-click */
  children: React.ReactNode
  /** Menu items */
  items: ContextMenuItem[]
  /** Callback when an item is selected */
  onSelect?: (key: string) => void
  /** Whether the context menu is disabled */
  disabled?: boolean
  /** Additional CSS classes for the menu */
  className?: string
}

interface MenuPosition {
  x: number
  y: number
}

const MenuItem: React.FC<{
  item: ContextMenuItem
  onSelect: (key: string) => void
  onClose: () => void
}> = ({ item, onSelect, onClose }) => {
  const [showSubmenu, setShowSubmenu] = useState(false)
  const itemRef = useRef<HTMLLIElement>(null)

  if (item.divider) {
    return <li className="divider my-1"></li>
  }

  const handleClick = () => {
    if (item.disabled) return
    if (item.children && item.children.length > 0) return
    onSelect(item.key)
    onClose()
  }

  const hasSubmenu = item.children && item.children.length > 0

  return (
    <li
      ref={itemRef}
      onMouseEnter={() => hasSubmenu && setShowSubmenu(true)}
      onMouseLeave={() => hasSubmenu && setShowSubmenu(false)}
      className="relative"
    >
      <button
        onClick={handleClick}
        disabled={item.disabled}
        className={`
          flex items-center gap-2 w-full px-4 py-2 text-left text-sm
          ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-base-200'}
          ${item.danger ? 'text-error hover:bg-error/10' : ''}
        `}
      >
        {item.icon && <span className="w-4 h-4">{item.icon}</span>}
        <span className="flex-1">{item.label}</span>
        {hasSubmenu && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
      {hasSubmenu && showSubmenu && (
        <ul className="menu bg-base-100 rounded-box shadow-lg border border-base-300 absolute left-full top-0 min-w-[160px] z-50">
          {item.children!.map((child) => (
            <MenuItem key={child.key} item={child} onSelect={onSelect} onClose={onClose} />
          ))}
        </ul>
      )}
    </li>
  )
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  items,
  onSelect,
  disabled = false,
  className = '',
}) => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState<MenuPosition>({ x: 0, y: 0 })
  const menuRef = useRef<HTMLUListElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return
      e.preventDefault()
      e.stopPropagation()

      // Calculate position, ensuring menu stays within viewport
      let x = e.clientX
      let y = e.clientY

      // We'll adjust after render when we know menu dimensions
      setPosition({ x, y })
      setVisible(true)
    },
    [disabled]
  )

  const handleClose = useCallback(() => {
    setVisible(false)
  }, [])

  const handleSelect = useCallback(
    (key: string) => {
      onSelect?.(key)
    },
    [onSelect]
  )

  // Adjust position after menu renders to keep it in viewport
  useEffect(() => {
    if (visible && menuRef.current) {
      const menu = menuRef.current
      const rect = menu.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      let { x, y } = position

      if (x + rect.width > viewportWidth) {
        x = viewportWidth - rect.width - 8
      }
      if (y + rect.height > viewportHeight) {
        y = viewportHeight - rect.height - 8
      }

      if (x !== position.x || y !== position.y) {
        setPosition({ x, y })
      }
    }
  }, [visible, position])

  // Close on click outside or escape
  useEffect(() => {
    if (!visible) return

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    const handleScroll = () => {
      handleClose()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('scroll', handleScroll, true)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('scroll', handleScroll, true)
    }
  }, [visible, handleClose])

  return (
    <>
      <div ref={triggerRef} onContextMenu={handleContextMenu} className="inline-block">
        {children}
      </div>
      {visible &&
        createPortal(
          <ul
            ref={menuRef}
            className={`menu bg-base-100 rounded-box shadow-lg border border-base-300 min-w-[160px] p-1 fixed z-[9999] ${className}`}
            style={{ left: position.x, top: position.y }}
          >
            {items.map((item) => (
              <MenuItem key={item.key} item={item} onSelect={handleSelect} onClose={handleClose} />
            ))}
          </ul>,
          document.body
        )}
    </>
  )
}

ContextMenu.displayName = 'ContextMenu'
