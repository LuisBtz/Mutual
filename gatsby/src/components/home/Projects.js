import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import * as ScrollMagic from "scrollmagic-with-ssr"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { gsap, TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { Link } from 'gatsby';

if (typeof window !== "undefined") {
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
}

let animate;

const Projects = ({ data }) => {
  const ProjectRef = useRef(null);
  const dataToMap = data.sanityHomePage.projects;
  // const [animate, setAnimate] = useState(null);

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

    const transitionLinkWrapper = document.querySelectorAll(".tl-edges");
    transitionLinkWrapper.forEach((wr) => (wr.style.overflowX = "unset")); //doing beacuse gatsby-transition-pluin wass making adding this style and not working for scrollanimation
    // transitionLinkWrapper.style.overflowX = "unset";
    const slides = q("section.panel");

    for (var i = 0; i < slides.length; i++) {
      var wipeAnimation = new TimelineMax().to(slides[i], 1, { height: "0%" });
      slides[i].style.position = "relative";

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
      {dataToMap.map(({ height, alignment, image, _key, selectProject }) => {
        return (
          <section
            key={_key}
            className={`panel ${height} ${alignment}`}
            onClick={() => {
              console.log("CLICKED");
              animate = _key;
            }}
          >
            <Link
              to={`${selectProject.slug.current}`}
            >
              {/* <GatsbyImage
            style={{ height: "100%", width: "100%" }}
            image={getDataImage}
            alt={image.alt}
          /> */}

              <img src={image.asset.url} alt={image.alt} data-slug={_key} />
            </Link>
          </section>
        );
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
    /* padding: 0 8rem; */
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
    margin: 0 8rem;
    object-fit: cover;
    cursor: pointer;
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
