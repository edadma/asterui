import React from 'react'

// DaisyUI classes
const dBreadcrumbs = 'd-breadcrumbs'

export interface BreadcrumbItemType {
  /** Item title/label */
  title: React.ReactNode
  /** Link URL */
  href?: string
  /** Click handler */
  onClick?: () => void
  /** Custom class name */
  className?: string
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Breadcrumb.Item children (compound pattern) */
  children?: React.ReactNode
  /** Breadcrumb items data (data-driven pattern) */
  items?: BreadcrumbItemType[]
  /** Custom separator between items */
  separator?: React.ReactNode
  'data-testid'?: string
}

export interface BreadcrumbItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'onClick'> {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  /** Icon to display before the label */
  icon?: React.ReactNode
  'data-testid'?: string
}

function BreadcrumbRoot({ children, items, separator, className = '', 'data-testid': testId, ...rest }: BreadcrumbProps) {
  const hasCustomSeparator = separator !== undefined
  // Text separators need more padding than icon separators
  const separatorPadding = typeof separator === 'string' ? 'px-2' : 'px-1'
  const getTestId = (suffix: string) => (testId ? `${testId}-${suffix}` : undefined)

  const renderFromItems = () => {
    if (!items || items.length === 0) return null

    return items.map((item, index) => {
      const isLast = index === items.length - 1
      return (
        <React.Fragment key={index}>
          <li
            className={item.className}
            aria-current={isLast ? 'page' : undefined}
            data-testid={getTestId(`item-${item.href ?? index}`)}
          >
            {item.href || item.onClick ? (
              <a href={item.href} onClick={item.onClick} data-testid={getTestId(`link-${item.href ?? index}`)}>
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </li>
          {hasCustomSeparator && !isLast && (
            <li
              className={`flex items-center ${separatorPadding} text-base-content/50`}
              aria-hidden="true"
              data-testid={getTestId(`separator-${index}`)}
            >
              {separator}
            </li>
          )}
        </React.Fragment>
      )
    })
  }

  const renderChildren = () => {
    if (items && items.length > 0) {
      return renderFromItems()
    }

    if (hasCustomSeparator && children) {
      // Insert custom separator nodes between children
      const childArray = React.Children.toArray(children)
      const result: React.ReactNode[] = []
      childArray.forEach((child, index) => {
        result.push(child)
        if (index < childArray.length - 1) {
          result.push(
            <li
              key={`sep-${index}`}
              className={`flex items-center ${separatorPadding} text-base-content/50`}
              aria-hidden="true"
              data-testid={getTestId(`separator-${index}`)}
            >
              {separator}
            </li>
          )
        }
      })
      return result
    }

    return children
  }

  // When custom separator is provided, hide default DaisyUI separator
  const cssClass = hasCustomSeparator
    ? `${dBreadcrumbs} text-sm [&_li::before]:!hidden ${className}`
    : `${dBreadcrumbs} text-sm ${className}`

  return (
    <nav className={cssClass} aria-label="Breadcrumb" data-testid={testId} {...rest}>
      <ul>{renderChildren()}</ul>
    </nav>
  )
}

function BreadcrumbItem({ children, href, onClick, icon, className = '', 'data-testid': testId, ...rest }: BreadcrumbItemProps) {
  const content = icon ? (
    <span className="inline-flex items-center gap-2">
      {icon}
      {children}
    </span>
  ) : children

  if (href || onClick) {
    return (
      <li className={className} data-testid={testId} {...rest}>
        <a href={href} onClick={onClick} data-testid={testId ? `${testId}-link` : undefined}>
          {content}
        </a>
      </li>
    )
  }

  return <li className={className} data-testid={testId} {...rest}>{content}</li>
}

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
})
