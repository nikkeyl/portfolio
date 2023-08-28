import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import imageMin from 'gulp-imagemin'
import newer from 'gulp-newer'
import webp from 'gulp-webp'

const {
	src: {
		images: imagesSrc,
		svg: svgSrc
	},
	build: { images: imagesDest }
} = paths
const { gulp, notifier, if: cond } = plugins

const images = (isWebp) =>
	gulp
		.src(imagesSrc)
		.pipe(notifier.errorHandler('IMAGES'))
		.pipe(newer(imagesDest))
		.pipe(cond(isWebp, webp()))
		.pipe(cond(isWebp, gulp.dest(imagesDest)))
		.pipe(cond(isWebp, gulp.src(imagesSrc)))
		.pipe(cond(isWebp, newer(imagesDest)))
		.pipe(
			imageMin({
				svgoPlugins: [
					{
						removeViewBox: false
					}
				],
				interlaced: true
			})
		)
		.pipe(gulp.dest(imagesDest))
		.pipe(gulp.src(svgSrc))
		.pipe(gulp.dest(imagesDest))

export { images }
