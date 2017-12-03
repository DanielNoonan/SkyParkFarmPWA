import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ReactDom from 'react-dom';



class Navbar extends Component {

  state = {
    menuOne: false,
    menuTwo: false
  }

  menuOneToggleHandler = (event) => {
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
        menuTwo: false
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
          <Menu>
            <MenuItem>
              <TopItem onClick={this.menuOneToggleHandler}>ABOUT US</TopItem>
              <SubMenu className={this.state.menuOne ? 'SubMenuDisplay' : null}>
                <SubMenuItem>
                  <SubItem>THE FUTURE</SubItem>
                </SubMenuItem>
                <SubMenuItem>
                  <SubItem>TODAY</SubItem>
                </SubMenuItem>
                <SubMenuItem>
                  <SubItem>HISTORY</SubItem>
                </SubMenuItem>
                <SubMenuItem>
                  <SubItem>THEN & NOW</SubItem>
                </SubMenuItem>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <TopItem onClick={this.menuTwoToggleHandler}>NEWS</TopItem>
              <SubMenu className={this.state.menuTwo ? 'SubMenuDisplay' : null}>
                <SubMenuItem>
                  <SubItem>ARCHIVE</SubItem>
                </SubMenuItem>
                <SubMenuItem>
                  <SubItem>PRESS COVERAGE</SubItem>
                </SubMenuItem>
                <SubMenuItem>
                  <SubItem>PHOTO GALLERY</SubItem>
                </SubMenuItem>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <TopItem>THE TEAM</TopItem>
            </MenuItem>
            <MenuItem>
              <TopItem>DEER FARM</TopItem>
            </MenuItem>
            <MenuItem>
              <TopItem>ACCOMMODATION</TopItem>
            </MenuItem>
            <MenuItem>
              <TopItem>CONTACT</TopItem>
            </MenuItem>
          </Menu>
          </TitleAndMenu>
      </NavbarWrapper>
    )
  }
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
  margin-left: 8%;
  font-size: 6em;
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  flex: 0 0 calc(100% / 12 * 12);
  `
  
const MenuItem = styled.li`
position: relative;
  font-size: 1.6em;
  list-style: none;
  padding: 0 20px;
`

const TopItem = styled.p`
  cursor: pointer;

`

const SubMenu = styled.ul`
  display: none;
  position: absolute;
  left: 0;
  background: #000034;
  padding: 0;
`

const SubMenuItem = styled.li`
  list-style: none;
  padding: 5px;
  text-align: center;
  border: 1px solid white;
`

const SubItem = styled.p`
cursor: pointer;
`