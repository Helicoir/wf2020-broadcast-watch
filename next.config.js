module.exports = {
  env: {
    YOUTUBE_API_CLI_ID: '821547660001-v317lk79m9hqcucs36ifv0tbfm29nmc8.apps.googleusercontent.com',
    YOUTUBE_API_CLI_SECRET: 'ylwhvKMveXuyYa_xh128IPAU',
    YOUTUBE_API_API_KEY: 'AIzaSyAsIU7Nw4DJ_TonDKqFfIBCAVjowsZtFos'
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /clasp/,
      exclude: /clasp/,
      use: [options.defaultLoaders.babel],
    })

    return config
  },
}