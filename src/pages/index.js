import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import GatsbyImage from "../components/gatsbyImage"
import FleekImage from "../components/fleekImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to your new Gatsby site...on IPFS!</h1>
    <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
          padding: '10px',
          borderRadius: '5px',
          margin: '0 auto',
          }}>
        <FleekImage />
      </div>
      <div style={{ fontSize: '100px', margin: '40px auto', textAlign: 'center' }}>+</div>
      <div style={{ width: '300px', maxWidth: `300px`, marginBottom: `1.45rem`, margin: '0 auto', }}>
        <GatsbyImage />
      </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
