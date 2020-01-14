import React from "react"
import { Link } from "gatsby"

export default () => (
  <>
    <h1>Podcast Site</h1>
    <h2>With a podcast feed.</h2>
    <p><Link to="/podcast.xml">Subscribe via url</Link></p>
  </>
)