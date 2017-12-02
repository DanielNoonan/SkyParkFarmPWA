import React, { Component } from 'react';
import styled from 'styled-components';

import NewsItem from '../Components/NewsItem';


class FrontPageContainer extends Component {
    
    
    render() {
        //reducing slicing off the amount of news item required for the News Column from the data array.
        const newsData = this.props.data.allContentfulNewsColumn.edges.slice(0, 4);
        console.log('newsData: ', newsData);

        return (
        <FrontPageContentWrapper>
          <NewsColumnWrapper>
             <NewsColumnMainTitle>Latest News</NewsColumnMainTitle>

             {newsData.map(newsItem => {
                 return (
                    <NewsItem title={newsItem.node.title} image={`https:${newsItem.node.previewImage.file.url}`} intro={newsItem.node.openingSentence} />
                 )
             })}
             
          </NewsColumnWrapper>

          <NewsArticleWrapper>
              
          </NewsArticleWrapper>

        </FrontPageContentWrapper>
        )
    }
}

export default FrontPageContainer;


const FrontPageContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 0 98%;
    border: 1px solid black;
    margin-top: 10px;
`

const NewsColumnWrapper = styled.div`
flex: 0 0 calc(100% / 12 * 3);
border: 1px solid black;
`

const NewsColumnMainTitle = styled.h1`
text-align: center;
`

const NewsArticleWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
flex: 0 0 calc(100% / 12 * 9);
border: 1px solid black;
`
