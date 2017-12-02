import React, { Component } from 'react';
import styled from 'styled-components';

import NewsItem from '../Components/NewsItem';


class FrontPageContainer extends Component {
    
    
    render() {
        const content = this.props.data.allContentfulNewsColumn.edges[0]
        return (
        <FrontPageContentWrapper>
          <NewsColumnWrapper>
             <NewsColumnMainTitle>Latest News</NewsColumnMainTitle>
             <NewsItem title={content.node.title} image={`https:${content.node.previewImage.file.url}`} intro={content.node.openingSentence} />
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
height: 800px;
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
