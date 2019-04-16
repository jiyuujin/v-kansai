module.exports = {
  title: 'docs',
  description: 'ドキュメントを中心に',
  head: [
    [
      'meta',
      { hid: 'description', name: 'description', content: 'v-kansaiでご紹介のあった資料を中心に記録しています。' },
    ],
    [
      'meta',
      { property: 'og:site_name', content: 'Vue.js Event' },
    ],
    [
      'meta',
      { property: 'og:url', content: 'https://jiyuujin.github.io/vue-kansai-docs' },
    ],
    [
      'meta',
      { property: 'og:type', content: 'website' },
    ],
    [
      'meta',
      { property: 'og:title', content: 'vue kansai docs' },
    ],
    [
      'meta',
      { property: 'og:description', content: 'v-kansaiでご紹介のあった資料を中心に記録しています。' },
    ],
  ],
  base: '/vue-kansai-docs/',
  docsDir: 'docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'jiyuujin/vue-kansai-docs',
    editLinks: false,
    docsDir: 'docs',
    nav: [
      {
        'text': 'Event',
        'link': '/event/'
      }
    ],
    sidebarDepth: 3,
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
