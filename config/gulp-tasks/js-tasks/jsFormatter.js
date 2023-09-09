import { paths } from '../../settings/paths.js'
import { plugins } from '../../settings/plugins.js'

import webpack from 'webpack-stream'

const {
	build: { js: jsDest },
	src: { js: jsSrc }
} = paths
const {
	notifier,
	gulp: { dest, src }
} = plugins

const jsFormatter = (config, taskName) => {
	return src(jsSrc)
		.pipe(notifier.errorHandler(`js${taskName}`))
		.pipe(
			webpack({
				config
			})
		)
		.pipe(dest(jsDest))
}

export { jsFormatter }
