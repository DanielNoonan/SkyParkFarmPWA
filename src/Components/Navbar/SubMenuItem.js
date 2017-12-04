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
text-align: center;
border: 1px solid silver;
`
//color for SubItem defined in global styles to over-ride gatsby <Link> default
const SubItem = styled.p`
cursor: pointer;
padding: 5px;
min-width: 150px;
transition: all 0.2s;
    &:hover {
        border-top: 1px solid #80D4F7;
        border-bottom: 1px solid #80D4F7;
        padding-top: 10px;
        padding-bottom: 10px;
    }
`