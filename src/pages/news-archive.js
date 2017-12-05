import React, { Component } from 'react';
import styled from 'styled-components';


class NewsArchive extends Component {


    render() {
        return(
            <FullPageWrapper>
                <PageTitle>NEWS ARCHIVE</PageTitle>
                <ArticleWrapper>
                    <Date>05/12/2017</Date>
                    <ArticleTitle>Deer Gave Birth Yesterday</ArticleTitle>
                </ArticleWrapper>
            </FullPageWrapper>
        )
    }
}

export default NewsArchive;

//Styled Components
const FullPageWrapper = styled.div`
    color: #404040;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 94%;
    margin: 0 auto;
    border: 1px solid black;
`

const PageTitle = styled.h1`
    color: black;
    text-align: center;
    font-size: 6em;
    letter-spacing: 0.2em;
    flex: 0 0 70%;
    border: 5px inset #E6E6E6;
`

const ArticleWrapper = styled.div`
    display: flex;
    flex: 0 0 90%;
    flex-wrap: wrap;
    border: 5px double #80D4F7;
    background: #F6F6F6;
`

const Date = styled.p`
    margin-left: 1%;
    margin-bottom: 0;
    font-size: 2em;
    flex: 0 0 90%;
`
const ArticleTitle = styled.h1`
    margin: 0 auto;
    font-size: 4em;
    border-bottom: 5px double #E6E6E6;
`