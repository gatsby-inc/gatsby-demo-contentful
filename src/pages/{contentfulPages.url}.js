import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'

import ContentfulPageBlockHero from '../components/contentful-page-block-hero'
import ContentfulPageBlockColumnSection from '../components/contentful-page-block-column-section'
import ContentfulPageBlockBlogList from '../components/contentful-page-block-blog-list'
import ContentfulPageBlockContactForm from '../components/contentful-page-block-contact-form'

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

    default:
      return null
  }
}

const Page = ({
  data: {
    contentfulPages: { url, seoTitle, seoDescription, pageBlocks, columns },
  },
}) => {
  return (
    <>
      <Seo
        customTitle={seoTitle}
        customDescription={
          seoDescription ? seoDescription.seoDescription : null
        }
      />
      {seoTitle ? (
        <h1 className="text-4xl sm:text-5xl text-left font-black text-brand-primary leading-tight mb-8">
          {seoTitle}
        </h1>
      ) : null}

      <section className={`grid grid-cols-1 lg:grid-cols-${columns} gap-20`}>
        {pageBlocks
          ? pageBlocks.map((block, index) => {
              return (
                <div className="flex flex-grow" key={index}>
                  {getBlock(block)}
                </div>
              )
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
      pageName
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
          heading
          description {
            description
          }
          richText {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 1000)
                __typename
              }
            }
          }
        }
        ... on ContentfulPageBlockBlogList {
          internal {
            type
          }
          heading
          description {
            raw
          }
        }
        ... on ContentfulPageBlockContactForm {
          internal {
            type
          }
          heading
          description {
            raw
          }
        }
      }
    }
  }
`
