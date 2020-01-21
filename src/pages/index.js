import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <p>Subscribe via <Link to="/rss.xml">rss feed</Link>.</p>
  </Layout>
)