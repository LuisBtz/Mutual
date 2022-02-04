import React from "react";
import About from "../components/about/About";
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityAboutPage {
      image {
        asset {
          url
        }
        alt
      }
      _rawAboutUs
      press {
        _key
        title
        url
      }
    }
    sanityContactPage {
      email
      instagram {
        instagramLink
        instagramName
      }
    }
  }
`;


// markup
const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="About Page" /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */
      />
      <About data={data} />
    </Layout>
  );
};

export default AboutPage;
