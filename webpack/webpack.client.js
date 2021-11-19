const path = require('path')
const baseConfig = require('./webpack.common.js')
const {merge} = require('webpack-merge')

config = {
    // inform webapck that we're building a bundle
    entry: path.resolve(__dirname, '..', './src/index.js'),
    resolve: {
        extensions: [".jsx", ".js"]
      },

    output:{
        path:path.resolve(__dirname,'..','build'),
        filename:'bundle.js'
    },

    module: {
        rules:[{
            test:/\.(js)x?$/,
            loader:'babel-loader',
            exclude: /node_modules/,
        }]
 
    },
    mode:'development'
}

module.exports = merge(baseConfig,config)