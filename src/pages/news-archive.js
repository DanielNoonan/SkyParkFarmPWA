import React, { Component } from 'react';
import styled from 'styled-components';

import NewsArchiveContainer from '../Containers/NewsArchiveContainer';

const NewsArchive = ({ data }) => {
    console.log('news-archive.js: ', data);
    return(
        <FullPageWrapper>

            <PageTitle>NEWS ARCHIVE</PageTitle>

            <NewsArchiveContainer data={data} />

        </FullPageWrapper>
    )
}

export default NewsArchive;

//Styled Components
const FullPageWrapper = styled.div`

`

const PageTitle = styled.h1`
    color: black;
    text-align: center;
    font-size: 6em;
    letter-spacing: 0.2em;
    width: 70%;
    border: 5px inset #E6E6E6;
    margin-left: auto;
    margin-right: auto;
`

export const BlogQuery = graphql`
query BlogQuery {
    allContentfulNewsBlog(sort: {fields: [updatedAt], order: DESC}) {
        edges {
          node {
            todaysDate(formatString: "DD MMMM, YYYY")
            id
            title
            articleImage {
              file {
                url
              }
            }
            childContentfulNewsBlogFullArticleTextTextNode {
                childMarkdownRemark {
                    html
                  }
            }
            }
        }
    }
}
`