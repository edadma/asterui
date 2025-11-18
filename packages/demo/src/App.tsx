import { useState } from 'react'
import { Drawer, Navbar } from '@edadma/petalui'
import { ThemeSwitcher } from './ThemeSwitcher'
import { BadgePage } from './pages/BadgePage'
import { ButtonPage } from './pages/ButtonPage'
import { SpinPage } from './pages/SpinPage'
import { TablePage } from './pages/TablePage'

type Page = 'badge' | 'button' | 'spin' | 'table'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<Page>('button')

  const handleNavigate = (page: Page) => {
    setCurrentPage(page)
    setDrawerOpen(false)
  }

  const sidebar = (
    <div className="space-y-4">
      <div className="text-lg font-bold px-4 py-2">Components</div>
      <ul className="menu">
        <li>
          <a
            onClick={() => handleNavigate('badge')}
            className={currentPage === 'badge' ? 'active' : ''}
          >
            Badge
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavigate('button')}
            className={currentPage === 'button' ? 'active' : ''}
          >
            Button
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavigate('spin')}
            className={currentPage === 'spin' ? 'active' : ''}
          >
            Spin
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavigate('table')}
            className={currentPage === 'table' ? 'active' : ''}
          >
            Table
          </a>
        </li>
      </ul>
    </div>
  )

  return (
    <Drawer
      sidebar={sidebar}
      open={drawerOpen}
      onOpenChange={setDrawerOpen}
    >
      <div className="min-h-screen bg-base-200">
        <Navbar
          className="shadow-lg"
          start={
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          }
          center={<a className="btn btn-ghost text-xl">PetalUI Demo</a>}
          end={<ThemeSwitcher />}
        />

        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            {currentPage === 'badge' && <BadgePage />}
            {currentPage === 'button' && <ButtonPage />}
            {currentPage === 'spin' && <SpinPage />}
            {currentPage === 'table' && <TablePage />}
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default App
