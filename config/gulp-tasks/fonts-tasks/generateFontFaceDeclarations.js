import PLUGINS from '../../settings/plugins.js';

import { variableFontRegex } from '../../helpers/regExps.js';

const {
	status,
	fs: {
		promises: { appendFile }
	}
} = PLUGINS;

const generateFontFaceDeclarations = async (
	filePath,
	{ fontFileName, fontFamily, fontWeight, fontStyle }
) => {
	const fontFileUrl = `src: url("../fonts/${fontFileName}.woff2") format("woff2")`;
	const fontFamilyName = `font-family: "${fontFamily}";`;
	const fontDisplay = 'font-display: swap;';
	const fontFaceDeclaration = status.hasMatch(fontFileName, variableFontRegex)
		? `@font-face {\n\t${fontFileUrl} tech("variations");\n\t${fontFamilyName}\n\tfont-weight: 1 1000;\n\t${fontDisplay}\n}\n`
		: `@font-face {\n\t${fontFileUrl};\n\t${fontFamilyName}\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontStyle};\n\t${fontDisplay}\n}\n`;

	await appendFile(filePath, fontFaceDeclaration);
};

export default generateFontFaceDeclarations;
