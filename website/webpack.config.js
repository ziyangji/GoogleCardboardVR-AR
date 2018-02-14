const path = require('path');
const webpack = require('webpack');

module.exports = {
	target: 'node',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/build',
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /(node_modules|bower_components)/
			}
		]
	}
}
