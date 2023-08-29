import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const ProjectsPage = () => {

  const { allSanityProject } = useStaticQuery(graphql`
    query {
      allSanityProject {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main>
        <h1>Projects</h1>
        <ul>
          {allSanityProject.nodes.map((project: {
            id: React.Key,
            slug: { current: string },
            title: string
          }) => (
            <li key={project.id}>
              <Link to={`/projects/${project.slug.current}`}>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default ProjectsPage
