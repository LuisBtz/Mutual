import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"



// markup
const IndexPage = () => {

  return (
    <Layout>
      <Seo title='Home Page' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
    </Layout>
  )
}

export default IndexPage