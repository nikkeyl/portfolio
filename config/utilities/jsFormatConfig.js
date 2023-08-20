import gulp from 'gulp'

import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import webpack from 'webpack-stream'

const jsFormatConfig = (config, taskName) =>
	gulp
		.src(paths.src.js)
		.pipe(plugins.logger.catchErrors(`JS [js${taskName}]`))
		.pipe(
			webpack({
				config: config
			})
		)
		.pipe(gulp.dest(paths.build.js))

export { jsFormatConfig }
