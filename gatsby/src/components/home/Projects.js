import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import * as ScrollMagic from "scrollmagic-with-ssr"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { gsap, TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import TransitionLink from "gatsby-plugin-transition-link";
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
            <TransitionLink
              exit={{
                trigger: ({ exit, node }) => {
                  console.log(node, animate);
                  const image = document.querySelector(
                    `img[data-slug="${animate}"]`
                  );
                  const xCenter = window.innerWidth / 2;
                  const yCenter = window.innerHeight / 2;
                  const vw40 = (window.innerWidth / 100) * 40;
                  const imageLeft = image.getBoundingClientRect().left;
                  const imageRight =
                    window.innerWidth - image.getBoundingClientRect().right;
                  const imageTop = image.getBoundingClientRect().top;
                  const imageBottom =
                    window.innerHeight - image.getBoundingClientRect().bottom;
                  let imageSide = imageLeft > xCenter ? imageRight : imageLeft;
                  let imageTopDecide =
                    imageTop > yCenter ? imageRight : imageTop;

                  gsap.set(image.closest(".scrollmagic-pin-spacer"), {
                    zIndex: 999,
                  });
                  gsap.to(image, 1, {
                    y: yCenter - (image.clientHeight / 2 + imageTop),
                    width: "calc(100vw - 30px)",
                    height: "100vh",
                    margin: 0,
                  });
                },
                length: 1,
              }}
              entry={{
                delay: 1,
                trigger: ({ node }) => {
                  // remove if yo dont want to animate upcoming page which is scaling down
                  const images = node.querySelectorAll(".slideCont img");
                  gsap.fromTo(
                    images,
                    1,
                    {
                      scale: 1.3,
                    },
                    {
                      scale: 1,
                    }
                  );
                },
              }}
              to={`${selectProject.slug.current}`}
            >
              {/* <GatsbyImage
            style={{ height: "100%", width: "100%" }}
            image={getDataImage}
            alt={image.alt}
          /> */}

              <img src={image.asset.url} alt={image.alt} data-slug={_key} />
            </TransitionLink>
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
