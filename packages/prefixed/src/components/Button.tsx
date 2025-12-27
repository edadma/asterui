import React, { forwardRef } from 'react'
import { SizeProvider } from '../contexts/SizeContext'
import { useConfig } from '../providers/ConfigProvider'

// DaisyUI classes
const dBtn = 'd-btn'
const dBtnPrimary = 'd-btn-primary'
const dBtnSecondary = 'd-btn-secondary'
const dBtnAccent = 'd-btn-accent'
const dBtnInfo = 'd-btn-info'
const dBtnSuccess = 'd-btn-success'
const dBtnWarning = 'd-btn-warning'
const dBtnError = 'd-btn-error'
const dBtnNeutral = 'd-btn-neutral'
const dBtnOutline = 'd-btn-outline'
const dBtnDash = 'd-btn-dash'
const dBtnSoft = 'd-btn-soft'
const dBtnGhost = 'd-btn-ghost'
const dBtnLink = 'd-btn-link'
const dBtnXs = 'd-btn-xs'
const dBtnSm = 'd-btn-sm'
const dBtnMd = 'd-btn-md'
const dBtnLg = 'd-btn-lg'
const dBtnXl = 'd-btn-xl'
const dBtnActive = 'd-btn-active'
const dBtnSquare = 'd-btn-square'
const dBtnCircle = 'd-btn-circle'
const dBtnWide = 'd-btn-wide'
const dBtnBlock = 'd-btn-block'
const dLoading = 'd-loading'
const dLoadingSpinner = 'd-loading-spinner'

