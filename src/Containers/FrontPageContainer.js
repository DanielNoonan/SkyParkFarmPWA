import React, { Component } from 'react';
import styled from 'styled-components';

import NewsColumnItem from '../Components/NewsColumnItem';
import NewsColumnArticle from '../Components/NewsColumnArticle';
import DefaultFrontPage from '../Components/DefaultFrontPage';


class FrontPageContainer extends Component {
    state = {
        frontpage: true,
        articleData: {}
    }

    articleDataHandler = (index) => {
        console.log('CLICKED!!', index);
        console.log('PROP: ', this.props.data.allContentfulNewsBlog.edges[index])
        this.setState({
            frontpage: false,
            articleData: this.props.data.allContentfulNewsBlog.edges[index],
        });
        window.scrollTo(0, 500);
    }

    reloadHomepageHandler = () => {
        this.setState({
            frontpage: true
        });
        window.scrollTo(0, 0);
    }
    
    render() {
        //Slicing off the amount of news items desired for the News Column from the data array.
        const newsData = this.props.data.allContentfulNewsBlog.edges.slice(0, 4);
        console.log('newsData: ', newsData);
        console.log('STATE: ', this.state.articleData)

        return (
        <FrontPageContentWrapper>

          <NewsColumnWrapper>
             <NewsColumnMainTitle>LATEST NEWS</NewsColumnMainTitle>
             {newsData.map((newsItem, index) => {
                 return (
                    <NewsColumnItem 
                    clicked={this.articleDataHandler.bind(this, index)} 
                    key={newsItem.node.id} 
                    index={index} title={newsItem.node.title} 
                    image={`https:${newsItem.node.articleImage.file.url}?w=500`}
                    altText={newsItem.node.articleImage.description} 
                    intro={newsItem.node.openingSentence}
                    itemBack={newsItem.node.openingParagraph.openingParagraph}
                    />
                 )
             })}
          </NewsColumnWrapper>
          
          <NewsColumnArticleWrapper>
            <NewsArticleBox>
                {!this.state.frontpage ? 
                <NewsColumnArticle 
                title={this.state.articleData.node.title} 
                image={`https:${this.state.articleData.node.articleImage.file.url}`} 
                text={this.state.articleData.node.fullArticleText.childMarkdownRemark.html}
                clicked={this.reloadHomepageHandler} 
                />
                :null}

                {this.state.frontpage ?
                <DefaultFrontPage data={this.props.data} />
                : null}

            </NewsArticleBox>
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
    margin-top: 10px;
`

const NewsColumnWrapper = styled.div`
    display: none;
    flex: 0 0 calc(100% / 12 * 3);
    @media (min-width: 1024px) {
        display: block;
    }
`

const NewsColumnMainTitle = styled.h1`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    color: #BC7817;
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    background: #F6F6F6;
    border: 1px solid #80D4F7;
    border-radius: 10px;
`

const NewsColumnArticleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 0 calc(100% / 12 * 9);
`
const NewsArticleBox = styled.div`
    flex: 0 0 calc(100% / 12 * 11);
    background: #F6F6F6;
    border-radius: 20px;
`