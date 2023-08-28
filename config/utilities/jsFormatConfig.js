import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import webpack from 'webpack-stream'

const {
	src: { js: jsSrc },
	build: { js: jsDest }
} = paths
const { gulp, notifier } = plugins

const jsFormatConfig = (config, taskName) =>
	gulp
		.src(jsSrc)
		.pipe(notifier.errorHandler(`JS [js${taskName}]`))
		.pipe(
			webpack({
				config: config
			})
		)
		.pipe(gulp.dest(jsDest))

export { jsFormatConfig }
