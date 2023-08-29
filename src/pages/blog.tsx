// TODO: add pagination
// https://www.gatsbyjs.com/docs/adding-pagination/
// https://github.com/NickyMeuleman/gatsby-paginated-blog/blob/master/src/templates/blog-list.js

import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

// https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#trade-offs-of-querying-for-all-fields-in-the-context-object-of-gatsby-nodejs
const BlogPage = (
  // { data, pageContext }
) => {

  const { allSanityBlog } = useStaticQuery(graphql`
    query BlogQuery {
      allSanityBlog {
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

  /*   const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString() */

  return (
    <>
      <Header />
      <main>
        <h1>Blog</h1>
        <hr />
        <ol>
          {allSanityBlog.nodes.map(blog => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.slug.current}`}>
                <h2>{blog.title}</h2>
                {/* <When published={blog.node.publishedAt} updated={blog.node.updatedAt} /> */}
              </Link>
            </li>
          ))}
        </ol>

        <hr />

        <h3>pagination starts here</h3>
        <ul>
          {/* {!isFirst && (
          <Link to={`/ blog / ${ prevPage }`} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li
            key={`pagination - number${ i + 1}`}
          >
            <Link
              to={`/ blog / ${ i === 0 ? '' : i + 1 } `}
              // class === true for the current page
              // false for all other pages
              className={`${ i + 1 === currentPage } `}>
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link to={`/ blog / ${ nextPage } `} rel="next">
            Next Page →
          </Link>
        )} */}
        </ul>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;