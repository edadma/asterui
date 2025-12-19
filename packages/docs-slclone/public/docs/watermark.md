# Watermark

Overlay repeating text or image watermarks over any container while keeping content interactive.

## Usage

```tsx
import { Watermark, Card } from 'asterui'

export const TextWatermark = () => (
  <Watermark content="Confidential" gap={[140, 120]} font={{ fontWeight: 700 }}>
    <Card title="Product Brief" className="bg-base-200 min-h-[320px]">
      Provide enough spacing and padding on parents so the watermark tiles remain visible.
    </Card>
  </Watermark>
)
```

### Image watermark

```tsx
const logoSvg = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><circle cx="100" cy="100" r="88" fill="rgba(59,130,246,0.18)" /><text x="100" y="115" text-anchor="middle" font-size="48" font-family="sans-serif" fill="rgba(15,23,42,0.35)" font-weight="700">AU</text></svg>')

export const ImageWatermark = () => (
  <Watermark image={logoSvg} width={160} height={160} gap={[120, 120]} rotate={-25}>
    <div className="bg-base-200 border border-base-300 rounded-box p-6 min-h-[320px]">
      Image watermark demo
    </div>
  </Watermark>
)
```

## Key Props

- `content`: string | string[] — text for the watermark (default `"asterui"`).
- `image`: string — image URL or data URI to render instead of text.
- `gap`: [number, number] — horizontal/vertical gap between tiles (default `[120, 120]`).
- `offset`: [number, number] — starting offset from the top-left (default `gap / 2`).
- `width` / `height`: number — tile dimensions (default 120x64).
- `rotate`: number — rotation angle in degrees (default `-22`).
- `font`: object — `color`, `fontSize`, `fontWeight`, `fontFamily`, `lineHeight` for text watermarks.
- `zIndex`: number — z-index of the overlay (default `1000`).
- `className`, `style`, `children`: standard container props.

## Tips

- Ensure the parent has enough padding/height so the repeated pattern is visible.
- The overlay is `pointer-events: none`, so links and inputs remain usable.
- For theme-aware colors, omit `font.color` or use `hsl(var(--bc) / opacity)` to draw from the current DaisyUI palette.
