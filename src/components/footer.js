import { Link } from 'gatsby'
import React from 'react'

const Footer = () => {
  return (
    <div className="container mx-auto p-4">
      <hr className="py-2" />
      <footer>
        <div className="text-sm text-gray-400">
          <ul className="flex flex-grow flex-col sm:flex-row leading-8">
            <li className="flex-1">© 2021 All Rights Reserved Agency</li>
            <li>
              <Link to="/privacy" className="px-2 py-1 hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="px-2 py-1 hover:underline">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
