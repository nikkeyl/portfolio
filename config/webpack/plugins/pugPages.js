import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

const { srcFolder } = PATHS;
const {
	join,
	fs: { readdirSync }
} = PLUGINS;

const FILE_EXTENSION = new RegExp('.[^.]+$')

const pugPages = readdirSync(join(srcFolder, 'views')).filter((fileExtension) => {
	return fileExtension.endsWith('.pug');
});

export default pugPages;
