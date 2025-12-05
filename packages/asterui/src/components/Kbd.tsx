import React from 'react'

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  /** Size of the kbd */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Key content */
  children?: React.ReactNode
}

export const Kbd: React.FC<KbdProps> = ({
  size,
  children,
  className = '',
  ...rest
}) => {
  const sizeClass = size ? `kbd-${size}` : ''

  return (
    <kbd
      className={`kbd ${sizeClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </kbd>
  )
}
