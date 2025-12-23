import React from 'react'

export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'

export interface ResultProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  status?: ResultStatus
  title?: React.ReactNode
  subTitle?: React.ReactNode
  icon?: React.ReactNode
  extra?: React.ReactNode
  children?: React.ReactNode
  'data-testid'?: string
}

const defaultIcons: Record<ResultStatus, React.ReactNode> = {
  success: (
    <svg
      className="w-16 h-16 text-success"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  error: (
    <svg
      className="w-16 h-16 text-error"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  info: (
    <svg
      className="w-16 h-16 text-info"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  warning: (
    <svg
      className="w-16 h-16 text-warning"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
  '404': (
    <div className="text-6xl font-bold text-base-content/40">404</div>
  ),
  '403': (
    <div className="text-6xl font-bold text-base-content/40">403</div>
  ),
  '500': (
    <div className="text-6xl font-bold text-base-content/40">500</div>
  ),
}

export const Result: React.FC<ResultProps> = ({
  status = 'info',
  title,
  subTitle,
  icon,
  extra,
  children,
  className = '',
  'data-testid': testId,
  ...rest
}) => {
  const displayIcon = icon !== undefined ? icon : defaultIcons[status]
  const getTestId = (suffix: string) => (testId ? `${testId}-${suffix}` : undefined)

  return (
    <div
      className={`w-full flex flex-col items-center justify-center text-center p-8 ${className}`}
      data-status={status}
      data-testid={testId}
      {...rest}
    >
      {displayIcon && <div className="mb-6" data-testid={getTestId('icon')}>{displayIcon}</div>}

      {title && (
        <div className="text-2xl font-semibold mb-2 text-base-content" data-testid={getTestId('title')}>
          {title}
        </div>
      )}

      {subTitle && (
        <div className="text-base text-base-content/70 mb-6 max-w-md" data-testid={getTestId('subtitle')}>
          {subTitle}
        </div>
      )}

      {children && <div className="mb-6 max-w-2xl" data-testid={getTestId('content')}>{children}</div>}

      {extra && <div className="flex gap-2" data-testid={getTestId('extra')}>{extra}</div>}
    </div>
  )
}

Result.displayName = 'Result'

export default Result
