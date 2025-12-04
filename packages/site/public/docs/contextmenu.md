# ContextMenu

Right-click context menu component for displaying contextual actions.

## Import

```tsx
import { ContextMenu } from 'asterui'
```

## Basic Usage

```tsx
<ContextMenu
  items={[
    { key: 'cut', label: 'Cut' },
    { key: 'copy', label: 'Copy' },
    { key: 'paste', label: 'Paste' },
  ]}
  onSelect={(key) => console.log('Selected:', key)}
>
  <div className="p-8 bg-base-200 rounded">
    Right-click here
  </div>
</ContextMenu>
```

## With Icons

```tsx
<ContextMenu
  items={[
    { key: 'edit', label: 'Edit', icon: <EditIcon /> },
    { key: 'delete', label: 'Delete', icon: <TrashIcon /> },
  ]}
  onSelect={handleAction}
>
  <div>Right-click for options</div>
</ContextMenu>
```

## Disabled Items

```tsx
<ContextMenu
  items={[
    { key: 'copy', label: 'Copy' },
    { key: 'paste', label: 'Paste', disabled: true },
  ]}
  onSelect={handleAction}
>
  <div>Some options disabled</div>
</ContextMenu>
```

## With Dividers

```tsx
<ContextMenu
  items={[
    { key: 'cut', label: 'Cut' },
    { key: 'copy', label: 'Copy' },
    { type: 'divider' },
    { key: 'delete', label: 'Delete' },
  ]}
  onSelect={handleAction}
>
  <div>Grouped options</div>
</ContextMenu>
```

## API

### ContextMenu Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| items | Menu items | `ContextMenuItem[]` | - |
| onSelect | Selection callback | `(key: string) => void` | - |
| children | Trigger element | `React.ReactNode` | - |
| className | Additional CSS classes | `string` | - |

### ContextMenuItem

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| key | Unique identifier | `string` | - |
| label | Display text | `React.ReactNode` | - |
| icon | Icon element | `React.ReactNode` | - |
| disabled | Disable item | `boolean` | `false` |
| type | Item type | `'item' \| 'divider'` | `'item'` |

## Accessibility

- Menu opens on right-click (contextmenu event)
- Keyboard navigation with arrow keys
- Escape closes the menu
- Click outside closes the menu
