import React, { useState } from 'react'

export interface FilterConfig {
  text: string
  value: string | number | boolean
}

export interface ColumnType<T = any> {
  key: string
  title: string
  dataIndex?: string
  render?: (value: any, record: T, index: number) => React.ReactNode
  width?: string | number
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
  sorter?: boolean | ((a: T, b: T) => number)
  filters?: FilterConfig[]
  onFilter?: (value: string | number | boolean, record: T) => boolean
  defaultSortOrder?: 'ascend' | 'descend'
  defaultFilteredValue?: (string | number | boolean)[]
}

export interface RowSelection<T = any> {
  type?: 'checkbox' | 'radio'
  selectedRowKeys?: React.Key[]
  onChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void
  getCheckboxProps?: (record: T) => { disabled?: boolean; [key: string]: any }
}

export interface PaginationConfig {
  current?: number
  pageSize?: number
  total?: number
  onChange?: (page: number, pageSize: number) => void
}

export interface TableProps<T = any> {
  columns: ColumnType<T>[]
  dataSource: T[]
  rowKey?: string | ((record: T) => string)
  loading?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  bordered?: boolean
  hoverable?: boolean
  striped?: boolean
  pinRows?: boolean
  pinCols?: boolean
  pagination?: false | PaginationConfig
  rowSelection?: RowSelection<T>
  className?: string
  onRow?: (record: T, index: number) => React.HTMLAttributes<HTMLTableRowElement>
}

