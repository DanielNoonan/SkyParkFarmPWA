import React from 'react';
import styled from 'styled-components';

const Bookings = () => {
    return (
        <BookingsPageWrapper>
            <PageTitle>BOOKINGS</PageTitle>
                <CalendarWrapper>
                    <IframeBox>
                        <iframe width='100%' height='1000px' frameBorder='0' src='https://secure.supercontrol.co.uk/availability/availability_weekly.asp?ownerID=20403&cottageID=cottageID_522072&siteID=42646'></iframe>
                    </IframeBox>
                </CalendarWrapper>
        </BookingsPageWrapper>
    )
}

export default Bookings;

const BookingsPageWrapper = styled.div`
    width: 100%;
`

const PageTitle = styled.h1`
    font-size: 3em;
    color: black;
    text-align: center;
    letter-spacing: 0.2em;
    width: 70%;
    border: 5px inset #E6E6E6;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 800px) {
        font-size: 6em;
    }
`

const CalendarWrapper = styled.div`
    @media (min-width: 900px) {
        color: #404040;
        width: 80%;
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 20px;
        background: #000034;  
    }
    
`

const IframeBox = styled.div`
    background: white;
    @media (min-width: 725px) {
    border: 5px double #80D4F7;
    width: 700px;
    margin: 0 auto;
`


// const CalendarWrapper = styled.div`
//     color: #404040;
//     width: 94%;
//     margin: 0 auto;
//     padding-top: 20px;
//     padding-bottom: 20px;
//     background: #000034;
// `

// const IframeBox = styled.div`
//     width: 90%;
//     border: 5px double #80D4F7;
//     background: #F6F6F6;
//     margin-bottom: 20px;
//     margin-left: auto;
//     margin-right: auto;
// `