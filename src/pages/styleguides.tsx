// ? possibly move this to gatsby node to have pagination

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const StyleguidesPage = () => {

  /*
  TODO: build in sanity
  const { allStrapiStyleguide } = useStaticQuery(graphql`
      query {
        allStrapiStyleguide {
          nodes {
            name
            slug
            id
          }
        }
      }
    `) */

  return (
    <>
      <Header />
      <main>
        <h1>styleguides</h1>
        {/* <ul>
          {
            allStrapiStyleguide.nodes.map(styleguides => (
              <li key={styleguides.id}>
                <Link to={`/styleguide/${styleguides.slug}`}>
                  {styleguides.name}
                </Link>
              </li>
            ))
          }
        </ul> */}
      </main>
      <Footer />
    </>
  )
}

export default StyleguidesPage
