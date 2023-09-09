import { notifier } from '../helpers/notifier.js'

import CopyPlugin from 'copy-webpack-plugin'
import fs from 'fs'
import gulp from 'gulp'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ifPlugin from 'gulp-if'
import TerserPlugin from 'terser-webpack-plugin'

const plugins = {
	CopyPlugin,
	fs,
	gulp,
	HtmlWebpackPlugin,
	notifier,
	TerserPlugin,
	if: ifPlugin
}

export { plugins }
