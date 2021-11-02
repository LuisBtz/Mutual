import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Projects from "../components/home/Projects"

export const data = graphql`
  query  {
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
`



// markup
const IndexPage = ( {data} ) => {

  return (
    <Layout>
      <Seo title='Home Page' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <Projects data={data}/>
    </Layout>
  )
}

export default IndexPage