import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Blog = ({ pageName }) => {
  const {
    allContentfulPosts: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulPosts {
        nodes {
          url
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
    <ul>
      {nodes.map((node, index) => {
        const {
          url,
          postTitle,
          createdAt,
          author,
          seoDescription: { seoDescription },
        } = node
        return (
          <li key={index}>
            <Link to={`/${url}`} className="grid gap-y-2 text-gray-700 group">
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

export default Blog
