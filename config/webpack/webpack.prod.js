import { paths } from '../settings/paths.js'
import { plugins } from '../settings/plugins.js'

import { extensionsAndAliases } from './modules/extensionsAndAliases.js'
import { output } from './modules/webPackOutputFile.js'

import { cssLoaderConfig } from './loaders/cssLoaderConfig.js'
import { replaceLoaderConfig } from './loaders/replaceLoaderConfig.js'

import { linters } from './plugins/linters.js'
import { pugPages } from './plugins/pugPages.js'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const {
	src: {
		favicon: faviconSrc,
		htaccess: htaccessSrc,
		robots: robotsSrc,
		static: staticSrc
	},
	assetsFolder,
	srcFolder
} = paths
const { CopyPlugin, TerserPlugin, HtmlWebpackPlugin } = plugins
const { esLint, styleLint } = linters

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
						options: replaceLoaderConfig(`${assetsFolder}/`)
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
					filename: `../../${pugPage.replace(/\.pug$/, '.html')}`,
					inject: false,
					minify: false,
					production: true,
					template: `${srcFolder}/views/${pugPage}`
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
					to: '../../',
					noErrorOnMissing: true
				},
				{
					from: robotsSrc,
					to: '../../',
					noErrorOnMissing: true
				},
				{
					from: htaccessSrc,
					to: '../../',
					noErrorOnMissing: true
				}
			]
		})
	],
	resolve: extensionsAndAliases
}

export default config
