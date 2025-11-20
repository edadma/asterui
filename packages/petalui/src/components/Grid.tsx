import React from 'react'

export interface RowProps {
  children: React.ReactNode
  gutter?: number | [number, number]
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  className?: string
}

export interface ColProps {
  children: React.ReactNode
  span?: number
  offset?: number
  order?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  className?: string
}

// Explicit class mappings to ensure Tailwind detects them
const COL_SPAN_CLASSES: Record<number, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
  13: 'col-span-13',
  14: 'col-span-14',
  15: 'col-span-15',
  16: 'col-span-16',
  17: 'col-span-17',
  18: 'col-span-18',
  19: 'col-span-19',
  20: 'col-span-20',
  21: 'col-span-21',
  22: 'col-span-22',
  23: 'col-span-23',
  24: 'col-span-24',
}

const COL_START_CLASSES: Record<number, string> = {
  1: 'col-start-1',
  2: 'col-start-2',
  3: 'col-start-3',
  4: 'col-start-4',
  5: 'col-start-5',
  6: 'col-start-6',
  7: 'col-start-7',
  8: 'col-start-8',
  9: 'col-start-9',
  10: 'col-start-10',
  11: 'col-start-11',
  12: 'col-start-12',
  13: 'col-start-13',
  14: 'col-start-14',
  15: 'col-start-15',
  16: 'col-start-16',
  17: 'col-start-17',
  18: 'col-start-18',
  19: 'col-start-19',
  20: 'col-start-20',
  21: 'col-start-21',
  22: 'col-start-22',
  23: 'col-start-23',
  24: 'col-start-24',
  25: 'col-start-25',
}

const ORDER_CLASSES: Record<number, string> = {
  1: 'order-1',
  2: 'order-2',
  3: 'order-3',
  4: 'order-4',
  5: 'order-5',
  6: 'order-6',
  7: 'order-7',
  8: 'order-8',
  9: 'order-9',
  10: 'order-10',
  11: 'order-11',
  12: 'order-12',
}

const SM_COL_SPAN_CLASSES: Record<number, string> = {
  1: 'sm:col-span-1',
  2: 'sm:col-span-2',
  3: 'sm:col-span-3',
  4: 'sm:col-span-4',
  5: 'sm:col-span-5',
  6: 'sm:col-span-6',
  7: 'sm:col-span-7',
  8: 'sm:col-span-8',
  9: 'sm:col-span-9',
  10: 'sm:col-span-10',
  11: 'sm:col-span-11',
  12: 'sm:col-span-12',
  13: 'sm:col-span-13',
  14: 'sm:col-span-14',
  15: 'sm:col-span-15',
  16: 'sm:col-span-16',
  17: 'sm:col-span-17',
  18: 'sm:col-span-18',
  19: 'sm:col-span-19',
  20: 'sm:col-span-20',
  21: 'sm:col-span-21',
  22: 'sm:col-span-22',
  23: 'sm:col-span-23',
  24: 'sm:col-span-24',
}

const MD_COL_SPAN_CLASSES: Record<number, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  10: 'md:col-span-10',
  11: 'md:col-span-11',
  12: 'md:col-span-12',
  13: 'md:col-span-13',
  14: 'md:col-span-14',
  15: 'md:col-span-15',
  16: 'md:col-span-16',
  17: 'md:col-span-17',
  18: 'md:col-span-18',
  19: 'md:col-span-19',
  20: 'md:col-span-20',
  21: 'md:col-span-21',
  22: 'md:col-span-22',
  23: 'md:col-span-23',
  24: 'md:col-span-24',
}

const LG_COL_SPAN_CLASSES: Record<number, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  10: 'lg:col-span-10',
  11: 'lg:col-span-11',
  12: 'lg:col-span-12',
  13: 'lg:col-span-13',
  14: 'lg:col-span-14',
  15: 'lg:col-span-15',
  16: 'lg:col-span-16',
  17: 'lg:col-span-17',
  18: 'lg:col-span-18',
  19: 'lg:col-span-19',
  20: 'lg:col-span-20',
  21: 'lg:col-span-21',
  22: 'lg:col-span-22',
  23: 'lg:col-span-23',
  24: 'lg:col-span-24',
}

