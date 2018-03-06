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
  perspective: 700;
  cursor: pointer;

  
  @media (max-width: 1023px) {
    flex: 0 0 calc(100% / 12 * 3);
    display: flex; //makes these items stretch to the bottom of their flex container
  }

  @media (max-width: 470px) {
    flex: 0 0 calc(100% / 12 * 6);
  }
  
`

const NewsItemBox = styled.div`
  border: 1px solid #80D4F7;
  background: #F6F6F6;
  position: relative;
  width: 94%;
  margin: 0 auto 10px auto;
  transition: all 0.6s ease;
  transform-style: preserve-3d;

  // flip effect only for larger screens
  @media (min-width: 1024px) {
    &:hover {
      transform: rotateY(-170deg);
    }
  }
`

const NewsItemFront = styled.div`
  padding: 5px;
  // min-height: 250px;
  background: #F6F6F6;
  position: absolute:
  top: 0;
  left: 0;
  backface-visibility: hidden;
`

const NewsItemBack = styled.div`
    padding: 5px;
    text-align: left;
    min-height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    font-size: 1.5em;
    @media (min-width: 1150px) {
      font-size: 1.7em;
    }
    @media (min-width: 1250px) {
      font-size: 1.8em;
    }
    @media (min-width: 1350px) {
      font-size: 1.9em;
    }
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
  border-radius: 5px;
`

const NewsItemIntroText = styled.p`
  text-align: center;
  font-size: 2em;

  @media(max-width: 749px) {
    display: none;
  }

`

