import React from "react";
import Link from "gatsby-link";
import Layout from "../Components/layout";

const SecondPage = () => (
  <Layout>
    <div>
      <h1>Hi from the another page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default SecondPage;
