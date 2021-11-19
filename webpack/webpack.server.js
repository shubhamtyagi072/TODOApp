const path = require('path')
const baseConfig = require('./webpack.common.js')
const {merge} = require('webpack-merge')

config = {
    // inform webapck that we're building a bundle

    target: 'node',

    entry: path.resolve(__dirname,'..','./src/server/index.js'),

    output:{
        path:path.resolve(__dirname,'..','public'),
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