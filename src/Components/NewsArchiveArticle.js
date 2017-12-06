import React from 'react';
import styled from 'styled-components';

const NewsArchiveArticle = (props) => {
    return (
        <ArticleWrapper>
            <Date>{props.todaysDate}</Date>
            <ArticleTitle>{props.title}</ArticleTitle>
            <Image src={props.src} />
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
    font-size: 2em;
    font-weight: bold;
    flex: 0 0 90%;
`
const ArticleTitle = styled.h1`
    text-align: center;
    margin: 0 auto;
    flex: 0 0 60%;
    font-size: 4em;
    border-bottom: 5px double #E6E6E6;
    margin-bottom: 20px;
`

const Image = styled.img`
    margin: 0 auto 10px auto;
`

const Text = styled.div`
    flex: 0 0 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 2em;
`