type BaseButtonProps = {
  /** Syntactic sugar for setting variant and color together. Will be overridden by explicit variant & color props. */
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text'
  /** Button color */
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral'
  /** Button style variant */
  variant?: 'solid' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link' | 'text'
  /** Button size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Active/pressed visual state */
  active?: boolean
  /** Show loading spinner and disable button */
  loading?: boolean
  /** Button shape */
  shape?: 'square' | 'circle' | 'wide' | 'block' | 'round'
  /** Make the button full width */
  block?: boolean
  /** Make background transparent and invert text and border colors */
  ghost?: boolean
  /** Disable click animation */
  noAnimation?: boolean
  /** Icon element to display */
  icon?: React.ReactNode
  /** Position of the icon */
  iconPlacement?: 'start' | 'end'
  /** @deprecated Use iconPlacement instead */
  iconPosition?: 'start' | 'end'
  /** Applies error/danger styling (shorthand for color="error") */
  danger?: boolean
  /** Toggle button pressed state (sets aria-pressed) */
  pressed?: boolean
  /** Accessible label for icon-only buttons */
  'aria-label'?: string
  /** Test ID for testing */
  'data-testid'?: string
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
    /** Disable the link button */
    disabled?: boolean
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      type,
      color,
      variant,
      size,
      active = false,
      loading = false,
      shape,
      block = false,
      ghost = false,
      noAnimation = false,
      icon,
      iconPlacement,
      iconPosition,
      danger = false,
      pressed,
      className = '',
      'aria-label': ariaLabel,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const { componentSize } = useConfig()
    const effectiveSize = size ?? componentSize ?? 'md'

    // Apply type prop (syntactic sugar) - explicit variant/color takes precedence
    let derivedVariant = variant
    let derivedColor = color
    if (type && !variant && !color) {
      switch (type) {
        case 'primary':
          derivedVariant = 'solid'
          derivedColor = 'primary'
          break
        case 'default':
          derivedVariant = 'outline'
          break
        case 'dashed':
          derivedVariant = 'dash'
          break
        case 'link':
          derivedVariant = 'link'
          break
        case 'text':
          derivedVariant = 'text'
          break
      }
    }

    // danger prop is a shorthand for color="error"
    const effectiveColor = danger ? 'error' : derivedColor
    const effectiveVariant = ghost && !derivedVariant ? 'ghost' : derivedVariant
    // iconPlacement takes precedence over deprecated iconPosition
    const effectiveIconPlacement = iconPlacement ?? iconPosition ?? 'start'
    // block prop is a shorthand for shape="block"
    const effectiveShape = block && !shape ? 'block' : shape

    const colorClasses = {
      primary: dBtnPrimary,
      secondary: dBtnSecondary,
      accent: dBtnAccent,
      info: dBtnInfo,
      success: dBtnSuccess,
      warning: dBtnWarning,
      error: dBtnError,
      neutral: dBtnNeutral,
    }

    const variantClasses = {
      solid: '', // default, no extra class needed
      outline: dBtnOutline,
      dash: dBtnDash,
      soft: dBtnSoft,
      ghost: dBtnGhost,
      link: dBtnLink,
      text: dBtnGhost, // text variant uses ghost styling
    }

    const sizeClasses = {
      xs: dBtnXs,
      sm: dBtnSm,
      md: dBtnMd,
      lg: dBtnLg,
      xl: dBtnXl,
    }

    const shapeClasses = {
      square: dBtnSquare,
      circle: dBtnCircle,
      wide: dBtnWide,
      block: dBtnBlock,
      round: 'rounded-full',
    }

    const classes = [
      dBtn,
      effectiveColor && colorClasses[effectiveColor],
      effectiveVariant && variantClasses[effectiveVariant],
      sizeClasses[effectiveSize],
      active && dBtnActive,
      effectiveShape && shapeClasses[effectiveShape],
      noAnimation && 'no-animation',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    // Determine icon spacing based on whether there's text content and button size
    const hasChildren = children !== undefined && children !== null && children !== ''
    const spacingBySize = {
      xs: effectiveIconPlacement === 'start' ? 'mr-1' : 'ml-1',
      sm: effectiveIconPlacement === 'start' ? 'mr-1' : 'ml-1',
      md: effectiveIconPlacement === 'start' ? 'mr-1.5' : 'ml-1.5',
      lg: effectiveIconPlacement === 'start' ? 'mr-2' : 'ml-2',
      xl: effectiveIconPlacement === 'start' ? 'mr-2' : 'ml-2',
    }
    const iconSpacing = hasChildren ? spacingBySize[effectiveSize] : ''

    const iconElement = icon && (
      <SizeProvider size={effectiveSize}>
        <span className={`inline-flex items-center ${iconSpacing}`} aria-hidden="true">
          {icon}
        </span>
      </SizeProvider>
    )

    const content = (
      <>
        {loading && <span className={`${dLoading} ${dLoadingSpinner}`} aria-hidden="true"></span>}
        {!loading && icon && effectiveIconPlacement === 'start' && iconElement}
        {children}
        {!loading && icon && effectiveIconPlacement === 'end' && iconElement}
      </>
    )

    if ('href' in props && props.href !== undefined) {
      const { href, disabled, onKeyDown, onClick, ...anchorProps } = props as ButtonAsAnchor & {
        onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>
        onClick?: React.MouseEventHandler<HTMLAnchorElement>
      }
      const isDisabled = disabled || loading

      // Handle Space key for anchor buttons (links only respond to Enter natively)
      const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (event.key === ' ' && !isDisabled) {
          event.preventDefault()
          event.currentTarget.click()
        }
        onKeyDown?.(event)
      }

      // Prevent click when disabled
      const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (isDisabled) {
          event.preventDefault()
          return
        }
        onClick?.(event)
      }

      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={isDisabled ? undefined : href}
          role="button"
          className={classes}
          aria-disabled={isDisabled || undefined}
          aria-busy={loading || undefined}
          aria-pressed={pressed}
          aria-label={ariaLabel}
          tabIndex={isDisabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          data-testid={testId}
          data-state-loading={loading || undefined}
          data-state-disabled={isDisabled || undefined}
          data-state-active={active || undefined}
          data-state-pressed={pressed}
          {...anchorProps}
        >
          {content}
        </a>
      )
    }

    const { htmlType, ...buttonProps } = props as Omit<ButtonAsButton, keyof BaseButtonProps>
    const buttonType: 'button' | 'submit' | 'reset' = htmlType ?? 'button'
    const isDisabled = loading || buttonProps.disabled
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonType}
        className={classes}
        aria-busy={loading || undefined}
        aria-pressed={pressed}
        aria-label={ariaLabel}
        disabled={isDisabled}
        data-testid={testId}
        data-state-loading={loading || undefined}
        data-state-disabled={isDisabled || undefined}
        data-state-active={active || undefined}
        data-state-pressed={pressed}
        {...buttonProps}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
