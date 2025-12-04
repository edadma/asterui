# Phone

Display content in an iPhone-style phone frame mockup.

**Import:** `import { Phone } from 'asterui'`

## Examples

### Basic

```tsx
<Phone displayClassName="bg-base-100 grid place-content-center">
  <span className="text-xl">Hello World</span>
</Phone>
```

### Image

```tsx
<Phone>
  <img
    src="https://img.daisyui.com/images/stock/453966.webp"
    alt="wallpaper"
    className="w-full h-full object-cover"
  />
</Phone>
```

### Color

```tsx
<Phone
  color="#ff8938"
  displayClassName="bg-gradient-to-b from-orange-400 to-orange-600 grid place-content-center"
>
  <span className="text-white text-xl font-bold">Orange</span>
</Phone>
```

### App

```tsx
<Phone displayClassName="bg-base-100 flex flex-col">
  <div className="bg-primary text-primary-content p-4">
    <h2 className="font-bold">My App</h2>
  </div>
  <div className="flex-1 p-4 space-y-3">
    <div className="bg-base-200 rounded-lg p-3">Item 1</div>
    <div className="bg-base-200 rounded-lg p-3">Item 2</div>
  </div>
  <div className="p-4 border-t border-base-300">
    <Button type="primary" className="w-full">Action</Button>
  </div>
</Phone>
```

### Chat

```tsx
<Phone displayClassName="bg-base-200 flex flex-col">
  <div className="bg-base-100 p-3 border-b border-base-300 flex items-center gap-3">
    <div className="avatar">
      <div className="w-8 rounded-full">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=jane" />
      </div>
    </div>
    <span className="font-medium text-sm">Jane</span>
  </div>
  <div className="flex-1 p-3 space-y-2">
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-primary text-xs">Hey!</div>
    </div>
    <div className="chat chat-end">
      <div className="chat-bubble text-xs">Hi there!</div>
    </div>
  </div>
</Phone>
```
