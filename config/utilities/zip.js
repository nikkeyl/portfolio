import gulp from 'gulp'

import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import zipPlugin from 'gulp-zip'

const zip = () =>
	gulp
		.src(`${paths.buildFolder}/**/*.*`)
		.pipe(plugins.catchError('ZIP'))
		.pipe(zipPlugin(`${paths.rootDirectory}.zip`))
		.pipe(gulp.dest(paths.binFolder))

export { zip }
