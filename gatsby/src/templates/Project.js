import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick} onKeyDown={onClick}>
      <p>→</p>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick} onKeyDown={onClick}>
      <p>←</p>
    </button>
  );
}


function n(num, len = 2) {
  return `${num}`.padStart(len, '0');
}





// markup
const SingleProjectPage = ({ data: { project } }) => {
  const settings = {
    centerPadding: "0",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    waitForAnimate: true,
    speed: 0,
    draggable: false,
    swipeToSlide: true,
    touchMove: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide);
      setActiveSlideIndex(nextSlide);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  console.log()

  const [details, showDetails] = useState(false);


  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Layout>
      <Seo
        title={project.projectName} image={project.slider[0].photo.asset.url} description={project.description}
      />
      <Contenedor>
        <ContenedorImages className={details ? "altura imagenes" : "imagenes"}>
          <SliderContainer {...settings}>
            {project.slider.map(({ _key, photo, video }) => {
              return (
                <Slide
                  key={_key}
                  className={
                    details ? "item slide active" : "item slide deactive"
                  }
                >
                  <div className="slideCont">
                    {photo &&
                      (photo ? (
                        <img src={photo.asset.url} alt={photo.alt} />
                      ) : (
                        ""
                      ))}
                    {video &&
                      (video ? (
                        <video muted loop autoPlay>
                          <source src={video.webm.asset.ur} type="video/webm" />
                          <source src={video.mp4.asset.url} type="video/mp4" />
                        </video>
                      ) : (
                        ""
                      ))}
                  </div>
                </Slide>
              );
            })}
          </SliderContainer>
          <div className="button">
            <button onClick={() => showDetails(!details)}>details ↑</button>
            <div className='counter'>
              <p>{n(activeSlideIndex + 1)}/{n(project.slider.length)}</p>
            </div>
          </div>
          <div className='swipe'>
            <p>(Prev)</p>
            <p>(Next)</p>
          </div>
          
        </ContenedorImages>
        <DescriptionContainer>
          <div className="description">
            <h1>({project.projectName})</h1>
            <p>{project.description}</p>
          </div>
          <div className="specs">
            {project.specs.map(({ _key, label, value }) => {
              return (
                <div key={_key}>
                  <p className="label">{label}</p>
                  <p className="value">{value}</p>
                </div>
              );
            })}
          </div>
        </DescriptionContainer>
      </Contenedor>
    </Layout>
  );
};

const Contenedor = styled.div`
  height: 100vh;
  overflow-y: hidden;
  position: relative;
  .imagenes {
    height: 100vh;
    transition: all 350ms ease-in-out;
    /* @media (max-width: 850px) {
      height: 100vh;
      height: 100lvh !important;
    } */
  }
  .altura {
    height: 70vh !important;
    overflow-y: hidden;
    transition: all 350ms ease-in-out;
    /* @media (max-width: 850px) {
      height: 100vh;
      height: 100lvh !important; 
    } */
  }
`;

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
      font-size: 13px;
      top: 50%;
      transform: translateY(-50%);
      width: auto;
      text-transform: uppercase;
      font-weight: normal;
      color: var(--black);
    }
    .counter {
      display: inline-block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: auto;
      p {
        text-transform: uppercase;
        font-weight: normal;
        font-size: 13px;
      }
    }
    
  }




  .swipe {
    display: none;
    position: absolute;
    bottom: 50px;
    width: 100%;
    p {
      text-transform: uppercase;
    }
    @media (max-width: 830px) {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 13px;
      }
    }
  }
`;

const DescriptionContainer = styled.div`
  height: 30vh !important;
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
    @media (max-width: 1060px) {
      grid-column: 1/8 !important;
    }
    @media (max-width: 830px) {
      margin-bottom: 25px;
      grid-column: 1/13 !important;
    }
  }
  .specs {
    grid-column: 6/13;
    @media (max-width: 1060px) {
      grid-column: 9/13 !important;
    }
    @media (max-width: 830px) {
      grid-column: 1/13 !important;
    }
    p {
      display: inline-block;
    }
    .label {
      width: 150px;
    }
  }
  h1 {
    font-size: 20px;
    text-transform: uppercase;
    font-style: normal;
    padding-bottom: 30px;
    font-family: var(--regular);
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
  }
`;

const SliderContainer = styled(Slider)`
  padding-top: 50px;
  width: auto;
  .slick-arrow {
    position: absolute;
    z-index: 1;
    p {
      font-size: 1.5rem;
      font-weight: normal;
    }
  }
  .slick-prev {
    top: 50px !important;
    left: 0px;
    width: 50%;
    height: 85%;
    z-index: 1;
    background-color: none;
    cursor: url('./prev.png'), auto;
    p {
      display: none;
    }
    @media (max-width: 850px) {
      height: 98%;
    }
  }
  .slick-next {
    top: 50px !important;
    right: 0px;
    width: 50%;
    height: 85%;
    background-color: none;
    cursor: url('./next.png'), auto;
    p {
      display: none;
    }
    @media (max-width: 850px) {
      height: 98%;
    }
  }
  .active {
    .slideCont {
      transition: all 350ms ease-in-out;
      height: calc(70vh - 100px);
      @media (max-width: 830px) {
        height: calc(70vh - 130px);
        /* height: calc(70lvh - 130px) !important; */
        img {
        width: auto;
        align-self: center;
        max-height: -webkit-fill-available;
        }
      }
    }
  }

  .deactive {
    .slideCont {
      transition: all 350ms ease-in-out;
      height: calc(100vh - 100px);
      @media (max-width: 830px) {
        height: calc(100vh - 130px);
        /* height: calc(100lvh - 130px) !important; */
      }
    }
  }
`;
const Slide = styled.div`
  .slideCont {
    width: 100%;
    height: 90vh;
    display: flex;
    padding-right: 5px;
    padding-left: 5px;
    img {
      height: 100%;
      width: auto;
      max-width: 100%;
      object-fit: cover;
      margin: 0 auto;
      @media (max-width: 830px) {
        width: 100%;
        align-self: center;
        max-height: -webkit-fill-available;
      }
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const query = graphql`
  query ($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
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
          webm {
            asset {
              url
            }
          }
          mp4 {
            asset {
              url
            }
          }
        }
      }
      specs {
        _key
        label
        value
      }
    }
  }
`;

export default SingleProjectPage;