import projectConfig from '../../../project.config.js';

import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

const {
	ignore: { git }
} = projectConfig;
const { gitIgnoreFile } = PATHS;
const {
	fs: {
		promises: { appendFile, writeFile }
	}
} = PLUGINS;

const gitignore = async () => {
	await writeFile(gitIgnoreFile, '');

	for (const ignored of git) {
		appendFile(gitIgnoreFile, `${ignored}\n`);
	}
};

export default gitignore;
