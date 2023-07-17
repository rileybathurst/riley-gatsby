/* const { createFilePath } = require(`gatsby-source-filesystem`);

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog(sort: { _updatedAt: DESC }, limit: 1000) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create blog-list pages with pagination
  // https://github.com/NickyMeuleman/gatsby-paginated-blog/blob/master/gatsby-node.js
  const posts = result.data.allSanityBlog.edges;
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blogs.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  const blogView = path.resolve(`src/templates/blog-view.tsx`);
  const blogResult = await graphql(`
    query {
      allSanityBlog {
        edges {
          node {
            slug {
              current
            }
          }
          next {
            slug {
              current
            }
          }
          previous {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  // I dont know how to run optionals here so I'll skip that with queries
  blogResult.data.allSanityBlog.edges.forEach(({ node, next, previous }) => {
    if (next && previous) {
      createPage({
        path: `/blog/${node.slug}`,
        component: blogView,
        context: {
          slug: node.slug.current,
          next: next.slug.current,
          previous: previous.slug.current,
        },
      });
    } else if (next) {
      createPage({
        path: `/blog/${node.slug.current}`,
        component: blogView,
        context: {
          slug: node.slug.current,
          previous: null,
          next: next.slug.current,
        },
      });
    } else if (previous) {
      createPage({
        path: `/blog/${node.slug.current}`,
        component: blogView,
        context: {
          slug: node.slug,
          previous: previous.slug.current,
          next: null,
        },
      });
    } else {
      createPage({
        path: `/blog/${node.slug.current}`,
        component: blogView,
        context: {
          slug: node.slug.current,
          previous: null,
          next: null,
        },
      });
    }
  });
};
 */
