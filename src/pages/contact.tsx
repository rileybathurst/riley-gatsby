import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const ContactPage = () => (
  <>
    <Header />
    <main>
      <h1>Contact</h1>
      <p>Get in contact with me <a href={`mailto:${useSiteMetadata().email}?subject=${useSiteMetadata().title}%20Contact%20Page`}>{useSiteMetadata().email}</a></p>
    </main>
    <Footer />
  </>
)

export default ContactPage
