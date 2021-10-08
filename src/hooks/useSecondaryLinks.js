import { useStaticQuery, graphql } from 'gatsby'

const useSecondaryLinks = () => {
  const {
    allContentfulContentBlockNavLinks: { nodes },
  } = useStaticQuery(graphql`
    query {
      allContentfulContentBlockNavLinks(
        filter: {
          site_block__navigation: {
            elemMatch: { blockName: { eq: "Secondary Navigation" } }
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

export default useSecondaryLinks
