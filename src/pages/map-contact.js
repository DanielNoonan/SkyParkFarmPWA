import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Layout from "../Components/layout";

const MapContact = () => {
  const style = {
    marginBottom: "-3px"
  };

  return (
    <Layout>
      <PageContainer>
        <iframe
          style={style}
          width="100%"
          height="450"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=50.999061%2C-0.8874504&key=AIzaSyDAbO9F8qrwx2Ab0se4-00kCJnTUlrJtwE&zoom=12"
          allowFullScreen
        />
        <DirectionsContainer>
          <DirectionsBox>
            <DirectionsHeading>
              Directions from the A3 (3 miles)
            </DirectionsHeading>
            <DirectionsText>
              <Theta>&#920; </Theta>
              Leave A3 for A272 signposted Midhurst.
            </DirectionsText>
            <DirectionsText>
              <Theta>&#920; </Theta>
              Continue 0.3 miles to the Roundabout - take first exit.
            </DirectionsText>
            <DirectionsText>
              <Theta>&#920; </Theta>
              After 0.7 miles turn right, across the dual-carriageway to
              continue on the A272 (after turning you will drive past a fallen
              tree on the corner to your left).
            </DirectionsText>
            <DirectionsText>
              <Theta>&#920; </Theta>
              After 1.3 miles turn right onto Durford Lane.
            </DirectionsText>
            <DirectionsText>
              <Theta>&#920; </Theta>
              Continue for 0.5 miles - Welcome to Sky Park Farm!
            </DirectionsText>
          </DirectionsBox>
          <DirectionsBox>
            <DirectionsHeading>
              Directions from Midhurst (7.6 miles)
            </DirectionsHeading>
            <DirectionsText>
              <Theta>&#920; </Theta>
              Leave Midhurst on the A272 Petersfield Rd.
            </DirectionsText>
            <DirectionsText>
              <Theta>&#920; </Theta>
              After 3 miles you will pass Trotton &amp; Aylings Garden Center.
            </DirectionsText>
            <DirectionsText>
              <Theta>&#920; </Theta>
              After another 3 miles you will pass through the small village of
              Rogate.
            </DirectionsText>
            <DirectionsText>
              <Theta>&#920; </Theta>
              After another 1.1 miles turn left onto Durford Lane.
            </DirectionsText>
            <DirectionsText>
              <Theta>&#920; </Theta>
              Continue for 0.5 miles - Welcome to Sky Park Farm!
            </DirectionsText>
          </DirectionsBox>
        </DirectionsContainer>
      </PageContainer>
    </Layout>
  );
};

export default MapContact;

//Styled Components
const PageContainer = styled.div`
  background: #f6f6f6;
  height: 100%;
`;

const DirectionsContainer = styled.div`
  border: 5px solid #000034;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #f6f6f6;
  width: 100%;
`;
const DirectionsBox = styled.div`
  flex: 0 0 98%;
  padding: 0 1%;
  border: 3px solid #80d4f7;
  color: #404040;
  font-size: 3em;
  margin: 20px 0;

  @media (min-width: 1024px) {
    flex: 0 0 calc(100% / 12 * 5);
  }
`;

const DirectionsHeading = styled.p`
  margin: 25px 0;
  color: #000034;
  text-align: center;
  text-decoration: underline;
`;

const DirectionsText = styled.p`
  font-size: 0.8em;
`;

const Theta = styled.span`
  color: #bc7817;
  font-size: 1.1em;
`;

{
  /*Orignal google maps iframe:
<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=50.999061%2C-0.8874504&key=AIzaSyDAbO9F8qrwx2Ab0se4-00kCJnTUlrJtwE" allowfullscreen></iframe> 
*/
}
