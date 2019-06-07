import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <form method="post" action="#" data-netlify="true" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" id="name" required />
      <input type="text" name="email" id="email" required />
      <textarea name="message" id="message" rows="4" required />
      <input type="submit" value="Send Message" />
    </form>
  </Layout>
)

export default IndexPage
