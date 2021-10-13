import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ContentfulPageBlockHero = ({ block }) => {
  const {
    primaryHeading,
    secondaryHeading,
    description: { description },
    cta,
    heroImage: { gatsbyImageData },
  } = block

  return (
    <div className="flex justify-center lg:justify-start">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="grid gap-8 lg:gap-10">
          <h1 className="text-4xl sm:text-5xl text-center lg:text-left font-black text-brand-primary leading-tight">
            <span className="text-black">{primaryHeading}</span>
            <br />
            {secondaryHeading}
          </h1>
          <p
            className="text-center lg:text-left"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex justify-center lg:justify-start">
            <Link
              className="px-5 py-3 bg-brand-primary text-white font-bold rounded-lg"
              to={cta[0].ctaUrl}
            >
              {cta[0].ctaText}
            </Link>
          </div>
        </div>
        <div>
          <GatsbyImage image={getImage(gatsbyImageData)} alt={''} />
        </div>
      </div>
    </div>
  )
}

ContentfulPageBlockHero.propTypes = {
  /** The shape of of the block */
  block: PropTypes.shape({
    /** The Primary Heading to display */
    primaryHeading: PropTypes.string.isRequired,
    /** The Secondary Heading to display */
    secondaryHeading: PropTypes.string.isRequired,
    /** The Description to display */
    description: PropTypes.shape({
      description: PropTypes.string,
    }).isRequired,
    /** The CTA array */
    cta: PropTypes.arrayOf(
      PropTypes.shape({
        /** The CTA text to display */
        ctaText: PropTypes.string.isRequired,
        /** The CTA url */
        ctaUrl: PropTypes.string.isRequired,
      })
    ),
    /** The image object */
    heroImage: PropTypes.shape({
      /** Gatsby Plugin Image data */
      gatsbyImageData: PropTypes.any,
    }),
  }),
}

export default ContentfulPageBlockHero
