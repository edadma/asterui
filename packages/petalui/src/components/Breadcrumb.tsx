import React from 'react'

export interface BreadcrumbProps {
  children: React.ReactNode
  className?: string
}

export interface BreadcrumbItemProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

function BreadcrumbRoot({ children, className = '' }: BreadcrumbProps) {
  return (
    <div className={`breadcrumbs text-sm ${className}`}>
      <ul>{children}</ul>
    </div>
  )
}

function BreadcrumbItem({ children, href, onClick, className = '' }: BreadcrumbItemProps) {
  if (href || onClick) {
    return (
      <li className={className}>
        <a href={href} onClick={onClick}>
          {children}
        </a>
      </li>
    )
  }

  return <li className={className}>{children}</li>
}

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
})
