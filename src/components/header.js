import React, { useEffect, useState } from 'react'
import { globalHistory } from '@reach/router'
import { Link } from 'gatsby'

import Logo from './logo'
import MenuButton from './menu-button'
import CloseButton from './close-button'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        setIsNavOpen(false)
      }
    })
  }, [])

  return (
    <header className="container mx-auto px-4">
      <nav role="navigation" className="flex items-center py-4 sm:text-sm">
        <Link to="/" className="mr-3">
          <Logo />
        </Link>
        <div className="flex flex-grow">
          <ul
            className={`${
              isNavOpen ? 'absolute top-0 left-0 bg-white' : 'hidden'
            } sm:relative sm:flex px-6 w-full h-screen sm:w-auto sm:h-auto py-12 sm:p-0 flex-grow flex-col sm:flex-row leading-8`}
          >
            <li>
              <Link
                to="/about"
                className="text-gray-600 px-2 py-1 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-600 px-2 py-1 hover:underline"
              >
                Blog
              </Link>
            </li>
            <li className="flex-grow sm:text-right">
              <Link
                to="/contact"
                className="px-2 sm:px-4 py-1 sm:py-2 sm:bg-brand-primary text-gray-600 sm:text-white sm:rounded hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-grow justify-end sm:hidden z-nav">
            {isNavOpen ? (
              <CloseButton onClick={handleNav} />
            ) : (
              <MenuButton onClick={handleNav} />
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
