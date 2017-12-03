import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';



const Navbar = () => {
    return (
      <div style={{height: '145px', textAlign: 'center', background: 'grey', border: '1px solid black'}}>
          <h1 style={{ color: 'white' }}>Nav Bar</h1>
          <h1>
            <Link to="/">Sky Park Farm</Link>
          </h1>
          <h1>
            <Link to="/page-2/">Go to page 2</Link>
          </h1>
      </div>
    )
  }

  export default Navbar;