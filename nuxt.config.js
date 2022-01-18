export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
 //  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  
  server: {
    port: process.env.PORT || 51234 // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'galeria-arte',
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

  // https://image.nuxtjs.org/api/options/
  /* image: {
    domains: ['https://storage.googleapis.com'],
    // format: 'webp',
    // dir: Path.resolve(__dirname, 'static'),
    provider: 'ipx',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      xm: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  }, */

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
     // '@nuxtjs/stylelint-module',
    // 'nuxt-windicss',
    // '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // '@nuxt/image',
    'vue-scrollto/nuxt',
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  publicRuntimeConfig: {
    basePathImages: process.env.PUBLIC_IMAGES_FOLDER_URL || 'http://localhost/images/utg/arte/convocatoria2021/'
  },

  router: {
    base: process.env.BASE_ROUTE_PATH || '/utg/arte/convocatoria2021/'
  },

  axios: {
    baseURL:  process.env.BASE_ROUTE_PATH || '/utg/arte/convocatoria2021/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    /*analyze: {
      analyzerMode: 'static'
    },*/

      // publicPath: 'http://localhost/utg/arte/convocatoria2021',

      /*
      ** You can extend webpack config here
      */
      extend(config, ctx) {
        // para hacer mejor el debug
        // config.devtool = '#eval-source-map'
      }
  }
}
