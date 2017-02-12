module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', 'vue-material/dist/vue-material.css'],
  /*
  ** Add axios and others libs globally
  */
  build: {
    vendor: ['axios', 'vue-material']
  }
}
