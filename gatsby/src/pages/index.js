import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/layout/seo";
import Projects from "../components/home/Projects";
import Layout from "../components/layout/layout";

export const data = graphql`
  query {
    sanityHomePage {
      projects {
        _key
        height
        alignment
        image {
          asset {
            url
            gatsbyImageData(
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: DOMINANT_COLOR
            )
          }
          alt
        }
        selectProject {
          slug {
            current
          }
        }
      }
    }
  }
`;

// markup
// if something goes wrong remove layout tag just place fragment in every pages
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="MUTUAL, PHOTOGRAPHY AND DIRECTION" image={data.sanityHomePage.projects[0].image.asset.url}
      />

      <Projects data={data} />
    </Layout>
  );
};

export default IndexPage;
