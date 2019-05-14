import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../Components/layout";
import { graphql } from "gatsby";

import NewsArchiveContainer from "../Containers/NewsArchiveContainer";

const NewsArchive = ({ data }) => {
  console.log("news-archive.js: ", data);
  return (
    <Layout>
      <FullPageWrapper>
        <PageTitle>NEWS ARCHIVE</PageTitle>

        <NewsArchiveContainer data={data} />
      </FullPageWrapper>
    </Layout>
  );
};

export default NewsArchive;

//Styled Components
const FullPageWrapper = styled.div``;

const PageTitle = styled.h1`
  color: black;
  text-align: center;
  font-size: 2em;
  letter-spacing: 0.2em;
  width: 70%;
  border: 5px inset #e6e6e6;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 450px) {
    font-size: 4em;
    letter-spacing: 0.2em;
  }
  @media (min-width: 650px) {
    font-size: 6em;
    letter-spacing: 0.2em;
  }
`;

export const BlogQuery = graphql`
  query BlogQuery {
    allContentfulNewsBlog(sort: { fields: [updatedAt], order: DESC }) {
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
`;
