import React from 'react'

export interface MissingDependencyProps {
  packageName: string
  bordered?: boolean
  className?: string
}

// Width to accommodate "@tanstack/react-virtual" (longest package name)
const MIN_WIDTH = 200

export const MissingDependency: React.FC<MissingDependencyProps> = ({
  packageName,
  bordered = true,
  className = '',
}) => {
  const containerClasses = [
    'inline-flex items-center justify-center',
    bordered && 'border border-base-content/20 p-3',
    'bg-base-100',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses} style={{ minWidth: MIN_WIDTH, minHeight: MIN_WIDTH }}>
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span className="text-sm text-base-content/70">Missing dependency</span>
        <code className="text-xs bg-base-200 px-1 py-0.5 rounded whitespace-nowrap">npm install {packageName}</code>
      </div>
    </div>
  )
}
