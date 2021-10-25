import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ContentBlock = ({
  alignSelf,
  textAlign,
  heading,
  description,
  image,
}) => {
  return (
    <div
      className={`grid gap-8 ${alignSelf} ${
        !image ? 'row-start-1 lg:row-auto' : ''
      }`}
    >
      <div>
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
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : null}
      </div>
      {image ? (
        <GatsbyImage image={getImage(image.image)} alt={image.imageAlt} />
      ) : null}
    </div>
  )
}

const ContentfulPageBlockColumnSection = ({ block }) => {
  const {
    alignSelf,
    textAlign,
    columns,
    heading1,
    description1,
    image1,
    heading2,
    description2,
    image2,
    heading3,
    description3,
    image3,
  } = block

  return (
    <div
      className={`grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-${columns} ${alignSelf} text-left lg:${textAlign}`}
    >
      {heading1 || description1 || image1 ? (
        <ContentBlock
          alignSelf={alignSelf}
          textAlign={textAlign}
          heading={heading1}
          description={description1 ? description1.description1 : null}
          image={image1 || null}
        />
      ) : null}
      {heading2 || description2 || image2 ? (
        <ContentBlock
          alignSelf={alignSelf}
          textAlign={textAlign}
          heading={heading2}
          description={description2 ? description2.description2 : null}
          image={image2 || null}
        />
      ) : null}
      {heading3 || description3 || image3 ? (
        <ContentBlock
          alignSelf={alignSelf}
          textAlign={textAlign}
          heading={heading3}
          description={description3 ? description3.description3 : null}
          image={image3 || null}
        />
      ) : null}
    </div>
  )
}

ContentfulPageBlockColumnSection.propTypes = {
  // /** CSS align-self property */
  // alignSelf: PropTypes.string,
  // /** CSS text-align property */
  // textAlign: PropTypes.string,
  // /** CSS grid-template-columns property */
  // columns: PropTypes.number,
  // /** The Heading to display */
  // heading: PropTypes.string,
  // /** The Description to display */
  // description: PropTypes.shape({
  //   description: PropTypes.string,
  // }),
  // /** The richText to display */
  // richText: PropTypes.any,
}

export default ContentfulPageBlockColumnSection
