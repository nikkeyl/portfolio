import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

const {
	fontFacesFile,
	build: { fonts: fontsBuild },
	src: { fonts: fontsSrc }
} = PATHS;
const {
	isTypeChecker,
	join,
	notifier,
	gulp: { dest, src },
	fs: { existsSync }
} = PLUGINS;

const convertFonts = (taskName, fileExtension) => {
	isTypeChecker(fileExtension, 'fileExtension', 'string');

	const woff2 = join(fontsSrc, '*.woff2');
	const errorMessage = notifier.errorHandler(taskName);

	if (existsSync(fontFacesFile) && existsSync(woff2)) {
		return src(woff2)
			.pipe(errorMessage)
			.pipe(dest(fontsBuild));
	}

	const selectPlugin =
		fileExtension === 'otf' ? fonter({ formats: ['ttf'] }) : ttf2woff2();

	return src(join(fontsSrc, `*.${fileExtension}`))
		.pipe(errorMessage)
		.pipe(selectPlugin)
		.pipe(dest(fontsSrc))
		.pipe(src(woff2))
		.pipe(dest(fontsBuild));
};

export default convertFonts;
