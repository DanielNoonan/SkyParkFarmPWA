import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const QuebecCottageSlider = props => {

    const sliderPictures = props.data.allContentfulQuebecCottageSlider.edges;

    return (
        <BlueBox>
            <GreyBox>
                <h1 onClick={props.click} >{'<-----RETURN TO ACCOMMODATION PAGE'}</h1>
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
    )
}

export default QuebecCottageSlider;


//NOTE: FOR STYLING SEE THE 'NEWS ARCHIVE' AND 'BOOKINGS' PAGES

//Styled Components
const BlueBox = styled.div`
    width: 80%;
    background-color: blue;
    margin: 0 auto;
`

const GreyBox = styled.div`
    width: 90%;
    background-color: Grey;
    margin: 0 auto;
`

const CarouselContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`