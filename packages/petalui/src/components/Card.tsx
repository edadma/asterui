import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  bordered?: boolean
  side?: boolean
  imageFull?: boolean
}

export interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export interface CardActionsProps {
  children: React.ReactNode
  className?: string
  justify?: 'start' | 'center' | 'end'
}

export interface CardFigureProps {
  children: React.ReactNode
  className?: string
}

function CardRoot({
  children,
  className = '',
  size,
  bordered = false,
  side = false,
  imageFull = false,
}: CardProps) {
  const sizeClasses: Record<string, string> = {
    xs: 'card-xs',
    sm: 'card-sm',
    md: 'card-md',
    lg: 'card-lg',
    xl: 'card-xl',
  }

  const classes = [
    'card',
    'bg-base-100',
    size && sizeClasses[size],
    bordered && 'border border-base-content/10',
    side && 'card-side',
    imageFull && 'image-full',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

function CardBody({ children, className = '' }: CardBodyProps) {
  return <div className={`card-body ${className}`}>{children}</div>
}

function CardTitle({ children, className = '' }: CardTitleProps) {
  return <h2 className={`card-title ${className}`}>{children}</h2>
}

function CardActions({ children, className = '', justify = 'end' }: CardActionsProps) {
  const justifyClasses: Record<string, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  }

  const classes = ['card-actions', justifyClasses[justify], className]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

function CardFigure({ children, className = '' }: CardFigureProps) {
  return <figure className={className}>{children}</figure>
}

export const Card = Object.assign(CardRoot, {
  Body: CardBody,
  Title: CardTitle,
  Actions: CardActions,
  Figure: CardFigure,
})
