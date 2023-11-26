import htmlMin from 'gulp-htmlmin';
import versionNumber from 'gulp-version-number';
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';
import avifHtml from 'gulp-avif-html';
import typograf from 'gulp-typograf';

import PATHS from '../settings/paths.js';
import PLUGINS from '../settings/plugins.js';

import htmlMinConfig from '../../htmlMin.config.js';
import typografConfig from '../../typograf.config.js';
import versionNumberConfig from '../../versionNumber.config.js';

const {
	build: { html: htmlBuild }
} = PATHS;
const {
	join,
	notifier,
	gulp: { dest, src },
	if: cond
} = PLUGINS;

const html = (isWebp, isAvif) => {
	return src(join(htmlBuild, '*.html'))
		.pipe(notifier.errorHandler('html'))
		.pipe(cond(isWebp, webpHtmlNoSvg()))
		.pipe(cond(isAvif, avifHtml()))
		.pipe(versionNumber(versionNumberConfig))
		.pipe(typograf(typografConfig))
		.pipe(htmlMin(htmlMinConfig))
		.pipe(dest(htmlBuild));
};

export default html;
