import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Page = () => {
  return (
    <div className="min-h-75vh flex justify-center md:justify-start">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="grid gap-4 md:gap-10">
          <h1 className="text-3xl md:text-5xl text-center md:text-left font-black text-brand-primary leading-tight">
            <span className="text-black">Lorem ipsum.</span>
            <br />
            Consectetur elit.
          </h1>
          <p className="text-center md:text-left">
            Nulla blandit, arcu sit amet iaculis feugiat, felis sapien lobortis
            odio, et accumsan sapien purus vitae nisi.{' '}
            <b>Nulla eget est tellus. Orci varius natoque penatibus et.</b>
          </p>
        </div>

        <div>
          <StaticImage
            src="../../static/images/index-page-hero.jpg"
            alt="Hero image"
          />
        </div>
      </div>
    </div>
  )
}

export default Page
