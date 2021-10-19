import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'

import ContentfulPageBlockHero from '../components/contentful-page-block-hero'
import ContentfulPageBlockColumnSection from '../components/contentful-page-block-column-section'
import ContentfulPageBlockBlogList from '../components/contentful-page-block-blog-list'
import ContentfulPageBlockContactForm from '../components/contentful-page-block-contact-form'
import ContentfullPageBlockNewsletterSignup from '../components/contentful-page-block-newsletter-signup'

const getBlock = (block) => {
  const {
    internal: { type },
  } = block

  // console.log(block)
  // console.log(type)

  switch (type) {
    case 'ContentfulPageBlockHero':
      return <ContentfulPageBlockHero block={block} />

    case 'ContentfulPageBlockColumnSection':
      return <ContentfulPageBlockColumnSection block={block} />

    case 'ContentfulPageBlockBlogList':
      return <ContentfulPageBlockBlogList />

    case 'ContentfulPageBlockContactForm':
      return <ContentfulPageBlockContactForm />

    case 'ContentfulPageBlockNewsletterSignup':
      return <ContentfullPageBlockNewsletterSignup block={block} />

    default:
      return null
  }
}

const Page = ({
  data,
  data: {
    contentfulPages: {
      url,
      pageTitle,
      seoTitle,
      seoDescription,
      pageBlocks,
      columns,
    },
  },
}) => {
  return (
    <>
      <Seo
        customTitle={seoTitle || null}
        customDescription={
          seoDescription ? seoDescription.seoDescription : null
        }
      />
      {pageTitle ? (
        <h1 className="text-4xl sm:text-5xl text-left font-black text-brand-primary leading-tight mb-8">
          {pageTitle}
        </h1>
      ) : null}

      <section className={`grid gap-20 grid-cols-1 lg:grid-cols-${columns}`}>
        {pageBlocks
          ? pageBlocks.map((block, index) => {
              return <Fragment key={index}>{getBlock(block)}</Fragment>
            })
          : null}
      </section>
    </>
  )
}

export default Page

export const query = graphql`
  query ($id: String) {
    contentfulPages(id: { eq: $id }) {
      url
      pageTitle
      seoTitle
      seoDescription {
        seoDescription
      }
      columns
      pageBlocks {
        ... on ContentfulPageBlockHero {
          internal {
            type
          }
          primaryHeading
          secondaryHeading
          description {
            description
          }
          cta {
            ctaUrl
            ctaText
          }
          heroImage {
            gatsbyImageData
          }
        }
        ... on ContentfulPageBlockColumnSection {
          internal {
            type
          }
          alignSelf
          textAlign
          columns
          heading1
          description1 {
            description1
          }
          image1 {
            ... on ContentfulContentBlockImage {
              id
              imageAlt
              image {
                gatsbyImageData(width: 1000)
              }
            }
          }
          heading2
          description2 {
            description2
          }
          image2 {
            ... on ContentfulContentBlockImage {
              id
              imageAlt
              image {
                gatsbyImageData(width: 1000)
              }
            }
          }
          heading3
          description3 {
            description3
          }
          image3 {
            ... on ContentfulContentBlockImage {
              id
              imageAlt
              image {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }
        ... on ContentfulPageBlockBlogList {
          internal {
            type
          }
        }
        ... on ContentfulPageBlockContactForm {
          internal {
            type
          }
        }
        ... on ContentfulPageBlockNewsletterSignup {
          internal {
            type
          }
          heading
          description {
            description
          }
        }
      }
    }
  }
`
