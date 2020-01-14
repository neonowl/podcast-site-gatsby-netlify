const feedOptions = {
  title: 'Home Musings',
  description: 'A Home Movies Podcast',
  feed_url: 'http://example.com/podcast.xml',
  site_url: 'http://example.com',
  managingEditor: 'Colin Creasy',
  webMaster: 'Jeremy Van Doren',
  copyright: '2019 - 2020 Colin Creasy & Jeremy Van Doren',
  language: 'en',
  categories: ['Animation & Manga','Category 2','Category 3'],
  pubDate: 'May 20, 2019 04:00:00 GMT',
  ttl: '60',
  custom_namespaces: {
    'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
  },
  custom_elements: [
    {'itunes:subtitle': 'A Home Movies Podcast'},
    {'itunes:author': 'Home Musings'},
    {'itunes:summary': 'A podcast about the hilarious and influential animated show Home Movies.'},
    {'itunes:owner': [
      {'itunes:name': 'Home Musings'},
      {'itunes:email': 'homemusings@neonowl.net'}
    ]},
    {'itunes:image': {
      _attr: {
        href: 'http://example.com/podcasts/everything/AllAboutEverything.jpg'
      }
    }},
    {'itunes:category': [
      {_attr: {
        text: 'Animation & Manga'
      }},
      {'itunes:category': {
        _attr: {
          text: 'TV Reviews'
        }
      }}
    ]}
  ]
}

module.exports = {
  plugins: [
      {
          resolve: `gatsby-plugin-podcast-rss-feed`,
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
  ]

}