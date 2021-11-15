const path = require('path')

module.exports = {
    // inform webapck that we're building a bundle

    target: 'node',

    entry: './src/server/index.js',

    output:{
        path:path.resolve(__dirname,'public'),
        filename:'bundle.js'
    },

    module: {
        rules:[{
            test:/\.jsx?$/,
            loader:'babel-loader',
            exclude: /node_modules/,
        }]
 
    },
    mode:'development'
}