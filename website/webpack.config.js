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
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"' // for some reason this makes things disappear

			}
		})
	]
}

// if (process.env.NODE_ENV === 'production') {
// 	module.exports.plugins = (module.exports.plugins || []).concat([
// 		new webpack.DefinePlugin({
// 			'process.env': {
// 				NODE_ENV: '"production"' // for some reason this makes things disappear			
// 			}
// 		})
// 	])
// }