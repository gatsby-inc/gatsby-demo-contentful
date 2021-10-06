import React from 'react'

const MenuButton = ({ ...rest }) => {
  return (
    <button
      aria-expanded={false}
      aria-label="Open navigation"
      className="px-2 py-1"
      {...rest}
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
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  )
}

export default MenuButton
