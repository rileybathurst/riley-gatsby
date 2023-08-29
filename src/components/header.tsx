import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = () => {

  const { sanityHero } = useStaticQuery(graphql`
    query HeaderQuery {
      sanityHero {
        id
        image {
          asset {
            gatsbyImageData
            altText
          }
        }
      }
    }
  `)

  return (
    <header className='header__concept'>
      <div className='breadcrumbs'>HOME</div>
      <div className='spine'>PUSHING PIXELS</div>
      <h1 className='riley'>RILEY</h1>
      <h2 className='bathurst'>BATHURST</h2>
    </header>
  )
}

export default Header
