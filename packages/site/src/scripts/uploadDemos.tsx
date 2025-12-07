import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Upload, Button, Form } from 'asterui'

interface UploadFile {
  uid: string
  name: string
  status?: 'uploading' | 'done' | 'error' | 'removed'
  url?: string
  thumbUrl?: string
  percent?: number
}

function BasicUpload() {
  return (
    <Upload>
      <Button>Click to Upload</Button>
    </Upload>
  )
}

function DragUpload() {
  return (
    <Upload.Dragger>
      <p className="text-4xl mb-4">📁</p>
      <p className="text-lg">Click or drag file to this area to upload</p>
      <p className="text-sm opacity-60">Support for single or bulk upload</p>
    </Upload.Dragger>
  )
}

function PictureCardUpload() {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image1.png',
      status: 'done',
      url: 'https://picsum.photos/200',
    },
    {
      uid: '-2',
      name: 'image2.png',
      status: 'done',
      url: 'https://picsum.photos/201',
    },
  ])

  return (
    <Upload
      listType="picture-card"
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
    >
      {fileList.length < 5 && (
        <div className="flex flex-col items-center">
          <span className="text-2xl">+</span>
          <span className="text-sm">Upload</span>
        </div>
      )}
    </Upload>
  )
}

function ControlledUpload() {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList)
  }

  const customRequest = ({ file, onSuccess }: { file: File; onSuccess: () => void }) => {
    // Simulate upload
    setTimeout(() => {
      onSuccess()
    }, 1000)
  }

  return (
    <div>
      <Upload
        fileList={fileList}
        onChange={handleChange}
        customRequest={customRequest}
        maxCount={3}
      >
        <Button>Upload (max 3)</Button>
      </Upload>
      <p className="mt-2 text-sm">Files: {fileList.length}/3</p>
    </div>
  )
}

function MaxSizeUpload() {
  return (
    <Upload maxSize={5 * 1024 * 1024}>
      <Button>Upload (max 5MB)</Button>
    </Upload>
  )
}

function AcceptUpload() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">Images only:</p>
        <Upload accept="image/*">
          <Button>Upload Images</Button>
        </Upload>
      </div>
      <div>
        <p className="text-sm mb-2">PDF files only:</p>
        <Upload accept=".pdf">
          <Button>Upload PDF</Button>
        </Upload>
      </div>
    </div>
  )
}

function FormUpload() {
  const handleSubmit = (values: Record<string, unknown>) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Form onFinish={handleSubmit} className="max-w-md">
      <Form.Item
        name="avatar"
        label="Avatar"
        required
        rules={{
          required: 'Please upload an avatar',
        }}
      >
        <Upload listType="picture-card" maxCount={1}>
          <div className="flex flex-col items-center">
            <span className="text-2xl">+</span>
            <span className="text-sm">Upload</span>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item name="documents" label="Documents">
        <Upload maxCount={5}>
          <Button>Upload Documents</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" color="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const statefulDemos: Record<string, React.FC> = {
  basic: BasicUpload,
  drag: DragUpload,
  'picture-card': PictureCardUpload,
  controlled: ControlledUpload,
  'max-size': MaxSizeUpload,
  accept: AcceptUpload,
  form: FormUpload,
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('.demo-container').forEach((container) => {
    const example = container.dataset.example
    if (example && statefulDemos[example]) {
      const root = createRoot(container)
      const Component = statefulDemos[example]
      root.render(<Component />)
    }
  })
})
