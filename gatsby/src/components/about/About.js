import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import styled from "styled-components"

const About = ({data}) => {


    return(
        <AboutContainer>
            <AboutSection>
                <div className='left'>
                    <h1>(ABOUT US)</h1>
                </div>
                <div className='right'>
                    <BlockContent
                        blocks={data.sanityAboutPage._rawAboutUs}
                    />
                </div>
            </AboutSection>
            <PressSection>
                <div className='left'>
                        <h2>(Press)</h2>
                    </div>
                <div className='right'>
                {data.sanityAboutPage.press.map(({ title, url, _key }) => {
                    return (
                        <li key={_key}><a target='_blank' rel="noreferrer" href={url}>{title}</a></li>
                    )
                })}
                </div>
            </PressSection>
        </AboutContainer>
    )
}

const AboutContainer = styled.section`

`

const AboutSection = styled.div`

`
const PressSection = styled.div`

`
export default About 