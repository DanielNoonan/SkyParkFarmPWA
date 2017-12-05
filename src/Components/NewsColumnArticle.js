import React from 'react';
import styled from 'styled-components';



const NewsColumnArticle = (props) => {
    return (
        <div>
            <h2 onClick={props.clicked}>&#8656; Front Page Story</h2>
            <NewsArticleHeadline>{props.title}</NewsArticleHeadline>
            <NewsArticleImage src={props.image} alt='Dummy Alt Text' />
            <NewsArticleText>{props.text}</NewsArticleText>
        </div>
    )
}

export default NewsColumnArticle;


//Styled Components
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