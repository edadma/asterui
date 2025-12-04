import React from 'react'
import { createRoot } from 'react-dom/client'
import { Stack, Button, Card } from 'asterui'

const VerticalDemo = () => (
  <Stack>
    <Button>First</Button>
    <Button>Second</Button>
    <Button>Third</Button>
  </Stack>
)

const HorizontalDemo = () => (
  <Stack direction="horizontal">
    <Button>First</Button>
    <Button>Second</Button>
    <Button>Third</Button>
  </Stack>
)

const SpacingDemo = () => (
  <Stack direction="horizontal" spacing={8}>
    <Button>Large</Button>
    <Button>Gap</Button>
    <Button>Between</Button>
  </Stack>
)

const AlignmentDemo = () => (
  <Stack direction="horizontal" align="center" className="h-24 bg-base-200 p-4 rounded">
    <Button size="sm">Small</Button>
    <Button size="lg">Large</Button>
    <Button>Default</Button>
  </Stack>
)

const JustifyDemo = () => (
  <Stack direction="horizontal" justify="between" className="w-full">
    <Button>Start</Button>
    <Button>Center</Button>
    <Button>End</Button>
  </Stack>
)

const WrapDemo = () => (
  <Stack direction="horizontal" wrap spacing={2} className="max-w-xs">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    <Button>Four</Button>
    <Button>Five</Button>
    <Button>Six</Button>
  </Stack>
)

const NestedDemo = () => (
  <Stack spacing={6}>
    <h3 className="font-bold">Header</h3>
    <Stack direction="horizontal" spacing={4}>
      <Card className="flex-1"><span className="p-4 block">Left</span></Card>
      <Card className="flex-1"><span className="p-4 block">Right</span></Card>
    </Stack>
    <Stack direction="horizontal" justify="end">
      <Button>Cancel</Button>
      <Button type="primary">Save</Button>
    </Stack>
  </Stack>
)

const demos: Record<string, React.FC> = {
  vertical: VerticalDemo,
  horizontal: HorizontalDemo,
  spacing: SpacingDemo,
  alignment: AlignmentDemo,
  justify: JustifyDemo,
  wrap: WrapDemo,
  nested: NestedDemo,
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const Demo = demos[exampleId]
    createRoot(container).render(<Demo />)
  }
})
