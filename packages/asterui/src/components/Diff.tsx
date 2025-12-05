import React from 'react'

export interface DiffProps {
  /** First item (shown on left/revealed side) */
  item1: React.ReactNode
  /** Second item (shown on right/hidden side) */
  item2: React.ReactNode
  /** Aspect ratio class (e.g., "aspect-16/9", "aspect-4/3", "aspect-square") */
  aspect?: string
  /** Additional CSS classes */
  className?: string
}

export const Diff: React.FC<DiffProps> = ({
  item1,
  item2,
  aspect = 'aspect-16/9',
  className = '',
}) => {
  return (
    <figure
      className={`diff ${aspect} ${className}`.trim()}
      tabIndex={0}
    >
      <div className="diff-item-1" role="img" tabIndex={0}>
        {item1}
      </div>
      <div className="diff-item-2" role="img">
        {item2}
      </div>
      <div className="diff-resizer" />
    </figure>
  )
}
