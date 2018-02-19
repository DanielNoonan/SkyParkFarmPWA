import React from 'react';
import styled from 'styled-components';

const NewsArchiveArticle = (props) => {
    return (
        <ArticleWrapper>
            <Date>{props.todaysDate}</Date>
            <ArticleTitle>{props.title}</ArticleTitle>
            <NewsArticleImage>
                <source media='(min-width: 1200px)' srcSet={`${props.src}?w=1800`} alt='News archive article' />
                <source media='(min-width: 900px)' srcSet={`${props.src}?w=1200`} alt='News archive article' />
                <source media='(min-width: 650px)' srcSet={`${props.src}?w=900`} alt='News archive article' />
                <source media='(max-width: 649px)' srcSet={`${props.src}?w=650`} alt='News archive article' />
                <img src={props.src} alt='News archive article' />
            </NewsArticleImage>
            <Text dangerouslySetInnerHTML={{ __html: props.text }}></Text>
        </ArticleWrapper>
    )
}

export default NewsArchiveArticle;

//Styled Components
const ArticleWrapper = styled.div`
    display: flex;
    flex: 0 0 90%;
    flex-wrap: wrap;
    border: 5px double #80D4F7;
    background: #F6F6F6;
    margin-bottom: 20px;
`

const Date = styled.p`
    margin-left: 1%;
    margin-bottom: 0;
    font-size: 1em;
    font-weight: bold;
    flex: 0 0 90%;
    @media (min-width: 350px) {
        font-size: 1.5em;
    }
    @media (min-width: 550px) {
        font-size: 2em;
    }
`
const ArticleTitle = styled.h1`
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
    flex: 0 0 60%;
    font-size: 1.5em;
    border-bottom: 5px double #E6E6E6;
    margin-bottom: 20px;
    @media (min-width: 350px) {
        font-size: 2em;
    }
    @media (min-width: 550px) {
        font-size: 3em;
    }
    @media (min-width: 750px) {
        font-size: 4em;
    }
`

const NewsArticleImage = styled.picture`
    img {
        width: 96%;
        margin-left: 2%;
        border-radius: 5px;
        @media (min-width: 750px) {
            width: 84%;
            margin-left: 8%;
        }
    }
`

// const Image = styled.img`
//     margin: 0 auto 10px auto;
// `

const Text = styled.div`
    flex: 0 0 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5em;
    @media (min-width: 600px) {
        font-size: 2em;
    }
`