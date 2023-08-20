import { plugins } from '../settings/plugins.js'

import webPackConfig from '../webpack/webpack.prod.js'

import { output } from '../webpack/plugins/webPackOutputFile.js'

import { jsFormatConfig } from '../utilities/jsFormatConfig.js'

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
				format: {
					beautify: true
				},
				keep_classnames: true,
				keep_fnames: true,
				mangle: false
			}
		})
	]
}

webPackConfigBeautify.output = output('app.js')

const jsDev = () => jsFormatConfig(webPackConfigBeautify, 'Dev')

export { jsDev }
