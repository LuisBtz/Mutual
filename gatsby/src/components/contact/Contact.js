import React from 'react'
import styled from "styled-components"

const Contact = ({data}) => {
    return(
        <ContactContainer>
            <ContactSection className='item'>
                <div className='left'>
                    <h1>(Contact)</h1>
                </div>
                <div className='right'>
                    <a href={`mailto:${data.sanityContactPage.email}`}>{data.sanityContactPage.email}</a>
                    <a href={data.sanityContactPage.instagram.instagramLink}>{data.sanityContactPage.instagram.instagramName}</a>
                </div>
            </ContactSection>
        </ContactContainer>
    )
}


const ContactContainer = styled.section`
padding-top: 100px;
width: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(12, 1fr);
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
        width: 150px;
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
    p, a {
        text-transform: uppercase;
        display: block;
    }
}
`

const ContactSection = styled.div`
grid-column: 6/10;
grid-row: 1;
@media (max-width: 950px) {
    grid-column: 5/11;
}
@media (max-width: 650px) {
    grid-column: 1/13;
}

`

export default Contact