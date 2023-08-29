import React from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import Instagram from "../images/instagram"
import RSS from "../images/rss"
import GitHub from "../images/github"

const Footer = () => (
  <footer className="site-footer">

    <div className="background-dirty footer-background__step">
      <div className="footer_info">

        <div className="footer_copyright">
          <ul>

            <li key='title'>
              <Link to="/" rel="home">{useSiteMetadata().title}</Link> 2009 - {new Date().getFullYear()}
            </li>
            <li key='now'>
              <Link to='/now'>Now</Link>
            </li>
          </ul>
        </div>{/* .footer_copyright */}

        <nav id="bottom-menu" className="">
          <ul>
            {/* // TODO need to build search */}
            {/* <li key="search"><Link to='/search'>Search</Link></li> */}
            <li key="projects"><Link to='/projects'>Projects</Link></li>
            <li key="blogs"><Link to='/blogs'>Blog</Link></li>
            <li key="styleguides"><Link to='/styleguides'>Styleguides</Link></li>
            {/* I can do something more interesting with this as a show whats available maybe an accordian or work in with what I already have */}
          </ul>
        </nav>

        {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address */}
        <address className="footer_contact">
          {/* add some more details to this ie subject */}
          <p>
            <a href={`mailto:${useSiteMetadata().email}`}>{useSiteMetadata().email}</a>
          </p>
          <p>
            <a href={`tel:+${useSiteMetadata().phone}`}>{useSiteMetadata().phone}</a>
          </p>
        </address>
      </div>
    </div>

    <div className="background-primary background-primary__social-icons">
      <div className="social-icons">
        {/* TODO: move these to comopnents */}
        <div className="fp-box">
          <a href="https://www.instagram.com/rileybathurst/">
            <Instagram />
          </a>
        </div>
        {/*         <div className="fp-box">
          <a href="https://www.linkedin.com/in/rileybathurst/">
            <LinkedIn />
          </a>
        </div> */}
        {/* // TODO: add a link to /rss.xml */}
        <div>
          <a href="/rss.xml">
            <RSS />
          </a>
        </div>
        <div className="fp-box">
          <a href="https://github.com/rileybathurst">
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
