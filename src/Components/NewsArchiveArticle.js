import React from 'react';
import styled from 'styled-components';

const NewsArchiveArticle = (props) => {
    return (
        <ArticleWrapper>
            <Date>{props.date}</Date>
            <ArticleTitle>{props.title}</ArticleTitle>
            <Image src={props.src} />
            <Text>{props.text}</Text>
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
    font-size: 2em;
    flex: 0 0 90%;
`
const ArticleTitle = styled.h1`
    margin: 0 auto;
    flex: 0 0 100%;
    font-size: 4em;
    border-bottom: 5px double #E6E6E6;
`

const Image = styled.img`

`

const Text = styled.p`

`