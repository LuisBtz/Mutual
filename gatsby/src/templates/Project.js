import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

// markup
const SingleProjectPage = ( { data: { project } } ) => {


  return (
    <Layout>
        <Seo title='Project' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
        <SliderContainer>
            {project.slider.map(({ _key, photo, video }) => {
                const alt = photo.alt
                const getDataImage = getImage(photo.asset);
                return (
                    <div class="slide" key={_key} >
                        {photo ? 
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={getDataImage}
                                    alt={alt}
                                />
                            : 
                            <video muted loop autoPlay >
                                <source src={video.webm.asset.ur} type="video/webm" />
                                <source src={video.mp4.asset.url} type="video/mp4" />
                            </video>
                        }
                    </div>
                )
            })}
        </SliderContainer>
    </Layout>
  )
}

const SliderContainer = styled.div`

`
export const query = graphql`
    query($slug: String!){
        project: sanityProjects(slug: {
		current: {eq: $slug} }){
            projectName
            description
            slider {
                _key
                photo {
                    alt
                    asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                    )
                    }
                }
                video {
                    webm{
                        asset {
                            url
                        }
                    }
                    mp4{
                        asset {
                            url
                        }
                    }
                }
            }
            specs {
                label
                value
            }
        }
    }
`


export default SingleProjectPage