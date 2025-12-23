import React from 'react'

// DaisyUI classes
const dTextRotate = 'text-rotate'

export type TextRotateDuration = 6000 | 9000 | 12000 | 15000 | 18000

const durationClasses: Record<TextRotateDuration, string> = {
  6000: 'duration-6000',
  9000: 'duration-9000',
  12000: 'duration-12000',
  15000: 'duration-15000',
  18000: 'duration-18000',
}

export interface TextRotateProps {
  /** Text items to rotate through (max 6) */
  items: React.ReactNode[]
  /** Animation duration in ms (default 10000) */
  duration?: TextRotateDuration
  /** Center text horizontally */
  centered?: boolean
  /** Additional CSS classes */
  className?: string
  'data-testid'?: string
}

export const TextRotate: React.FC<TextRotateProps> = ({
  items,
  duration,
  centered = false,
  className = '',
  'data-testid': testId,
}) => {
  const durationClass = duration ? durationClasses[duration] : ''
  const getTestId = (suffix: string) => (testId ? `${testId}-${suffix}` : undefined)

  return (
    <span
      className={`${dTextRotate} ${durationClass} ${centered ? 'justify-items-center' : ''} ${className}`.trim()}
      data-testid={testId}
    >
      <span>
        {items.slice(0, 6).map((item, index) => (
          <span key={index} data-testid={getTestId(`item-${index}`)}>{item}</span>
        ))}
      </span>
    </span>
  )
}
