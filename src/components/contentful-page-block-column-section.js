import React from 'react'
import PropTypes from 'prop-types'

import ContentfulRichTech from './contentful-rich-text'

const ContentfulPageBlockColumnSection = ({ block }) => {
  const { alignSelf, textAlign, columns, heading, description, richText } =
    block

  return (
    <div
      className={`grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-${columns} ${alignSelf} text-left lg:${textAlign}`}
    >
      <div className="grid gap-2">
        {heading ? (
          <h2
            className={`text-3xl sm:text-4xl font-black text-gray-700 leading-tight mb-2 text-left lg:${textAlign}`}
          >
            {heading}
          </h2>
        ) : null}
        {description ? (
          <p
            className="leading-loose"
            dangerouslySetInnerHTML={{ __html: description.description }}
          />
        ) : null}
      </div>
      {richText ? <ContentfulRichTech richText={richText} /> : null}
    </div>
  )
}

ContentfulPageBlockColumnSection.propTypes = {
  /** CSS align-self property */
  alignSelf: PropTypes.string,
  /** CSS text-align property */
  textAlign: PropTypes.string,
  /** CSS grid-template-columns property */
  columns: PropTypes.number,
  /** The Heading to display */
  heading: PropTypes.string,
  /** The Description to display */
  description: PropTypes.shape({
    description: PropTypes.string,
  }),
  /** The richText to display */
  richText: PropTypes.any,
}

export default ContentfulPageBlockColumnSection
