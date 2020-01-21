import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <h1>Podcast Site</h1>
    <h2>With a podcast feed</h2>
    <p>Subscribe via <Link to="/rss.xml">rss feed</Link>.</p>
  </Layout>
)