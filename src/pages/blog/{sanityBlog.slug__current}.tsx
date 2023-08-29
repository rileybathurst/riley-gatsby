import * as React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../../components/header";
import Footer from "../../components/footer";

const BlogViewPage = ({ data }) => {
  return (
    <>
      <Header />
      <main>
        {data.sanityBlog.title}
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query BlogPageQuery($slug__current: String!) {
    sanityBlog(slug: {current: {eq: $slug__current}}) {
      title
    }
  }
`

export default BlogViewPage;

/* variable: sanityBlog(slug: {current: {eq: $slug}}) {
  title
} */