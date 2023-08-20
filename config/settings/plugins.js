import { logger } from '../utilities/Logger.js'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ifPlugin from 'gulp-if'
import fs from 'fs'

const plugins = {
	HtmlWebpackPlugin,
	if: ifPlugin,
	TerserPlugin,
	CopyPlugin,
	logger,
	fs
}

export { plugins }
