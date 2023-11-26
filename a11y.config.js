import projectConfig from './project.config.js';

import PATHS from './config/settings/paths.js';

const {
	html: { accessibilityLevel }
} = projectConfig;
const { cacheFolder } = PATHS;

const a11yConfig = {
	accessibilityLevel,
	force: true,
	reportLevels: {
		error: true,
		warning: true
	},
	reportLocation: cacheFolder,
	verbose: false
};

export default a11yConfig;
