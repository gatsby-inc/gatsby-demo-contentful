import React from 'react'
import PropTypes from 'prop-types'

import ContentfulRichTech from './contentful-rich-text'

const ContentfulPageBlockColumnSection = ({ block }) => {
  // console.log(block)

  const { heading, description } = block

  return (
    <div className="flex justify-start">
      <div className="grid gap-6 lg:gap-10">
        <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight">
          {heading}
        </h2>
        <ContentfulRichTech richText={description} />
      </div>
    </div>
  )
}

ContentfulPageBlockColumnSection.propTypes = {
  /** The Heading to display */
  heading: PropTypes.string.isRequired,
  /** The Description to display */
  description: PropTypes.string.isRequired,
}

export default ContentfulPageBlockColumnSection
