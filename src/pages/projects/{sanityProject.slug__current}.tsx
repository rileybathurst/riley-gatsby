import * as React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../../components/header";
import Footer from "../../components/footer";

const ProjectsViewPage = ({ data }) => {
  return (
    <>
      <Header />
      <main>
        {data.sanityProject.title}
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query ProjectPageQuery($slug__current: String!) {
    sanityProject(slug: {current: {eq: $slug__current}}) {
      title
    }
  }
`

export default ProjectsViewPage;
