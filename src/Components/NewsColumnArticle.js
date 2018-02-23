import React from 'react';
import styled from 'styled-components';



const NewsColumnArticle = (props) => {
    return (
        <div>
            <ReturnLink onClick={props.clicked}>&#8656; Front Page Story</ReturnLink>
            <NewsArticleHeadline>{props.title}</NewsArticleHeadline>
            <NewsArticleImage>
                <source media='(min-width: 1200px)' srcSet={`${props.image}?w=1800`} alt='News column article' />
                <source media='(min-width: 900px)' srcSet={`${props.image}?w=1200`} alt='News column article' />
                <source media='(min-width: 650px)' srcSet={`${props.image}?w=900`} alt='News column article' />
                <source media='(max-width: 649px)' srcSet={`${props.image}?w=650`} alt='News column article' />
                <img src={props.image} alt='News column article' />
            </NewsArticleImage>
            <NewsArticleText dangerouslySetInnerHTML={{ __html: props.text }} />
        </div>
    )
}

export default NewsColumnArticle;


//Styled Components
const ReturnLink = styled.h2`
    color: #BC7817;
    cursor: pointer;
    text-decoration: underline;
    text-align: right;
    width: 150px;
    &&:hover {
        color: #404040;
    }
    text-align: right;
`

const NewsArticleHeadline = styled.h1`
    text-align: center;
    font-size: 3em;
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

const NewsArticleText = styled.div`
    text-align: left;
    font-size: 2em;

    margin: 0 1%;
    @media (min-width: 750px) {
        margin: 0 8%;
    }
`