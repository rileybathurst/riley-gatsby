// TODO

import * as React from "react"
import { graphql } from "gatsby"

const StyleguidesPage = ({ data }) => {
  // const styleguide = data.strapiStyleguide;

  console.log(data);

  return (
    <>
      {/*     <StyleguideView
      // styleguide={styleguide}
  /> */}
      {data.sanityStyleguide.name}
      <hr />
      {data.sanityStyleguide.article}
    </>
  );
};

export const query = graphql`
  query StyleguidePageQuery($slug__current: String!) {
    sanityStyleguide(slug: {current: {eq: $slug__current}}) {
      name
      article
    }
  }
`

export default StyleguidesPage;
