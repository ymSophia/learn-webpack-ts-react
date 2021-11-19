const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV || 'production',
	devtool: false,
	entry: {
		app: './src/index.tsx'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: {
				loader: 'ts-loader'
			}
		},{
			test: /\.tsx$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		},{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			}
		}]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
		mainFiles: ['index'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			// 虚拟的html文件名 index.html
			filename: 'index.html',
			// 虚拟html的模板为 src下的index.html
			template: path.resolve(__dirname, './src/index.html')
		}),
	],
	devServer: {
		open: true, // 自动打开页面
		compress: true,
		host: "localhost",
		port: 8000,
	},
}