import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import { htmlValidator } from 'gulp-w3c-html-validator'
import bemValidator from 'gulp-html-bem-validator'
import a11y from 'gulp-wcag-accessibility'

const {
	build: { html: htmlSrc },
	binFolder
} = paths
const { gulp } = plugins

const validator = () =>
	gulp
		.src(`${htmlSrc}*.html`)
		.pipe(bemValidator())
		.pipe(htmlValidator.analyzer())
		.pipe(htmlValidator.reporter())
		.pipe(
			a11y({
				accessibilityLevel: 'WCAG2AAA',
				reportLocation: binFolder,
				reportLevels: {
					warning: true,
					error: true
				},
				verbose: false,
				force: true
			})
		)

export { validator }
