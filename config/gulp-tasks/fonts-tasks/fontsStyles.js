import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

import fontFileHandler from './fontFileHandler.js';

const {
	fontFacesFile,
	build: { fonts: fontsBuild }
} = PATHS;
const {
	notifier,
	status,
	fs: {
		existsSync,
		promises: { readdir, writeFile }
	}
} = PLUGINS;

const fontsStyles = async (updateFlag) => {
	const taskName = 'fontsStyles';
	const isFontFacesFileExists = existsSync(fontFacesFile) && !updateFlag;

	if (isFontFacesFileExists) {
		return notifier.warning(taskName, {
			path: fontFacesFile,
			message: isFontFacesFileExists
		});
	}

	try {
		const fontsFiles = await readdir(fontsBuild);
		const hasUpdate = status.state(fontFacesFile, updateFlag);

		await writeFile(fontFacesFile, '');

		fontFileHandler(fontsFiles);

		return notifier.success(taskName, {
			path: fontFacesFile,
			message: hasUpdate
		});
	} catch (error) {
		return notifier.error(taskName, {
			path: fontFacesFile,
			message: error
		});
	}
};

export default fontsStyles;
