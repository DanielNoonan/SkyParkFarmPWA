import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

//Refer: https://github.com/leandrowd/react-responsive-carousel     (current implementaion using 'import' - can be a Stateful or Stateless component)
//Refer: http://react-responsive-carousel.js.org/     (older but still working implementation using 'require')


class GalleryCarousel extends Component {
    
    render() {
        return (
            <div>
                <h1>accommodation gallery: CAROUSEL (COMPONENT) working...</h1>
                <Carousel showArrows={true} autoPlay interval={3000} infiniteLoop transitionTime={1000} showThumbs={true} showIndicators={false} width={`${80}%`} stopOnHover={false} >
                    <div>
                        <img src={require('../assets/images/1.jpg')} alt='number 1' />
                        <p className="legend">FRONT ASPECT</p>
                    </div>
                    <div>
                        <img src={require('../assets/images/2.jpg')} alt='number 2'/>
                        <p className="legend">LOUNGE</p>
                    </div>
                    <div>
                        <img src={require('../assets/images/3.jpg')} alt='number 3' />
                        <p className="legend">MASTER BEDROOM</p>
                    </div>
                    <div>
                        <img src={require('../assets/images/4.jpg')} alt='number 4' />
                        <p className="legend">KITCHEN</p>
                    </div>
                    <div>
                        <img src={require('../assets/images/5.jpg')} alt='number 5' />
                        <p className="legend">GYMN</p>
                    </div>
                    <div>
                        <img src={require('../assets/images/6.jpg')} alt='number 6' />
                        <p className="legend">BATHROOM</p>
                    </div>
                </Carousel>
            </div>
        )
    }        
}

export default GalleryCarousel;


//Styled Components

