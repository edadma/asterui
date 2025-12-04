import React, { useState, useRef, useCallback, useEffect } from 'react'

export interface SplitterPanelProps {
  children: React.ReactNode
  defaultSize?: number
  size?: number
  minSize?: number
  maxSize?: number
  collapsible?: boolean
  collapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
  className?: string
}

export interface SplitterProps {
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
  sizes?: number[]
  defaultSizes?: number[]
  onSizesChange?: (sizes: number[]) => void
  gutterSize?: number
  minSize?: number
  className?: string
}

const Panel: React.FC<SplitterPanelProps> = ({ children }) => {
  return <>{children}</>
}

export const Splitter: React.FC<SplitterProps> & { Panel: typeof Panel } = ({
  children,
  direction = 'horizontal',
  sizes,
  defaultSizes,
  onSizesChange,
  gutterSize = 8,
  minSize = 50,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<(HTMLDivElement | null)[]>([])
  const draggingRef = useRef<{ index: number; startPos: number; startSizes: number[] } | null>(null)

  // Extract panel props from children
  const panels = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<SplitterPanelProps> =>
      React.isValidElement(child)
  )

  const panelCount = panels.length

  // Initialize sizes
  const getInitialSizes = useCallback(() => {
    if (defaultSizes && defaultSizes.length === panelCount) {
      return defaultSizes
    }
    // Equal distribution
    const equalSize = 100 / panelCount
    return Array(panelCount).fill(equalSize)
  }, [defaultSizes, panelCount])

  const [internalSizes, setInternalSizes] = useState<number[]>(getInitialSizes)
  const currentSizes = sizes || internalSizes

  // Update internal sizes when panel count changes
  useEffect(() => {
    if (!sizes && internalSizes.length !== panelCount) {
      setInternalSizes(getInitialSizes())
    }
  }, [panelCount, sizes, internalSizes.length, getInitialSizes])

  const updateSizes = useCallback(
    (newSizes: number[]) => {
      if (!sizes) {
        setInternalSizes(newSizes)
      }
      onSizesChange?.(newSizes)
    },
    [sizes, onSizesChange]
  )

  const handleMouseDown = useCallback(
    (index: number, e: React.MouseEvent) => {
      e.preventDefault()
      const startPos = direction === 'horizontal' ? e.clientX : e.clientY
      draggingRef.current = {
        index,
        startPos,
        startSizes: [...currentSizes],
      }

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!draggingRef.current || !containerRef.current) return

        const { index: dragIndex, startPos: dragStartPos, startSizes } = draggingRef.current
        const containerRect = containerRef.current.getBoundingClientRect()
        const containerSize = direction === 'horizontal' ? containerRect.width : containerRect.height
        const currentPos = direction === 'horizontal' ? moveEvent.clientX : moveEvent.clientY

        // Calculate delta as percentage
        const gutterCount = panelCount - 1
        const totalGutterSize = gutterCount * gutterSize
        const availableSize = containerSize - totalGutterSize
        const deltaPixels = currentPos - dragStartPos
        const deltaPercent = (deltaPixels / availableSize) * 100

        // Get min sizes for panels
        const panel1Props = panels[dragIndex]?.props || {}
        const panel2Props = panels[dragIndex + 1]?.props || {}
        const minSize1 = panel1Props.minSize ?? minSize
        const minSize2 = panel2Props.minSize ?? minSize
        const minPercent1 = (minSize1 / availableSize) * 100
        const minPercent2 = (minSize2 / availableSize) * 100

        // Calculate new sizes
        let newSize1 = startSizes[dragIndex] + deltaPercent
        let newSize2 = startSizes[dragIndex + 1] - deltaPercent

        // Apply min constraints
        if (newSize1 < minPercent1) {
          newSize1 = minPercent1
          newSize2 = startSizes[dragIndex] + startSizes[dragIndex + 1] - minPercent1
        }
        if (newSize2 < minPercent2) {
          newSize2 = minPercent2
          newSize1 = startSizes[dragIndex] + startSizes[dragIndex + 1] - minPercent2
        }

        // Apply max constraints
        const maxSize1 = panel1Props.maxSize
        const maxSize2 = panel2Props.maxSize
        if (maxSize1) {
          const maxPercent1 = (maxSize1 / availableSize) * 100
          if (newSize1 > maxPercent1) {
            newSize1 = maxPercent1
            newSize2 = startSizes[dragIndex] + startSizes[dragIndex + 1] - maxPercent1
          }
        }
        if (maxSize2) {
          const maxPercent2 = (maxSize2 / availableSize) * 100
          if (newSize2 > maxPercent2) {
            newSize2 = maxPercent2
            newSize1 = startSizes[dragIndex] + startSizes[dragIndex + 1] - maxPercent2
          }
        }

        const newSizes = [...startSizes]
        newSizes[dragIndex] = newSize1
        newSizes[dragIndex + 1] = newSize2
        updateSizes(newSizes)
      }

      const handleMouseUp = () => {
        draggingRef.current = null
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize'
      document.body.style.userSelect = 'none'
    },
    [direction, currentSizes, panelCount, gutterSize, panels, minSize, updateSizes]
  )

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      const step = e.shiftKey ? 10 : 1
      let delta = 0

      if (direction === 'horizontal') {
        if (e.key === 'ArrowLeft') delta = -step
        else if (e.key === 'ArrowRight') delta = step
      } else {
        if (e.key === 'ArrowUp') delta = -step
        else if (e.key === 'ArrowDown') delta = step
      }

      if (delta !== 0) {
        e.preventDefault()
        const newSizes = [...currentSizes]
        const minPercent = 5 // Minimum 5% when using keyboard

        let newSize1 = newSizes[index] + delta
        let newSize2 = newSizes[index + 1] - delta

        if (newSize1 >= minPercent && newSize2 >= minPercent) {
          newSizes[index] = newSize1
          newSizes[index + 1] = newSize2
          updateSizes(newSizes)
        }
      }
    },
    [direction, currentSizes, updateSizes]
  )

  const isHorizontal = direction === 'horizontal'

  return (
    <div
      ref={containerRef}
      className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} h-full w-full ${className}`}
    >
      {panels.map((panel, index) => {
        const panelProps = panel.props
        const isLast = index === panels.length - 1

        return (
          <React.Fragment key={index}>
            <div
              ref={(el) => {
                panelsRef.current[index] = el
              }}
              className={`overflow-auto ${panelProps.className || ''}`}
              style={{
                [isHorizontal ? 'width' : 'height']: `calc(${currentSizes[index]}% - ${
                  ((panelCount - 1) * gutterSize) / panelCount
                }px)`,
                flexShrink: 0,
              }}
            >
              {panelProps.children}
            </div>
            {!isLast && (
              <div
                role="separator"
                aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
                aria-valuenow={Math.round(currentSizes[index])}
                tabIndex={0}
                className={`
                  flex-shrink-0 bg-base-300 hover:bg-primary/30 active:bg-primary/50
                  transition-colors duration-150 relative group
                  ${isHorizontal ? 'cursor-col-resize' : 'cursor-row-resize'}
                `}
                style={{
                  [isHorizontal ? 'width' : 'height']: `${gutterSize}px`,
                }}
                onMouseDown={(e) => handleMouseDown(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              >
                {/* Grip indicator */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center
                    ${isHorizontal ? 'flex-col gap-0.5' : 'flex-row gap-0.5'}
                  `}
                >
                  <div className="w-1 h-1 rounded-full bg-base-content/30 group-hover:bg-primary/60" />
                  <div className="w-1 h-1 rounded-full bg-base-content/30 group-hover:bg-primary/60" />
                  <div className="w-1 h-1 rounded-full bg-base-content/30 group-hover:bg-primary/60" />
                </div>
              </div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

Splitter.Panel = Panel
