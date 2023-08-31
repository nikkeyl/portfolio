import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

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
const { gulp, notifier } = plugins

const css = () =>
	gulp
		.src(`${cssDest}style.css`)
		.pipe(notifier.errorHandler('CSS'))
		.pipe(groupCssMediaQueries())
		.pipe(
			webpCss({
				noWebpClass: '.no-webp',
				webpClass: '.webp'
			})
		)
		.pipe(cssComb())
		.pipe(autoPrefixer())
		.pipe(gulp.dest(cssDest))
		.pipe(shorthand())
		.pipe(cleanCss({ level: 2 }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(cssDest))

export { css }
