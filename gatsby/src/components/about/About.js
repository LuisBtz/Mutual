import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import styled from "styled-components"

const About = ({data}) => {


    return(
        <AboutContainer>
            <AboutSection className='item'>
                <div className='left'>
                    <h1>(ABOUT US)</h1>
                </div>
                <div className='right'>
                    <BlockContent
                        blocks={data.sanityAboutPage._rawAboutUs}
                    />
                </div>
            </AboutSection>
            <PressSection className='item'>
                <div className='left'>
                        <h2>(Press)</h2>
                </div>
                <ul className='right'>
                    {data.sanityAboutPage.press.map(({ title, url, _key }) => {
                        return (
                            <li key={_key}><a target='_blank' rel="noreferrer" href={url}>{title}</a></li>
                        )
                    })}
                </ul>
            </PressSection>
            <WorkBy>
                <BlockContent
                    blocks={data.sanitySettingsPage._rawCopyright}
                />
            </WorkBy>

        </AboutContainer>
    )
}

const AboutContainer = styled.section`
padding-top: 100px;
width: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(12, 1fr);
position: relative;
@media (max-width: 650px) {
        display: block;
    }
.item {
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 650px) {
        padding: 20px;
    }
    h1, h2 {
        font-size: 1rem;
        font-style: normal;
        font-weight: normal;
        position: static;
    }
    ul {
        list-style: none;
        li {
            a {
                text-transform: uppercase;
                color: black;
            }
        }
    }
    p {
        text-transform: uppercase;
    }
}
`

const AboutSection = styled.div`
grid-column: 6/10;
grid-row: 1;
.left {
        width: 30%;
    }
.right {
    width: 70%;
}

@media (max-width: 950px) {
    grid-column: 5/11;
}
@media (max-width: 650px) {
    grid-column: 1/13;
    .left {
        width: 30%;
        h2, h1 {
            font-size: 13px;
        }
    }
    .right {
        width: 70%;
        p {
            font-size: 13px;
        }
    }
}

`
const PressSection = styled.div`
grid-row: 2;
grid-column: 6/10;
@media (max-width: 950px) {
    grid-column: 5/11;
}

.left {
        width: 30%;
    }
.right {
    width: 70%;
}


@media (max-width: 650px) {
    grid-column: 1/13;
    .left {
        width: 30%;
        h2, h1 {
            font-size: 13px;
        }
    }
    .right {
        width: 70%;
        p, a {
            font-size: 13px;
        }
    }
}
`

const WorkBy = styled.div`
    position: fixed;
    bottom: 35px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    @media (max-width: 680px) {
        position: relative;
        margin-top: 100px;
        display: block;
            p, a {
                font-size: 13px;
            }
        }
    a {
        color: black;
        text-decoration: underline;
       
    }
`
export default About 