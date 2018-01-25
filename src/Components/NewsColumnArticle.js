import React from 'react';
import styled from 'styled-components';



const NewsColumnArticle = (props) => {
    return (
        <div>
            <h2 onClick={props.clicked}>&#8656; Front Page Story</h2>
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
const NewsArticleHeadline = styled.h1`
    text-align: center;
`

const NewsArticleImage = styled.picture`
    width: 96%;
    margin-left: 2%;
`

const NewsArticleText = styled.div`
    text-align: center;
`