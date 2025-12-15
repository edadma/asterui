import { FloatButton } from 'asterui'
import { Demo } from './Demo'

export function BasicDemo() {
  return (
    <Demo>
      <div className="relative h-32 bg-base-200 rounded-lg">
        <FloatButton
          icon={<span className="text-lg">+</span>}
          onClick={() => alert('Button clicked!')}
          className="!absolute !right-4 !bottom-4"
        />
      </div>
    </Demo>
  )
}

export function WithTooltipDemo() {
  return (
    <Demo>
      <div className="relative h-32 bg-base-200 rounded-lg">
        <FloatButton
          icon={<span className="text-lg">+</span>}
          tooltip="Add new item"
          type="primary"
          onClick={() => alert('Add clicked!')}
          className="!absolute !right-4 !bottom-4"
        />
      </div>
    </Demo>
  )
}

export function TypesDemo() {
  return (
    <Demo>
      <div className="relative h-32 bg-base-200 rounded-lg">
        <FloatButton
          icon={<span className="text-lg">+</span>}
          type="default"
          className="!absolute !right-20 !bottom-4"
        />
        <FloatButton
          icon={<span className="text-lg">♥</span>}
          type="primary"
          className="!absolute !right-4 !bottom-4"
        />
      </div>
    </Demo>
  )
}

export function ShapesDemo() {
  return (
    <Demo>
      <div className="relative h-32 bg-base-200 rounded-lg">
        <FloatButton
          icon={<span className="text-lg">+</span>}
          shape="circle"
          className="!absolute !right-20 !bottom-4"
        />
        <FloatButton
          icon={<span className="text-lg">+</span>}
          shape="square"
          className="!absolute !right-4 !bottom-4"
        />
      </div>
    </Demo>
  )
}

export function WithBadgeDemo() {
  return (
    <Demo>
      <div className="relative h-32 bg-base-200 rounded-lg">
        <FloatButton
          icon={<span className="text-lg">💬</span>}
          badge={5}
          onClick={() => alert('You have 5 unread messages')}
          className="!absolute !right-4 !bottom-4"
        />
      </div>
    </Demo>
  )
}

export function GroupDemo() {
  return (
    <Demo>
      <div className="relative h-48 bg-base-200 rounded-lg">
        <FloatButton.Group
          icon={<span className="text-lg">+</span>}
          className="!absolute !right-4 !bottom-4"
        >
          <FloatButton
            icon={<span>?</span>}
            onClick={() => alert('Help section')}
          />
          <FloatButton
            icon={<span>💬</span>}
            onClick={() => alert('Contact support')}
          />
          <FloatButton
            icon={<span>↻</span>}
            onClick={() => alert('Refreshing...')}
          />
        </FloatButton.Group>
      </div>
    </Demo>
  )
}

export function BackTopDemo() {
  return (
    <Demo>
      <div className="relative h-32 bg-base-200 rounded-lg flex items-center justify-center text-base-content/60">
        <p>BackTop button appears after scrolling down 400px</p>
      </div>
    </Demo>
  )
}
