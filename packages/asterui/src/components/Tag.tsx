import React, { useState, forwardRef } from 'react'

export type TagSize = 'xs' | 'sm' | 'md' | 'lg'
export type TagColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'

export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  closable?: boolean
  closeIcon?: React.ReactNode
  onClose?: () => void
  color?: TagColor | string
  icon?: React.ReactNode
  size?: TagSize
  children?: React.ReactNode
  'data-testid'?: string
}

export interface CheckableTagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
  checked?: boolean
  onChange?: (checked: boolean) => void
  icon?: React.ReactNode
  children?: React.ReactNode
  'data-testid'?: string
}

const colorClasses: Record<string, string> = {
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  neutral: 'badge-neutral',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
  ghost: 'badge-ghost',
}

const sizeClasses: Record<TagSize, string> = {
  xs: 'badge-xs text-xs',
  sm: 'badge-sm text-sm',
  md: 'badge-md',
  lg: 'badge-lg text-lg',
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      closable = false,
      closeIcon,
      onClose,
      color,
      icon,
      size = 'md',
      children,
      className = '',
      'data-testid': testId,
      ...rest
    },
    ref
  ) => {
    const [visible, setVisible] = useState(true)
    const baseTestId = testId ?? 'tag'

    const handleClose = (e: React.MouseEvent) => {
      e.stopPropagation()
      setVisible(false)
      onClose?.()
    }

    if (!visible) return null

    const colorClass = color && colorClasses[color] ? colorClasses[color] : ''
    const customColorStyle =
      color && !colorClasses[color] ? { backgroundColor: color, borderColor: color } : undefined

    const tagClasses = [
      'badge gap-1 inline-flex items-center',
      colorClass,
      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <span
        ref={ref}
        className={tagClasses}
        style={customColorStyle}
        data-testid={baseTestId}
        {...rest}
      >
        {icon && <span className="inline-flex">{icon}</span>}
        {children}
        {closable && (
          <button
            type="button"
            onClick={handleClose}
            className="btn btn-ghost btn-xs p-0 min-h-0 h-auto hover:bg-transparent"
            aria-label="Close"
            data-testid={`${baseTestId}-close`}
          >
            {closeIcon || (
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        )}
      </span>
    )
  }
)

Tag.displayName = 'Tag'

export const CheckableTag = forwardRef<HTMLSpanElement, CheckableTagProps>(
  (
    {
      checked = false,
      onChange,
      icon,
      children,
      className = '',
      'data-testid': testId,
      ...rest
    },
    ref
  ) => {
    const baseTestId = testId ?? 'checkable-tag'

    const handleClick = () => {
      onChange?.(!checked)
    }

    const tagClasses = [
      'badge badge-md gap-1 cursor-pointer transition-colors',
      checked ? 'badge-primary' : 'badge-outline hover:badge-primary hover:badge-outline',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <span
        ref={ref}
        className={tagClasses}
        onClick={handleClick}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleClick()
          }
        }}
        data-testid={baseTestId}
        data-state={checked ? 'checked' : 'unchecked'}
        {...rest}
      >
        {icon && <span className="inline-flex">{icon}</span>}
        {children}
      </span>
    )
  }
)

CheckableTag.displayName = 'CheckableTag'
