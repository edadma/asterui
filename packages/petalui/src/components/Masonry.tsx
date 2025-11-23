import React from 'react'

export interface MasonryProps {
  children: React.ReactNode
  columns?: number | {
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    '2xl'?: number
  }
  gap?: number | string
  className?: string
}

export const Masonry: React.FC<MasonryProps> = ({
  children,
  columns = 3,
  gap = 4,
  className = '',
}) => {
  // Map gap values to Tailwind classes
  const getGapClass = () => {
    if (typeof gap === 'string') {
      return gap
    }

    const gapMap: Record<number, string> = {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
      9: 'gap-9',
      10: 'gap-10',
      11: 'gap-11',
      12: 'gap-12',
    }
    return gapMap[gap] || 'gap-4'
  }

  // Map column values to Tailwind classes
  const getColumnClass = (count: number, prefix = '') => {
    const columnMap: Record<number, string> = {
      1: `${prefix}columns-1`,
      2: `${prefix}columns-2`,
      3: `${prefix}columns-3`,
      4: `${prefix}columns-4`,
      5: `${prefix}columns-5`,
      6: `${prefix}columns-6`,
      7: `${prefix}columns-7`,
      8: `${prefix}columns-8`,
      9: `${prefix}columns-9`,
      10: `${prefix}columns-10`,
      11: `${prefix}columns-11`,
      12: `${prefix}columns-12`,
    }
    return columnMap[count] || `${prefix}columns-3`
  }

  // Convert columns to Tailwind classes
  const getColumnClasses = () => {
    if (typeof columns === 'number') {
      return getColumnClass(columns)
    }

    // Handle responsive columns object
    const classes: string[] = []
    if (columns.xs !== undefined) classes.push(getColumnClass(columns.xs))
    if (columns.sm !== undefined) classes.push(getColumnClass(columns.sm, 'sm:'))
    if (columns.md !== undefined) classes.push(getColumnClass(columns.md, 'md:'))
    if (columns.lg !== undefined) classes.push(getColumnClass(columns.lg, 'lg:'))
    if (columns.xl !== undefined) classes.push(getColumnClass(columns.xl, 'xl:'))
    if (columns['2xl'] !== undefined) classes.push(getColumnClass(columns['2xl'], '2xl:'))

    return classes.join(' ')
  }

  const containerClasses = [
    getColumnClasses(),
    getGapClass(),
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Wrap children in break-inside-avoid containers
  const wrappedChildren = React.Children.map(children, (child, index) => (
    <div key={index} className="break-inside-avoid mb-4">
      {child}
    </div>
  ))

  return (
    <div className={containerClasses}>
      {wrappedChildren}
    </div>
  )
}

Masonry.displayName = 'Masonry'

export default Masonry
