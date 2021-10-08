import { useStaticQuery, graphql } from 'gatsby'

const usePrimaryButtons = () => {
  const {
    allContentfulContentBlockNavLinks: { nodes },
  } = useStaticQuery(graphql`
    query {
      allContentfulContentBlockNavLinks(
        filter: {
          site_block__navigation: {
            elemMatch: { blockName: { eq: "Primary Navigation" } }
          }
          uiType: { eq: "Button" }
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

export default usePrimaryButtons
