import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import FrontPageContainer from '../Containers/FrontPageContainer';


const IndexPage = ({ data }) => {
  console.log('Index.js: ', data);
  return (
    <FullPageWrapper>

      <Hero><h1>Hero Image</h1></Hero>

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
  height: 350px;
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
        previewImage {
          description
          file {
            url
          }
        }
        openingSentence
        openingParagraph {
          openingParagraph
        }
      }
    }
  }
}
`