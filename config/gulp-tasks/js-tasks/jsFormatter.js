import webpack from 'webpack-stream';

import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

const {
	build: { js: jsBuild },
	src: { js: jsSrc }
} = PATHS;
const {
	notifier,
	gulp: { dest, src }
} = PLUGINS;

const jsFormatter = (config, taskName) => {
	return src(jsSrc)
		.pipe(notifier.errorHandler(taskName))
		.pipe(
			webpack({
				config
			})
		)
		.pipe(dest(jsBuild));
};

export default jsFormatter;
