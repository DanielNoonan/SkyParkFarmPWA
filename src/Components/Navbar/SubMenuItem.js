import React from 'react';
import styled from 'styled-components';


const SubMenuItem = ({ children }) => {
    return (
        <SubMenuItemLi>
            <SubItem>{children}</SubItem>
        </SubMenuItemLi>
    )
}

export default SubMenuItem;


//Styled Components
const SubMenuItemLi = styled.li`
list-style: none;
padding: 5px;
text-align: center;
border: 1px solid white;
`

const SubItem = styled.p`
cursor: pointer;
min-width: 150px;
`