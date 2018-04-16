import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const MapContact = () => {
    const style = {
        marginBottom: '-3px',
    }

    return (
        <div>
            <MapContainer>
                <iframe style={style} width="100%" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=50.999061%2C-0.8874504&key=AIzaSyDAbO9F8qrwx2Ab0se4-00kCJnTUlrJtwE&zoom=12" allowFullScreen></iframe>
            </MapContainer>
            {/* <h1>HI FROM THE MAP-CONTACT PAGE</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link> */}
        </div>
    )
}

export default MapContact;

//Styled Components
const MapContainer = styled.div`
`


{/*Orignal iframe:
<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=50.999061%2C-0.8874504&key=AIzaSyDAbO9F8qrwx2Ab0se4-00kCJnTUlrJtwE" allowfullscreen></iframe> 
*/}