import React from 'react';
import styled from 'styled-components';

const BottomDefaultFrontPage = (props) => {
    const thirdImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.thirdImage.file.url}`;
    const fourthImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fourthImage.file.url}`;
    const fifthImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fifthImage.file.url}`;

    return (

        <BottomDefaultFrontPageArticle>

        <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.secondSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.secondTextBlock.childMarkdownRemark.html }} />

            <BottomDefaultFrontPageArticleImage>
                <source media='(min-width: 1200px)' srcSet={`${thirdImage}?w=1800`} alt='Sky Park Farm Sunset' />
                <source media='(min-width: 900px)' srcSet={`${thirdImage}?w=1200`} alt='Sky Park Farm Sunset' />
                <source media='(min-width: 650px)' srcSet={`${thirdImage}?w=900`} alt='Sky Park Farm Sunset' />
                <source media='(max-width: 649px)' srcSet={`${thirdImage}?w=650`} alt='Sky Park Farm Sunset' />
                <img src={props.image} alt='Sky Park Farm Sunset' />
            </BottomDefaultFrontPageArticleImage>
            <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.thirdSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.thirdTextBlock.childMarkdownRemark.html }} />

            <BottomDefaultFrontPageArticleImage>
                <source media='(min-width: 1200px)' srcSet={`${fourthImage}?w=1800`} alt='Deer herd following Dom the farm manager' />
                <source media='(min-width: 900px)' srcSet={`${fourthImage}?w=1200`} alt='Deer herd following Dom the farm manager' />
                <source media='(min-width: 650px)' srcSet={`${fourthImage}?w=900`} alt='Deer herd following Dom the farm manager' />
                <source media='(max-width: 649px)' srcSet={`${fourthImage}?w=650`} alt='Deer herd following Dom the farm manager' />
                <img src={props.image} alt='Deer herd following Dom the farm manager' />
            </BottomDefaultFrontPageArticleImage>
            <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fourthSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fourthTextBlock.childMarkdownRemark.html }} />

            <BottomDefaultFrontPageArticleImage>
                <source media='(min-width: 1200px)' srcSet={`${fifthImage}?w=1800`} alt='Group of deer with beautiful sprawling country background' />
                <source media='(min-width: 900px)' srcSet={`${fifthImage}?w=1200`} alt='Group of deer with beautiful sprawling country background' />
                <source media='(min-width: 650px)' srcSet={`${fifthImage}?w=900`} alt='Group of deer with beautiful sprawling country background' />
                <source media='(max-width: 649px)' srcSet={`${fifthImage}?w=650`} alt='Group of deer with beautiful sprawling country background' />
                <img src={props.image} alt='Group of deer with beautiful sprawling country background' />
            </BottomDefaultFrontPageArticleImage>
            <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fifthSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fifthTextBlock.childMarkdownRemark.html }} />
            </BottomDefaultFrontPageArticle>
    )
}

export default BottomDefaultFrontPage;


//Styled Components
const BottomDefaultFrontPageArticle = styled.div`
    h1, h2, h3, h4, h5, h6 { text-align: center; font-size: 3em }
    p { 
        text-align: left;
        font-size: 2em;
    }

    img { border-radius: 5px }
    margin: 0 1%;
    
    @media (min-width: 750px) {
        margin: 0 8%;
    }
`

const BottomDefaultFrontPageArticleImage = styled.picture`
    margin: 0 auto;
`