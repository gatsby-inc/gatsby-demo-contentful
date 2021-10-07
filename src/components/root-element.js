import React from 'react'
import Seo from './seo'
import Header from './header'

const RootElement = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main className="container mx-auto px-4 mt-20 md:mt-8">{children}</main>
    </>
  )
}

export default RootElement
