import React from 'react';
import styled from 'styled-components';



const NewsColumnArticle = (props) => {
    return (
        <div>
            <ReturnLink onClick={props.clicked}>X</ReturnLink>
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
// const ReturnLink = styled.h2`
//     color: #BC7817;
//     cursor: pointer;
//     text-decoration: underline;
//     text-align: right;
//     width: 150px;
//     &&:hover {
//         color: #404040;
//     }
//     text-align: right;
// `

const ReturnLink = styled.h1`
    position: absolute;
    top: 10px;
    right: 30px;
    font-size: 4em;
    border: 3px solid #BC7817;
    padding: 0 15px;
    color: #80D4F7;
    cursor: pointer;
    text-align: right;
    margin: 0 0 0 85%;
    background-color: #000034;
    transition: all 0.5s;
    &&:hover {
        color: #BC7817;
        border-color: #80D4F7;
    }
    @media (min-width: 500px) {
        margin: 0 0 0 90%;
    }
    @media (min-width: 800px) {
        margin: 0 0 0 95%;
    }
`

const NewsArticleHeadline = styled.h1`
    text-align: center;
    font-size: 3em;
    margin-top: 60px;
    @media (min-width: 500px) {
        margin-top: 20px;
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

const NewsArticleText = styled.div`
    text-align: left;
    font-size: 2em;
    margin: 0 1%;
    @media (min-width: 750px) {
        margin: 0 8%;
    }
`