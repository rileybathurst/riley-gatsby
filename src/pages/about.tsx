import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Link, HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

import ReactMarkdown from "react-markdown";

const AboutPage = () => {

  const { sanityAbout } = useStaticQuery(graphql`
    query AboutQuery {
      sanityAbout {
        id
        title
        description
      }
    }
  `)

  return (
    <>
      <Header />
      <main>
        <h1>{sanityAbout.title}</h1>
        <p>{sanityAbout.description}</p>
        <ReactMarkdown
          children={sanityAbout.description}
        // remarkPlugins={[remarkGfm]}
        />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
