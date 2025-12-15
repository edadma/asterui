import { Image, Space } from 'asterui'
import { Demo } from './Demo'

export function BasicDemo() {
  return (
    <Demo>
      <Image
        src="https://picsum.photos/seed/asterui/800/600"
        alt="Landscape"
        width={400}
        height={300}
      />
    </Demo>
  )
}

export function SizesDemo() {
  return (
    <Demo>
      <Space direction="horizontal" size="md" align="center">
        <Image
          src="https://picsum.photos/seed/asterui/800/600"
          alt="Small"
          width={100}
          height={100}
        />
        <Image
          src="https://picsum.photos/seed/asterui/800/600"
          alt="Medium"
          width={200}
          height={150}
        />
        <Image
          src="https://picsum.photos/seed/asterui/800/600"
          alt="Large"
          width={300}
          height={200}
        />
      </Space>
    </Demo>
  )
}

export function PreviewDemo() {
  return (
    <Demo>
      <Image
        src="https://picsum.photos/seed/asterui/800/600"
        alt="Landscape with preview"
        width={400}
        height={300}
        preview
      />
    </Demo>
  )
}

export function FallbackDemo() {
  return (
    <Demo>
      <Space direction="horizontal" size="md">
        <Image
          src="https://invalid-url.example.com/broken.jpg"
          alt="Broken image"
          width={200}
          height={150}
          fallback="https://picsum.photos/seed/asterui/800/600"
        />
      </Space>
    </Demo>
  )
}
