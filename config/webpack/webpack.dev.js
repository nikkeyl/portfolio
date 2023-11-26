import projectConfig from '../../project.config.js';

import PATHS from '../settings/paths.js';
import PLUGINS from '../settings/plugins.js';

import {
	jsExtensionRegex,
	nodeModulesRegex,
	pugExtensionRegex,
	scssExtensionRegex
} from '../helpers/regExps.js';

import extensionsAndAliases from './modules/extensionsAndAliases.js';
import output from './modules/webPackOutputFile.js';

import cssLoaderConfig from './loaders/cssLoaderConfig.js';
import replaceLoaderConfig from './loaders/replaceLoaderConfig.js';

import pugPages from './plugins/pugPages.js';

const {
	entry,
	server: { port, sourceMap, staticFolder, stats, watchFiles }
} = projectConfig;
const {
	buildFolder,
	assetsFolder,
	srcFolder,
	src: {
		favicon: faviconSrc,
		fonts: fontsSrc,
		images: imagesSrc,
		js: jsSrc,
		json: jsonSrc,
		pug: pugSrc,
		static: staticSrc,
		markdown: markdownSrc
	}
} = PATHS;
const { CopyPlugin, HtmlWebpackPlugin, join } = PLUGINS;

export default {
	mode: 'development',
	devtool: sourceMap,
	stats,
	optimization: {
		minimize: false
	},
	entry: jsSrc,
	output: output(join(assetsFolder, `js/${entry}.min.js`)),
	devServer: {
		compress: false,
		historyApiFallback: true,
		open: true,
		port,
		hot: 'only',
		static: staticFolder,
		watchFiles: [imagesSrc, jsonSrc, markdownSrc, pugSrc, ...watchFiles]
	},
	module: {
		rules: [
			{
				test: jsExtensionRegex,
				exclude: nodeModulesRegex,
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: scssExtensionRegex,
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
							endPath: '/',
							importLoaders: 1,
							isSourceMap: true
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
				test: pugExtensionRegex,
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
		...pugPages.map((pugPage) => {
			return new HtmlWebpackPlugin({
				filename: pugPage.replace(pugExtensionRegex, '.html'),
				inject: false,
				minify: false,
				production: false,
				template: join(srcFolder, 'views', pugPage)
			});
		}),
		new CopyPlugin({
			patterns: [
				{
					from: join(srcFolder, 'img'),
					to: join(assetsFolder, 'img'),
					noErrorOnMissing: true,
					force: true
				},
				{
					from: staticSrc,
					to: join(assetsFolder, 'static'),
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
};

