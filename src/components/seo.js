import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ customTitle, customDescription, customUrl, customImage }) => {
  const {
    site: {
      siteMetadata: { url, title, image, description, language, keywords },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          url
          title
          image
          description
          language
          keywords
        }
      }
    }
  `)

  const seoTitle = customTitle || title
  const seoDescription = customDescription
    ? customDescription.seoDescription
    : description
  const seoUrl = customUrl ? `${url}/${customUrl}` : url
  const seoImage = customImage
    ? `https://${customImage.gatsbyImageData.images.fallback.src.replace(
        /\/\//g,
        ''
      )}`
    : `${url}/${image}`

  return (
    <Helmet>
      {/* Default / HTML */}
      <html lang={language} />
      <title>{seoTitle}</title>
      <link rel="canonical" href={seoUrl} />

      {/* Primary Meta Tags */}
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />
      <meta name="keywords" content={keywords ? keywords.join(', ') : null} />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* favicon */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${url}/favicon-16x16.png`}
        data-react-helmet="true"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${url}/favicon-32x32.png`}
        data-react-helmet="true"
      />
    </Helmet>
  )
}

Seo.propTypes = {
  /** A custom HTML title that overwrites the default title */
  customTitle: PropTypes.string,
  /** A custom meta description that overwrites the default description */
  customDescription: PropTypes.string,
  /** A custom meta url that overwrites the default url */
  customUrl: PropTypes.string,
  /** A custom open graph image that overwrites the default image */
  customImage: PropTypes.any,
}

export default Seo
