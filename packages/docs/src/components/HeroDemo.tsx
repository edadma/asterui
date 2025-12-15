import { Hero, Button } from 'asterui'
import { Demo } from './Demo'

export function BasicDemo() {
  return (
    <Demo>
      <Hero contentClassName="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
        </div>
      </Hero>
    </Demo>
  )
}

export function WithButtonDemo() {
  return (
    <Demo>
      <Hero contentClassName="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero>
    </Demo>
  )
}

export function WithFigureDemo() {
  return (
    <Demo>
      <Hero contentClassName="flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Hero"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero>
    </Demo>
  )
}

export function OverlayDemo() {
  return (
    <Demo>
      <Hero
        overlay
        contentClassName="text-center text-neutral-content"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero>
    </Demo>
  )
}
