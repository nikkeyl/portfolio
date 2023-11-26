import PATHS from '../../settings/paths.js';

const { buildFolder } = PATHS;

const output = (fileName) => {
	return {
		filename: fileName,
		path: buildFolder,
		publicPath: '/'
	};
};

export default output;
