// https://www.gatsbyjs.com/docs/adding-pagination/
// https://github.com/NickyMeuleman/gatsby-paginated-blog/blob/master/src/templates/blog-list.js

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

// https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#trade-offs-of-querying-for-all-fields-in-the-context-object-of-gatsby-nodejs
const BlogTemplate = () => {

  /*   const { allSanityTag } = useStaticQuery(graphql`
      query SanityQuery {
        allSanityTag {
          nodes {
            _id
            name
          }
        }
      }
    `) */

  return (
    <>
      <Header />
      <h1>🔖 Tag</h1>
      <hr />
      <ol>
        {/* {
          allSanityTag.nodes.map(tag => (
            <li
              key={tag._id}
            >
        <h2>
          {tag.name}
        </h2>
      </li>
      ))
        } */}
      </ol >


      <Footer />
    </>
  );
};

export default BlogTemplate;

export const query = graphql`
  query(
    $limit: Int!
    $skip: Int!
  ) {
    allSanityBlog(
      sort: {_updatedAt: DESC},
      limit: $limit,
      skip: $skip
    ) {
      nodes {
        _id
        title
        slug {
          current
        }
        _createdAt
        _updatedAt
      }
    }
  }
`;
