import React from 'react'
import { graphql } from 'gatsby'

import Home from '../views/home'
import Blog from '../views/blog'
import Default from '../views/default'
import Seo from '../components/seo'

const getView = (url, pageName) => {
  switch (url) {
    case '/':
      return <Home />
    case 'blog':
      return <Blog pageName={pageName} />
    default:
      return <Default pageName={pageName} />
  }
}

const Page = ({
  data: {
    contentfulPages: { url, pageName },
  },
}) => {
  return (
    <>
      <Seo customTitle={pageName} />
      {getView(url, pageName)}
    </>
  )
}

export default Page

export const query = graphql`
  query ($id: String) {
    contentfulPages(id: { eq: $id }) {
      url
      pageName
    }
  }
`
