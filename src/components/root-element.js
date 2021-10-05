import React from 'react'
import Seo from './seo'

const RootElement = ({ children }) => {
  return (
    <>
      <Seo />
      {children}
    </>
  )
}

export default RootElement
