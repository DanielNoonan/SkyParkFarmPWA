import React, { Component } from 'react';
import styled from 'styled-components';

import NewsArchiveArticle from '../Components/NewsArchiveArticle';

class NewsArchiveContainer extends Component {

    render() {
        return (
            <NewsArchiveWrapper>
                <NewsArchiveArticle />
            </NewsArchiveWrapper>
        )
    }
}

export default NewsArchiveContainer;

const NewsArchiveWrapper = styled.div`
    color: #404040;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 94%;
    margin: 0 auto;
    border: 1px solid black;
`