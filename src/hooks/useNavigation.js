// import { useStaticQuery, graphql } from 'gatsby'

// export const useNavigation = () => {
//   const {
//     allContentfulContentBlockNavLinks: { nodes },
//   } = useStaticQuery(graphql`
//     query {
//       allContentfulContentBlockNavLinks {
//         nodes {
//           site_block__navigation {
//             blockName
//           }
//           linkText
//           linkUrl
//           uiType
//         }
//       }
//     }
//   `)

//   const navigation = nodes.reduce((items, item) => {
//     console.log(item.site_block__navigation[0].blockName)

//     item.site_block__navigation[0].blockName =
//       item.site_block__navigation[0].blockName || {}

//     return items
//   }, {})

//   console.log(navigation)

//   return null
// }

// export const usePrimaryLinks = () => {
//   const {
//     allContentfulContentBlockNavLinks: { nodes },
//   } = useStaticQuery(graphql`
//     query {
//       allContentfulContentBlockNavLinks(
//         filter: {
//           site_block__navigation: {
//             elemMatch: { blockName: { eq: "Primary Navigation" } }
//           }
//           uiType: { eq: "Link" }
//         }
//       ) {
//         nodes {
//           linkText
//           linkUrl
//         }
//       }
//     }
//   `)

//   return nodes
// }

// export const usePrimaryButtons = () => {
//   const {
//     allContentfulContentBlockNavLinks: { nodes },
//   } = useStaticQuery(graphql`
//     query {
//       allContentfulContentBlockNavLinks(
//         filter: {
//           site_block__navigation: {
//             elemMatch: { blockName: { eq: "Primary Navigation" } }
//           }
//           uiType: { eq: "Button" }
//         }
//       ) {
//         nodes {
//           linkText
//           linkUrl
//         }
//       }
//     }
//   `)

//   return nodes
// }
