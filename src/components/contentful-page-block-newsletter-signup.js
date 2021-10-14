import React from 'react'
import PropTypes from 'prop-types'

const ContentfulPageBlockNewsletterSignup = ({ block }) => {
  const {
    heading,
    description: { description },
  } = block

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <div className="grid gap-6">
        <div>
          <h6 className="text-md sm:text-lg text-left font-black text-gray-700 leading-tight">
            {heading}
          </h6>
          <p>{description}</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1fr-auto max-w-xs text-sm"
        >
          <input
            placeholder="you@example.xyz"
            className="bg-gray-100 px-3 py-2"
            type="email"
            required
          />
          <button
            type="submit"
            className="bg-brand-default text-white rounded-r px-2 sm:px-4 py-1 sm:py-2"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

ContentfulPageBlockNewsletterSignup.propTypes = {
  /** The Heading to display */
  heading: PropTypes.string,
  /** The Description to display */
  description: PropTypes.shape({
    description: PropTypes.string,
  }),
}

export default ContentfulPageBlockNewsletterSignup
