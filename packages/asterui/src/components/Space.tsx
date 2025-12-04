import React from 'react'

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  wrap?: boolean
  children: React.ReactNode
}

const gapClasses = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
} as const

const alignClasses = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
} as const

const justifyClasses = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
} as const

export const Space: React.FC<SpaceProps> = ({
  direction = 'horizontal',
  size = 'md',
  align,
  justify,
  wrap = false,
  className = '',
  style,
  children,
  ...rest
}) => {
  const isNumericSize = typeof size === 'number'
  const gapClass = isNumericSize ? '' : gapClasses[size]
  const alignClass = align ? alignClasses[align] : ''
  const justifyClass = justify ? justifyClasses[justify] : ''
  const wrapClass = wrap ? 'flex-wrap' : ''
  const directionClass = direction === 'horizontal' ? 'flex-row' : 'flex-col'

  const classes = [
    'flex',
    directionClass,
    gapClass,
    alignClass,
    justifyClass,
    wrapClass,
    className
  ].filter(Boolean).join(' ')

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(isNumericSize ? { gap: `${size}px` } : {}),
  }

  return <div className={classes} style={combinedStyle} {...rest}>{children}</div>
}
