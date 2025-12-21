import { Button, useTheme, ThemeController, Hero, Space, Flex } from 'asterui'

function Logo() {
  const { isDark, colors } = useTheme()
  return (
    <Flex direction="column" align="center" gap="xs">
      <img src="/logo.png" alt="" className="h-24 w-24" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" className="h-12 w-auto">
        <text
          x="100"
          y="30"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="28"
          fontWeight="700"
        >
          <tspan fill="#8275BA">Aster</tspan>
          <tspan fill={isDark ? '#FCFAFD' : `${colors.foreground}B3`}>UI</tspan>
        </text>
      </svg>
    </Flex>
  )
}

function App() {
  return (
    <Hero className="min-h-screen bg-base-200 relative">
      <div className="absolute top-4 right-4">
        <ThemeController.Swap />
      </div>
      <Space direction="vertical" size="lg" align="center">
        <Logo />
        <p className="text-base-content/70">
          100+ React components built with DaisyUI and Tailwind CSS
        </p>
        <Button color="primary" href="https://asterui.com">
          View Documentation
        </Button>
      </Space>
    </Hero>
  )
}

export default App
