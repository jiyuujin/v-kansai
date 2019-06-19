module.exports = {
  title: 'v-kansai',
  description: '[非公式] v-kansai ドキュメント一覧',
  head: [
    [
      'meta',
      { hid: 'description', name: 'description', content: 'v-kansaiでご紹介のあった資料を中心に記録しています。' },
    ],
    [
      'meta',
      { property: 'og:site_name', content: 'Vue Event' },
    ],
    [
      'meta',
      { property: 'og:url', content: 'https://nekohack.github.io/v-kansai' },
    ],
    [
      'meta',
      { property: 'og:type', content: 'website' },
    ],
    [
      'meta',
      { property: 'og:title', content: '[非公式] v-kansai ドキュメント一覧' },
    ],
    [
      'meta',
      { property: 'og:description', content: 'v-kansaiでご紹介のあった資料を中心に記録しています。' },
    ],
  ],
  base: '/v-kansai/',
  docsDir: 'docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'nekohack/v-kansai',
    editLinks: false,
    docsDir: 'docs',
    nav: [
      {
        'text': 'Event',
        'link': '/event/'
      }
    ],
    // sidebarDepth: 3,
    sidebar: {
      '/event/': [
        {
          title: 'Event',
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    }
  }
};
