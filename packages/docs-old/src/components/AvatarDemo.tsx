import { Avatar, Space } from '@aster-ui/prefixed'
import { Demo } from './Demo'
import { UserIcon, UserCircleIcon } from '@aster-ui/icons'

const imgSrc = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'

export function BasicDemo() {
  return (
    <Demo>
      <Avatar src={imgSrc} alt="User avatar" />
    </Demo>
  )
}

export function SizesDemo() {
  return (
    <Demo>
      <Space direction="horizontal" size="sm" align="center">
        <Avatar size="xs" src={imgSrc} />
        <Avatar size="sm" src={imgSrc} />
        <Avatar size="md" src={imgSrc} />
        <Avatar size="lg" src={imgSrc} />
        <Avatar size="xl" src={imgSrc} />
      </Space>
    </Demo>
  )
}

export function ShapesDemo() {
  return (
    <Demo>
      <Space direction="horizontal" size="sm">
        <Avatar shape="circle" src={imgSrc} />
        <Avatar shape="square" src={imgSrc} />
      </Space>
    </Demo>
  )
}

export function StatusDemo() {
  return (
    <Demo>
      <Space direction="horizontal" size="sm">
        <Avatar status="online" src={imgSrc} />
        <Avatar status="offline" src={imgSrc} />
      </Space>
    </Demo>
  )
}

export function TextDemo() {
  return (
    <Demo>
      <Space direction="horizontal" size="sm" align="center">
        <Avatar size="xl">
          <span className="text-3xl">AI</span>
        </Avatar>
        <Avatar size="lg">
          <span className="text-xl">JD</span>
        </Avatar>
        <Avatar size="md">
          <span>MX</span>
        </Avatar>
      </Space>
    </Demo>
  )
}

export function IconDemo() {
  return (
    <Demo>
      <Space direction="horizontal" size="sm">
        <Avatar icon={<UserIcon className="h-8 w-8" />} />
        <Avatar size="lg" icon={<UserCircleIcon className="h-10 w-10" />} />
      </Space>
    </Demo>
  )
}

export function GroupDemo() {
  return (
    <Demo>
      <Avatar.Group>
        <Avatar size="sm" src={imgSrc} />
        <Avatar size="sm" src={imgSrc} />
        <Avatar size="sm" src={imgSrc} />
        <Avatar size="sm" src={imgSrc} />
      </Avatar.Group>
    </Demo>
  )
}

export function GroupMaxDemo() {
  return (
    <Demo>
      <Avatar.Group max={3}>
        <Avatar size="sm" src={imgSrc} />
        <Avatar size="sm" src={imgSrc} />
        <Avatar size="sm" src={imgSrc} />
        <Avatar size="sm" src={imgSrc} />
        <Avatar size="sm" src={imgSrc} />
        <Avatar size="sm" src={imgSrc} />
      </Avatar.Group>
    </Demo>
  )
}
