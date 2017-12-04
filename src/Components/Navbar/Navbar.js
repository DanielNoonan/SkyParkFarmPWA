import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';

import SubMenuItem from './SubMenuItem';


class Navbar extends Component {

  state = {
    menuOne: false,
    menuTwo: false,
    menuThree: false,
    menuFour: false,
    menuFive: false,
    menuSix: false,
    mobileMenu: false
  }
//////////
//Navbar submenu toggles
  menuOneToggleHandler = () => {
    const currentState = this.state.menuOne;
    this.setState({
      menuOne: !currentState,
      menuTwo: false,
      menuThree: false,
      menuFour: false,
      menuFive: false,
      menuSix: false
    })
  }
  
  menuTwoToggleHandler = () => {
    const currentState = this.state.menuTwo;
    this.setState({
      menuOne: false,
      menuTwo: !currentState,
      menuThree: false,
      menuFour: false,
      menuFive: false,
      menuSix: false
    })
  }

  menuThreeToggleHandler = () => {
    const currentState = this.state.menuThree;
    this.setState({
      menuOne: false,
      menuTwo: false,
      menuThree: !currentState,
      menuFour: false,
      menuFive: false,
      menuSix: false
    })
  }
  menuFourToggleHandler = () => {
    const currentState = this.state.menuFour;
    this.setState({
      menuOne: false,
      menuTwo: false,
      menuThree: false,
      menuFour: !currentState,
      menuFive: false,
      menuSix: false
    })
  }
  menuFiveToggleHandler = () => {
    const currentState = this.state.menuFive;
    this.setState({
      menuOne: false,
      menuTwo: false,
      menuThree: false,
      menuFour: false,
      menuFive: !currentState,
      menuSix: false
    })
  }
  menuSixToggleHandler = () => {
    const currentState = this.state.menuSix;
    this.setState({
      menuOne: false,
      menuTwo: false,
      menuThree: false,
      menuFour: false,
      menuFive: false,
      menuSix: !currentState
    })
  }
//////////

//////////
//Toggle 'mobile' menu open/closed  
  mobileMenuToggleHandler = () => {
    const currentState = this.state.mobileMenu;
    this.setState({
      mobileMenu: !currentState
    })
  }
//////////


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
        menuThree: false,
        menuFour: false,
        menuFive: false,
        menuSix: false,
        mobileMenu: false
      })
    }
  }
  //////////

    resetHandler = () => {
      this.setState({
        menuOne: false,
        menuTwo: false,
        menuThree: false,
        menuFour: false,
        menuFive: false,
        menuSix: false,
        mobileMenu: false
      })
    }

  

  render () {

    ///////////
    //resets the Navbar for larger screens if user increase the viewport from 'mobile' to 'desktop' view. ONLY triggers the setState if - mobileMenu: true
    let mq = window.matchMedia('(min-width: 1024px)');

    mq.addListener((changed) => {
       if(window.matchMedia("(min-width: 1024px)").matches && this.state.mobileMenu === true) {
              this.setState({
                mobileMenu: false,
                menuOne: false,
                menuTwo: false,
                menuThree: false,
                menuFour: false,
                menuFive: false,
                menuSix: false
              });
          }
    });
    ///////////

    const logoImage = this.props.data.allContentfulLogo.edges[0].node.logo.file.url;
    return (
      <NavbarWrapper>
          <Link to='/' onClick={this.resetHandler} className='logo-link'><Logo src={`https:${logoImage}`} /></Link>
          <TitleAndMenu>
          <Title><Link to='/' onClick={this.resetHandler} className='main-title-link'>SKY PARK FARM</Link></Title>
          <NavToggler onClick={this.mobileMenuToggleHandler} >X</NavToggler>
          <NavbarMenu className={this.state.mobileMenu ? 'SubMenuDisplay' : null} >
            <Menu>
              <TopItem onClick={this.menuOneToggleHandler}>ABOUT US <DropdownArrow>&#9660;</DropdownArrow></TopItem>
              <SubMenu className={this.state.menuOne ? 'SubMenuDisplay' : null}>
              <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>THE FUTURE</SubMenuItem></Link>
              <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>TODAY</SubMenuItem></Link>
              <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>HISTORY</SubMenuItem></Link>
              <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>THEN AND NOW</SubMenuItem></Link>
              </SubMenu>
            </Menu>
            <Menu>
              <TopItem onClick={this.menuTwoToggleHandler}>NEWS <DropdownArrow>&#9660;</DropdownArrow></TopItem>
              <SubMenu className={this.state.menuTwo ? 'SubMenuDisplay' : null}>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>ARCHIVE</SubMenuItem></Link>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>PRESS COVERAGE</SubMenuItem></Link>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>PHOTO GALLERY</SubMenuItem></Link>
              </SubMenu>
            </Menu>
            <Menu>
              <TopItem onClick={this.menuThreeToggleHandler}>THE TEAM <DropdownArrow>&#9660;</DropdownArrow></TopItem>
              <SubMenu className={this.state.menuThree ? 'SubMenuDisplay' : null}>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>OWNERS</SubMenuItem></Link>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>ESTATE MANAGER</SubMenuItem></Link>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>RANGER</SubMenuItem></Link>
              </SubMenu>
            </Menu>
            <Menu>
              <TopItem onClick={this.menuFourToggleHandler}>DEER FARM <DropdownArrow>&#9660;</DropdownArrow></TopItem>
              <SubMenu className={this.state.menuFour ? 'SubMenuDisplay' : null}>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>HOW IT WORKS</SubMenuItem></Link>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>RED DEER</SubMenuItem></Link>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>VENISON AND HEALTH</SubMenuItem></Link>
              </SubMenu>
            </Menu>
            <Menu>
              <TopItem onClick={this.menuFiveToggleHandler}>ACCOMMODATION <DropdownArrow>&#9660;</DropdownArrow></TopItem>
              <SubMenu className={this.state.menuFive ? 'SubMenuDisplay' : null}>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>QUEBEC COTTAGE</SubMenuItem></Link>
              </SubMenu>
            </Menu>
            <Menu>
              <TopItem onClick={this.menuSixToggleHandler}>CONTACT <DropdownArrow>&#9660;</DropdownArrow></TopItem>
              <SubMenu className={this.state.menuSix ? 'SubMenuDisplay' : null}>
                <Link to='/page-2/' onClick={this.resetHandler} className='navbar-link'><SubMenuItem>MAP AND EMAIL</SubMenuItem></Link>
              </SubMenu>
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
  border-top: 1px solid #80D4F7;
  border-bottom: 1px solid #80D4F7;
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
  display: none;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 8%;
  @media (min-width: 450px) {
    display: block;
    font-size: 2em;
  }
  @media (min-width: 530px) {
    font-size: 3em;
  }
  @media (min-width: 620px) {
    font-size: 4em;
  }
  @media (min-width: 700px) {
    font-size: 5em;
  }
  @media (min-width: 800px) {
    font-size: 6em;
  }
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
  @media (min-width: 1024px) {
    display: none;
  }
`

const NavbarMenu = styled.ul`
  display: none;
  position: absolute;
  top: 135px;
  left: 0;
  margin: 0;
  text-align: center;
  background: #000034;
  width: 100%;
  padding: 0;
  @media (min-width: 1024px) {
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
  @media (min-width: 1024px) {
    padding: 0 20px;
  }
`

const TopItem = styled.p`
  cursor: pointer;
  padding: 5px 0;
  &:hover {
    color: white;
  }
`

const DropdownArrow = styled.span`
  font-size: 0.7em;
  transition: all 1s;
`

const SubMenu = styled.ul`
  display: none;
  left: 0;
  background: #000034;
  color: silver;
  padding: 0;
  @media (min-width: 1024px) {
    position: absolute;
  }
`
