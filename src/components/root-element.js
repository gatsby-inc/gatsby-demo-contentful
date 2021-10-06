import React from 'react'
import Seo from './seo'
import Header from './header'

const RootElement = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main className="container mx-auto px-4">{children}</main>
    </>
  )
}

export default RootElement
