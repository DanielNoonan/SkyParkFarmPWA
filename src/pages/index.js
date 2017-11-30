import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const TestElement = styled.div`
  color: blue;
  background: grey;
  font-size: 25px;
  font-weight: bold;
`

const IndexPage = ({ data }) => {
  const content = data.allContentfulNewsColumn.edges;
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>

    <TestElement>
      {content[0].node.openingParagraph.openingParagraph}
    </TestElement>

    </div>
  )

}
export default IndexPage

export const TestQuery = graphql`
query TestQuery {
  allContentfulNewsColumn {
    edges {
      node {
        articleNumber
        title
        previewImage {
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