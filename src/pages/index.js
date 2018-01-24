import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import FrontPageContainer from '../Containers/FrontPageContainer';


const IndexPage = ({ data }) => {
  console.log('Index.js: ', data);
  return (
    <FullPageWrapper>

      <Hero><img src={`https:${data.allContentfulHeroImage.edges[0].node.heroImage.file.url}`} /></Hero>

      <FrontPageContainer data={data} />
        
    </FullPageWrapper>
  )
}
export default IndexPage


//Styled Comonents
const FullPageWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Hero = styled.div`
  flex: 0 0 100%;
  background: grey;
  color: white;
  border: 1px solid black;
  text-align: center;
  h1 {
    margin-top: 150px;
  }
`


//GraphQL Query
export const query = graphql`
query TestQuery {
  allContentfulNewsBlog(sort: {fields: [updatedAt], order: DESC}) {
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
         firstTextBlock {
           childMarkdownRemark {
             html
           }
         }
        }
      }
     }
  }
`
