import { paths } from '../settings/paths.js'
import { plugins } from '../settings/plugins.js'

import { a11yConfig } from '../../a11y.config.js'

import { htmlValidator } from 'gulp-w3c-html-validator'
import a11y from 'gulp-wcag-accessibility'
import bemValidator from 'gulp-html-bem-validator'

const {
	build: { html: htmlSrc }
} = paths
const {
	notifier,
	gulp: { src }
} = plugins
const { analyzer, reporter } = htmlValidator

const validator = () => {
	return src(`${htmlSrc}*.html`)
		.pipe(notifier.errorHandler('validator'))
		.pipe(bemValidator())
		.pipe(analyzer())
		.pipe(reporter())
		.pipe(a11y(a11yConfig))
}

export { validator }
