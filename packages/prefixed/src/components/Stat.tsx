import React from 'react'

// DaisyUI classes
const dStats = 'd-stats'
const dStatsHorizontal = 'd-stats-horizontal'
const dStatsVertical = 'd-stats-vertical'
const dStat = 'd-stat'
const dStatFigure = 'd-stat-figure'
const dStatTitle = 'd-stat-title'
const dStatValue = 'd-stat-value'
const dStatDesc = 'd-stat-desc'
const dStatActions = 'd-stat-actions'

export interface StatsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  vertical?: boolean
  'data-testid'?: string
}

export interface StatProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode
  value?: React.ReactNode
  desc?: React.ReactNode
  figure?: React.ReactNode
  actions?: React.ReactNode
  'data-testid'?: string
}

function StatsRoot({ children, className = '', vertical = false, 'data-testid': testId, ...rest }: StatsProps) {
  const classes = [
    dStats,
    vertical ? dStatsVertical : dStatsHorizontal,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes} data-testid={testId} {...rest}>{children}</div>
}

function StatItem({ title, value, desc, figure, actions, className = '', 'data-testid': testId, ...rest }: StatProps) {
  const getTestId = (suffix: string) => (testId ? `${testId}-${suffix}` : undefined)
  return (
    <div className={`${dStat} ${className}`} data-testid={testId} {...rest}>
      {figure && <div className={dStatFigure} data-testid={getTestId('figure')}>{figure}</div>}
      {title && <div className={dStatTitle} data-testid={getTestId('title')}>{title}</div>}
      {value && <div className={dStatValue} data-testid={getTestId('value')}>{value}</div>}
      {desc && <div className={dStatDesc} data-testid={getTestId('desc')}>{desc}</div>}
      {actions && <div className={dStatActions} data-testid={getTestId('actions')}>{actions}</div>}
    </div>
  )
}

export const Stats = Object.assign(StatsRoot, {
  Stat: StatItem,
})
