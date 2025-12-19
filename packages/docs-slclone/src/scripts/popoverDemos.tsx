import { createRoot } from 'react-dom/client'
import { Popover, Button } from 'asterui'

const demos: Record<string, React.ReactNode> = {
  basic: (
    <Popover content="This is a simple popover">
      <Button>Hover me</Button>
    </Popover>
  ),
  title: (
    <Popover
      title="User Information"
      content="Additional details about the user and their account settings."
    >
      <Button>Hover me</Button>
    </Popover>
  ),
  triggers: (
    <div className="flex gap-4">
      <Popover trigger="hover" content="Triggered by hovering">
        <Button>Hover</Button>
      </Popover>
      <Popover trigger="click" content="Triggered by clicking">
        <Button>Click</Button>
      </Popover>
      <Popover trigger="focus" content="Triggered by focusing">
        <Button>Focus</Button>
      </Popover>
    </div>
  ),
  'placement-top': (
    <div className="flex gap-4 justify-center">
      <Popover placement="top" content="Top placement">
        <Button>Top</Button>
      </Popover>
      <Popover placement="topLeft" content="Top left placement">
        <Button>Top Left</Button>
      </Popover>
      <Popover placement="topRight" content="Top right placement">
        <Button>Top Right</Button>
      </Popover>
    </div>
  ),
  'placement-bottom': (
    <div className="flex gap-4 justify-center">
      <Popover placement="bottom" content="Bottom placement">
        <Button>Bottom</Button>
      </Popover>
      <Popover placement="bottomLeft" content="Bottom left placement">
        <Button>Bottom Left</Button>
      </Popover>
      <Popover placement="bottomRight" content="Bottom right placement">
        <Button>Bottom Right</Button>
      </Popover>
    </div>
  ),
  'placement-left': (
    <div className="flex gap-4 justify-center">
      <Popover placement="left" content="Left placement">
        <Button>Left</Button>
      </Popover>
      <Popover placement="leftTop" content="Left top placement">
        <Button>Left Top</Button>
      </Popover>
      <Popover placement="leftBottom" content="Left bottom placement">
        <Button>Left Bottom</Button>
      </Popover>
    </div>
  ),
  'placement-right': (
    <div className="flex gap-4 justify-center">
      <Popover placement="right" content="Right placement">
        <Button>Right</Button>
      </Popover>
      <Popover placement="rightTop" content="Right top placement">
        <Button>Right Top</Button>
      </Popover>
      <Popover placement="rightBottom" content="Right bottom placement">
        <Button>Right Bottom</Button>
      </Popover>
    </div>
  ),
}

// Mount demos
document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const root = createRoot(container as HTMLElement)
    root.render(demos[exampleId])
  }
})
