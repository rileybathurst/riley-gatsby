import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const CheckPage = () => {

  const { allSanityCheck } = useStaticQuery(graphql`
      query {
        allSanityCheck {
          nodes {
            name
          }
        }
      }
    `)

  console.log(allSanityCheck)

  return (
    <>
      <Header />
      <main>
        <h1>Check</h1>
        <ul>
          {allSanityCheck.nodes.map((check: { name: string }) => (
            <li key={check.name}>
              {check.name}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default CheckPage
