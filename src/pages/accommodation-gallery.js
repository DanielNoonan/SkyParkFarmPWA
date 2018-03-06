import React, { Component } from 'react';
import styled from 'styled-components';
import AccommodationGalleryContainer from '../Containers/AccommodationGalleryContainer';
import QuebecCottageSlider from '../Components/QuebecCottageSlider';

class AccommodationGallery extends Component {
    state = {
        showGallery: false
    }

    showGalleryHandler = () => {
        this.setState({
            showGallery: !this.state.showGallery
        });
        window.scrollTo(0, 0);
    }

    render() {
        console.log(this.state.showGallery)

        return (
            <div>

                {!this.state.showGallery ?
                <div>
                    <AccommodationGalleryContainer data={this.props.data} click={this.showGalleryHandler} />
                    <GalleryBox onClick={this.showGalleryHandler} />
                </div> :
                <QuebecCottageSlider click={this.showGalleryHandler} data={this.props.data} />
                }
            </div>
        )
    }
}

export default AccommodationGallery;

//note: query Contentful for carousel-images/text/page-images --- pass this data as a prop to AccommodationGalleryContainer --- pass this.props.data to GalleryCarousel component --- render images in carousel component using .map()  
// page > container > component



//Styled Components
const GalleryBox = styled.div`
    width: 60%;
    height: 300px;
    margin: 0 auto;
    background: brown;
    border: 1px solid black;
`


// Graphql CMS query
export const SliderQuery = graphql`
    query SliderQuery {
        allContentfulAccommodationSlider {
            edges {
                node {
                    title
                    image {
                        id
                        file {
                             url
                        }
                    }
                }
            }
        }
        allContentfulQuebecCottageSlider {
            edges {
                node {
                    title
                    image {
                        id
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
`
