import projectConfig from './project.config.js';

import PLUGINS from './config/settings/plugins.js';

import { updateFlag } from './config/helpers/flags.js';

import deploy from './config/gulp-tasks/utilities/deploy.js';
import gitignore from './config/gulp-tasks/utilities/gitignore.js';
import reset from './config/gulp-tasks/utilities/reset.js';
import validator from './config/gulp-tasks/utilities/validators.js';
import zip from './config/gulp-tasks/utilities/zip.js';

import fontsStyles from './config/gulp-tasks/fonts-tasks/fontsStyles.js';
import convertOtfToTtf from './config/gulp-tasks/fonts-tasks/convertOtfToTtf.js';
import convertTtfToWoff2 from './config/gulp-tasks/fonts-tasks/convertTtfToWoff2.js';

import jsDev from './config/gulp-tasks/js-tasks/jsDev.js';
import jsProd from './config/gulp-tasks/js-tasks/jsProd.js';

import images from './config/gulp-tasks/images-tasks/images.js';
import sprite from './config/gulp-tasks/images-tasks/sprite.js';

import css from './config/gulp-tasks/css.js';
import html from './config/gulp-tasks/html.js';

const {
	images: { webp, avif }
} = projectConfig;
const {
	gulp: { parallel, series }
} = PLUGINS;

const fonts = series(
	reset,
	convertOtfToTtf,
	convertTtfToWoff2,
	fontsStyles.bind(null, updateFlag)
);
const build = series(
	fonts,
	jsDev,
	jsProd,
	parallel(images.bind(null, webp, avif), html.bind(null, webp, avif), css),
	parallel(validator, zip)
);
const dev = parallel(fonts, sprite.bind(null, updateFlag));

export { build, gitignore, deploy, fonts, sprite };

export default dev;
