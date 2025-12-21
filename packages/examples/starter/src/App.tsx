import { Button, useTheme } from 'asterui'

function Logo() {
  const { isDark } = useTheme()
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" className="h-12 w-auto">
      <text
        x="0"
        y="30"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
      >
        <tspan fill={isDark ? '#818cf8' : '#6366f1'}>Aster</tspan>
        <tspan fill={isDark ? '#f9fafb' : '#1f2937'}>UI</tspan>
      </text>
    </svg>
  )
}

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center space-y-6">
        <Logo />
        <p className="text-base-content/70">
          100+ React components built with DaisyUI and Tailwind CSS
        </p>
        <Button color="primary" href="https://asterui.com">
          View Documentation
        </Button>
      </div>
    </div>
  )
}

export default App
