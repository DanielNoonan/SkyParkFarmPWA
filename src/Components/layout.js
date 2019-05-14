import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Navbar from "./Navbar/Navbar";
import Footer from "./theFooter";
import { StaticQuery, graphql } from "gatsby";

import "../assets/global-styles/global-styles.css";


const TemplateWrapper = ({children}) =>  (
    <StaticQuery query={graphql`
     query LogoQuery {
    allContentfulLogo {
      edges {
        node {
          logo {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulHeroImage {
      edges {
        node {
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
  }
  `} 
  render={data => (
    <div>
      <Helmet
        title="Sky Park Farm"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />

      <Navbar data={data} />

      <div>{children}</div>

      <Footer data={data} />
    </div>
  )}
  />
  )


export default TemplateWrapper;


