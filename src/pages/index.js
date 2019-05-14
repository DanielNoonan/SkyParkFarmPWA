import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Layout from "../Components/layout";
import { graphql } from "gatsby";

import FrontPageContainer from "../Containers/FrontPageContainer";

const IndexPage = ({ data }) => {
  console.log("Index.js: ", data);
  return (
    <Layout>
      <FullPageWrapper>
        <Hero>
          <img
            src={`https:${
              data.allContentfulHeroImage.edges[0].node.heroImage.file.url
            }`}
          />
        </Hero>

        <FrontPageContainer data={data} />
      </FullPageWrapper>
    </Layout>
  );
};
export default IndexPage;

//Styled Comonents
const FullPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Hero = styled.div`
  flex: 0 0 100%;
  background: grey;
  color: white;
  text-align: center;
`;

//GraphQL Query
export const query = graphql`
  query TestQuery {
    allContentfulNewsBlog(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          id
          title
          articleImage {
            description
            file {
              url
            }
          }
          openingSentence
          openingParagraph {
            openingParagraph
          }
          fullArticleText {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulHeroImage {
      edges {
        node {
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulDefaultFrontPageArticle {
      edges {
        node {
          mainTitle
          mainSubtitle
          firstImage {
            file {
              url
            }
          }
          firstSubheading
          firstTextBlock {
            childMarkdownRemark {
              html
            }
          }
          secondImage {
            file {
              url
            }
          }
          secondSubheading
          secondTextBlock {
            childMarkdownRemark {
              html
            }
          }
          thirdImage {
            file {
              url
            }
          }
          thirdSubheading
          thirdTextBlock {
            childMarkdownRemark {
              html
            }
          }
          fourthImage {
            file {
              url
            }
          }
          fourthSubheading
          fourthTextBlock {
            childMarkdownRemark {
              html
            }
          }
          fifthImage {
            file {
              url
            }
          }
          fifthSubheading
          fifthTextBlock {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
