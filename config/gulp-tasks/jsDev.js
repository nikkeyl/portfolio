import gulp from 'gulp'

import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import webPackConfig from '../webpack/webpack.prod.js'

import { output } from '../webpack/plugins/webPackOutputFile.js'

const webPackConfigBeautify = Object.assign({}, webPackConfig)

webPackConfigBeautify.optimization = {
	minimizer: [
		new plugins.TerserPlugin({
			extractComments: false,
			terserOptions: {
				compress: {
					defaults: false,
					unused: true
				},
				format: { beautify: true },
				keep_classnames: true,
				keep_fnames: true,
				mangle: false
			}
		})
	]
}

webPackConfigBeautify.output = output('app.js')

const jsDev = () =>
	gulp
		.src(paths.src.js)
		.pipe(plugins.catchError('JS'))
		.pipe(
			plugins.webpack({
				config: webPackConfigBeautify
			})
		)
		.pipe(gulp.dest(paths.build.js))

export { jsDev }
