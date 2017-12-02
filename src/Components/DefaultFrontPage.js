import React from 'react';
import styled from 'styled-components';


const DefaultFrontPage = (props) => {
    return (
        <div>
            <h1>DEFAULT HOME PAGE</h1>
            {props.title}
        </div>
    )
}

export default DefaultFrontPage;