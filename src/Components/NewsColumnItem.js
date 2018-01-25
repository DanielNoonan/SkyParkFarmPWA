import React from 'react';
import styled from 'styled-components';



const NewsColumnItem = (props) => {
  console.log(props.index)
  return (
    <NewsItemWrapper>
      <NewsItemBox onClick={props.clicked}>
        <NewsItemFront>
          <NewsItemHeadline>{props.title}</NewsItemHeadline>
          <NewsItemImage src={props.image} alt={props.altText} />
          <NewsItemIntroText>{props.intro}</NewsItemIntroText>
        </NewsItemFront>
        <NewsItemBack>{props.itemBack}<BackContinued>Continued...</BackContinued></NewsItemBack>
        
      </NewsItemBox>
    </NewsItemWrapper>
  )
}

export default NewsColumnItem;


//Styled Components
const NewsItemWrapper = styled.div`
  // border: 1px solid black;
  perspective: 700;
  cursor: pointer;
`

const NewsItemBox = styled.div`
  border: 1px solid #80D4F7;
  border-radius: 10px;
  background: #F6F6F6;
  position: relative;
  width: 94%;
  margin: 0 auto 10px auto;
  transition: all 0.6s ease;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(-170deg);
  }
`

const NewsItemFront = styled.div`
  min-height: 250px;
  background: #F6F6F6;
  position: absolute:
  top: 0;
  left: 0;
  backface-visibility: hidden;
`

const NewsItemBack = styled.div`
  min-height: 300px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  font-size: 2em;
`

const BackContinued = styled.h1`
  margin: 0;
  font-size: 1.5em;
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

