import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import webpHtmlNoSvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'
import htmlMin from 'gulp-htmlmin'

const {
	build: { html: htmlDest },
	versionFile
} = paths
const { gulp, notifier, if: cond } = plugins

const html = (isWebp) =>
	gulp
		.src(`${htmlDest}*.html`)
		.pipe(notifier.errorHandler('HTML'))
		.pipe(cond(isWebp, webpHtmlNoSvg()))
		.pipe(
			versionNumber({
				value: '%DT%',
				append: {
					key: 'v',
					cover: 0,
					to: ['css', 'js']
				},
				output: {
					file: versionFile
				}
			})
		)
		.pipe(
			htmlMin({
				collapseBooleanAttributes: true,
				removeRedundantAttributes: true,
				removeEmptyAttributes: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true
			})
		)
		.pipe(gulp.dest(htmlDest))

export { html }
