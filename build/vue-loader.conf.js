var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
        browsers: ['last 8 versions']
    }),
    require('postcss-sprites')({
        stylesheetPath: '../src/assets/css',
        spritePath: '../src/assets/images/sprites',
        retina: false,
        padding: 3,
        filterBy: function (image) {
            //过滤一些不需要合并的图片，返回值是一个promise，默认有一个exist的filter
            //
            if (image.url.indexOf('/images/sprites/') === -1) {
                return Promise.reject();
            }
            return Promise.resolve();
        }
    })
  ]
}
