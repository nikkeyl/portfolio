import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import { extensionsAndAliases } from './modules/extensionsAndAliases.js'
import { output } from './modules/webPackOutputFile.js'

import { replaceLoaderConfig } from './loaders/replaceLoaderConfig.js'
import { cssLoaderConfig } from './loaders/cssLoaderConfig.js'

import { pugPages } from './plugins/pugPages.js'
import { linters } from './plugins/linters.js'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const {
	src: {
		htaccess: htaccessSrc,
		favicon: faviconSrc,
		static: staticSrc,
		robots: robotsSrc
	},
	srcFolder
} = paths
const { TerserPlugin, HtmlWebpackPlugin, CopyPlugin } = plugins
const { styleLint, esLint } = linters

const config = {
	mode: 'production',
	cache: {
		type: 'filesystem'
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false
			})
		]
	},
	output: output('app.min.js'),
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
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'string-replace-loader',
						options: replaceLoaderConfig('../')
					},
					{
						loader: 'css-loader',
						options: cssLoaderConfig()
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: 'expanded'
							}
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
							pretty: true,
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
		styleLint,
		esLint,

		...pugPages.map(
			(pugPage) =>
				new HtmlWebpackPlugin({
					minify: false,
					inject: false,
					template: `${srcFolder}/views/${pugPage}`,
					filename: `../${pugPage.replace(/\.pug$/, '.html')}`,
					production: true
				})
		),
		new MiniCssExtractPlugin({
			filename: '../css/style.css'
		}),
		new CopyPlugin({
			patterns: [
				{
					from: staticSrc,
					to: '../static',
					noErrorOnMissing: true
				},
				{
					from: faviconSrc,
					to: '../',
					noErrorOnMissing: true
				},
				{
					from: robotsSrc,
					to: '../',
					noErrorOnMissing: true
				},
				{
					from: htaccessSrc,
					to: '../',
					noErrorOnMissing: true
				}
			]
		})
	],
	resolve: extensionsAndAliases
}

export default config
