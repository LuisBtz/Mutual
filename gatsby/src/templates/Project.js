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

// markup
const SingleProjectPage = ({ data: { project } }) => {
  const settings = {
    centerPadding: "0",
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    waitForAnimate: true,
    speed: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [details, showDetails] = useState(false);

  return (
    <Layout>
      <Seo
        title="Project" /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */
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
          </div>
          <div className='swipe'>
            <p>(SWIPE)</p>
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
  .imagenes {
    height: 100vh;
    transition: all 350ms ease-in-out;
  }
  .altura {
    height: 70vh;
    transition: all 350ms ease-in-out;
    @media (max-width: 830px) {
      height: 70vh;
    }
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
      top: 50%;
      transform: translateY(-50%);
      width: auto;
      text-transform: uppercase;
      font-weight: normal;
    }
  }
  .swipe {
    display: none;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 830px) {
      display: block;
    }
  }
`;

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
  @media (max-width: 830px) {
    height: 30vh;
  }
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
  }
`;

const SliderContainer = styled(Slider)`
  padding-top: 50px;
  width: auto;
  .slick-arrow {
    position: absolute;
    z-index: 1;
    @media (max-width: 830px) {
        display: none;
      }
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
    background-color: none;
    cursor: url('./prev.png'), auto;
    p {
      display: none;
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
  }
  .active {
    .slideCont {
      transition: all 350ms ease-in-out;
      height: calc(70vh - 100px);
      @media (max-width: 830px) {
        height: calc(50vh - 100px);
      }
    }
  }

  .deactive {
    .slideCont {
      transition: all 350ms ease-in-out;
      height: calc(100vh - 100px);
      @media (max-width: 830px) {
        height: calc(100vh - 130px);
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
        height: auto;
        width: 100%;
        align-self: center;
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