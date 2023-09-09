import { paths } from '../settings/paths.js'
import { plugins } from '../settings/plugins.js'

import { extensionsAndAliases } from './modules/extensionsAndAliases.js'
import { output } from './modules/webPackOutputFile.js'

import { cssLoaderConfig } from './loaders/cssLoaderConfig.js'
import { replaceLoaderConfig } from './loaders/replaceLoaderConfig.js'

import { pugPages } from './plugins/pugPages.js'

const {
	assetsFolder,
	buildFolder,
	srcFolder,
	src: {
		favicon: faviconSrc,
		fonts: fontsSrc,
		images: imagesSrc,
		js: jsSrc,
		json: jsonSrc,
		pug: pugSrc,
		static: staticSrc
	}
} = paths
const { CopyPlugin, HtmlWebpackPlugin } = plugins

const config = {
	mode: 'development',
	devtool: 'inline-source-map',
	stats: 'errors-warnings',
	optimization: {
		minimize: false
	},
	entry: jsSrc,
	output: output(`${assetsFolder}/js/app.min.js`),
	devServer: {
		compress: true,
		historyApiFallback: true,
		open: true,
		port: 3000,
		static: buildFolder,
		watchFiles: [imagesSrc, jsonSrc, pugSrc]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: /\.scss$/,
				exclude: fontsSrc,
				use: [
					'style-loader',
					{
						loader: 'string-replace-loader',
						options: replaceLoaderConfig({
							startPath: '../'
						})
					},
					{
						loader: 'css-loader',
						options: cssLoaderConfig({
							importLoaders: 1,
							sourceMap: true,
							endPath: '/'
						})
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.pug$/,
				use: [
					{
						loader: 'pug-loader',
						options: {
							self: true
						}
					},
					{
						loader: 'string-replace-loader',
						options: replaceLoaderConfig({
							startPath: `${assetsFolder}/`
						})
					}
				]
			}
		]
	},
	plugins: [
		...pugPages.map(
			(pugPage) =>
				new HtmlWebpackPlugin({
					filename: pugPage.replace(/\.pug$/, '.html'),
					inject: false,
					minify: false,
					production: false,
					template: `${srcFolder}/views/${pugPage}`
				})
		),
		new CopyPlugin({
			patterns: [
				{
					from: `${srcFolder}/img`,
					to: `${assetsFolder}/img`,
					noErrorOnMissing: true,
					force: true
				},
				{
					from: staticSrc,
					to: `${assetsFolder}/static`,
					noErrorOnMissing: true,
					force: true
				},
				{
					from: faviconSrc,
					to: './',
					noErrorOnMissing: true
				}
			]
		})
	],
	resolve: extensionsAndAliases
}

export default config
