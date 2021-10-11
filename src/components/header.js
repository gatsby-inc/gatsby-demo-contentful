import React, { useEffect, useState } from 'react'
import { globalHistory } from '@reach/router'
import { Link } from 'gatsby'

import Logo from './logo'

import usePrimaryLinks from '../hooks/usePrimaryLinks'
import usePrimaryButtons from '../hooks/usePrimaryButtons'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const links = usePrimaryLinks()
  const buttons = usePrimaryButtons()

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
    <header className="container mx-auto p-5">
      <nav role="navigation" className="flex items-center">
        <Link to="/" className="mr-3 py-1" activeClassName="cursor-auto">
          <Logo />
        </Link>
        <div className="flex flex-grow items-center text-sm text-gray-600">
          <ul
            className={`fixed sm:relative sm:flex px-6 w-full h-screen sm:w-auto sm:h-auto py-12 sm:p-0 flex-grow flex-col sm:flex-row top-0 bg-white sm:opacity-100 leading-8 z-nav shadow-lg sm:shadow-none transition-left sm:transition-none duration-500 ease-in-out 
            ${
              isNavOpen ? 'left-0 opacity-100' : 'left-full sm:left-0 opacity-0'
            }`}
          >
            {links.map((link, index) => {
              const { linkText, linkUrl } = link

              return (
                <li key={index}>
                  <Link
                    to={`/${linkUrl}`}
                    className="p-2 hover:underline"
                    activeClassName="underline text-brand-default cursor-auto"
                    isPartiallyCurrent={true}
                  >
                    {linkText}
                  </Link>
                </li>
              )
            })}

            {buttons.map((button, index) => {
              const { linkText, linkUrl } = button

              return (
                <li key={index} className="flex-grow sm:text-right">
                  <Link
                    to={`/${linkUrl}`}
                    className="px-2 sm:px-4 py-1 sm:py-2 sm:bg-brand-default text-gray-600 sm:text-white sm:rounded hover:underline"
                  >
                    {linkText}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div
            className={`sm:hidden ${
              isNavOpen ? 'fixed top-5 right-5' : 'flex flex-grow justify-end'
            } z-nav`}
          >
            <button
              aria-expanded={isNavOpen}
              aria-label={`${isNavOpen ? 'Close' : 'Open'} navigation`}
              className="px-2 py-1"
              onClick={handleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isNavOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
