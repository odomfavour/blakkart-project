export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blakkart-web',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~layouts/global.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    path: '~/components', // will get any components nested in let's say /components/test too
    pathPrefix: false,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: false,
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'token'},
          logout: { url: '/api/auth/logout', method: 'post' },
          user: false
          // user: { url: '/api/v1/users/', method: 'get', propertyName: 'data._id' }
        },
        redirect: {
          login: '/market',
          logout: '/',
          // callback: '/login',
          home: '/'
        }
      }
    }
  },

  googleFonts: {
    families: {
      // a simple name
      Roboto: true,
  
      // a name with spaces
      'Josefin+Sans': true,
  
      // specific font weights
      Lato: [100, 300],
      Montserrat: true,
      Inter: true,
    }
  },

  bootstrapVue: {
    icons: true // Install the IconsPlugin
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://blakkart-api.herokuapp.com/api/v1/',
    proxyHeaders: false,
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null, 
  },
}
