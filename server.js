const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/public'));
app.use('/vendor/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/vendor/js', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));
app.use('/vendor/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts/'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
const server = app.listen(3000, function() {
  const host = 'localhost/#/home';
  const port = server.address().port;
  console.log('UX-TV app listening at http://%s:%s', host, port);
});