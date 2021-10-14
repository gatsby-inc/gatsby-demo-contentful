import React from 'react'

const ContentfulPageBlockContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-8 text-sm">
        <label
          htmlFor="emailAddress"
          className="grid gap-1 text-sm text-gray-600"
        >
          <span>
            Your email address <span className="text-xs">(Required)</span>
          </span>
          <input
            id="emailAddress"
            placeholder="you@example.xyz"
            className="bg-gray-100 px-3 py-2"
            type="email"
            required
          />
        </label>
        <label htmlFor="textArea" className="grid gap-1 text-sm text-gray-600">
          <span>
            Your message <span className="text-xs">(Required)</span>
          </span>
          <textarea
            id="textArea"
            className="bg-gray-100 px-3 py-2 resize-none"
            rows="6"
          />
        </label>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-brand-default text-white rounded w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContentfulPageBlockContactForm
