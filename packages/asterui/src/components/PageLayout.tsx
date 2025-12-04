import React from 'react'

export interface PageLayoutProps {
  children: React.ReactNode
  background?: 'base-100' | 'base-200' | 'base-300' | 'neutral'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  minHeight?: 'screen' | 'full' | 'auto'
  className?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  background = 'base-200',
  padding = 'md',
  minHeight = 'screen',
  className = '',
}) => {
  const backgroundClasses = {
    'base-100': 'bg-base-100',
    'base-200': 'bg-base-200',
    'base-300': 'bg-base-300',
    neutral: 'bg-neutral',
  }

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-12',
  }

  const minHeightClasses = {
    screen: 'min-h-screen',
    full: 'min-h-full',
    auto: '',
  }

  const classes = [
    backgroundClasses[background],
    paddingClasses[padding],
    minHeightClasses[minHeight],
    'text-base-content',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}
