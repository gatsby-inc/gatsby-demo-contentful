import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const Post = ({
  data: {
    contentfulPosts: {
      url,
      seoTitle,
      seoDescription: { seoDescription },
      postTitle,
      author,
      createdAt,
      postContent,
    },
  },
}) => {
  return (
    <>
      <Seo
        customTitle={seoTitle}
        customDescription={seoDescription}
        customUrl={url}
      />
      <div className="max-w-screen-lg mx-auto">
        <div>
          <div>
            <h1 className="text-4xl sm:text-5xl text-left font-black text-brand-primary leading-tight">
              {postTitle}
            </h1>
          </div>
          <div className="text-sm text-gray-600 leading-relaxed">
            <p>
              <span>Author: </span>
              {author}
            </p>
            <p>
              <span>Date published: </span>
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <section>
          <div
            className="text-sm "
            dangerouslySetInnerHTML={{ __html: postContent.raw }}
          />
          <div />
        </section>
      </div>
    </>
  )
}

export default Post

export const query = graphql`
  query ($id: String) {
    contentfulPosts(id: { eq: $id }) {
      url
      seoTitle
      seoDescription {
        seoDescription
      }
      postTitle
      author
      createdAt
      postContent {
        raw
      }
    }
  }
`
