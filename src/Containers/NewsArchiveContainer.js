import React, { Component } from 'react';
import styled from 'styled-components';

import NewsArchiveArticle from '../Components/NewsArchiveArticle';

class NewsArchiveContainer extends Component {

    state = {
        articleData: {}
    }

    render() {
        console.log('NewsArticleContainer: ', this.props.data)
        const newsData = this.props.data.allContentfulNewsBlog.edges.slice(4);
        console.log('newsData: ', newsData);
        console.log('STATE: ', this.state.articleData)
        return (
            <NewsArchiveWrapper>
                {newsData.map((newsItem, index) => {
                    return(
                        <NewsArchiveArticle
                        date={newsItem.node.date}
                        title={newsItem.node.title}
                        src={`https:${newsItem.node.previewImage.file.url}`}
                        text={newsItem.node.childContentfulNewsBlogFullArticleTextTextNode.fullArticleText}
                        />
                    )
                })}
                
            </NewsArchiveWrapper>
        )
    }
}

export default NewsArchiveContainer;

const NewsArchiveWrapper = styled.div`
    color: #404040;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 94%;
    margin: 0 auto;
    border: 1px solid black;
`