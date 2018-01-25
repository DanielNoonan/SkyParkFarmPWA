import React from 'react';
import styled from 'styled-components';

import './ArticleStyles/article-styles.css'


const DefaultFrontPage = (props) => {
    const firstImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.firstImage.file.url}`;
    const secondImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.secondImage.file.url}`;
    const thirdImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.thirdImage.file.url}`;
    const fourthImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fourthImage.file.url}`;
    const fifthImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fifthImage.file.url}`;

    return (
        <DefaultFrontPageArticle>
            <h1>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.mainTitle}</h1>
            <h3>Hart - <i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.mainSubtitle}</i></h3>

            <DefaultFrontPageArticleImage>
                <source media='(min-width: 1800px)' srcSet={`${firstImage}?w=1800`} alt='Group of Red Deer' />
                <source media='(min-width: 1200px)' srcSet={`${firstImage}?w=1200`} alt='Group of Red Deer' />
                <source media='(min-width: 900px)' srcSet={`${firstImage}?w=900`} alt='Group of Red Deer' />
                <source media='(min-width: 650px)' srcSet={`${firstImage}?w=650`} alt='Group of Red Deer' />
                <img src={props.image} alt='Group of Red Deer' />
            </DefaultFrontPageArticleImage>
            <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.firstSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.firstTextBlock.childMarkdownRemark.html }} />

            <DefaultFrontPageArticleImage>
                <source media='(min-width: 1800px)' srcSet={`${secondImage}?w=1800`} alt='Close up of Red Deer' />
                <source media='(min-width: 1200px)' srcSet={`${secondImage}?w=1200`} alt='Close up of Red Deer' />
                <source media='(min-width: 900px)' srcSet={`${secondImage}?w=900`} alt='Close up of Red Deer' />
                <source media='(min-width: 650px)' srcSet={`${secondImage}?w=650`} alt='Close up of Red Deer' />
                <img src={props.image} alt='Close up of Red Deer' />
            </DefaultFrontPageArticleImage>
            <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.secondSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.secondTextBlock.childMarkdownRemark.html }} />

            <DefaultFrontPageArticleImage>
                <source media='(min-width: 1800px)' srcSet={`${thirdImage}?w=1800`} alt='Close up of Red Deer' />
                <source media='(min-width: 1200px)' srcSet={`${thirdImage}?w=1200`} alt='Close up of Red Deer' />
                <source media='(min-width: 900px)' srcSet={`${thirdImage}?w=900`} alt='Close up of Red Deer' />
                <source media='(min-width: 650px)' srcSet={`${thirdImage}?w=650`} alt='Close up of Red Deer' />
                <img src={props.image} alt='Close up of Red Deer' />
            </DefaultFrontPageArticleImage>
            <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.thirdSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.thirdTextBlock.childMarkdownRemark.html }} />

            <DefaultFrontPageArticleImage>
                <source media='(min-width: 1800px)' srcSet={`${fourthImage}?w=1800`} alt='Close up of Red Deer' />
                <source media='(min-width: 1200px)' srcSet={`${fourthImage}?w=1200`} alt='Close up of Red Deer' />
                <source media='(min-width: 900px)' srcSet={`${fourthImage}?w=900`} alt='Close up of Red Deer' />
                <source media='(min-width: 650px)' srcSet={`${fourthImage}?w=650`} alt='Close up of Red Deer' />
                <img src={props.image} alt='Close up of Red Deer' />
            </DefaultFrontPageArticleImage>
            <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fourthSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fourthTextBlock.childMarkdownRemark.html }} />

            <DefaultFrontPageArticleImage>
                <source media='(min-width: 1800px)' srcSet={`${fifthImage}?w=1800`} alt='Close up of Red Deer' />
                <source media='(min-width: 1200px)' srcSet={`${fifthImage}?w=1200`} alt='Close up of Red Deer' />
                <source media='(min-width: 900px)' srcSet={`${fifthImage}?w=900`} alt='Close up of Red Deer' />
                <source media='(min-width: 650px)' srcSet={`${fifthImage}?w=650`} alt='Close up of Red Deer' />
                <img src={props.image} alt='Close up of Red Deer' />
            </DefaultFrontPageArticleImage>
            <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fifthSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.fifthTextBlock.childMarkdownRemark.html }} />

        </DefaultFrontPageArticle>
    )
}

export default DefaultFrontPage;



const DefaultFrontPageArticle = styled.div`
    margin: 0 10%;

    h1, h2, h3, h4, h5, h6 { text-align: center; font-size: 3em }
    p { 
        text-align: left;
        font-size: 2em;
    }
    img { border-radius: 4% }
`

const DefaultFrontPageArticleImage = styled.picture`
    margin: 0 auto;
`