function FilterDropdown({
  filters,
  selectedValues,
  onChange,
}: {
  filters: FilterConfig[]
  selectedValues: (string | number | boolean)[]
  onChange: (values: (string | number | boolean)[]) => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (value: string | number | boolean) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value]
    onChange(newValues)
  }

  const handleClear = () => {
    onChange([])
    setIsOpen(false)
  }

  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        className={`btn btn-ghost btn-xs ${selectedValues.length > 0 ? 'text-primary' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      </button>
      {isOpen && (
        <div
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-base-content/10"
        >
          <div className="space-y-2">
            {filters.map((filter) => (
              <label key={String(filter.value)} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-base-200 rounded">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  checked={selectedValues.includes(filter.value)}
                  onChange={() => handleToggle(filter.value)}
                />
                <span className="text-sm">{filter.text}</span>
              </label>
            ))}
          </div>
          <div className="divider my-1"></div>
          <button
            className="btn btn-ghost btn-xs w-full"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export function Table<T extends Record<string, any>>({
  columns,
  dataSource,
  rowKey = 'id',
  loading = false,
  size = 'md',
  bordered = false,
  hoverable = true,
  striped = false,
  pinRows = false,
  pinCols = false,
  pagination,
  rowSelection,
  className = '',
  onRow,
}: TableProps<T>) {
  const defaultPageSize = 10
  const [currentPage, setCurrentPage] = useState(
    pagination !== false && pagination?.current ? pagination.current : 1
  )
  const pageSize = pagination !== false && pagination?.pageSize ? pagination.pageSize : defaultPageSize

  // Sorting state
  const [sortState, setSortState] = useState<{
    columnKey: string | null
    order: 'ascend' | 'descend' | null
  }>(() => {
    const defaultSortColumn = columns.find((col) => col.defaultSortOrder)
    return {
      columnKey: defaultSortColumn?.key || null,
      order: defaultSortColumn?.defaultSortOrder || null,
    }
  })

  // Filtering state
  const [filterState, setFilterState] = useState<Record<string, (string | number | boolean)[]>>(() => {
    const initial: Record<string, (string | number | boolean)[]> = {}
    columns.forEach((col) => {
      if (col.defaultFilteredValue) {
        initial[col.key] = col.defaultFilteredValue
      }
    })
    return initial
  })

  // Row selection state
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>(
    rowSelection?.selectedRowKeys || []
  )

  const isPaginationEnabled = pagination !== false

  // Apply filters
  let filteredData = [...dataSource]
  Object.entries(filterState).forEach(([columnKey, filterValues]) => {
    if (filterValues.length > 0) {
      const column = columns.find((col) => col.key === columnKey)
      if (column?.onFilter) {
        filteredData = filteredData.filter((record) =>
          filterValues.some((value) => column.onFilter!(value, record))
        )
      }
    }
  })

  // Apply sorting
  if (sortState.columnKey && sortState.order) {
    const column = columns.find((col) => col.key === sortState.columnKey)
    if (column?.sorter) {
      filteredData.sort((a, b) => {
        let result = 0
        if (typeof column.sorter === 'function') {
          result = column.sorter(a, b)
        } else if (column.dataIndex) {
          const aVal = a[column.dataIndex]
          const bVal = b[column.dataIndex]
          if (aVal < bVal) result = -1
          if (aVal > bVal) result = 1
        }
        return sortState.order === 'ascend' ? result : -result
      })
    }
  }

  const totalPages = Math.ceil(filteredData.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedData = isPaginationEnabled ? filteredData.slice(startIndex, endIndex) : filteredData

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (pagination !== false && pagination?.onChange) {
      pagination.onChange(page, pageSize)
    }
  }

  const handleSort = (columnKey: string) => {
    setSortState((prev) => {
      if (prev.columnKey === columnKey) {
        // Cycle through: ascend -> descend -> null
        if (prev.order === 'ascend') return { columnKey, order: 'descend' }
        if (prev.order === 'descend') return { columnKey: null, order: null }
      }
      return { columnKey, order: 'ascend' }
    })
    setCurrentPage(1) // Reset to first page when sorting
  }

  const handleFilterChange = (columnKey: string, values: (string | number | boolean)[]) => {
    setFilterState((prev) => ({
      ...prev,
      [columnKey]: values,
    }))
    setCurrentPage(1) // Reset to first page when filtering
  }

  const handleSelectAll = (checked: boolean) => {
    const newSelectedKeys = checked
      ? paginatedData.map((record, index) => getRowKey(record, index))
      : []
    setSelectedKeys(newSelectedKeys)
    if (rowSelection?.onChange) {
      const selectedRecords = checked ? paginatedData : []
      rowSelection.onChange(newSelectedKeys, selectedRecords)
    }
  }

  const handleSelectRow = (record: T, index: number, checked: boolean) => {
    const key = getRowKey(record, index)
    const newSelectedKeys = checked
      ? [...selectedKeys, key]
      : selectedKeys.filter((k) => k !== key)
    setSelectedKeys(newSelectedKeys)
    if (rowSelection?.onChange) {
      const selectedRecords = filteredData.filter((r, i) =>
        newSelectedKeys.includes(getRowKey(r, i))
      )
      rowSelection.onChange(newSelectedKeys, selectedRecords)
    }
  }

  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(record)
    }
    return record[rowKey] ?? index.toString()
  }

  const getCellValue = (column: ColumnType<T>, record: T, index: number) => {
    if (column.render) {
      return column.render(
        column.dataIndex ? record[column.dataIndex] : undefined,
        record,
        index
      )
    }
    return column.dataIndex ? record[column.dataIndex] : ''
  }

  const getAlignClass = (align?: 'left' | 'center' | 'right') => {
    if (align === 'center') return 'text-center'
    if (align === 'right') return 'text-right'
    return 'text-left'
  }

  // Calculate fixed column offsets
  const getFixedColumnStyle = (columnIndex: number, isHeader = false): { className: string; style?: React.CSSProperties } => {
    const column = columns[columnIndex]
    if (!column.fixed) return { className: '' }

    const classes = ['sticky', 'bg-base-100']
    let offset = 0
    const style: React.CSSProperties = {
      boxSizing: 'border-box',
    }

    // Calculate cumulative width for left-fixed columns
    if (column.fixed === 'left') {
      for (let i = 0; i < columnIndex; i++) {
        if (columns[i].fixed === 'left' && columns[i].width) {
          const colWidth = columns[i].width!
          const width = typeof colWidth === 'number'
            ? colWidth
            : parseInt(String(colWidth))
          if (!isNaN(width)) {
            offset += width
          }
        }
      }
      if (offset === 0) {
        classes.push('left-0')
      } else {
        style.left = `${offset}px`
      }
      classes.push(isHeader ? 'z-30' : 'z-20')

      // Add shadow to the rightmost left-fixed column
      let lastLeftFixedIndex = -1
      for (let i = columns.length - 1; i >= 0; i--) {
        if (columns[i].fixed === 'left') {
          lastLeftFixedIndex = i
          break
        }
      }
      if (columnIndex === lastLeftFixedIndex) {
        style.boxShadow = '2px 0 4px rgba(0, 0, 0, 0.1)'
      }
    }

    // Calculate cumulative width for right-fixed columns
    if (column.fixed === 'right') {
      for (let i = columnIndex + 1; i < columns.length; i++) {
        if (columns[i].fixed === 'right' && columns[i].width) {
          const colWidth = columns[i].width!
          const width = typeof colWidth === 'number'
            ? colWidth
            : parseInt(String(colWidth))
          if (!isNaN(width)) {
            offset += width
          }
        }
      }
      if (offset === 0) {
        classes.push('right-0')
      } else {
        style.right = `${offset}px`
      }
      classes.push(isHeader ? 'z-30' : 'z-20')

      // Add shadow to the leftmost right-fixed column
      const isFirstRightFixed = columnIndex === columns.findIndex((col) => col.fixed === 'right')
      if (isFirstRightFixed) {
        style.boxShadow = '-2px 0 4px rgba(0, 0, 0, 0.1)'
      }
    }

    return {
      className: classes.filter(Boolean).join(' '),
      style: Object.keys(style).length > 0 ? style : undefined,
    }
  }

  const tableClasses = [
    'table',
    'bg-base-100',
    size === 'xs' && 'table-xs',
    size === 'sm' && 'table-sm',
    size === 'lg' && 'table-lg',
    striped && 'table-zebra',
    pinRows && 'table-pin-rows',
    pinCols && 'table-pin-cols',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Check if any columns are fixed
  const hasFixedColumns = columns.some((col) => col.fixed)

  const wrapperClasses = [
    (!pinRows || hasFixedColumns) && 'overflow-x-auto',
    bordered && 'rounded-box border border-base-content/5 bg-base-100',
  ]
    .filter(Boolean)
    .join(' ')

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  const isAllSelected = paginatedData.length > 0 && selectedKeys.length === paginatedData.length

  return (
    <div className="space-y-4">
      <div className={wrapperClasses}>
        <table className={tableClasses} style={{ borderCollapse: 'separate', borderSpacing: 0, tableLayout: 'fixed' }}>
          <thead>
            <tr>
              {rowSelection && (
                <th style={{ width: 50 }} className="sticky left-0 z-20 bg-base-100">
                  {rowSelection.type !== 'radio' && (
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={isAllSelected}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  )}
                </th>
              )}
              {columns.map((column, columnIndex) => {
                const fixedStyle = getFixedColumnStyle(columnIndex, true)
                return (
                <th
                  key={column.key}
                  className={`${getAlignClass(column.align)} ${fixedStyle.className}`}
                  style={{
                    ...(column.width ? { width: column.width } : {}),
                    ...fixedStyle.style,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={column.sorter ? 'cursor-pointer select-none' : ''}
                      onClick={() => column.sorter && handleSort(column.key)}
                    >
                      {column.title}
                    </span>
                    {column.sorter && (
                      <div className="flex flex-col">
                        <svg
                          className={`w-3 h-3 ${sortState.columnKey === column.key && sortState.order === 'ascend' ? 'text-primary' : 'text-base-content/30'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" />
                        </svg>
                        <svg
                          className={`w-3 h-3 -mt-1 ${sortState.columnKey === column.key && sortState.order === 'descend' ? 'text-primary' : 'text-base-content/30'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    )}
                    {column.filters && (
                      <FilterDropdown
                        filters={column.filters}
                        selectedValues={filterState[column.key] || []}
                        onChange={(values) => handleFilterChange(column.key, values)}
                      />
                    )}
                  </div>
                </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((record, index) => {
              const rowProps = onRow?.(record, index) || {}
              const key = getRowKey(record, index)
              const isSelected = selectedKeys.includes(key)
              const rowClasses = [
                hoverable && 'hover:bg-base-300',
                isSelected && 'bg-primary/10',
              ]
                .filter(Boolean)
                .join(' ')

              const checkboxProps = rowSelection?.getCheckboxProps?.(record) || {}

              return (
                <tr
                  key={key}
                  className={rowClasses}
                  {...rowProps}
                >
                  {rowSelection && (
                    <td className="sticky left-0 z-10 bg-base-100">
                      <input
                        type={rowSelection.type === 'radio' ? 'radio' : 'checkbox'}
                        className={rowSelection.type === 'radio' ? 'radio radio-sm' : 'checkbox checkbox-sm'}
                        checked={isSelected}
                        onChange={(e) => handleSelectRow(record, index, e.target.checked)}
                        {...checkboxProps}
                      />
                    </td>
                  )}
                  {columns.map((column, columnIndex) => {
                    const fixedStyle = getFixedColumnStyle(columnIndex, false)
                    return (
                    <td
                      key={column.key}
                      className={`${getAlignClass(column.align)} ${fixedStyle.className}`}
                      style={fixedStyle.style}
                    >
                      {getCellValue(column, record, index)}
                    </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {isPaginationEnabled && totalPages > 1 && (
        <div className="flex justify-end">
          <div className="join">
            <button
              className="join-item btn btn-sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              «
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`join-item btn btn-sm ${currentPage === page ? 'btn-active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="join-item btn btn-sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
