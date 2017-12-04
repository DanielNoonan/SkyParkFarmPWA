import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';


import '../assets/global-styles/global-styles.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Sky Park Farm"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navbar />


    <div>
      {children()}
    </div>

      <Footer />

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
