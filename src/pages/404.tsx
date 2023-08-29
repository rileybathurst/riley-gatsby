// ? should I be using pageprops https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/

import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const NotFoundPage = ({ location }) => {
  return (
    <>
      <Header />
      <main>
        <h1>Page not found  - {location.pathname}</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
      <Footer />
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
