import React from 'react'

export interface CodeLineProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode
  prefix?: string
  highlight?: boolean
}

const Line: React.FC<CodeLineProps> = ({
  children,
  prefix = '$',
  highlight = false,
  className = '',
  ...rest
}) => {
  return (
    <pre
      data-prefix={prefix}
      className={`${highlight ? 'bg-warning text-warning-content' : ''} ${className}`}
      {...rest}
    >
      <code>{children}</code>
    </pre>
  )
}

export interface CodeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Code: React.FC<CodeProps> & { Line: typeof Line } = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div className={`mockup-code ${className}`} {...rest}>
      {children}
    </div>
  )
}

Code.Line = Line
