import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


//Refer: https://github.com/leandrowd/react-responsive-carousel     (current implementaion using 'import' - can be a Stateful or Stateless component)
//Refer: http://react-responsive-carousel.js.org/     (older but still working implementation using 'require')


class AccommodationGalleryContainer extends Component {

    render() {

        const sliderPictures = this.props.data.allContentfulAccommodationSlider.edges;

        return (
            <CarouselContainer onClick={this.props.click}>
                <Carousel showArrows={false} showStatus={false} autoPlay interval={3000} infiniteLoop transitionTime={1500} showThumbs={false} showIndicators={false} width={`100%`} stopOnHover={false} >
                    
                    {sliderPictures.map(edge => {
                        return (
                            <div key={edge.node.image.id}>
                                <picture>
                                    <source media='(min-width: 1200px)' srcSet={`https:${edge.node.image.file.url}?w=1800`} alt='Accommodation slide show' />
                                    <source media='(min-width: 900px)' srcSet={`https:${edge.node.image.file.url}?w=1200`} alt='Accommodation slide show' />
                                    <source media='(min-width: 650px)' srcSet={`https:${edge.node.image.file.url}?w=900`} alt='Accommodation slide show' />
                                    <source media='(max-width: 649px)' srcSet={`https:${edge.node.image.file.url}?w=650`} alt='Accommodation slide show' />
                                    <img src={`https:${edge.node.image.file.url}`} alt='Accommodation slide show' />
                                </picture>
                                {/* <p className="legend">{edge.node.title}</p> */}
                            </div>
                        )
                    })}

                </Carousel>
            </CarouselContainer>
        )
    }

}

export default AccommodationGalleryContainer;


//Styled Components
const CarouselContainer = styled.div`
    width: 100%;
`
