import React from 'react'
import styled from 'styled-components'
import {TimelineMax } from 'gsap';
import ScrollMagic from "scrollmagic";

export default function Projects() {

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 'onLeave',
          duration: "700%" // this works just fine with duration 0 as well
          // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
          // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
      });

      // get all slides
      var slides = document.querySelectorAll("section.panel");

        for (var i = 0; i < slides.length; i++) {
          var wipeAnimation = new TimelineMax()     
            .to(slides[i], 1, { height: "0%"});

        new ScrollMagic.Scene({
          triggerElement: slides[i]
        })
          .setPin(slides[i], { pushFollowers: false })
          .setTween(wipeAnimation)
          // .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
      }

    return(
        <ProjectsContainer>
             <section class="panel center h90">
                <img src="./img/01.jpg" />
            </section>
            <section class="panel right h70">
                <img src="./img/02.jpg" />
            </section>
            <section class="panel left h80">
                <img src="./img/03.jpg" />
            </section>
            <section class="panel center h50">
                <img src="./img/04.jpg" />
            </section>
            <section class="panel left h80">
                <img src="./img/05.jpg" />
            </section>
            <section class="panel right h90">
                <img src="./img/06.jpg" />
            </section>
            <section class="panel center h70">
                <img src="./img/07.jpg" />
            </section>
            <section class="panel right h70">
                <img src="./img/08.jpg" />
            </section>
            <section class="panel left h80">
                <img src="./img/09.jpg" />
            </section>
            <section class="panel center h60">
                <img src="./img/10.jpg" />
            </section>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.section`
width: 100vw;
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