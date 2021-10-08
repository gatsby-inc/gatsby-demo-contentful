import React from 'react'
import { graphql, Link } from 'gatsby'

const Page = ({
  data: {
    allContentfulPosts: { nodes },
  },
}) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid gap-10">
        <h1 className="text-4xl sm:text-5xl text-left font-black text-brand-primary leading-tight">
          Blog
        </h1>
        <div>
          {nodes.map((node, index) => {
            const {
              url,
              postTitle,
              createdAt,
              seoDescription: { seoDescription },
            } = node
            return (
              <Link key={index} to={`/${url}`}>
                <p>{new Date(createdAt).toLocaleDateString()}</p>
                <h2>{postTitle}</h2>
                <p>{seoDescription}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allContentfulPosts {
      nodes {
        url
        postTitle
        createdAt
        seoDescription {
          seoDescription
        }
      }
    }
  }
`

export default Page
