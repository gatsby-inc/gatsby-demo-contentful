import { useStaticQuery, graphql } from 'gatsby'

const usePrimaryLinks = () => {
  const {
    allContentfulContentBlockNavLinks: { nodes },
  } = useStaticQuery(graphql`
    query {
      allContentfulContentBlockNavLinks(
        filter: {
          site_block__navigation: {
            elemMatch: { blockName: { eq: "Primary Navigation" } }
          }
          uiType: { eq: "Link" }
        }
      ) {
        nodes {
          linkText
          linkUrl
        }
      }
    }
  `)

  return nodes
}

export default usePrimaryLinks
