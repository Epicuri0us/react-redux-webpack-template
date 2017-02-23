//import path from 'path'
const path = require('path');

module.exports = {
	entry: './src/app.jsx',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'build'),
		publicPath: 'build'
	},
	module: {
		loaders: [
			{
				test: /\.js(x)?/,
				exclude: /node_modules/,
				loaders: ["babel-loader"],
			}
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'assets')
	}
};