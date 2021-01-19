// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    js: '/',
    scss: '/',
  },
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-sass'
  ],
  packageOptions: {
    // source: 'remote'
  },
  devOptions: {
    hmr: true
  },
  alias: {
    'jquery': './js/jquery.module.js'
  },
  buildOptions: {
    out: 'dist'
  }
};
