import React from 'react'
import PropTypes from 'prop-types'
import slugify from '@sindresorhus/slugify'

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const createJumpLink = (children) => {
  return (
    <a
      href={`#${slugify(children[0])}`}
      className="
        relative
        before:md:content-['#']
        before:absolute 
        before:inset-x-hash 
        before:text-md 
        before:text-gray-300
        hover:md:before:content-['#']
        hover:before:text-brand-default"
    >
      {children}
    </a>
  )
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    [MARKS.ITALIC]: (text) => <i className="font-italic">{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="font-mono px-1 py-2 mx-1 bg-gray-100 rounded text-sm">
        {text}
      </code>
    ),
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className="text-brand-default underline"
      >
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 className="text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2">
          {createJumpLink(children)}
        </h2>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-2xl sm:text-3xl text-left font-black text-gray-700 leading-tight mb-2">
        {createJumpLink(children)}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-xl sm:text-2xl text-left font-black text-gray-700 leading-tight mb-2">
        {createJumpLink(children)}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-lg sm:text-xl text-left font-black text-gray-700 leading-tight mb-2">
        {createJumpLink(children)}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-md sm:text-lg text-left font-black text-gray-700 leading-tight mb-2">
        {createJumpLink(children)}
      </h6>
    ),

    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pl-4">{children}</ol>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-4">{children}</ul>
    ),

    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-1">{children}</li>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0].value === '') {
        return <br />
      } else {
        return <p className="leading-loose">{children}</p>
      }
    },
    [BLOCKS.QUOTE]: (children) => (
      <blockquote className="border-l-4 border-brand-primary bg-gray-50 p-3 rounded font-bold my-6">
        <>"{children.content[0].content[0].value}"</>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="mb-6" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target

      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)}
          alt={description}
          className="mb-10"
        />
      )
    },
  },
}

const ContentfulRichTech = ({ richText }) => {
  return <div>{renderRichText(richText, options)}</div>
}

ContentfulRichTech.propTypes = {
  /** Contentful rich text */
  richText: PropTypes.any.isRequired,
}

export default ContentfulRichTech
