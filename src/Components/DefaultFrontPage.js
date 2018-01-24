import React from 'react';
import styled from 'styled-components';

import './ArticleStyles/article-styles.css'


const DefaultFrontPage = (props) => {
    return (
        <DefaultFrontPageArticle>
            <div dangerouslySetInnerHTML={{ __html: props.data.allContentfulDefaultFrontPageArticle.edges[0].node.firstTextBlock.childMarkdownRemark.html }} />
        </DefaultFrontPageArticle>
    )
}

export default DefaultFrontPage;



const DefaultFrontPageArticle = styled.div`
    margin: 0 10%;

    h1, h2, h3, h4, h5, h6 { text-align: center; font-size: 3em }
    p { text-align: left; font-size: 2em }
    img { margin: 0 auto; border-radius: 4% }
`