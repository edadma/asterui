import { createRoot } from 'react-dom/client'
import { Progress } from 'asterui'

const demos: Record<string, React.ReactNode> = {
  basic: <Progress value={70} className="w-56" />,
  colors: (
    <div className="space-y-4">
      <Progress value={20} className="w-56" />
      <Progress type="primary" value={40} className="w-56" />
      <Progress type="secondary" value={60} className="w-56" />
      <Progress type="accent" value={80} className="w-56" />
    </div>
  ),
  status: (
    <div className="space-y-4">
      <Progress type="info" value={40} className="w-56" />
      <Progress type="success" value={60} className="w-56" />
      <Progress type="warning" value={80} className="w-56" />
      <Progress type="error" value={100} className="w-56" />
    </div>
  ),
  indeterminate: <Progress className="w-56" />,
  sizes: (
    <div className="space-y-4">
      <Progress type="primary" value={70} className="w-32" />
      <Progress type="primary" value={70} className="w-56" />
      <Progress type="primary" value={70} className="w-full" />
    </div>
  ),
  label: (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Uploading...</span>
        <span>75%</span>
      </div>
      <Progress type="primary" value={75} className="w-full" />
    </div>
  ),
}

// Mount demos
document.querySelectorAll('.demo-container').forEach((container) => {
  const exampleId = container.getAttribute('data-example')
  if (exampleId && demos[exampleId]) {
    const root = createRoot(container as HTMLElement)
    root.render(demos[exampleId])
  }
})
