import React from 'react'

export interface HeroProps {
  children: React.ReactNode
  overlay?: boolean
  overlayClassName?: string
  contentClassName?: string
  wrapperClassName?: string
  className?: string
  style?: React.CSSProperties
}

export function Hero({
  children,
  overlay = false,
  overlayClassName = '',
  contentClassName = '',
  wrapperClassName,
  className = '',
  style,
}: HeroProps) {
  const classes = ['hero', 'min-h-screen', className].filter(Boolean).join(' ')
  const contentClasses = ['hero-content', contentClassName].filter(Boolean).join(' ')
  const overlayClasses = ['hero-overlay', overlayClassName].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style}>
      {overlay && <div className={overlayClasses} />}
      <div className={contentClasses}>
        {wrapperClassName ? <div className={wrapperClassName}>{children}</div> : children}
      </div>
    </div>
  )
}
