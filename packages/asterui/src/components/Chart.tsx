import React, { useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts'
import type { ApexOptions } from 'apexcharts'
import { useTheme } from '../hooks/useTheme'

export interface ChartProps {
  /** Chart type */
  type: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'boxPlot' | 'radar' | 'polarArea' | 'rangeBar' | 'rangeArea' | 'treemap'
  /** Chart series data */
  series: ApexAxisChartSeries | ApexNonAxisChartSeries
  /** Chart width */
  width?: string | number
  /** Chart height */
  height?: string | number
  /** ApexCharts options (merged with theme defaults) */
  options?: ApexOptions
  /** Use daisyUI theme colors */
  themed?: boolean
  /** Additional CSS classes */
  className?: string
  'data-testid'?: string
}

// Deep merge objects
function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const result = { ...target }

  for (const key in source) {
    if (source[key] !== undefined) {
      if (
        typeof source[key] === 'object' &&
        source[key] !== null &&
        !Array.isArray(source[key]) &&
        typeof target[key] === 'object' &&
        target[key] !== null &&
        !Array.isArray(target[key])
      ) {
        result[key] = deepMerge(
          target[key] as Record<string, unknown>,
          source[key] as Record<string, unknown>
        ) as T[Extract<keyof T, string>]
      } else {
        result[key] = source[key] as T[Extract<keyof T, string>]
      }
    }
  }

  return result
}

export const Chart: React.FC<ChartProps> = ({
  type,
  series,
  width = '100%',
  height = 350,
  options = {},
  themed = true,
  className = '',
  'data-testid': testId,
}) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<ApexCharts | null>(null)
  const { isDark, colors } = useTheme()

  // Build theme-aware chart options
  const getThemedOptions = (): Partial<ApexOptions> => {
    const chartColors = [
      colors.primary,
      colors.secondary,
      colors.accent,
      colors.info,
      colors.success,
      colors.warning,
      colors.error,
    ]

    return {
      colors: chartColors,
      theme: {
        mode: isDark ? 'dark' : 'light',
      },
      chart: {
        background: 'transparent',
        foreColor: colors.foreground,
      },
      grid: {
        borderColor: colors.foreground + '20', // 12.5% opacity
      },
      xaxis: {
        labels: {
          style: {
            colors: colors.foreground,
          },
        },
        axisBorder: {
          color: colors.foreground + '20',
        },
        axisTicks: {
          color: colors.foreground + '20',
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: colors.foreground,
          },
        },
      },
      legend: {
        labels: {
          colors: colors.foreground,
        },
      },
      tooltip: {
        theme: isDark ? 'dark' : 'light',
        style: {
          fontSize: '12px',
        },
        x: {
          show: true,
        },
        marker: {
          show: true,
        },
      },
      dataLabels: {
        style: {
          colors: Array(7).fill(colors.foreground),
        },
        background: {
          enabled: false,
        },
        dropShadow: {
          enabled: false,
        },
      },
    }
  }

  // Build final options
  const buildOptions = (): ApexOptions => {
    const baseOptions: ApexOptions = {
      chart: {
        type,
        width,
        height,
      },
      series,
    }

    if (themed) {
      const themedOpts = getThemedOptions()
      return deepMerge(deepMerge(baseOptions as unknown as Record<string, unknown>, themedOpts as unknown as Record<string, unknown>), options as unknown as Record<string, unknown>) as ApexOptions
    }

    return deepMerge(baseOptions as unknown as Record<string, unknown>, options as unknown as Record<string, unknown>) as ApexOptions
  }

  // Initialize chart
  useEffect(() => {
    if (!chartRef.current) return

    const opts = buildOptions()
    chartInstance.current = new ApexCharts(chartRef.current, opts)
    chartInstance.current.render()

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
        chartInstance.current = null
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Update chart when props or theme change
  useEffect(() => {
    if (!chartInstance.current) return

    const opts = buildOptions()
    chartInstance.current.updateOptions(opts, true, true)
  }, [type, series, width, height, options, themed, isDark, colors]) // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={chartRef} className={className} data-testid={testId} />
}
