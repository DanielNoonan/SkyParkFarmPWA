import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

//no need to import global-styles.css because index.js layout passes them down

const Footer = (props) => {
    return (
        <FooterContainer>
            <FooterHero className='footer-background-hero-image'>
                <FooterContentBox>
                    <FooterContentBoxTitle>ADDRESS</FooterContentBoxTitle>
                    <FooterText>Sky Park Farm, A road somewhere in Hampshire with a postcode</FooterText>
                </FooterContentBox>
                <FooterContentBox>
                    <FooterContentBoxTitle>PHONE</FooterContentBoxTitle>
                    <FooterText>01234 567 8910</FooterText>
                </FooterContentBox>
                <FooterContentBox>
                    <FooterContentBoxTitle>EMAIL</FooterContentBoxTitle>
                    <FooterText>info@skyparkfarm.com</FooterText>
                </FooterContentBox>
            </FooterHero>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    height: 100px;
    color: white;
    @media (min-width: 446px) {
        height: 100px;
    }
    @media (min-width: 516px) {
        height: 120px;
    }
    @media (min-width: 900px) {
        height: 190px;
    }
    @media (min-width: 1216px) {
        height: 260px;
    }
`

const FooterHero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 100%;
`

const FooterContentBox = styled.div`
    flex: 0 0 calc(100% / 12 * 3.8);
    text-align: center;
    height: 100px;
`

const FooterContentBoxTitle = styled.h1`
    font-size: 1em;
    @media (min-width: 650px) {
        font-size: 1.5em;
    }
    @media (min-width: 1024px) {
        font-size: 2em;
    }
`

const FooterText = styled.p`
    font-size: 1em;
    @media (min-width: 650px) {
        font-size: 1.5em;
    }
    @media (min-width: 1024px) {
        font-size: 2em;
    }
`