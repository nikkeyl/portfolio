const splitChars = '(?:_|__|-|\\s)';

const italicRegex = new RegExp(`${splitChars}?(italic)`, 'i');
const jsExtensionRegex = new RegExp('.js$');
const nodeModulesRegex = new RegExp('node_modules');
const pugExtensionRegex = new RegExp('.pug$');
const scssExtensionRegex = new RegExp('.scss$');
const splitCharsRegex = new RegExp(splitChars);
const trimAfterCapitalRegex = new RegExp('[A-Z](\\w+)');
const variableFontRegex = new RegExp(`${splitChars}?(var)`, 'i');

export {
	italicRegex,
	jsExtensionRegex,
	nodeModulesRegex,
	pugExtensionRegex,
	scssExtensionRegex,
	splitCharsRegex,
	trimAfterCapitalRegex,
	variableFontRegex
};
