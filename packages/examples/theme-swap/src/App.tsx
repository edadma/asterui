import { Navbar, Hero, ThemeController } from '@edadma/petalui'

function App() {
  return (
    <>
      <Navbar
        className="bg-base-100 shadow-lg"
        start={<a className="text-xl font-bold">Theme Swap Test</a>}
        end={<ThemeController.Swap lightTheme="light" darkTheme="dark" />}
      />

      <Hero className="bg-base-200" contentClassName="text-center" wrapperClassName="max-w-md space-y-6">
        <h1 className="text-5xl font-bold">Welcome!</h1>
        <p>
          Use the sun/moon toggle in the navbar to swap between light and dark themes. The entire
          app will update with smooth transitions.
        </p>
      </Hero>
    </>
  )
}

export default App
