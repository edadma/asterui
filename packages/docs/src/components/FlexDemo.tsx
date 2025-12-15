import { Flex, Button, Badge, Card, Typography } from 'asterui'
import { Demo } from './Demo'

const { Title, Paragraph } = Typography

export function BasicDemo() {
  return (
    <Demo>
      <Flex gap="sm">
        <Button color="primary">Button 1</Button>
        <Button color="secondary">Button 2</Button>
        <Button color="accent">Button 3</Button>
      </Flex>
    </Demo>
  )
}

export function DirectionDemo() {
  return (
    <Demo>
      <Flex direction="column" gap="sm">
        <Button color="primary">First</Button>
        <Button color="secondary">Second</Button>
        <Button color="accent">Third</Button>
      </Flex>
    </Demo>
  )
}

export function JustifyDemo() {
  return (
    <Demo>
      <Flex direction="column" gap="md">
        <Flex justify="start" gap="sm" className="bg-base-200 p-2 rounded">
          <Button size="sm">Start</Button>
          <Button size="sm">Items</Button>
        </Flex>
        <Flex justify="center" gap="sm" className="bg-base-200 p-2 rounded">
          <Button size="sm">Center</Button>
          <Button size="sm">Items</Button>
        </Flex>
        <Flex justify="end" gap="sm" className="bg-base-200 p-2 rounded">
          <Button size="sm">End</Button>
          <Button size="sm">Items</Button>
        </Flex>
        <Flex justify="between" className="bg-base-200 p-2 rounded">
          <Button size="sm">Between</Button>
          <Button size="sm">Items</Button>
        </Flex>
      </Flex>
    </Demo>
  )
}

export function AlignDemo() {
  return (
    <Demo>
      <Flex gap="md">
        <Flex align="start" gap="sm" className="bg-base-200 p-2 rounded h-24">
          <Button size="xs">Top</Button>
          <Button size="sm">Aligned</Button>
        </Flex>
        <Flex align="center" gap="sm" className="bg-base-200 p-2 rounded h-24">
          <Button size="xs">Center</Button>
          <Button size="sm">Aligned</Button>
        </Flex>
        <Flex align="end" gap="sm" className="bg-base-200 p-2 rounded h-24">
          <Button size="xs">Bottom</Button>
          <Button size="sm">Aligned</Button>
        </Flex>
      </Flex>
    </Demo>
  )
}

export function GapDemo() {
  return (
    <Demo>
      <Flex direction="column" gap="lg">
        <Flex gap="xs">
          <Badge>XS</Badge>
          <Badge>Gap</Badge>
        </Flex>
        <Flex gap="sm">
          <Badge>SM</Badge>
          <Badge>Gap</Badge>
        </Flex>
        <Flex gap="md">
          <Badge>MD</Badge>
          <Badge>Gap</Badge>
        </Flex>
        <Flex gap="lg">
          <Badge>LG</Badge>
          <Badge>Gap</Badge>
        </Flex>
        <Flex gap="xl">
          <Badge>XL</Badge>
          <Badge>Gap</Badge>
        </Flex>
      </Flex>
    </Demo>
  )
}

export function WrapDemo() {
  return (
    <Demo>
      <Flex wrap gap="sm">
        <Badge>Tag 1</Badge>
        <Badge>Tag 2</Badge>
        <Badge>Tag 3</Badge>
        <Badge>Tag 4</Badge>
        <Badge>Tag 5</Badge>
        <Badge>Tag 6</Badge>
        <Badge>Tag 7</Badge>
        <Badge>Tag 8</Badge>
      </Flex>
    </Demo>
  )
}

export function CenteringDemo() {
  return (
    <Demo>
      <Flex
        justify="center"
        align="center"
        className="bg-base-200 rounded-lg"
        style={{ height: '200px' }}
      >
        <Card className="w-64">
          <Title level={4}>Centered Card</Title>
          <Paragraph>This card is centered in its container.</Paragraph>
        </Card>
      </Flex>
    </Demo>
  )
}

export function NestedDemo() {
  return (
    <Demo>
      <Flex direction="column" gap="md">
        <Flex justify="between" className="bg-base-200 p-4 rounded">
          <Button variant="ghost">Logo</Button>
          <Flex gap="sm">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button color="primary">Contact</Button>
          </Flex>
        </Flex>
        <Flex gap="md" className="p-4">
          <Flex direction="column" gap="sm" flex="1" className="bg-base-200 p-4 rounded">
            <Button variant="ghost" shape="block">Sidebar Item 1</Button>
            <Button variant="ghost" shape="block">Sidebar Item 2</Button>
          </Flex>
          <Flex flex="1" className="bg-base-200 p-4 rounded min-h-32" justify="center" align="center">
            Main Content
          </Flex>
        </Flex>
      </Flex>
    </Demo>
  )
}
