import { Avatar, Space } from '@aster-ui/prefixed'
import { Demo } from './Demo'
import { UserIcon, UserCircleIcon } from '@aster-ui/icons-prefixed'

const avatarSrc = '/avatar-1.webp'

// @example-imports: { Avatar } from 'asterui'
export function BasicDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Avatar
        src={avatarSrc}
        alt="User avatar"
      />
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Avatar, Space } from 'asterui'
export function SizesDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space direction="horizontal" size="sm" align="center">
        <Avatar size="xs" src={avatarSrc} />
        <Avatar size="sm" src={avatarSrc} />
        <Avatar size="md" src={avatarSrc} />
        <Avatar size="lg" src={avatarSrc} />
        <Avatar size="xl" src={avatarSrc} />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Avatar, Space } from 'asterui'
export function ShapesDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space direction="horizontal" size="sm">
        <Avatar shape="circle" src={avatarSrc} />
        <Avatar shape="square" src={avatarSrc} />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Avatar, Space } from 'asterui'
export function StatusDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space direction="horizontal" size="sm">
        <Avatar status="online" src={avatarSrc} />
        <Avatar status="offline" src={avatarSrc} />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Avatar, Space } from 'asterui'
export function TextDemo() {
  return (
    <Demo>
      {/* @example-return */}
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
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Avatar, Space } from 'asterui'
// @example-imports: { UserIcon, UserCircleIcon } from '@aster-ui/icons'
export function IconDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space direction="horizontal" size="sm">
        <Avatar icon={<UserIcon size={32} />} />
        <Avatar size="lg" icon={<UserCircleIcon size={40} />} />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Avatar } from 'asterui'
export function GroupDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Avatar.Group>
        <Avatar src={avatarSrc} />
        <Avatar src={avatarSrc} />
        <Avatar src={avatarSrc} />
        <Avatar src={avatarSrc} />
      </Avatar.Group>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { Avatar } from 'asterui'
export function GroupMaxDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Avatar.Group max={3}>
        <Avatar src={avatarSrc} />
        <Avatar src={avatarSrc} />
        <Avatar src={avatarSrc} />
        <Avatar src={avatarSrc} />
        <Avatar src={avatarSrc} />
        <Avatar src={avatarSrc} />
      </Avatar.Group>
      {/* @example-return-end */}
    </Demo>
  )
}
