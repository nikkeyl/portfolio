import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import groupCssMediaQueries from 'gulp-group-css-media-queries'
import autoPrefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import webpCss from 'gulp-webpcss'
import cssComb from 'gulp-csscomb'
import rename from 'gulp-rename'

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
		.pipe(cleanCss({ level: 2 }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(cssDest))

export { css }
