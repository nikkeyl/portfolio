import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import zipPlugin from 'gulp-zip'

const { rootDirectory, buildFolder, binFolder } = paths
const { gulp, notifier } = plugins

const zip = () =>
	gulp
		.src(`${buildFolder}/**/*.*`)
		.pipe(notifier.errorHandler('ZIP'))
		.pipe(zipPlugin(`${rootDirectory}.zip`))
		.pipe(gulp.dest(binFolder))


export { zip }
