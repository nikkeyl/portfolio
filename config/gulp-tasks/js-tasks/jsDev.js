import projectConfig from '../../../project.config.js';

import PLUGINS from '../../settings/plugins.js';

import webPackConfig from '../../webpack/webpack.prod.js';

import output from '../../webpack/modules/webPackOutputFile.js';

import jsFormatter from './jsFormatter.js';

const { entry } = projectConfig;
const { TerserPlugin } = PLUGINS;

const webPackBeautifyConfig = Object.assign({}, webPackConfig);

webPackBeautifyConfig.optimization = {
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
};
webPackBeautifyConfig.output = output(`${entry}.js`);

const jsDev = () => {
	return jsFormatter(webPackBeautifyConfig, 'jsDev');
};

export default jsDev;
