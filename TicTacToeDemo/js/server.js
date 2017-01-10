// 基于 webpack 和 react-hot-loader 的本地服务器
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');
new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true
}).listen(3000, '127.0.0.1', function(err, result) {

    if (err) {
        console.log(err);
    }
    console.log('Listening at loacalhost:3000');
});