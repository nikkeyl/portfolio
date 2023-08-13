import gulp from 'gulp'

import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import webp from 'gulp-webp'

const images = noWebp =>
	gulp
		.src(paths.src.images)
		.pipe(plugins.catchError('IMAGES'))
		.pipe(newer(paths.build.images))
		.pipe(plugins.if(noWebp, webp()))
		.pipe(plugins.if(noWebp, gulp.dest(paths.build.images)))
		.pipe(plugins.if(noWebp, gulp.src(paths.src.images)))
		.pipe(plugins.if(noWebp, newer(paths.build.images)))
		.pipe(
			imagemin({
				svgoPlugins: [
					{
						removeViewBox: false
					}
				],
				interlaced: true
			})
		)
		.pipe(gulp.dest(paths.build.images))
		.pipe(gulp.src(paths.src.svg))
		.pipe(gulp.dest(paths.build.images))

export { images }
