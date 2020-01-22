import React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
  <>
  <Helmet>
    <title>Podcast Site</title>
    <link rel="alternate" type="application/rss+xml" title="podcast episode feed" href="https://hm-wip-dev.netlify.com/rss.xml" />
  </Helmet>
  <h1>Podcast Site</h1>
  <h2>With a podcast feed</h2>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    {children}
  </div>
  </>
)