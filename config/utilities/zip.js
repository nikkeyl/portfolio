import { paths } from '../settings/paths.js'
import { plugins } from '../settings/plugins.js'

import zipPlugin from 'gulp-zip'

const { binFolder, buildFolder, rootDirectory } = paths
const {
	notifier,
	gulp: { dest, src }
} = plugins

const zip = () => {
	return src(`${buildFolder}/**/*.*`)
		.pipe(notifier.errorHandler('zip'))
		.pipe(zipPlugin(`${rootDirectory}.zip`))
		.pipe(dest(binFolder))
}

export { zip }
