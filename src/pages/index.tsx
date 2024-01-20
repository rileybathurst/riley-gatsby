import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Ghosts from "../components/ghosts"
import Footer from "../components/footer"
import SpineBorder from "../components/spine-border"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query IndexQuery {
      sanityHero {
        id
        image {
          asset {
            gatsbyImageData
            altText
          }
        }
      }

      allSanityBlog(
        limit: 1,
        # // TODO: add a featured field to the blog
        # filter: {featured: {eq: true}}
        # filter: {fatured: {eq: true}}
        ) {
        nodes {
          id
          title
          slug {
            current
          }
          excerpt
          # start
          # finish

          image {
            asset {
              gatsbyImageData
              altText
            }
          }
        }
      }
    }
  `)

  let hero = data.sanityHero
  let blog = data.allSanityBlog.nodes

  console.log(hero)

  return (
    <>
      <header className='header__concept'>
        <GatsbyImage
          image={hero.image?.asset?.gatsbyImageData}
          alt={hero.image?.asset?.altText}
          className="headshot"
        />
        {hero.image?.asset?.altText}
        <div className='breadcrumbs'><Link to="/">HOME</Link></div>
        <div className='spine'>PUSHING PIXELS</div>
        <h1 className='riley'>RILEY</h1>
        <h2 className='bathurst'>BATHURST</h2>
      </header>

      <Ghosts />

      {/* // ? I wonder if I can drop a few levels of tags here */}
      <div className="background-dirty" >
        <main className="site-main">

          <article>
            <SpineBorder />

            <div className="fp-header titleSpinner">
              <h2 className="page-title">I&rsquo;m A&nbsp;</h2>
              <div id="changeText">
                <h2 className="page-title">Designer</h2>
                <h2 className="page-title">Developer</h2>
                <h2 className="page-title">Photographer</h2>
              </div>
            </div>
            <div className="article-content">
              <p>Welcome to Riley Bathurst Design this is my freelance design, photography, and video space.</p>

              <p>I've been working with clients from large to small, creating logos to TV shows. I'm always up for a challenge and available to create something for you, your company, or your project. I ended up here through design school, working for photographers and a desire to create as projects have come up or I have been looking at new things I have adapted my work continually through medium and style, something I wish to keep doing to keep creating the best pieces I can.</p>

              <hr className="mega-hr-primary" />

              <p><Link to="clients">Clients</Link></p>

            </div>

          </article>

        </main>
      </div >

      <div id="featured_project">
        <h2 className="passage">Featured Project</h2>
        {blog.map((project) => (
          <article
            key={project.id}
            className="slab"
          >
            <h2>
              <Link to={`/projects/${project.slug.current}`}>
                {project.title}
              </Link>
            </h2>

            <div className="color-blocking">{/* stay gold*/}</div>

            <GatsbyImage
              image={project?.image?.asset?.gatsbyImageData || hero.image.asset.gatsbyImageData}
              alt={project?.image?.asset?.alternativeText || hero.image.asset.altText}
              className="hero"
            />

            <p className="excerpt">
              {project.excerpt || "lorem ipsum dolor sit excerpt"}
            </p>

            {/* // TODO: date formating as words
              <aside className="dates">
                {project.start} - {project.finish}
              </aside>
            */}

            <h3 className="explore" >
              <Link to={project.slug.current}>Explore {project.title}</Link>
            </h3>
          </article >
        ))}
      </div >

      <Footer />
    </>
  )
}

export default IndexPage
