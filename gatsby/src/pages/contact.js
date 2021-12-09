import React from "react";
import Contact from "../components/contact/Contact";
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityContactPage {
      email
      instagram {
        instagramLink
        instagramName
      }
    }
    sanitySettingsPage {
      _rawCopyright
    }
  }
`;

// markup
const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Contact Page" /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */
      />
      <Contact data={data} />
    </Layout>
  );
};

export default ContactPage;
