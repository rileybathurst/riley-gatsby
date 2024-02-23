// TODO: pagination

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const StyleguidesPage = () => {

  const { allSanityStyleguide } = useStaticQuery(graphql`
    query {
      allSanityStyleguide {
        nodes {
          name
          slug {
            current
          }
          id
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main>
        <h1>styleguides</h1>
        <ul>
          {
            allSanityStyleguide.nodes.map(styleguides => (
              <li key={styleguides.id}>
                <Link to={`/styleguide/${styleguides.slug.current}`}>
                  {styleguides.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default StyleguidesPage
