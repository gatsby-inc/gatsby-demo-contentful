import React from 'react'

import { graphql, useStaticQuery, Link } from 'gatsby'

const ContentfulPageBlockBlogList = () => {
  const {
    allContentfulPosts: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulPosts {
        nodes {
          gatsbyPath(filePath: "/{contentfulPosts.url}")
          postTitle
          createdAt
          author
          seoDescription {
            seoDescription
          }
        }
      }
    }
  `)

  return (
    <ul className="grid gap-20">
      {nodes.map((node, index) => {
        const {
          gatsbyPath,
          postTitle,
          createdAt,
          author,
          seoDescription: { seoDescription },
        } = node
        return (
          <li key={index}>
            <Link to={gatsbyPath} className="grid gap-y-2 text-gray-700 group">
              <h2 className="text-3xl sm:text-4xl text-left font-black group-hover:text-brand-primary group-hover:underline leading-tight">
                {postTitle}
              </h2>
              <p>{seoDescription}</p>
              <div className="flex gap-x-2 text-sm">
                <p className="text-gray-700">{author}</p>
                <span>•</span>
                <p className="text-gray-500">
                  {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ContentfulPageBlockBlogList
