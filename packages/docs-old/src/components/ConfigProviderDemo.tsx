import React, { useState } from 'react'
import { ConfigProvider, Button, DatePicker, Pagination, Empty } from '@aster-ui/prefixed'
import { Demo } from './Demo'

// @example-imports: { ConfigProvider, Button, DatePicker, Pagination } from 'asterui'
export function BasicDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <ConfigProvider componentSize="small">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button>Small Button</Button>
            <Button variant="outline">Outline</Button>
          </div>
          <Pagination total={100} />
        </div>
      </ConfigProvider>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { ConfigProvider, Button } from 'asterui'
// @example-imports: { useState } from 'react'
export function SizeDemo() {
  // @example-include
  const [size, setSize] = useState<'small' | 'middle' | 'large'>('middle')
  // @example-include-end

  return (
    <Demo>
      {/* @example-return */}
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button size="sm" variant={size === 'small' ? 'primary' : 'outline'} onClick={() => setSize('small')}>Small</Button>
          <Button size="sm" variant={size === 'middle' ? 'primary' : 'outline'} onClick={() => setSize('middle')}>Middle</Button>
          <Button size="sm" variant={size === 'large' ? 'primary' : 'outline'} onClick={() => setSize('large')}>Large</Button>
        </div>
        <ConfigProvider componentSize={size}>
          <div className="flex gap-2 flex-wrap">
            <Button>Button</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </ConfigProvider>
      </div>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { ConfigProvider, Empty } from 'asterui'
// @example-imports: { zhCN } from 'asterui/locale'
export function LocaleDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium mb-2">English (default)</p>
          <Empty />
        </div>
        <div>
          <p className="text-sm font-medium mb-2">Custom locale</p>
          <ConfigProvider locale={{ Empty: { description: 'Keine Daten' } }}>
            <Empty />
          </ConfigProvider>
        </div>
      </div>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { ConfigProvider, Button, Pagination } from 'asterui'
export function DirectionDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">LTR (default)</p>
          <ConfigProvider direction="ltr">
            <div className="flex gap-2">
              <Button>First</Button>
              <Button>Second</Button>
              <Button>Third</Button>
            </div>
          </ConfigProvider>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">RTL</p>
          <ConfigProvider direction="rtl">
            <div className="flex gap-2" dir="rtl">
              <Button>First</Button>
              <Button>Second</Button>
              <Button>Third</Button>
            </div>
          </ConfigProvider>
        </div>
      </div>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { ConfigProvider, Button } from 'asterui'
export function NestedDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <ConfigProvider componentSize="large">
        <div className="space-y-4">
          <p className="text-sm">Outer: large size</p>
          <Button>Large Button</Button>

          <ConfigProvider componentSize="small">
            <div className="p-4 bg-base-200 rounded-lg space-y-2">
              <p className="text-sm">Inner: small size (overrides parent)</p>
              <Button>Small Button</Button>
            </div>
          </ConfigProvider>
        </div>
      </ConfigProvider>
      {/* @example-return-end */}
    </Demo>
  )
}
