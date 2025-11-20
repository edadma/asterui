import React, { useState } from 'react'

export interface RangeProps {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'
  disabled?: boolean
  showValue?: boolean
  showSteps?: boolean
  className?: string
}

export const Range: React.FC<RangeProps> = ({
  value,
  defaultValue = 50,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  size = 'md',
  color,
  disabled = false,
  showValue = false,
  showSteps = false,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const currentValue = value !== undefined ? value : internalValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value)
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onChange?.(newValue)
  }

  const sizeClass = {
    xs: 'range-xs',
    sm: 'range-sm',
    md: 'range-md',
    lg: 'range-lg',
  }[size]

  const colorClass = color ? `range-${color}` : ''

  // Calculate steps for visual markers
  const steps = showSteps
    ? Array.from({ length: Math.floor((max - min) / step) + 1 }, (_, i) => min + i * step)
    : []

  return (
    <div className={className}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
        className={`range ${sizeClass} ${colorClass}`}
      />
      {showSteps && steps.length > 0 && (
        <div className="w-full flex justify-between text-xs px-2 mt-2">
          {steps.map((stepValue) => (
            <span key={stepValue} className="text-base-content/60">
              |
            </span>
          ))}
        </div>
      )}
      {showValue && (
        <div className="text-center mt-2 text-sm font-medium text-base-content">
          {currentValue}
        </div>
      )}
    </div>
  )
}
