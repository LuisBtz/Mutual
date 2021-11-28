import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-plugin-transition-link";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProjects {
        edges {
          node {
            _key
            city
            projectName
            year
            slug {
              current
            }
          }
        }
      }
      sanitySettingsPage {
        logo {
          alt
          asset {
            url
          }
        }
      }
    }
  `);

  const [menu, showMenu] = useState(false);
  const [projects, showProjects] = useState(false);

  const falseState = useState(false);

  return (
    <HeadeContainer>
      <button
        className={menu ? "icon rotate" : "icon" }
        onClick={() => {
          showMenu(!menu);
          showProjects(!falseState);
        }}
      >
        <img src="./icon.svg" alt="Mutual icon" />
      </button>
      <Link to="/" className="logo">
        <img
          src={data.sanitySettingsPage.logo.asset.url}
          alt={data.sanitySettingsPage.logo.alt}
        />
      </Link>

      {menu ? (
        ""
      ) : (
        <Link to="/" className="logo-m">
          <img
            src={data.sanitySettingsPage.logo.asset.url}
            alt={data.sanitySettingsPage.logo.alt}
          />
        </Link>
      )}

      {menu ? (
        <ul className="menu">
          <li>
            <button onClick={() => showProjects(!projects)}>Work</button>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      ) : (
        ""
      )}

      
        <div
          className={ projects ? "overlay show-proj" : "overlay"}
          onClick={() => {
            showMenu(!menu);
            showProjects(!falseState);
          }}
        >
          <div className="projects">
            <ul>
              {data.allSanityProjects.edges.map(({ node }) => {
                return (
                  <li key={node._key}>
                    <Link to={`/${node.slug.current}`}>
                      <p className="year">
                        {node.year} {node.projectName}
                      </p>{" "}
                      <p className="city">{node.city}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
    </HeadeContainer>
  );
};

const HeadeContainer = styled.nav`
background: white;
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 1;
  .logo {
    position: absolute;
    left: 50%;
    top: 14px;
    transform: translateX(-50%);
    img {
      width: 137px;
      transition: all ease-in-out 300ms;
    }
    @media (max-width: 830px) {
      display: none;
    }
  }
  .logo-m {
    position: absolute;
    left: 50%;
    top: 14px;
    transform: translateX(-50%);
    img {
      width: 137px;
    }
    @media (max-width: 830px) {
      display: block;
    }
  }
  .overlay {
    display: block;
    opacity: 1;
    transition: all ease-in-out 500ms;
  }
  
  .projects {
    position: absolute;
    top: 0;
    left: -100%;
    bottom: 0;
    background-color: white;
    padding: 70px 20px 0;
    z-index: 2;
    width: 450px;
    transition: left ease-in-out 500ms;
    @media (max-width: 650px) {
      width: 100%;
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        a {
          text-transform: uppercase;
          color: black;
          text-align: justify;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          transition: color ease-in-out 350ms;
          &:hover {
            color: #AFB1B1 !important;
          }
          @media (max-width: 415px) {
            p {
              font-size: 0.9rem;
            }
          }
          @media (max-width: 350px) {
            p {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }

  .show-proj {
    display: block;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    .projects {
      left: 0;
    }
  }
  
  .icon {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
    z-index: 3;
    transform: rotate(0deg);
    transition: all ease 300ms;
  }
  .rotate {
    transform: rotate(180deg);
  }
  ul.menu {
    position: absolute;
    top: 15px;
    left: 70px;
    z-index: 3;
    li {
      margin-right: 30px;
      display: inline;
      a,
      button {
        text-transform: uppercase;
        color: black;
      }
      button,
      a {
        text-transform: uppercase;
        width: auto;
        margin-right: 20px;
        font-weight: normal;
      }
    }
    @media (max-width: 830px) {
      width: calc(100% - 70px);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li {
        margin-right: 0;
      }
    }
  }
`;

export default Header;
