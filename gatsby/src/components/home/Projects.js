import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import styled from 'styled-components'



const Projects = ( {data}) => {

    return(
      <ProjectsContainer>

        {data.sanityHomePage.projects.map(({ height, alignment, image, _key, selectProject }) => {
          const getDataImage = getImage(image.asset);
          return (
            <section class="panel center h90" key={_key} className={`panel ${height} ${alignment}`}>
              <Link to={`${selectProject.slug.current}`}>
                <GatsbyImage
                  image={getDataImage}
                  alt={image.alt}
                  style={{ height: "100%", width: "100%" }}
                />
              </Link>
              </section>
            )
          })}
      </ProjectsContainer>
    )
}

const ProjectsContainer = styled.section`
width: 100vw;
height: 100vh;
position: relative;
.panel {
  position: relative;
  margin-bottom: 300px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8rem;
  cursor: pointer;
}
.panel a {
  display: contents;
}

.panel.left {
  justify-content: flex-start;
}

.panel.right {
  justify-content: flex-end;
}

.panel img {
  max-height: 100%;
  height: inherit;
  width: auto;
}

.panel.h10 img {
  height: 10%;
}

.panel.h20 img {
  height: 20%;
}

.panel.h30 img {
  height: 30%;
}

.panel.h40 img {
  height: 40%;
}

.panel.h50 img {
  height: 55%;
}

.panel.h60 img {
  height: 65%;
}

.panel.h70 img {
  height: 75%;
}

.panel.h80 img {
  height: 85%;
}

.panel.h90 img {
  height: 95%;
}


@media screen and (max-width: 767px) {
  .panel {
    overflow: hidden;
  }
  .panel.h90 img {
    height: 65%;
  }
  .panel.h80 img {
    height: 55%;
  }
  .panel.h70 img {
    height: 45%;
  }
  .panel.h60 img {
    height: 35%;
  }
  .panel.h50 img {
    height: 25%;
  }
  header a {
    width: 150px;
  }
  button {
    width: 24px;
    height: 24px;
  }
}

`

export default Projects;