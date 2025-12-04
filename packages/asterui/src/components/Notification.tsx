import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

export type NotificationType = 'success' | 'info' | 'warning' | 'error'
export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

export interface NotificationConfig {
  message: React.ReactNode
  description?: React.ReactNode
  type?: NotificationType
  duration?: number // in seconds, 0 = no auto close
  placement?: NotificationPlacement
  closable?: boolean
  onClick?: () => void
  onClose?: () => void
}

interface NotificationItem extends NotificationConfig {
  id: string
  createdAt: number
}

type Listener = () => void

class NotificationManager {
  private notifications: NotificationItem[] = []
  private listeners: Listener[] = []
  private container: HTMLDivElement | null = null
  private root: ReactDOM.Root | null = null
  private idCounter = 0

  subscribe(listener: Listener) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  getNotifications() {
    return this.notifications
  }

  private emit() {
    this.listeners.forEach((listener) => listener())
  }

  private ensureContainer() {
    if (!this.container) {
      this.container = document.createElement('div')
      document.body.appendChild(this.container)
      this.root = ReactDOM.createRoot(this.container)
      this.root.render(<NotificationContainer manager={this} />)
    }
  }

  open(config: NotificationConfig) {
    this.ensureContainer()

    const id = `notification-${++this.idCounter}`
    const notification: NotificationItem = {
      ...config,
      id,
      createdAt: Date.now(),
      duration: config.duration ?? 4.5,
      placement: config.placement ?? 'topRight',
      closable: config.closable ?? true,
      type: config.type ?? 'info',
    }

    this.notifications.push(notification)
    this.emit()

    // Auto-dismiss
    if (notification.duration && notification.duration > 0) {
      setTimeout(() => {
        this.close(id)
      }, notification.duration * 1000)
    }

    return id
  }

  close(id: string) {
    const notification = this.notifications.find((n) => n.id === id)
    this.notifications = this.notifications.filter((n) => n.id !== id)
    this.emit()

    if (notification?.onClose) {
      notification.onClose()
    }
  }

  success(config: Omit<NotificationConfig, 'type'>) {
    return this.open({ ...config, type: 'success' })
  }

  error(config: Omit<NotificationConfig, 'type'>) {
    return this.open({ ...config, type: 'error' })
  }

  info(config: Omit<NotificationConfig, 'type'>) {
    return this.open({ ...config, type: 'info' })
  }

  warning(config: Omit<NotificationConfig, 'type'>) {
    return this.open({ ...config, type: 'warning' })
  }

  destroy() {
    this.notifications = []
    this.emit()
  }
}

interface NotificationContainerProps {
  manager: NotificationManager
}

function NotificationContainer({ manager }: NotificationContainerProps) {
  const [, forceUpdate] = useState({})

  useEffect(() => {
    const unsubscribe = manager.subscribe(() => {
      forceUpdate({})
    })
    return unsubscribe
  }, [manager])

  const notifications = manager.getNotifications()

  // Group by placement
  const grouped: Record<NotificationPlacement, NotificationItem[]> = {
    topLeft: [],
    topRight: [],
    bottomLeft: [],
    bottomRight: [],
  }

  notifications.forEach((notification) => {
    grouped[notification.placement!].push(notification)
  })

  const placementClasses: Record<NotificationPlacement, string> = {
    topRight: 'toast toast-top toast-end',
    topLeft: 'toast toast-top toast-start',
    bottomRight: 'toast toast-bottom toast-end',
    bottomLeft: 'toast toast-bottom toast-start',
  }

  return (
    <>
      {Object.entries(grouped).map(([placement, items]) => {
        if (items.length === 0) return null

        return (
          <div key={placement} className={placementClasses[placement as NotificationPlacement]}>
            {items.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onClose={() => manager.close(notification.id)}
              />
            ))}
          </div>
        )
      })}
    </>
  )
}

interface NotificationItemProps {
  notification: NotificationItem
  onClose: () => void
}

function NotificationItem({ notification, onClose }: NotificationItemProps) {
  const alertTypeClasses: Record<NotificationType, string> = {
    success: 'alert-success',
    error: 'alert-error',
    info: 'alert-info',
    warning: 'alert-warning',
  }

  const handleClick = () => {
    if (notification.onClick) {
      notification.onClick()
    }
  }

  return (
    <div
      className={`alert ${alertTypeClasses[notification.type!]} shadow-lg cursor-pointer min-w-[300px] max-w-[400px]`}
      onClick={handleClick}
    >
      <div className="flex-1">
        {notification.message && <div className="font-bold">{notification.message}</div>}
        {notification.description && <div className="text-sm">{notification.description}</div>}
      </div>
      {notification.closable && (
        <button
          className="btn btn-sm btn-ghost btn-circle"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
        >
          ✕
        </button>
      )}
    </div>
  )
}

export const notification = new NotificationManager()
