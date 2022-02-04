import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import styled from "styled-components"

const About = ({data}) => {


    return(
        <AboutContainer>
            <div className='imagen'>
                <img src={data.sanityAboutPage.image.asset.url} alt={data.sanityAboutPage.image.alt} />
            </div>
            <div className='items'>
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
                <ContactSection className='item'>
                    <div className='left'>
                        <h1>(Contact)</h1>
                    </div>
                    <div className='right'>
                        <a href={`mailto:${data.sanityContactPage.email}`}>{data.sanityContactPage.email}</a>
                        <a href={data.sanityContactPage.instagram.instagramLink}>{data.sanityContactPage.instagram.instagramName}</a>
                    </div>
                </ContactSection>
            </div>
            

        </AboutContainer>
    )
}

const AboutContainer = styled.section`
padding-top: 100px;
width: 80%;
margin: 0 auto;
display: flex;
position: relative;
@media (max-width: 650px) {
        flex-direction: column-reverse;
        padding-bottom: 100px;
    }
.imagen {
    width: 100%;
}
.items {
    padding: 0 50px;
    box-sizing: border-box;
    a {
        color: black;
    }
    @media (max-width: 650px) {
        padding: 0;
    }
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
.left {
        width: 30%;
    }
.right {
    width: 70%;
}

@media (max-width: 650px) {
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
.right {
    a {
        display: block;
    }
}

.left {
        width: 30%;
    }
.right {
    width: 70%;
}


@media (max-width: 650px) {
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



const ContactSection = styled.div`
.left {
        width: 30%;
    }
.right {
    width: 70%;
    a {
        display: block;
    }
}
@media (max-width: 650px) {
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


export default About 