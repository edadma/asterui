# Countdown

Countdown timer component for displaying time remaining until a target date.

## Import

```tsx
import { Countdown } from 'asterui'
```

## Basic Usage

```tsx
<Countdown value={3600} />
```

## With Labels

```tsx
<Countdown
  value={90061}
  showLabels
/>
```

## Custom Format

```tsx
<Countdown
  value={3661}
  format="HH:mm:ss"
/>
```

## With onComplete Callback

```tsx
<Countdown
  value={10}
  onComplete={() => console.log('Countdown finished!')}
/>
```

## Different Sizes

```tsx
<Countdown value={3600} size="sm" />
<Countdown value={3600} size="md" />
<Countdown value={3600} size="lg" />
```

## API

### Countdown Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Time in seconds | `number` | - |
| format | Display format | `string` | `'DD:HH:mm:ss'` |
| showLabels | Show unit labels | `boolean` | `false` |
| size | Component size | `'sm' \| 'md' \| 'lg'` | `'md'` |
| onComplete | Callback when countdown reaches zero | `() => void` | - |
| className | Additional CSS classes | `string` | - |

## Format Tokens

| Token | Description |
|-------|-------------|
| DD | Days |
| HH | Hours |
| mm | Minutes |
| ss | Seconds |

## Accessibility

- Uses semantic time element
- Announces countdown updates to screen readers
- Displays in a clear, readable format
