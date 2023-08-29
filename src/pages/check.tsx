import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const CheckPage = () => {

  /* const { allSanityCheck } = useStaticQuery(graphql`
      query {
        allSanityCheck(limit: 1) {
          nodes {
            check
            image {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    `) */

  return (
    <>
      <h1>Check 1</h1>
      <main>
        {/*  {allSanityCheck.nodes[0].check}
        <GatsbyImage
          image={allSanityCheck.nodes[0].image.asset.gatsbyImageData}
          alt="Check 1"
        /> */}
      </main>
    </>
  )
}

export default CheckPage
