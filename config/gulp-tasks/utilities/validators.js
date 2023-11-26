import { htmlValidator } from 'gulp-w3c-html-validator';
import a11y from 'gulp-wcag-accessibility';
import bemValidator from 'gulp-html-bem-validator';

import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

import a11yConfig from '../../../a11y.config.js';

const {
	build: { html: htmlSrc }
} = PATHS;
const {
	join,
	notifier,
	gulp: { src }
} = PLUGINS;
const { analyzer, reporter } = htmlValidator;

const validator = () => {
	return src(join(htmlSrc, '*.html'))
		.pipe(notifier.errorHandler('validator'))
		.pipe(bemValidator())
		.pipe(analyzer())
		.pipe(reporter())
		.pipe(a11y(a11yConfig));
};

export default validator;
