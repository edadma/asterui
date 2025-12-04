# PageLayout

Page layout component for common page structures with header, content, and footer areas.

## Import

```tsx
import { PageLayout } from 'asterui'
```

## Basic Usage

```tsx
<PageLayout>
  <PageLayout.Header>Header</PageLayout.Header>
  <PageLayout.Content>Main content</PageLayout.Content>
  <PageLayout.Footer>Footer</PageLayout.Footer>
</PageLayout>
```

## With Sidebar

```tsx
<PageLayout>
  <PageLayout.Header>Header</PageLayout.Header>
  <PageLayout.Body>
    <PageLayout.Sidebar>Sidebar</PageLayout.Sidebar>
    <PageLayout.Content>Main content</PageLayout.Content>
  </PageLayout.Body>
  <PageLayout.Footer>Footer</PageLayout.Footer>
</PageLayout>
```

## Sidebar Position

```tsx
<PageLayout>
  <PageLayout.Body>
    <PageLayout.Content>Main content</PageLayout.Content>
    <PageLayout.Sidebar position="right">Right sidebar</PageLayout.Sidebar>
  </PageLayout.Body>
</PageLayout>
```

## Fixed Header

```tsx
<PageLayout>
  <PageLayout.Header fixed>Fixed Header</PageLayout.Header>
  <PageLayout.Content>Scrollable content</PageLayout.Content>
</PageLayout>
```

## API

### PageLayout Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| children | Layout sections | `React.ReactNode` | - |
| className | Additional CSS classes | `string` | - |

### PageLayout.Header Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| fixed | Fixed position header | `boolean` | `false` |
| className | Additional CSS classes | `string` | - |

### PageLayout.Sidebar Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| position | Sidebar position | `'left' \| 'right'` | `'left'` |
| width | Sidebar width | `string \| number` | `'250px'` |
| collapsible | Allow collapse | `boolean` | `false` |
| collapsed | Collapsed state | `boolean` | `false` |
| className | Additional CSS classes | `string` | - |

### PageLayout.Content Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| className | Additional CSS classes | `string` | - |

### PageLayout.Footer Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| className | Additional CSS classes | `string` | - |

## Accessibility

- Semantic HTML structure with header, main, aside, footer
- Proper landmark roles for screen readers
- Keyboard navigable sections
