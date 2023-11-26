import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

import { italicRegex, splitCharsRegex } from '../../helpers/regExps.js';

import generateFontFaceDeclarations from './generateFontFaceDeclarations.js';

const { fontFacesFile } = PATHS;
const { isTypeChecker, status, trimString } = PLUGINS;

const fontFileHandler = (fontsFiles) => {
	isTypeChecker(fontsFiles, 'fontsFiles', 'array');

	const FONT_WEIGHTS = {
		thin: 100,
		hairline: 100,
		extralight: 200,
		ultralight: 200,
		light: 300,
		regular: 400,
		medium: 500,
		semibold: 600,
		demibold: 600,
		bold: 700,
		extrabold: 800,
		ultrabold: 800,
		black: 900,
		heavy: 900,
		extrablack: 950,
		ultrablack: 950
	};

	let newFileOnly;
	const FILE_EXTENSION = new RegExp('.[^.]+$')

	for (const fontFile of fontsFiles) {
		const [fontFileName] = fontFile.split('.');

		if (newFileOnly !== fontFileName) {
			const [fontFamily, fontWeightValue] = fontFileName.split('-');
			const fontWeight =
				FONT_WEIGHTS[trimString(fontWeightValue, italicRegex) || 'regular'];
			const fontStyle = status.hasMatch(fontFileName, italicRegex)
				? 'italic'
				: 'normal';

			generateFontFaceDeclarations(fontFacesFile, {
				fontFileName,
				fontFamily,
				fontWeight,
				fontStyle
			});

			newFileOnly = fontFileName;
		}
	}
};

export default fontFileHandler;
