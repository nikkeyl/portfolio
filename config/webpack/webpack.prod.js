import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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

import LINTERS from './plugins/linters.js';
import pugPages from './plugins/pugPages.js';

const {
	entry,
	cache: { settings },
	formatters: {
		languages: { sassOutputStyle, pugPretty }
	}
} = projectConfig;
const {
	assetsFolder,
	srcFolder,
	src: {
		favicon: faviconSrc,
		htaccess: htaccessSrc,
		robots: robotsSrc,
		static: staticSrc
	}
} = PATHS;
const { CopyPlugin, HtmlWebpackPlugin, join, TerserPlugin } = PLUGINS;
const { esLint, styleLint } = LINTERS;

export default {
	mode: 'production',
	cache: settings,
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false
			})
		]
	},
	output: output(`${entry}.min.js`),
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
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'string-replace-loader',
						options: replaceLoaderConfig({
							startPath: '../'
						})
					},
					{
						loader: 'css-loader',
						options: cssLoaderConfig()
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: sassOutputStyle
							}
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
							pretty: pugPretty,
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
				filename: join('../..', pugPage.replace(pugExtensionRegex, '.html')),
				inject: false,
				minify: false,
				production: true,
				template: join(srcFolder, 'views', pugPage)
			});
		}),
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
};
