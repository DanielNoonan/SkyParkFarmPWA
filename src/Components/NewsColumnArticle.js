import React from 'react';
import styled from 'styled-components';



const NewsColumnArticle = (props) => {
    return (
        <div>
            <h2 onClick={props.clicked}>&#8656; Front Page Story</h2>
            <NewsArticleHeadline>{props.title}</NewsArticleHeadline>
            <NewsArticleImage>
                <source media='(min-width: 1800px)' srcSet={`${props.image}?w=1800`} alt='source Dummy Alt Text' />
                <source media='(min-width: 1200px)' srcSet={`${props.image}?w=1200`} alt='source Dummy Alt Text' />
                <source media='(min-width: 900px)' srcSet={`${props.image}?w=900`} alt='source Dummy Alt Text' />
                <source media='(min-width: 650px)' srcSet={`${props.image}?w=650`} alt='source Dummy Alt Text' />
                <img src={props.image} alt='img Dummy Alt Text' />
            </NewsArticleImage>
            <NewsArticleText>{props.text}</NewsArticleText>
        </div>
    )
}

export default NewsColumnArticle;


//Styled Components
const NewsArticleHeadline = styled.h1`
    text-align: center;
`

const NewsArticleImage = styled.picture`
    width: 96%;
    margin-left: 2%;
`

const NewsArticleText = styled.p`
    text-align: center;
`