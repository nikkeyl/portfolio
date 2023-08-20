import gulp from 'gulp'

import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import groupCssMediaQueries from 'gulp-group-css-media-queries'
import autoPrefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import webpCss from 'gulp-webpcss'
import cssComb from 'gulp-csscomb'
import rename from 'gulp-rename'

const css = () =>
	gulp
		.src(`${paths.build.css}style.css`)
		.pipe(plugins.logger.catchErrors('CSS'))
		.pipe(groupCssMediaQueries())
		.pipe(
			webpCss({
				noWebpClass: '.no-webp',
				webpClass: '.webp'
			})
		)
		.pipe(cssComb())
		.pipe(autoPrefixer())
		.pipe(gulp.dest(paths.build.css))
		.pipe(
			cleanCss({
				level: 2
			})
		)
		.pipe(
			rename({
				suffix: '.min'
			})
		)
		.pipe(gulp.dest(paths.build.css))

export { css }
