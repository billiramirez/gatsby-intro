import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>My personal website</p>
    <Link to="/">Back to Home</Link>
  </Layout>
);
