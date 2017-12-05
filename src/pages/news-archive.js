import React, { Component } from 'react';
import styled from 'styled-components';

import NewsArchiveContainer from '../Containers/NewsArchiveContainer';

const NewsArchive = ({ data }) => {
    console.log('new-archive.js: ', data);
    return(
        <FullPageWrapper>

            <PageTitle>NEWS ARCHIVE</PageTitle>

            <NewsArchiveContainer />

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
    flex: 0 0 70%;
    border: 5px inset #E6E6E6;
`

// export const BlogQuery = graphql`
// query BlogQuery {
//   allContentfulNewsColumn(sort: {fields: [date], order: DESC}) {
//     edges {
//       node {
//         id
//         date
//         title
//         previewImage {
//           description
//           file {
//             url
//           }
//         }
//         openingSentence
//         openingParagraph {
//           openingParagraph
//         }
//       }
//     }
//   }
// }
// `