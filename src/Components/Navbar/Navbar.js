import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';

import SubMenuItem from './SubMenuItem';


class Navbar extends Component {

  state = {
    menuOne: false,
    menuTwo: false,
    mobileMenu: false
  }

  menuOneToggleHandler = () => {
    const currentState = this.state.menuOne;
    this.setState({
      menuOne: !currentState,
      menuTwo: false
    })
  }
  
  menuTwoToggleHandler = () => {
    const currentState = this.state.menuTwo;
    this.setState({
      menuOne: false,
      menuTwo: !currentState
    })
  }
  
  mobileMenuToggleHandler = () => {
    const currentState = this.state.mobileMenu;
    this.setState({
      mobileMenu: !currentState
    })
  }


  //////////
  //close menus if click outside.
  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }
  handleClick = e => {
    if(!ReactDom.findDOMNode(this).contains(e.target)) {
      console.log('CLOSE ALL THE THINGS!!!')
      this.setState({
        menuOne: false,
        menuTwo: false,
        mobileMenu: false
      })
    }
  }
  //////////

  render () {
    const logoImage = this.props.data.allContentfulLogo.edges[0].node.logo.file.url;
    return (
      <NavbarWrapper>
          <Logo src={`https:${logoImage}`} />
          <TitleAndMenu>
          <Title>SKY PARK FARM</Title>
          <NavToggler onClick={this.mobileMenuToggleHandler} >X</NavToggler>
          <NavbarMenu className={this.state.mobileMenu ? 'SubMenuDisplay' : null} >
            <Menu>
              <TopItem onClick={this.menuOneToggleHandler}>ABOUT US</TopItem>
              <SubMenu className={this.state.menuOne ? 'SubMenuDisplay' : null}>
                <SubMenuItem>THE FUTURE</SubMenuItem>
                <SubMenuItem>TODAY</SubMenuItem>
                <SubMenuItem>HISTORY</SubMenuItem>
                <SubMenuItem>THEN AND NOW</SubMenuItem>
              </SubMenu>
            </Menu>
            <Menu>
              <TopItem onClick={this.menuTwoToggleHandler}>NEWS</TopItem>
              <SubMenu className={this.state.menuTwo ? 'SubMenuDisplay' : null}>
                <SubMenuItem>ARCHIVE</SubMenuItem>
                <SubMenuItem>PRESS COVERAGE</SubMenuItem>
                <SubMenuItem>PHOTO GALLERY</SubMenuItem>
              </SubMenu>
            </Menu>
            <Menu>
              <TopItem>THE TEAM</TopItem>
            </Menu>
            <Menu>
              <TopItem>DEER FARM</TopItem>
            </Menu>
            <Menu>
              <TopItem>ACCOMMODATION</TopItem>
            </Menu>
            <Menu>
              <TopItem>CONTACT</TopItem>
            </Menu>
          </NavbarMenu>
          </TitleAndMenu>
      </NavbarWrapper>
      )
    }
  }

  export default Navbar;


  //Styled Components
const NavbarWrapper = styled.div`
  position: relative;
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
  margin-left: 8%;
  font-size: 6em;
`

//Small Screen Navbar Toggle
const NavToggler = styled.h1`
  position: absolute;
  top: 0;
  right: 30px;
  color: #80D4F7;
  font-size: 4em;
  cursor: pointer;
  border: 3px solid #BC7817;
  padding: 0 15px;
  @media (min-width: 1060px) {
    display: none;
  }
`

const NavbarMenu = styled.ul`
  display: none;
  position: absolute;
  top: 135px;
  left: 0;
  text-align: center;
  background: #000034;
  width: 100%;
  padding: 0;
  @media (min-width: 1060px) {
    position: static;
    display: flex;
    justify-content: space-around;
    flex: 0 0 calc(100% / 12 * 12);
  }
  `
  
const Menu = styled.li`
position: relative;
  font-size: 1.6em;
  list-style: none;
  padding: 10px 20px;
  @media (min-width: 1060px) {
    padding: 0 20px;
  }
`

const TopItem = styled.p`
  cursor: pointer;

`

const SubMenu = styled.ul`
  display: none;
  left: 0;
  background: #000034;
  padding: 0;
  @media (min-width: 1060px) {
    position: absolute;
  }
`
