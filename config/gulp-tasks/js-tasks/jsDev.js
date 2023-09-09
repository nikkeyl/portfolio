import { plugins } from '../../settings/plugins.js'

import { jsFormatter } from './jsFormatter.js'

import { output } from '../../webpack/modules/webPackOutputFile.js'

import webPackConfig from '../../webpack/webpack.prod.js'

const { TerserPlugin } = plugins

const webPackConfigBeautify = Object.assign({}, webPackConfig)

webPackConfigBeautify.optimization = {
	minimizer: [
		new TerserPlugin({
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

const jsDev = () => {
	return jsFormatter(webPackConfigBeautify, 'Dev')
}

export { jsDev }
