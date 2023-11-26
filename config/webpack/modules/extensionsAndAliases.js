import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

const { srcFolder } = PATHS;
const { join } = PLUGINS;

const extensionsAndAliases = {
	alias: {
		'@js': join(srcFolder, 'js'),
		'@scss': join(srcFolder, 'scss')
	},
	extensions: ['.js', '.scss']
};

export default extensionsAndAliases;
