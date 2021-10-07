import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Page = () => {
  return (
    <div className="flex justify-center lg:justify-start mt-20 lg:mt-8">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="grid gap-4 lg:gap-10">
          <h1 className="text-4xl sm:text-5xl text-center lg:text-left font-black text-brand-primary leading-tight">
            <span className="text-black">Lorem ipsum.</span>
            <br />
            Consectetur elit.
          </h1>
          <p className="text-center lg:text-left">
            Nulla blandit, arcu sit amet iaculis feugiat, felis sapien lobortis
            odio, et accumsan sapien purus vitae nisi.{' '}
            <b>Nulla eget est tellus. Orci varius natoque penatibus et.</b>
          </p>
        </div>

        <div className="px-6 lg:px-0">
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
