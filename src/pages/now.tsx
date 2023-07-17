import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const NowPage = () => {

  const { allStrapiNow } = useStaticQuery(graphql`
    query {
      allStrapiNow(limit: 1) {
        nodes {
          description {
            data {
              description
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <h1>Now</h1>
      <main>
        {/* // TODO: double check this is going the right direction so its showing newest theres only a single now */}
        {allStrapiNow.nodes[0].description.data.description}
      </main>
      <Footer />
    </>
  )
}

export default NowPage
