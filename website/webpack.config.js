const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/build',
		filename: 'build.js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm.js'
		}
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
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'vue-loader',
				}
			}
	
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"' // for some reason this makes things disappear

			}
		})
	]
}