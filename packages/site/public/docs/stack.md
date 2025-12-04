# Stack

Flexbox-based layout component for arranging elements with consistent spacing.

## Import

```tsx
import { Stack } from 'asterui'
```

## Basic Usage

```tsx
<Stack>
  <Button>First</Button>
  <Button>Second</Button>
  <Button>Third</Button>
</Stack>
```

## Horizontal Stack

```tsx
<Stack direction="horizontal">
  <Button>First</Button>
  <Button>Second</Button>
  <Button>Third</Button>
</Stack>
```

## Custom Spacing

```tsx
<Stack direction="horizontal" spacing={8}>
  <Button>Large</Button>
  <Button>Gap</Button>
  <Button>Between</Button>
</Stack>
```

## Alignment

```tsx
<Stack direction="horizontal" align="center">
  <Button size="sm">Small</Button>
  <Button size="lg">Large</Button>
  <Button>Default</Button>
</Stack>
```

## Justify Content

```tsx
<Stack direction="horizontal" justify="between">
  <Button>Start</Button>
  <Button>Center</Button>
  <Button>End</Button>
</Stack>
```

## Wrap

```tsx
<Stack direction="horizontal" wrap spacing={2}>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
  <Button>Four</Button>
  <Button>Five</Button>
</Stack>
```

## Nested Stacks

```tsx
<Stack spacing={6}>
  <h3>Header</h3>
  <Stack direction="horizontal" spacing={4}>
    <Card>Left</Card>
    <Card>Right</Card>
  </Stack>
  <Stack direction="horizontal" justify="end">
    <Button>Cancel</Button>
    <Button type="primary">Save</Button>
  </Stack>
</Stack>
```

## API

### Stack Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| direction | Stack direction | `'vertical' \| 'horizontal'` | `'vertical'` |
| spacing | Gap between items (in units of 0.25rem) | `number` | `4` |
| align | Cross-axis alignment | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | - |
| justify | Main-axis alignment | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | - |
| wrap | Allow items to wrap | `boolean` | `false` |
| className | Additional CSS classes | `string` | - |

## Accessibility

- Uses semantic flex layout
- Maintains logical reading order
- Works with all focusable child elements
