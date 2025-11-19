import React from 'react'

export interface StatsProps {
  children: React.ReactNode
  className?: string
  vertical?: boolean
}

export interface StatProps {
  children: React.ReactNode
  className?: string
}

export interface StatTitleProps {
  children: React.ReactNode
  className?: string
}

export interface StatValueProps {
  children: React.ReactNode
  className?: string
}

export interface StatDescProps {
  children: React.ReactNode
  className?: string
}

export interface StatFigureProps {
  children: React.ReactNode
  className?: string
}

export interface StatActionsProps {
  children: React.ReactNode
  className?: string
}

function StatsRoot({ children, className = '', vertical = false }: StatsProps) {
  const classes = [
    'stats',
    vertical ? 'stats-vertical' : 'stats-horizontal',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

function StatItem({ children, className = '' }: StatProps) {
  return <div className={`stat ${className}`}>{children}</div>
}

function StatTitle({ children, className = '' }: StatTitleProps) {
  return <div className={`stat-title ${className}`}>{children}</div>
}

function StatValue({ children, className = '' }: StatValueProps) {
  return <div className={`stat-value ${className}`}>{children}</div>
}

function StatDesc({ children, className = '' }: StatDescProps) {
  return <div className={`stat-desc ${className}`}>{children}</div>
}

function StatFigure({ children, className = '' }: StatFigureProps) {
  return <div className={`stat-figure ${className}`}>{children}</div>
}

function StatActions({ children, className = '' }: StatActionsProps) {
  return <div className={`stat-actions ${className}`}>{children}</div>
}

export const Stats = Object.assign(StatsRoot, {
  Stat: StatItem,
  Title: StatTitle,
  Value: StatValue,
  Desc: StatDesc,
  Figure: StatFigure,
  Actions: StatActions,
})
