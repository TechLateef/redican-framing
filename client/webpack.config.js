const path = require('path')
const webpack = require('webpack')
require('dotenv').config()

module.exports = {
 entry: ['./client/index.js'],
 output: {
   path: path.join(__dirname, '..', 'src', 'public'),
   filename: 'bundle.js',
   publicPath: '/',
 },
 mode: 'development',
 module: {
   rules: [
     {
       test: /\.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
     },
   ],
 },
 devServer: {
   historyApiFallback: true,
 },
 resolve: {
   extensions: ['.js', '.jsx'],
 },
 devtool: 'source-map',
 plugins: [
   new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify(
         process.env.NODE_ENV
         ),
       'process.env.LOCAL_PORT': JSON.stringify(
         process.env.LOCAL_PORT
         ),
        'process.env.MONGODB_USERNAME': JSON.stringify(
          process.env.MONGODB_USERNAME
        ),
        'process.env.MONGODB_PW': JSON.stringify(
          process.env.MONGODB_PW
        ),
        'process.env.MONGODB_URL_CODE': JSON.stringify(
          process.env.MONGODB_URL_CODE
        ),
        'process.env.MONGODB_SHOP_DB': JSON.stringify(
          process.env.MONGODB_SHOP_DB
        ),
        'process.env.MONGODB_SHOP_CLN': JSON.stringify(
          process.env.MONGODB_SHOP_CLN
        ),
        'process.env.MONGODB_GALLERY_DB': JSON.stringify(
          process.env.MONGODB_GALLERY_DB
        ),
        'process.env.MONGODB_GALLERY_CLN': JSON.stringify(
          process.env.MONGODB_GALLERY_CLN
        )
   })
 ],
}