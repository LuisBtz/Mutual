import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Header = () => {

    const data = useStaticQuery(graphql`
    query  {
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
    `)


    const [menu, showMenu] = useState(false);
    const [projects, showProjects] = useState(false);

    const falseState = useState(false)

    return(
        <HeadeContainer>
            <button className='icon' onClick={() => {
                showMenu(!menu)
                showProjects(!falseState)
                }
                }>
                <img src='./icon.svg' alt='Mutual icon' />
            </button>
            <Link to='/' className='logo'>
                <img src={data.sanitySettingsPage.logo.asset.url} alt={data.sanitySettingsPage.logo.alt} />
            </Link>
            {menu ? 
                <ul className='menu'>
                    <li><button onClick={() => showProjects(!projects)}>Work</button></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            : ''
            }

            {
                projects ?
                <div className='overlay' onClick={() => {
                    showMenu(!menu)
                    showProjects(!falseState)
                    }
                    }>
                    <div className='projects'>
                        <ul>
                            {data.allSanityProjects.edges.map(({ node }) => {
                                return (
                                    <li key={node._key}>
                                        <Link
                                            to={`/${node.slug.current}`}
                                        >
                                            <p className='year'>{node.year} {node.projectName}</p> <p className='city'>{node.city}</p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                    :
                    ''
            }
            
        </HeadeContainer>
    )
}

const HeadeContainer = styled.nav`
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
    }
}
.overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.projects {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    padding: 70px 20px 0;
    z-index: 2;
    width: 450px;
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
            }
        }
    }
}
    .icon {
        position: absolute;
        left: 15px;
        top: 15px;
        width: 20px;
        z-index: 3;
    }
    ul.menu {
        position: absolute;
        top: 15px;
        left: 70px;
        z-index: 3;
        li {
            margin-right: 30px;
            display: inline;
            a, button {
                text-transform: uppercase;
                color: black
            }
            button, a {
                text-transform: uppercase;
                width: auto;
                margin-right: 20px;
                font-weight: normal;
            }
        }
    }
`

export default Header