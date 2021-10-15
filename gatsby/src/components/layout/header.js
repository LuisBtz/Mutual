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
                    <div className='projects'>
                        <ul>
                            {data.allSanityProjects.edges.map(({ node }) => {
                                return (
                                    <li key={node._key}>
                                        <Link
                                            to={`/${node.slug.current}`}
                                        >
                                            {node.year} {node.projectName} {node.city}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
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
.projects {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    padding: 70px 20px 0;
    z-index: 2;
    ul {
        li {
            a {
                text-transform: uppercase;
            }
        }
    }
}
    .icon {
        position: absolute;
        left: 16px;
        top: 14px;
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
            }
        }
    }
`

export default Header