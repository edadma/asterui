import { Alert, Button, Space } from 'asterui'
import { Demo } from './Demo'
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from '@aster-ui/icons'

export function BasicDemo() {
  return (
    <Demo>
      <Alert>
        <InformationCircleIcon className="h-6 w-6 shrink-0" />
        <span>This is a basic alert</span>
      </Alert>
    </Demo>
  )
}

export function TypesDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Alert type="info">
          <InformationCircleIcon className="h-6 w-6 shrink-0" />
          <span>Info: New software update available</span>
        </Alert>
        <Alert type="success">
          <CheckCircleIcon className="h-6 w-6 shrink-0" />
          <span>Success: Your purchase has been confirmed</span>
        </Alert>
        <Alert type="warning">
          <ExclamationTriangleIcon className="h-6 w-6 shrink-0" />
          <span>Warning: Invalid email address</span>
        </Alert>
        <Alert type="error">
          <XCircleIcon className="h-6 w-6 shrink-0" />
          <span>Error: Invalid credentials</span>
        </Alert>
      </Space>
    </Demo>
  )
}

export function ActionDemo() {
  return (
    <Demo>
      <Alert type="warning">
        <ExclamationTriangleIcon className="h-6 w-6 shrink-0" />
        <span>We use cookies for no reason</span>
        <div>
          <Button size="sm">Accept</Button>
        </div>
      </Alert>
    </Demo>
  )
}

export function OutlineDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Alert type="info" outline>
          <InformationCircleIcon className="h-6 w-6 shrink-0" />
          <span>Info outline alert</span>
        </Alert>
        <Alert type="success" outline>
          <CheckCircleIcon className="h-6 w-6 shrink-0" />
          <span>Success outline alert</span>
        </Alert>
      </Space>
    </Demo>
  )
}

export function DashDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Alert type="warning" dash>
          <ExclamationTriangleIcon className="h-6 w-6 shrink-0" />
          <span>Warning dash alert</span>
        </Alert>
        <Alert type="error" dash>
          <XCircleIcon className="h-6 w-6 shrink-0" />
          <span>Error dash alert</span>
        </Alert>
      </Space>
    </Demo>
  )
}

export function SoftDemo() {
  return (
    <Demo>
      <Space direction="vertical" size="sm">
        <Alert type="info" soft>
          <InformationCircleIcon className="h-6 w-6 shrink-0" />
          <span>Info soft alert</span>
        </Alert>
        <Alert type="success" soft>
          <CheckCircleIcon className="h-6 w-6 shrink-0" />
          <span>Success soft alert</span>
        </Alert>
      </Space>
    </Demo>
  )
}
