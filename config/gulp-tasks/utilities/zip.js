import zipPlugin from 'gulp-zip';

import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

const { buildFolder, cacheFolder, rootDirectory } = PATHS;
const {
	join,
	notifier,
	gulp: { dest, src }
} = PLUGINS;

const zip = () => {
	return src(join(buildFolder, '**/*.*'))
		.pipe(notifier.errorHandler('zip'))
		.pipe(zipPlugin(`${rootDirectory}.zip`))
		.pipe(dest(cacheFolder));
};

export default zip;
