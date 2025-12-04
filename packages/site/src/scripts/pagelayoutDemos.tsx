import React from 'react'
import { createRoot } from 'react-dom/client'
import { PageLayout, Space, Card } from 'asterui'

const BasicDemo = () => (
  <PageLayout minHeight="auto" padding="md">
    <h1 className="text-xl font-bold">Welcome to My App</h1>
    <p>This is the main content area.</p>
  </PageLayout>
)

const BackgroundsDemo = () => (
  <Space direction="vertical" size="md">
    <PageLayout background="base-100" minHeight="auto" padding="sm">
      <p>base-100 background</p>
    </PageLayout>
    <PageLayout background="base-200" minHeight="auto" padding="sm">
      <p>base-200 background</p>
    </PageLayout>
    <PageLayout background="base-300" minHeight="auto" padding="sm">
      <p>base-300 background</p>
    </PageLayout>
    <PageLayout background="neutral" minHeight="auto" padding="sm">
      <p className="text-neutral-content">neutral background</p>
    </PageLayout>
  </Space>
)

const PaddingDemo = () => (
  <Space direction="vertical" size="md">
    <PageLayout padding="none" minHeight="auto" className="border border-base-300">
      <p>No padding</p>
    </PageLayout>
    <PageLayout padding="sm" minHeight="auto" className="border border-base-300">
      <p>Small padding</p>
    </PageLayout>
    <PageLayout padding="md" minHeight="auto" className="border border-base-300">
      <p>Medium padding</p>
    </PageLayout>
    <PageLayout padding="lg" minHeight="auto" className="border border-base-300">
      <p>Large padding</p>
    </PageLayout>
  </Space>
)

const FullPageDemo = () => (
  <PageLayout minHeight="auto" padding="md">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card title="Users"><span className="text-2xl font-bold">1,234</span></Card>
        <Card title="Revenue"><span className="text-2xl font-bold">$5,678</span></Card>
        <Card title="Orders"><span className="text-2xl font-bold">890</span></Card>
      </div>
    </div>
  </PageLayout>
)

const demos: Record<string, React.FC> = {
  basic: BasicDemo,
  backgrounds: BackgroundsDemo,
  padding: PaddingDemo,
  'full-page': FullPageDemo,
}

document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const Demo = demos[exampleId]
    createRoot(container).render(<Demo />)
  }
})
