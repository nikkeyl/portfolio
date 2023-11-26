import { deleteAsync } from 'del';

import projectConfig from '../../../project.config.js';

import PATHS from '../../settings/paths.js';

const { remove } = projectConfig;
const { buildFolder, gitKeepFiles, cacheFolder } = PATHS;

const reset = () => {
	return deleteAsync([cacheFolder, buildFolder, gitKeepFiles, ...remove]);
};

export default reset;
