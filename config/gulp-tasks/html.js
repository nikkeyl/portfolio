import { paths } from '../settings/paths.js'
import { plugins } from '../settings/plugins.js'

import { htmlMinConfig } from '../../htmlMin.config.js'
import { typografConfig } from '../../typograf.config.js'
import { versionNumberConfig } from '../../versionNumber.config.js'

import htmlMin from 'gulp-htmlmin'
import versionNumber from 'gulp-version-number'
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'
import typograf from 'gulp-typograf'

const {
	build: { html: htmlDest }
} = paths
const {
	notifier,
	gulp: { dest, src },
	if: cond
} = plugins

const html = (isWebp) => {
	return src(`${htmlDest}*.html`)
		.pipe(notifier.errorHandler('html'))
		.pipe(cond(isWebp, webpHtmlNoSvg()))
		.pipe(versionNumber(versionNumberConfig))
		.pipe(typograf(typografConfig))
		.pipe(htmlMin(htmlMinConfig))
		.pipe(dest(htmlDest))
}

export { html }
