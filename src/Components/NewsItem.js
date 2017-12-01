import React from 'react';
import styled from 'styled-components';



const NewsItem = (props) => {
  return (
    <NewsItemBox>
        <NewsItemHeadline>{props.title}</NewsItemHeadline>
        <NewsItemImage alt='Mother and baby deer' />
        <NewsItemIntroText>This is some intro text</NewsItemIntroText>
    </NewsItemBox>
  )
}

export default NewsItem;



const NewsItemBox = styled.div`
width: 94%;
margin: 0 auto;
border: 1px solid black;
`

const NewsItemHeadline = styled.h1`
  text-align: center;
`

const NewsItemImage = styled.img`
  width: 96%;
  margin-left: 2%;
`

const NewsItemIntroText = styled.p`
  text-align: center;
`

