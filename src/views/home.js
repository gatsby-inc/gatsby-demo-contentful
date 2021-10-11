import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Home = () => {
  const {
    contentfulPageBlockHero: {
      primaryHeading,
      secondaryHeading,
      description: { description },
      cta,
    },
  } = useStaticQuery(graphql`
    {
      contentfulPageBlockHero {
        blockName
        primaryHeading
        secondaryHeading
        description {
          description
        }
        cta {
          ctaText
          ctaUrl
        }
      }
    }
  `)

  return (
    <section className="flex justify-center lg:justify-start mt-20 lg:mt-8">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="grid gap-6 lg:gap-10">
          <h1 className="text-4xl sm:text-5xl text-center lg:text-left font-black text-brand-primary leading-tight">
            <span className="text-black">{primaryHeading}</span>
            <br />
            {secondaryHeading}
          </h1>
          <p
            className="text-center lg:text-left"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex justify-center lg:justify-start">
            <Link
              className="px-5 py-3 bg-brand-primary text-white font-bold rounded-lg"
              to={cta[0].ctaUrl}
            >
              {cta[0].ctaText}
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Home
