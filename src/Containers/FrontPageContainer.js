import React, { Component } from 'react';
import styled from 'styled-components';

import NewsColumnItem from '../Components/NewsColumnItem';
import NewsColumnArticle from '../Components/NewsColumnArticle';


class FrontPageContainer extends Component {
    state = {
        articleData: {
            node: {
                title: '',
                previewImage: {
                    file: {
                        url: ''
                    }
                },
                openingParagraph: {
                    openingParagraph: ''
                }
            }
        }
    }

    articleDataHandler = (index) => {
        console.log('CLICKED!!', index);
        console.log('PROP: ', this.props.data.allContentfulNewsColumn.edges[index])
        this.setState({
            articleData: this.props.data.allContentfulNewsColumn.edges[index],
        });
        window.scrollTo(0, 500);
    }
    
    render() {
        //Slicing off the amount of news items desired for the News Column from the data array.
        const newsData = this.props.data.allContentfulNewsColumn.edges.slice(0, 4);
        console.log('newsData: ', newsData);
        console.log('STATE: ', this.state.articleData)

        return (
        <FrontPageContentWrapper>

          <NewsColumnWrapper>
             <NewsColumnMainTitle>Latest News</NewsColumnMainTitle>
             {newsData.map((newsItem, index) => {
                 return (
                    <NewsColumnItem clicked={this.articleDataHandler.bind(this, index)} key={newsItem.node.id} index={index} title={newsItem.node.title} image={`https:${newsItem.node.previewImage.file.url}`} intro={newsItem.node.openingSentence} altText={newsItem.node.previewImage.description} />
                 )
             })}
          </NewsColumnWrapper>

          <NewsColumnArticleWrapper>
              <NewsColumnArticle title={this.state.articleData.node.title} image={`https:${this.state.articleData.node.previewImage.file.url}`} text={this.state.articleData.node.openingParagraph.openingParagraph} />
          </NewsColumnArticleWrapper>

        </FrontPageContentWrapper>
        )
    }
}

export default FrontPageContainer;


//Styled Components
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

const NewsColumnArticleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 0 calc(100% / 12 * 9);
    border: 1px solid black;
`
