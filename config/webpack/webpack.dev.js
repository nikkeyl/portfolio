import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import { extensionsAndAliases } from './plugins/extensionsAndAliases.js'
import { replaceLoaderOptions } from './plugins/replaceLoaderOptions.js'
import { cssLoaderOptions } from './plugins/cssLoaderOptions.js'
import { output } from './plugins/webPackOutputFile.js'
import { pugPages } from './plugins/pugPages.js'

const config = {
	mode: 'development',
	devtool: 'inline-source-map',
	stats: 'errors-warnings',
	optimization: {
		minimize: false
	},
	entry: paths.src.js,
	output: output('js/app.min.js'),
	devServer: {
		static: paths.buildFolder,
		historyApiFallback: true,
		compress: true,
		port: 3000,
		open: true,

		watchFiles: [
			paths.src.images,
			paths.src.json,
			paths.src.pug
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				resolve: {
					fullySpecified: false
				}
			}, {
				test: /\.scss$/,
				exclude: paths.src.fonts,
				use: [
					'style-loader',
					{
						loader: 'string-replace-loader',
						options: replaceLoaderOptions('../')
					}, {
						loader: 'css-loader',
						options: cssLoaderOptions(1, true, '/')
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}, {
				test: /\.pug$/,
				use: [
					{
						loader: 'pug-loader',
						options: {
							self: true
						}
					}, {
						loader: 'string-replace-loader',
						options: replaceLoaderOptions('')
					}
				]
			}
		]
	},
	plugins: [
		...pugPages.map(pugPage => new plugins.HtmlWebpackPlugin({
			minify: false,
			inject: false,
			template: `${paths.srcFolder}/views/${pugPage}`,
			filename: pugPage.replace(/\.pug$/, '.html'),
			production: false
		})),
		new plugins.CopyPlugin({
			patterns: [
				{
					from: `${paths.srcFolder}/img`,
					to: 'img',
					noErrorOnMissing: true,
					force: true
				}, {
					from: paths.src.static,
					to: 'static',
					noErrorOnMissing: true,
					force: true
				}, {
					from: paths.src.favicon,
					to: './',
					noErrorOnMissing: true
				}
			]
		})
	],
	resolve: extensionsAndAliases
}

export default config
