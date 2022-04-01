import React from "react";
import About from "../components/about/About";
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityAboutPage {
      title
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
        title={data.sanityAboutPage.title} image={data.sanityAboutPage.image.asset.url} description={data.sanityAboutPage.image.alt}
      />
      <About data={data} />
    </Layout>
  );
};

export default AboutPage;
