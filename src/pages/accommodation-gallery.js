import React from 'react';
import styled from 'styled-components';
import AccommodationGalleryContainer from '../Containers/AccommodationGalleryContainer';

const AccommodationGallery = ({ data }) => {

    return (
        <div>
            <h1>accommodation gallery: PAGE working...</h1>
            <AccommodationGalleryContainer data={data} />
        </div>
    )
}

export default AccommodationGallery;

//Styled Components


//Graphql CMS query

//note: query Contentful for carousel-images/text/page-images --- pass this data as a prop to AccommodationGalleryContainer --- pass this.props.data to GalleryCarousel component --- render images in carousel component using .map()  
// page > container > components