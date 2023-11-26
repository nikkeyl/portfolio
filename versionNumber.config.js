import projectConfig from './project.config.js';

import PATHS from './config/settings/paths.js';

const {
	html: {
		version: { assets, format }
	}
} = projectConfig;
const { versionFile } = PATHS;

const versionNumberConfig = {
	value: format,
	append: {
		key: 'v',
		cover: 0,
		to: assets
	},
	output: {
		file: versionFile
	}
};

export default versionNumberConfig;
