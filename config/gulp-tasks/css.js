import { paths } from '../settings/paths.js'
import { plugins } from '../settings/plugins.js'

import { webpCssConfig } from '../../webpCss.config.js'

import autoPrefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import cssComb from 'gulp-csscomb'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import rename from 'gulp-rename'
import shorthand from 'gulp-shorthand'
import webpCss from 'gulp-webpcss'

const {
	build: { css: cssDest }
} = paths
const {
	notifier,
	gulp: { dest, src }
} = plugins

const css = () => {
	return src(`${cssDest}style.css`)
		.pipe(notifier.errorHandler('css'))
		.pipe(groupCssMediaQueries())
		.pipe(webpCss(webpCssConfig))
		.pipe(cssComb())
		.pipe(autoPrefixer())
		.pipe(dest(cssDest))
		.pipe(shorthand())
		.pipe(cleanCss({ level: 2 }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(cssDest))
}

export { css }
