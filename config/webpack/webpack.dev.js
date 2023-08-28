import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import { extensionsAndAliases } from './modules/extensionsAndAliases.js'
import { output } from './modules/webPackOutputFile.js'

import { replaceLoaderConfig } from './loaders/replaceLoaderConfig.js'
import { cssLoaderConfig } from './loaders/cssLoaderConfig.js'

import { pugPages } from './plugins/pugPages.js'

const {
	src: {
		favicon: faviconSrc,
		static: staticSrc,
		images: imagesSrc,
		fonts: fontsSrc,
		json: jsonSrc,
		pug: pugSrc,
		js: jsSrc
	},
	srcFolder,
	buildFolder
} = paths
const { HtmlWebpackPlugin, CopyPlugin } = plugins

const config = {
	mode: 'development',
	devtool: 'inline-source-map',
	stats: 'errors-warnings',
	optimization: {
		minimize: false
	},
	entry: jsSrc,
	output: output('js/app.min.js'),
	devServer: {
		static: buildFolder,
		historyApiFallback: true,
		compress: true,
		port: 3000,
		open: true,

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
						options: replaceLoaderConfig('../')
					},
					{
						loader: 'css-loader',
						options: cssLoaderConfig(1, true, '/')
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
						options: replaceLoaderConfig('')
					}
				]
			}
		]
	},
	plugins: [
		...pugPages.map(
			(pugPage) =>
				new HtmlWebpackPlugin({
					minify: false,
					inject: false,
					template: `${srcFolder}/views/${pugPage}`,
					filename: pugPage.replace(/\.pug$/, '.html'),
					production: false
				})
		),
		new CopyPlugin({
			patterns: [
				{
					from: `${srcFolder}/img`,
					to: 'img',
					noErrorOnMissing: true,
					force: true
				},
				{
					from: staticSrc,
					to: 'static',
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
