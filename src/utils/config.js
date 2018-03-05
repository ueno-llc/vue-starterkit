export default {
  // Basic configuration for the HTML page that hosts our application.
  // We make use of react-helmet to consume the values below.
  meta: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Home',
    titleTemplate: 'Ueno. - %s',
    meta: [
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { vmid: 'description', name: 'description', content: 'Ueno. description text here!' },
      // prevents inputs from zooming, but iOS still allows normal pinch zoom
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { name: 'msapplication-TileColor', content: '#00E2AD' },
      { name: 'msapplication-TileImage', content: '/favicons/mstile-150x150.png' },
      { name: 'msapplication-square70x70logo', content: '/favicons/mstile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: '/favicons/mstile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: '/favicons/mstile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: '/favicons/mstile-310x310.png' },
      { name: 'theme-color', content: '#00E2AD' },
      { property: 'og:image', content: '/favicons/android-chrome-192x192.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/favicons/android-chrome-192x192.png' },
      { name: 'twitter:site', content: '@ueno' },
      { name: 'twitter:creator', content: '@ueno' },
      { name: 'twitter:description', content: 'Ueno. description text here!' },
      { name: 'twitter:title', content: 'Ueno.' },
    ],
    link: [
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/favicons/apple-touch-icon-152x152.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/favicons/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/favicons/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/favicons/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/favicons/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/favicons/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/favicons/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/favicons/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon-180x180.png' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#00a9d9' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-196x196.png', sizes: '196x196' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-128.png', sizes: '128x128' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', sizes: '16x16 32x32', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },
};
