import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';



const Navbar = (props) => {
    console.log('NAVBAR DATA: ', props.data);
    const content = props.data.allContentfulLogo.edges[0];
    return (
      <NavbarWrapper>
          <Logo src={`https:${content.node.logo.file.url}`} />
          <TitleAndMenu>
          <Title>SKY PARK FARM</Title>
          <Menu>
            <MenuItem>ABOUT US</MenuItem>
            <MenuItem>NEWS</MenuItem>
            <MenuItem>THE TEAM</MenuItem>
            <MenuItem>DEER FARM</MenuItem>
            <MenuItem>ACCOMMODATION</MenuItem>
            <MenuItem>CONTACT</MenuItem>
          </Menu>
          </TitleAndMenu>
      </NavbarWrapper>
    )
  }

  export default Navbar;


const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  background: #000034;
  `
  
const Logo = styled.img`
  width: 145px;
`

const TitleAndMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 80%;
  align-items: center;
  color: #BC7817;
  font-weight: bold;
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 5%;
  font-size: 6em;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 0 0 calc(100% / 12 * 12);
`

const MenuItem = styled.p`
  font-size: 1.6em;
  cursor: pointer;
`