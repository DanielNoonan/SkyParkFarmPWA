import React from 'react';
import styled from 'styled-components';



const NewsItem = (props) => {
  console.log('NewsItem.js: ', props.data);
  return (
    <NewsItemBox>
        <NewsItemHeadline>{props.title}</NewsItemHeadline>
        <NewsItemImage src={props.image} alt={props.altText} />
        <NewsItemIntroText>{props.intro}</NewsItemIntroText>
    </NewsItemBox>
  )
}

export default NewsItem;


//Styled Components
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

