import React from 'react';
import styled from 'styled-components';


const NewsColumnArticle = (props) => {
    return (
        <NewsArticleBox>
            <NewsArticleHeadline>{props.title}</NewsArticleHeadline>
            <NewsArticleImage src={props.image} alt='Dummy Alt Text' />
            <NewsArticleText>{props.text}</NewsArticleText>
        </NewsArticleBox>
    )
}

export default NewsColumnArticle;


//Styled Components
const NewsArticleBox = styled.div`
    flex: 0 0 calc(100% / 12 * 11);
    border: 1px solid black;
`

const NewsArticleHeadline = styled.h1`
    text-align: center;
`

const NewsArticleImage = styled.img`
    width: 96%;
    margin-left: 2%;
`

const NewsArticleText = styled.p`
    text-align: center;
`