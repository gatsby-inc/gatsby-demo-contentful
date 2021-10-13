import React from 'react'

import Seo from './seo'
import Header from './header'
import Footer from './footer'

const RootElement = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main className="container mx-auto px-4 py-10 sm:py-20 min-h-75vh">
        <div className="max-w-screen-xl mx-auto"> {children} </div>
      </main>
      <Footer />
    </>
  )
}

export default RootElement
