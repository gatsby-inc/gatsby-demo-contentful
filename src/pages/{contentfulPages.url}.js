import React from 'react'
import { graphql } from 'gatsby'

const Page = ({
  data,
  data: {
    contentfulPages: { pageName },
  },
}) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid gap-10">
        <h1 className="text-4xl sm:text-5xl text-left font-black text-brand-primary leading-tight">
          {pageName}
        </h1>
      </div>
    </div>
  )
}

export default Page

export const query = graphql`
  query ($id: String) {
    contentfulPages(id: { eq: $id }) {
      url
      seoTitle
      seoDescription {
        seoDescription
      }
      pageName
      createdAt
      pageBlocks {
        primaryHeading
        secondaryHeading
        columns
        columnContent {
          blockName
        }
        blockStylesReference {
          blockName
        }
      }
    }
  }
`
