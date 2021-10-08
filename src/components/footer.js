import React from 'react'
import { Link } from 'gatsby'

import useSecondaryLinks from '../hooks/useSecondaryLinks'

const Footer = () => {
  const links = useSecondaryLinks()

  return (
    <div className="container mx-auto p-4">
      <hr className="py-2" />
      <footer>
        <div className="text-sm text-gray-400">
          <ul className="flex flex-grow flex-col sm:flex-row leading-8">
            <li className="flex-1">© 2021 All Rights Reserved Agency</li>
            {links.map((link, index) => {
              const { linkText, linkUrl } = link

              return (
                <li key={index}>
                  <Link
                    to={`/${linkUrl}`}
                    className="px-2 py-1 hover:underline"
                  >
                    {linkText}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
