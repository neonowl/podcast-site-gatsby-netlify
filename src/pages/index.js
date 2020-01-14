import React from "react"
import { Link } from "gatsby"

export default () => (
  <>
    <h1>Podcast Site</h1>
    <h2>With a podcast feed</h2>
    <p>Subscribe via <Link to="/rss.xml">rss feed</Link>.</p>
  </>
)