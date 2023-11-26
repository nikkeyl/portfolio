import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import cssComb from 'gulp-csscomb';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import rename from 'gulp-rename';
import shorthand from 'gulp-shorthand';
import webpCss from 'gulp-webpcss';

import PATHS from '../settings/paths.js';
import PLUGINS from '../settings/plugins.js';

import webpCssConfig from '../../webpCss.config.js';

const {
	build: { css: cssBuild }
} = PATHS;
const {
	join,
	notifier,
	gulp: { dest, src }
} = PLUGINS;

const css = () => {
	return src(join(cssBuild, 'style.css'))
		.pipe(notifier.errorHandler('css'))
		.pipe(groupCssMediaQueries())
		.pipe(webpCss(webpCssConfig))
		.pipe(cssComb())
		.pipe(autoPrefixer())
		.pipe(dest(cssBuild))
		.pipe(cleanCss({ level: 2 }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(cssBuild));
};

export default css;
