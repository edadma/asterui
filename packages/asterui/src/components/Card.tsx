import React from 'react'

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  children?: React.ReactNode
  title?: React.ReactNode
  /** Content in the top-right corner of the card header */
  extra?: React.ReactNode
  cover?: React.ReactNode
  actions?: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  bordered?: boolean
  side?: boolean
  imageFull?: boolean
  actionsJustify?: 'start' | 'center' | 'end'
  loading?: boolean
  hoverable?: boolean
  // Meta props for avatar + description layout
  avatar?: React.ReactNode
  description?: React.ReactNode
}

export interface CardMetaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Avatar or icon element */
  avatar?: React.ReactNode
  /** Title content */
  title?: React.ReactNode
  /** Description content */
  description?: React.ReactNode
}

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hoverable?: boolean
}

function CardGrid({ children, hoverable = false, className = '', style, ...rest }: CardGridProps) {
  const classes = [
    'p-6 border border-base-content/10',
    hoverable && 'cursor-pointer hover:shadow-md transition-shadow',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  )
}

function CardMeta({ avatar, title, description, className = '', ...rest }: CardMetaProps) {
  return (
    <div className={`flex gap-4 ${className}`} {...rest}>
      {avatar && <div className="flex-shrink-0">{avatar}</div>}
      <div className="flex-1 min-w-0">
        {title && <div className="font-medium">{title}</div>}
        {description && <div className="text-sm opacity-70 mt-1">{description}</div>}
      </div>
    </div>
  )
}

function CardRoot({
  children,
  title,
  extra,
  cover,
  actions,
  className = '',
  style,
  size,
  bordered = true,
  side = false,
  imageFull = false,
  actionsJustify = 'end',
  loading = false,
  hoverable = false,
  avatar,
  description,
  ...rest
}: CardProps) {
  const sizeClasses: Record<string, string> = {
    xs: 'card-xs',
    sm: 'card-sm',
    md: 'card-md',
    lg: 'card-lg',
    xl: 'card-xl',
  }

  const classes = [
    'card',
    'bg-base-100',
    size && sizeClasses[size],
    // Don't add border when imageFull is used (it breaks the overlay effect)
    bordered && !imageFull && 'border border-base-content/10 shadow-sm',
    side && 'card-side',
    imageFull && 'image-full shadow-sm',
    hoverable && 'transition-shadow hover:shadow-lg cursor-pointer',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const justifyClasses: Record<string, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  }

  if (loading) {
    return (
      <div className={classes} style={style} {...rest}>
        {cover && (
          <figure>
            <div className="skeleton h-48 w-full rounded-none" />
          </figure>
        )}
        <div className="card-body">
          {(avatar || title) && (
            <div className="flex gap-4 mb-4">
              {avatar && <div className="skeleton w-12 h-12 rounded-full flex-shrink-0" />}
              <div className="flex-1 space-y-2">
                <div className="skeleton h-6 w-2/3" />
                {description && <div className="skeleton h-4 w-full" />}
              </div>
            </div>
          )}
          {!avatar && !title && (
            <>
              <div className="skeleton h-6 w-2/3 mb-4" />
              <div className="space-y-2">
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-5/6" />
                <div className="skeleton h-4 w-4/6" />
              </div>
            </>
          )}
          {actions && (
            <div className={`card-actions ${justifyClasses[actionsJustify]} mt-4`}>
              <div className="skeleton h-10 w-20" />
              <div className="skeleton h-10 w-20" />
            </div>
          )}
        </div>
      </div>
    )
  }

  // Render with avatar + title + description layout (meta style)
  const hasMetaLayout = avatar || (title && description)

  // Header with title and extra
  const renderHeader = () => {
    if (!title && !extra) return null

    if (extra) {
      return (
        <div className="flex justify-between items-start gap-4">
          {title && <h2 className="card-title">{title}</h2>}
          <div className="flex-shrink-0">{extra}</div>
        </div>
      )
    }

    return title ? <h2 className="card-title">{title}</h2> : null
  }

  return (
    <div className={classes} style={style} {...rest}>
      {cover && <figure>{cover}</figure>}
      <div className="card-body">
        {hasMetaLayout ? (
          <>
            <div className="flex gap-4">
              {avatar && <div className="flex-shrink-0">{avatar}</div>}
              <div className="flex-1 min-w-0">
                {renderHeader()}
                {description && <p className="text-sm opacity-70 mt-1">{description}</p>}
              </div>
            </div>
            {children}
          </>
        ) : (
          <>
            {renderHeader()}
            {children}
          </>
        )}
        {actions && <div className={`card-actions ${justifyClasses[actionsJustify]}`}>{actions}</div>}
      </div>
    </div>
  )
}

export const Card = Object.assign(CardRoot, {
  Grid: CardGrid,
  Meta: CardMeta,
})

export default Card
