import gulp from 'gulp'

import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import webpHtmlNoSvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'
import htmlMin from 'gulp-htmlmin'

const html = noWebp =>
	gulp
		.src(`${paths.build.html}*.html`)
		.pipe(plugins.logger.catchErrors('HTML'))
		.pipe(plugins.if(noWebp, webpHtmlNoSvg()))
		.pipe(
			versionNumber({
				value: '%DT%',
				append: {
					key: 'v',
					cover: 0,
					to: ['css', 'js']
				},
				output: {
					file: paths.versionFile
				}
			})
		)
		.pipe(
			htmlMin({
				removeRedundantAttributes: true,
				removeEmptyAttributes: true
			})
		)
		.pipe(gulp.dest(paths.build.html))

export { html }
