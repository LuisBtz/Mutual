import React, { useLayoutEffect, useRef } from "react";
import { Link } from 'gatsby';
import styled from "styled-components";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { gsap, TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Projects = ({data}) => {
  const ProjectRef = useRef(null);

  useLayoutEffect(() => {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave",
        duration: "700%",
      },
    });

    // get all slides
    // var slides = ProjectRef.current.querySelectorAll("section.panel"); //an use both but using gsap is right option here
    const q = gsap.utils.selector(ProjectRef);
    const slides = q("section.panel");

    for (var i = 0; i < slides.length; i++) {
      var wipeAnimation = new TimelineMax().to(slides[i], 1, { height: "0%" });

      new ScrollMagic.Scene({
        triggerElement: slides[i],
      })
        .setPin(slides[i], { pushFollowers: false })
        .setTween(wipeAnimation)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    }
  }, []);

  return (
    <ProjectsContainer ref={ProjectRef}>

    {data.sanityHomePage.projects.map(({ height, alignment, image, _key, selectProject }) => {
      return (
        <section key={_key} className={`panel ${height} ${alignment}`}>
          <Link to={`${selectProject.slug.current}`}>
            <img src={image.asset.url} alt={image.alt} />
          </Link>
        </section>
      )
    })}
  </ProjectsContainer>
  );
};

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
`;

export default Projects;
