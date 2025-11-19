import React from 'react'

export interface TimelineProps {
  children: React.ReactNode
  className?: string
  vertical?: boolean
  horizontal?: boolean
  compact?: boolean
  snapIcon?: boolean
}

export interface TimelineItemProps {
  children: React.ReactNode
  className?: string
}

export interface TimelineStartProps {
  children: React.ReactNode
  className?: string
  box?: boolean
}

export interface TimelineMiddleProps {
  children: React.ReactNode
  className?: string
}

export interface TimelineEndProps {
  children: React.ReactNode
  className?: string
  box?: boolean
}

function TimelineRoot({
  children,
  className = '',
  vertical = false,
  horizontal = false,
  compact = false,
  snapIcon = false,
}: TimelineProps) {
  const classes = [
    'timeline',
    vertical && 'timeline-vertical',
    horizontal && 'timeline-horizontal',
    compact && 'timeline-compact',
    snapIcon && 'timeline-snap-icon',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <ul className={classes}>{children}</ul>
}

function TimelineItem({ children, className = '' }: TimelineItemProps) {
  return <li className={className}>{children}</li>
}

function TimelineStart({ children, className = '', box = false }: TimelineStartProps) {
  const classes = ['timeline-start', box && 'timeline-box', className]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

function TimelineMiddle({ children, className = '' }: TimelineMiddleProps) {
  return <div className={`timeline-middle ${className}`}>{children}</div>
}

function TimelineEnd({ children, className = '', box = false }: TimelineEndProps) {
  const classes = ['timeline-end', box && 'timeline-box', className]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

function TimelineConnector({ className = '' }: { className?: string }) {
  return <hr className={className} />
}

export const Timeline = Object.assign(TimelineRoot, {
  Item: TimelineItem,
  Start: TimelineStart,
  Middle: TimelineMiddle,
  End: TimelineEnd,
  Connector: TimelineConnector,
})
