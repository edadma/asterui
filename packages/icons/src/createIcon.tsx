import React from 'react'
import { IconProps, IconSize, sizeMap } from './types'

type HeroIconComponent = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string
    titleId?: string
  } & React.RefAttributes<SVGSVGElement>
>

export function createIcon(HeroIcon: HeroIconComponent, displayName: string) {
  const Icon = ({ size = 'md', className, style, ...props }: IconProps) => {
    const pixelSize = typeof size === 'number' ? size : sizeMap[size as IconSize]

    return (
      <HeroIcon
        className={className}
        style={{
          width: pixelSize,
          height: pixelSize,
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    )
  }

  Icon.displayName = displayName
  return Icon
}
