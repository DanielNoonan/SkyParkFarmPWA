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
                        key={newsItem.node.id}
                        todaysDate={newsItem.node.todaysDate}
                        title={newsItem.node.title}
                        src={`https:${newsItem.node.articleImage.file.url}`}
                        text={newsItem.node.childContentfulNewsBlogFullArticleTextTextNode.childMarkdownRemark.html}
                        >{this.props.children}</NewsArchiveArticle>
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
    padding-top: 20px;
    padding-bottom: 20px;
    background: #000034;
`