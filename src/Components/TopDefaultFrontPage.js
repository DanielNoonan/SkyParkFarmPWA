import React from 'react';
import styled from 'styled-components';



const TopDefaultFrontPage = (props) => {
    const firstImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.firstImage.file.url}`;
    const secondImage = `https:${props.data.allContentfulDefaultFrontPageArticle.edges[0].node.secondImage.file.url}`;
    

    return (
        <TopDefaultFrontPageArticle>
            <h1>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.mainTitle}</h1>
            <h3>Hart - <i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.mainSubtitle}</i></h3>

            <TopDefaultFrontPageArticleImage>
                <source media='(min-width: 1200px)' srcSet={`${firstImage}?w=1800`} alt='Group of Red Deer' />
                <source media='(min-width: 900px)' srcSet={`${firstImage}?w=1200`} alt='Group of Red Deer' />
                <source media='(min-width: 650px)' srcSet={`${firstImage}?w=900`} alt='Group of Red Deer' />
                <source media='(max-width: 649px)' srcSet={`${firstImage}?w=650`} alt='Group of Red Deer' />
                <img src={props.image} alt='Group of Red Deer' />
            </TopDefaultFrontPageArticleImage>
            <h3><i>{props.data.allContentfulDefaultFrontPageArticle.edges[0].node.firstSubheading}</i></h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.firstTextBlock.childMarkdownRemark.html }} />

            <TopDefaultFrontPageArticleImage>
                <source media='(min-width: 1200px)' srcSet={`${secondImage}?w=1800`} alt='Close up of Red Deer' />
                <source media='(min-width: 900px)' srcSet={`${secondImage}?w=1200`} alt='Close up of Red Deer' />
                <source media='(min-width: 650px)' srcSet={`${secondImage}?w=900`} alt='Close up of Red Deer' />
                <source media='(max-width: 649px)' srcSet={`${secondImage}?w=650`} alt='Close up of Red Deer' />
                <img src={props.image} alt='Close up of Red Deer' />
            </TopDefaultFrontPageArticleImage>
            

        </TopDefaultFrontPageArticle>
    )
}

export default TopDefaultFrontPage;


//Styled Components
const TopDefaultFrontPageArticle = styled.div`
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

const TopDefaultFrontPageArticleImage = styled.picture`
    margin: 0 auto;
`