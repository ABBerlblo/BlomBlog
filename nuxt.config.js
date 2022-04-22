export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BlomBlog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  mode: 'universal',

  generate: {
    routes: [
      '/posts/0',
      '/posts/1',
      '/posts/2',
      '/posts/3',
      '/posts/4',
      '/posts/5',
      '/posts/6',
      '/posts/7',
      '/posts/8',
      '/posts/9',
      '/posts/10',
      '/posts/11',
      '/posts/12',
      '/posts/13',
      '/posts/14',
      '/posts/15',
      '/posts/16',
      '/posts/17',

    ]
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}
