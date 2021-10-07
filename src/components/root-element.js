import React from 'react'

import Seo from './seo'
import Header from './header'
import Footer from './footer'

const RootElement = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main className="container mx-auto px-4 min-h-100vh">{children}</main>
      <Footer />
    </>
  )
}

export default RootElement
