import React, {useState} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";


// markup
const SingleProjectPage = ( { data: { project } } ) => {



    const settings = {
        centerMode: true,
        centerPadding: '0',
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        fade: false,
        };


        const [details, showDetails] = useState(false);


  return (
    <Layout>
        <Seo title='Project' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
        <Contenedor>
            <ContenedorImages className={details ? 'altura imagenes' : 'imagenes'}>
                <SliderContainer {...settings}>
                    {project.slider.map(({ _key, photo, video }) => {
                        return (
                            <Slide key={_key} className={details ? 'item slide active' : 'item slide deactive'}>
                                <div className='slideCont'>
                                    {photo &&
                                        (photo ?  
                                            <img src={photo.asset.url} alt={photo.alt} /> 
                                            : ''
                                        )
                                    }
                                    {video &&
                                        (video ? 
                                            <video muted loop autoPlay  >
                                                <source src={video.webm.asset.ur} type="video/webm" />
                                                <source src={video.mp4.asset.url} type="video/mp4" />
                                            </video> 
                                        :
                                        ''
                                        )
                                    }
                                </div>
                            </Slide>
                        )
                    })}
                </SliderContainer>
                <div className='button'>
                    <button onClick={() => showDetails(!details)}>details ↑</button>
                </div>
            </ContenedorImages>
            <DescriptionContainer>
                <div className='description'>
                    <h1>({project.projectName})</h1>
                    <p>{project.description}</p>
                </div>
            </DescriptionContainer>
        </Contenedor>
    </Layout>
  )
}

const Contenedor = styled.div`
    height: 100vh;
    overflow-y: hidden;
.imagenes {
    height: 100vh;
    transition: all 350ms ease-in-out;
}
.altura {
        height: 70vh;
        transition: all 350ms ease-in-out;
    }
`

const ContenedorImages = styled.div`
position: relative;
width: calc(100% - 30px);
margin: 0 auto;

    .button {
        height: 50px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        button {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            width: auto;
            text-transform: uppercase;
            font-weight: normal;
        }
    }
`

const DescriptionContainer = styled.div`
    height: 30vh;
    overflow: scroll;
    position: relative;
    width: calc(100% - 30px);
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    .description {
        grid-column: 1/5;
    }
    h1 {
        font-size: 20px;
        text-transform: uppercase;
        font-style: normal;
        padding-bottom: 30px;
    }

`

const SliderContainer = styled(Slider)`
padding-top: 50px;
width: auto;
.active {
    .slideCont {
        transition: all 350ms ease-in-out;
        height: calc(70vh - 100px);
    }
}

.deactive {
    .slideCont {
        transition: all 350ms ease-in-out;
        height: calc(100vh - 100px);
    }
}
`
const Slide = styled.div`
.slideCont {
    width: 100%;
    img {
        height: 100%;
        width: auto;
        margin: 0 auto;
    }
    video {
        width: 100%;
        max-height: 100%;
        height: 100%;
        object-fit: cover;
    }
}
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
                    url
                    gatsbyImageData(
                        layout: FIXED
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