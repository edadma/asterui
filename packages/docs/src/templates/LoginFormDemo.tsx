import {
  Form,
  Input,
  Checkbox,
  Button,
  Modal,
  Card,
  Flex,
  Space,
  Divider,
  Typography,
} from '@aster-ui/prefixed'
import { Demo } from '../components/Demo'

const { Link, Paragraph } = Typography

// @example-imports: { Form, Input, Checkbox, Button, Modal, Card, Flex, Space, Divider, Typography } from 'asterui'
export function LoginFormDemo() {
  // @example-include
  const { Link, Paragraph } = Typography

  const handleSubmit = (values: { email: string; password: string; remember: boolean }) => {
    Modal.success({
      title: 'Login Successful',
      content: <pre className="text-left">{JSON.stringify(values, null, 2)}</pre>,
    })
  }
  // @example-include-end

  return (
    <Demo>
      {/* @example-show
      <Flex justify="center" align="center" minHeight="screen" className="bg-base-200 p-4">
      @example-show-end */}
      <Flex justify="center" align="center" className="min-h-[400px]">
        {/* @example-return */}
        <Card title="Sign In" className="w-full max-w-sm">
          <Form onFinish={handleSubmit} initialValues={{ remember: false }}>
            <Form.Item name="email" label="Email" rules={[{ required: true }, { type: 'email' }]}>
              <Input className="w-full" placeholder="you@example.com" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true },
                { min: 8, message: 'Password must be at least 8 characters' },
                { pattern: /[A-Z]/, message: 'Must contain an uppercase letter' },
                { pattern: /[a-z]/, message: 'Must contain a lowercase letter' },
                { pattern: /[0-9]/, message: 'Must contain a number' },
                { pattern: /[!@#$%^&*.?]/, message: 'Must contain a special character' },
              ]}
            >
              <Input className="w-full" type="password" placeholder="Enter your password" />
            </Form.Item>
            <Space justify="between" align="center" className="mb-4">
              <Form.Item name="remember" valuePropName="checked" inline>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link size="sm">Forgot password?</Link>
            </Space>
            <Button color="primary" htmlType="submit" shape="block">
              Sign In
            </Button>
            <Divider>or</Divider>
            <Paragraph align="center" size="sm">
              Don't have an account? <Link>Sign up</Link>
            </Paragraph>
          </Form>
        </Card>
        {/* @example-return-end */}
      </Flex>
      {/* @example-show
      </Flex>
      @example-show-end */}
    </Demo>
  )
}
