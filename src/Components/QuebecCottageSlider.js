import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


class QuebecCottageSlider extends Component {

    render() {
        const sliderPictures = this.props.data.allContentfulQuebecCottageSlider.edges;
    
    return (
        <div>
        <PageTitle>Quebec Cottage</PageTitle>
        <BlueBox>
            <GreyBox>
                <ReturnLink onClick={this.props.click}>X</ReturnLink>
                <CarouselContainer>
                    <Carousel showArrows={true} showStatus={false} transitionTime={1000} showThumbs={true} showIndicators={false} width={`100%`} >

                        <div>
                            <img src={`https:${sliderPictures[0].node.image.file.url}`} alt='Quebec Cottage Rooms' />
                            <p className="legend">{sliderPictures[0].node.title}</p>
                        </div>
                        <div>
                            <img src={`https:${sliderPictures[1].node.image.file.url}`} alt='Quebec Cottage Rooms' />
                            <p className="legend">{sliderPictures[1].node.title}</p>
                        </div>
                        <div>
                            <img src={`https:${sliderPictures[2].node.image.file.url}`} alt='Quebec Cottage Rooms' />
                            <p className="legend">{sliderPictures[2].node.title}</p>
                        </div>
                        <div>
                            <img src={`https:${sliderPictures[3].node.image.file.url}`} alt='Quebec Cottage Rooms' />
                            <p className="legend">{sliderPictures[3].node.title}</p>
                        </div>
                        <div>
                            <img src={`https:${sliderPictures[4].node.image.file.url}`} alt='Quebec Cottage Rooms' />
                            <p className="legend">{sliderPictures[4].node.title}</p>
                        </div>
                        <div>
                            <img src={`https:${sliderPictures[5].node.image.file.url}`} alt='Quebec Cottage Rooms' />
                            <p className="legend">{sliderPictures[5].node.title}</p>
                        </div>
                    </Carousel>
                </CarouselContainer>
            </GreyBox>
        </BlueBox>
        </div>
    )
    
}
}

export default QuebecCottageSlider;


//NOTE: FOR STYLING SEE THE 'NEWS ARCHIVE' AND 'BOOKINGS' PAGES

//Styled Components
const PageTitle = styled.h1`
    color: black;
    text-align: center;
    font-size: 2em;
    letter-spacing: 0.2em;
    width: 70%;
    border: 5px inset #E6E6E6;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 450px) {
        font-size: 4em;
        letter-spacing: 0.2em;
    }
    @media (min-width: 650px) {
        font-size: 6em;
        letter-spacing: 0.2em;
    }
`

const BlueBox = styled.div`
    color: #404040;
    width: 98%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    background: #000034;
`

const GreyBox = styled.div`
    position: relative;
    width: 95%;
    margin: 0 auto;
    border: 5px double #80D4F7;
    background: #F6F6F6;
    margin-bottom: 20px;
`

const ReturnLink = styled.h1`
    position: absolute;
    top: 10px;
    right: 30px;
    font-size: 4em;
    border: 3px solid #BC7817;
    padding: 0 15px;
    color: #80D4F7;
    cursor: pointer;
    text-align: right;
    margin: 0 0 0 85%;
    background-color: #000034;
    transition: all 0.5s;
    &&:hover {
        color: #BC7817;
        border-color: #80D4F7;
    }
    @media (min-width: 500px) {
        margin: 0 0 0 90%;
    }
    @media (min-width: 800px) {
        margin: 0 0 0 95%;
    }
`

const CarouselContainer = styled.div`
    width: 90%;
    margin: 70px  auto 0 auto;
`

