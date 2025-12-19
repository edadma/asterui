import React, { forwardRef, useRef } from 'react'
import { useConfig } from './ConfigProvider'

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  /** Validation status */
  status?: 'error' | 'warning'
  ghost?: boolean
  bordered?: boolean
  /** Floating label text (uses DaisyUI floating-label) */
  floatingLabel?: string
  /** Text/element before select (outside, using DaisyUI label) */
  addonBefore?: React.ReactNode
  /** Text/element after select (outside, using DaisyUI label) */
  addonAfter?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size,
      color,
      status,
      ghost = false,
      bordered = true,
      floatingLabel,
      addonBefore,
      addonAfter,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const { componentSize } = useConfig()
    const effectiveSize = size ?? componentSize ?? 'md'

    const innerRef = useRef<HTMLSelectElement>(null)
    const selectRef = (ref as React.RefObject<HTMLSelectElement>) || innerRef

    const sizeClasses = {
      xs: 'select-xs',
      sm: 'select-sm',
      md: 'select-md',
      lg: 'select-lg',
      xl: 'select-xl',
    }

    const colorClasses = {
      neutral: 'select-neutral',
      primary: 'select-primary',
      secondary: 'select-secondary',
      accent: 'select-accent',
      info: 'select-info',
      success: 'select-success',
      warning: 'select-warning',
      error: 'select-error',
    }

    const statusClasses = {
      error: 'select-error',
      warning: 'select-warning',
    }

    // Status takes precedence over color for validation feedback
    const effectiveColorClass = status ? statusClasses[status] : (color ? colorClasses[color] : '')

    // When wrapped with external addons, the wrapper has the styling
    const hasExternalAddons = addonBefore || addonAfter

    const selectClasses = hasExternalAddons
      ? ['grow', 'bg-transparent', 'border-0', 'outline-none', 'focus:outline-none', className].filter(Boolean).join(' ')
      : [
          'select',
          'w-full',
          bordered && 'select-bordered',
          ghost && 'select-ghost',
          effectiveSize && sizeClasses[effectiveSize],
          effectiveColorClass,
          className,
        ].filter(Boolean).join(' ')

    // Build the core select element
    const selectElement = (
      <select ref={selectRef} className={selectClasses} {...props}>
        {children}
      </select>
    )

    // Wrap with floating label if specified
    if (floatingLabel) {
      const floatingClasses = [
        'floating-label',
        effectiveSize && sizeClasses[effectiveSize],
      ].filter(Boolean).join(' ')

      return (
        <label className={floatingClasses}>
          <select ref={selectRef} className="select select-bordered w-full" {...props}>
            {children}
          </select>
          <span>{floatingLabel}</span>
        </label>
      )
    }

    // Wrap with external addons if specified
    if (hasExternalAddons) {
      const addonClasses = [
        'select',
        'select-bordered',
        'flex',
        'items-center',
        'gap-2',
        effectiveSize && sizeClasses[effectiveSize],
        effectiveColorClass,
      ].filter(Boolean).join(' ')

      return (
        <label className={addonClasses}>
          {addonBefore && <span className="text-base-content/70">{addonBefore}</span>}
          {selectElement}
          {addonAfter && <span className="text-base-content/70">{addonAfter}</span>}
        </label>
      )
    }

    return selectElement
  }
)

Select.displayName = 'Select'
