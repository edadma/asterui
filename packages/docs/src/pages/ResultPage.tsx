import { Result, Button, Space } from '@edadma/petalui'
import { ExampleSection } from '../components/ExampleSection'
import { ApiTable } from '../components/ApiTable'
import type { ApiProperty } from '../components/ApiTable'

const resultApi: ApiProperty[] = [
  {
    property: 'status',
    description: 'Status type of the result',
    type: "'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'",
    default: "'info'",
  },
  {
    property: 'title',
    description: 'Title of the result',
    type: 'React.ReactNode',
  },
  {
    property: 'subTitle',
    description: 'Subtitle of the result',
    type: 'React.ReactNode',
  },
  {
    property: 'icon',
    description: 'Custom icon (overrides default status icon)',
    type: 'React.ReactNode',
  },
  {
    property: 'extra',
    description: 'Additional action elements (typically buttons)',
    type: 'React.ReactNode',
  },
  {
    property: 'children',
    description: 'Additional content between subtitle and actions',
    type: 'React.ReactNode',
  },
  {
    property: 'className',
    description: 'Additional CSS classes',
    type: 'string',
  },
  {
    property: 'style',
    description: 'Inline styles',
    type: 'React.CSSProperties',
  },
]

export default function ResultPage() {
  return (
    <div className="space-y-8 pb-16">
      <div>
        <h1 className="text-4xl font-bold mb-2">Result</h1>
        <p className="text-lg opacity-70">
          Used to display result pages for success, error, or informational states.
        </p>
      </div>

      <div className="space-y-6">
        <ExampleSection
          title="Success Result"
          code={`<Result
  status="success"
  title="Payment Successful"
  subTitle="Your order has been confirmed..."
  extra={
    <Space>
      <Button color="primary">View Order</Button>
      <Button>Continue Shopping</Button>
    </Space>
  }
/>`}
        >
          <Result
            status="success"
            title="Payment Successful"
            subTitle="Your order has been confirmed and will be shipped within 2 business days."
            extra={
              <Space>
                <Button color="primary">View Order</Button>
                <Button>Continue Shopping</Button>
              </Space>
            }
          />
        </ExampleSection>

        <ExampleSection
          title="Error Result"
          code={`<Result
  status="error"
  title="Submission Failed"
  subTitle="Please check your information..."
  extra={<Button color="error">Try Again</Button>}
/>`}
        >
          <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check your information and try again."
            extra={<Button color="error">Try Again</Button>}
          />
        </ExampleSection>

        <ExampleSection
          title="Info Result"
          code={`<Result
  status="info"
  title="Verification Required"
  subTitle="Please check your email..."
/>`}
        >
          <Result
            status="info"
            title="Verification Required"
            subTitle="Please check your email to verify your account."
          />
        </ExampleSection>

        <ExampleSection
          title="Warning Result"
          code={`<Result
  status="warning"
  title="Account Suspended"
  subTitle="Your account has been suspended..."
  extra={<Button color="warning">Contact Support</Button>}
/>`}
        >
          <Result
            status="warning"
            title="Account Suspended"
            subTitle="Your account has been suspended due to unusual activity."
            extra={<Button color="warning">Contact Support</Button>}
          />
        </ExampleSection>

        <ExampleSection
          title="404 Page Not Found"
          code={`<Result
  status="404"
  title="Page Not Found"
  subTitle="The page you are looking for..."
  extra={<Button color="primary">Back Home</Button>}
/>`}
        >
          <Result
            status="404"
            title="Page Not Found"
            subTitle="The page you are looking for does not exist."
            extra={<Button color="primary">Back Home</Button>}
          />
        </ExampleSection>

        <ExampleSection
          title="403 Forbidden"
          code={`<Result
  status="403"
  title="Access Denied"
  subTitle="You don't have permission..."
  extra={<Button>Request Access</Button>}
/>`}
        >
          <Result
            status="403"
            title="Access Denied"
            subTitle="You don't have permission to access this resource."
            extra={<Button>Request Access</Button>}
          />
        </ExampleSection>

        <ExampleSection
          title="500 Server Error"
          code={`<Result
  status="500"
  title="Server Error"
  subTitle="Something went wrong..."
  extra={<Button color="primary">Refresh Page</Button>}
/>`}
        >
          <Result
            status="500"
            title="Server Error"
            subTitle="Something went wrong on our end. Please try again later."
            extra={<Button color="primary">Refresh Page</Button>}
          />
        </ExampleSection>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">API</h2>
        <ApiTable data={resultApi} title="Result" />
      </div>
    </div>
  )
}
