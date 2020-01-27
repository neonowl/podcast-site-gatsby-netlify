const feedOptions = {
  title: 'Home Musing: A Home Movies Podcast',
  description: 'A show about the cartoon called Home Movies',
  feed_url: 'https://hm-wip-dev.netlify.com/rss.xml',
  site_url: 'https://hm-wip-dev.netlify.com/',
  managingEditor: 'Colin Creasy',
  webMaster: 'Jeremy Van Doren',
  copyright: '2019 - 2020 Colin Creasy and Jeremy Van Doren',
  language: 'en',
  pubDate: 'January 19, 2020 04:00:00 GMT',
  ttl: '60',
  explicit: 'false',
  custom_namespaces: {
    'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
  },
  custom_elements: [
    {'itunes:subtitle': 'Home Musing: A Home Movies Podcast'},
    {'itunes:author': 'Home Musing'},
    {'itunes:summary': 'A podcast about the hilarious and influential animated show Home Movies.'},
    {'itunes:explicit':'false'},
    {'itunes:owner': [
      {'itunes:name': 'Home Musing'},
      {'itunes:email': 'homemusing@neonowl.net'}
    ]},
    {'itunes:image': {
      _attr: {
        href: 'https://neonowl.nyc3.digitaloceanspaces.com/img/Home-Musing-artwork.png'
      }
    }},
    {'itunes:category': [
      {_attr: {
        text: 'TV &amp; Film'
      }},
      {'itunes:category': [
        {_attr: {
          text: 'TV Reviews'
        }},
      ]},
    ]},
  ]
}

module.exports = {
  plugins: [
      {
          resolve: `gatsby-plugin-podcast-feed`,
          options: {
              feedOptions
          },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/episodes`,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
  ]

}