import * as React from "react"
import { Link } from "gatsby"

import Header from "../../components/header"
import Footer from "../../components/footer"

function StyleguidesCatchAll(
  { location }
) {
  return (
    <>
      <Header />
      <main>
        <h2 className="crest">Blog not found - {location.pathname}</h2>
      </main>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol>
          <li>
            <Link to="/blog/">
              / Blog /
            </Link>
          </li>
          <li aria-current="page">
            {/* {data.node.title} */}
          </li>
        </ol>
      </nav>

      <hr />
      <Footer />
    </>
  )
}

export default StyleguidesCatchAll
