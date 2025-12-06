import React from 'react'

type BaseButtonProps = {
  type?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  outline?: boolean
  dash?: boolean
  soft?: boolean
  active?: boolean
  loading?: boolean
  shape?: 'square' | 'circle' | 'wide' | 'block' | 'round'
  noAnimation?: boolean
  /** Icon element to display */
  icon?: React.ReactNode
  /** Position of the icon */
  iconPosition?: 'start' | 'end'
  /** Applies error/danger styling (shorthand for type="error") */
  danger?: boolean
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    href?: undefined
    htmlType?: 'button' | 'submit' | 'reset'
  }

type ButtonAsAnchor = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> & {
    href: string
    htmlType?: undefined
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  size = 'md',
  outline = false,
  dash = false,
  soft = false,
  active = false,
  loading = false,
  shape,
  noAnimation = false,
  icon,
  iconPosition = 'start',
  danger = false,
  className = '',
  ...props
}) => {
  // danger prop is a shorthand for type="error"
  const effectiveType = danger ? 'error' : type
  const typeClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    neutral: 'btn-neutral',
    ghost: 'btn-ghost',
    link: 'btn-link',
  }

  const sizeClasses = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
    xl: 'btn-xl',
  }

  const shapeClasses = {
    square: 'btn-square',
    circle: 'btn-circle',
    wide: 'btn-wide',
    block: 'btn-block',
    round: 'rounded-full',
  }

  const classes = [
    'btn',
    effectiveType && typeClasses[effectiveType],
    sizeClasses[size],
    outline && 'btn-outline',
    dash && 'btn-dash',
    soft && 'btn-soft',
    active && 'btn-active',
    shape && shapeClasses[shape],
    noAnimation && 'no-animation',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Determine icon spacing based on whether there's text content
  const hasChildren = children !== undefined && children !== null && children !== ''
  const iconSpacing = hasChildren ? (iconPosition === 'start' ? 'mr-2' : 'ml-2') : ''

  const iconElement = icon && (
    <span className={`inline-flex items-center ${iconSpacing}`} aria-hidden="true">
      {icon}
    </span>
  )

  const content = (
    <>
      {loading && <span className="loading loading-spinner" aria-hidden="true"></span>}
      {!loading && icon && iconPosition === 'start' && iconElement}
      {children}
      {!loading && icon && iconPosition === 'end' && iconElement}
    </>
  )

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    )
  }

  const { htmlType, ...buttonProps } = props as Omit<ButtonAsButton, keyof BaseButtonProps>
  const buttonType: 'button' | 'submit' | 'reset' = htmlType ?? 'button'
  return (
    <button
      type={buttonType}
      className={classes}
      aria-busy={loading ? 'true' : undefined}
      disabled={loading || buttonProps.disabled}
      {...buttonProps}
    >
      {content}
    </button>
  )
}
