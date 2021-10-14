import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import ContentfulRichTech from '../components/contentful-rich-text'

const Post = ({
  data: {
    contentfulPosts: {
      featuredImage,
      url,
      seoTitle,
      seoDescription: { seoDescription },
      postTitle,
      author,
      createdAt,
      richText,
    },
  },
}) => {
  return (
    <>
      <Seo
        customTitle={seoTitle}
        customDescription={seoDescription}
        customUrl={url}
        customImage={featuredImage}
      />
      <article className="max-w-screen-lg mx-auto">
        <div className="grid gap-x-8 gap-y-10 grid-cols-1 lg:grid-cols-blog">
          <div>
            {featuredImage ? (
              <GatsbyImage
                image={getImage(featuredImage)}
                alt={postTitle}
                className="mb-6"
              />
            ) : null}
            <h1 className="text-4xl sm:text-5xl text-left font-black text-gray-700 leading-tight mb-6">
              {postTitle}
            </h1>
          </div>
          <div>
            <div className="grid gap-1 text-sm mb-10">
              <p className="text-brand-default font-bold text-base">{author}</p>
              <p className="text-gray-600">
                {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>

            <hr />
          </div>
          <section>
            <ContentfulRichTech richText={richText} />
          </section>
        </div>
      </article>
    </>
  )
}

export default Post

export const query = graphql`
  query ($id: String) {
    contentfulPosts(id: { eq: $id }) {
      featuredImage {
        gatsbyImageData
      }
      url
      seoTitle
      seoDescription {
        seoDescription
      }
      postTitle
      author
      createdAt
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
  }
`
