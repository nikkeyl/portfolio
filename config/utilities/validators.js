import gulp from 'gulp'

import { paths } from '../settings/paths.js'

import { htmlValidator } from 'gulp-w3c-html-validator'
import bemValidator from 'gulp-html-bem-validator'
import a11y from 'gulp-wcag-accessibility'

const validator = () =>
	gulp
		.src(`${paths.build.html}*.html`)
		.pipe(bemValidator())
		.pipe(htmlValidator.analyzer())
		.pipe(htmlValidator.reporter())
		.pipe(
			a11y({
				reportLocation: paths.binFolder,
				accessibilityLevel: 'WCAG2AAA',
				reportLevels: {
					warning: true,
					error: true
				},
				verbose: false,
				force: true
			})
		)

export { validator }