const XL_COL_SPAN_CLASSES: Record<number, string> = {
  1: 'xl:col-span-1',
  2: 'xl:col-span-2',
  3: 'xl:col-span-3',
  4: 'xl:col-span-4',
  5: 'xl:col-span-5',
  6: 'xl:col-span-6',
  7: 'xl:col-span-7',
  8: 'xl:col-span-8',
  9: 'xl:col-span-9',
  10: 'xl:col-span-10',
  11: 'xl:col-span-11',
  12: 'xl:col-span-12',
  13: 'xl:col-span-13',
  14: 'xl:col-span-14',
  15: 'xl:col-span-15',
  16: 'xl:col-span-16',
  17: 'xl:col-span-17',
  18: 'xl:col-span-18',
  19: 'xl:col-span-19',
  20: 'xl:col-span-20',
  21: 'xl:col-span-21',
  22: 'xl:col-span-22',
  23: 'xl:col-span-23',
  24: 'xl:col-span-24',
}

const XXL_COL_SPAN_CLASSES: Record<number, string> = {
  1: '2xl:col-span-1',
  2: '2xl:col-span-2',
  3: '2xl:col-span-3',
  4: '2xl:col-span-4',
  5: '2xl:col-span-5',
  6: '2xl:col-span-6',
  7: '2xl:col-span-7',
  8: '2xl:col-span-8',
  9: '2xl:col-span-9',
  10: '2xl:col-span-10',
  11: '2xl:col-span-11',
  12: '2xl:col-span-12',
  13: '2xl:col-span-13',
  14: '2xl:col-span-14',
  15: '2xl:col-span-15',
  16: '2xl:col-span-16',
  17: '2xl:col-span-17',
  18: '2xl:col-span-18',
  19: '2xl:col-span-19',
  20: '2xl:col-span-20',
  21: '2xl:col-span-21',
  22: '2xl:col-span-22',
  23: '2xl:col-span-23',
  24: '2xl:col-span-24',
}

export function Row({ children, gutter = 0, justify, align, className = '' }: RowProps) {
  const [gutterX, gutterY] = Array.isArray(gutter) ? gutter : [gutter, 0]

  const justifyClasses: Record<string, string> = {
    start: 'justify-items-start',
    end: 'justify-items-end',
    center: 'justify-items-center',
    between: 'justify-items-between',
    around: 'justify-items-around',
    evenly: 'justify-items-evenly',
  }

  const alignClasses: Record<string, string> = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  }

  const classes = [
    'grid',
    'grid-cols-24',
    justify && justifyClasses[justify],
    align && alignClasses[align],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const style: React.CSSProperties = {
    ...(gutterX && { columnGap: `${gutterX * 0.25}rem` }),
    ...(gutterY && { rowGap: `${gutterY * 0.25}rem` }),
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

export function Col({ children, span, offset, order, xs, sm, md, lg, xl, xxl, className = '' }: ColProps) {
  const classes: string[] = []

  // Base span or xs (mobile-first)
  const baseSpan = span || xs
  if (baseSpan && COL_SPAN_CLASSES[baseSpan]) {
    classes.push(COL_SPAN_CLASSES[baseSpan])
  }

  // Responsive spans
  if (sm && SM_COL_SPAN_CLASSES[sm]) classes.push(SM_COL_SPAN_CLASSES[sm])
  if (md && MD_COL_SPAN_CLASSES[md]) classes.push(MD_COL_SPAN_CLASSES[md])
  if (lg && LG_COL_SPAN_CLASSES[lg]) classes.push(LG_COL_SPAN_CLASSES[lg])
  if (xl && XL_COL_SPAN_CLASSES[xl]) classes.push(XL_COL_SPAN_CLASSES[xl])
  if (xxl && XXL_COL_SPAN_CLASSES[xxl]) classes.push(XXL_COL_SPAN_CLASSES[xxl])

  // Offset (uses col-start)
  if (offset && COL_START_CLASSES[offset + 1]) {
    classes.push(COL_START_CLASSES[offset + 1])
  }

  // Order
  if (order && ORDER_CLASSES[order]) {
    classes.push(ORDER_CLASSES[order])
  }

  if (className) classes.push(className)

  return <div className={classes.join(' ')}>{children}</div>
}

export const Grid = {
  Row,
  Col,
}
