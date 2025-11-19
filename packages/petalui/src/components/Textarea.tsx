import React, { forwardRef } from 'react'

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  ghost?: boolean
  bordered?: boolean
  className?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size,
      color,
      ghost = false,
      bordered = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      xs: 'textarea-xs',
      sm: 'textarea-sm',
      md: 'textarea-md',
      lg: 'textarea-lg',
      xl: 'textarea-xl',
    }

    const colorClasses = {
      neutral: 'textarea-neutral',
      primary: 'textarea-primary',
      secondary: 'textarea-secondary',
      accent: 'textarea-accent',
      info: 'textarea-info',
      success: 'textarea-success',
      warning: 'textarea-warning',
      error: 'textarea-error',
    }

    const textareaClasses = [
      'textarea',
      'w-full',
      bordered && 'textarea-bordered',
      ghost && 'textarea-ghost',
      size && sizeClasses[size],
      color && colorClasses[color],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return <textarea ref={ref} className={textareaClasses} {...props} />
  }
)

Textarea.displayName = 'Textarea'
