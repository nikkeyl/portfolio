import { notifier } from '../helpers/Notifier.js'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ifPlugin from 'gulp-if'
import gulp from 'gulp'
import fs from 'fs'

const plugins = {
	HtmlWebpackPlugin,
	if: ifPlugin,
	TerserPlugin,
	CopyPlugin,
	notifier,
	gulp,
	fs
}

export { plugins }
