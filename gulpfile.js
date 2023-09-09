import { plugins } from './config/settings/plugins.js'

import { deploy } from './config/utilities/deploy.js'
import { reset } from './config/utilities/reset.js'
import { validator } from './config/utilities/validators.js'
import { zip } from './config/utilities/zip.js'

import { fontsStyles } from './config/gulp-tasks/fonts-tasks/fontsStyles.js'
import { otfToTtf } from './config/gulp-tasks/fonts-tasks/otfToTtf.js'
import { ttfToWoff2 } from './config/gulp-tasks/fonts-tasks/ttfToWoff2.js'

import { jsDev } from './config/gulp-tasks/js-tasks/jsDev.js'
import { jsProd } from './config/gulp-tasks/js-tasks/jsProd.js'

import { images } from './config/gulp-tasks/images-tasks/images.js'
import { sprite } from './config/gulp-tasks/images-tasks/sprite.js'

import { css } from './config/gulp-tasks/css.js'
import { html } from './config/gulp-tasks/html.js'

import { argv } from 'node:process'

const {
	gulp: { parallel, series }
} = plugins

const webpFlag = argv.includes('--webp')
const updateFlag = argv.includes('--update')

const fonts = series(
	reset,
	otfToTtf,
	ttfToWoff2,
	fontsStyles.bind(null, updateFlag)
)
const build = series(
	fonts,
	jsDev,
	jsProd,
	parallel(images.bind(null, webpFlag), html.bind(null, webpFlag), css),
	parallel(validator, zip)
)
const dev = parallel(fonts, sprite.bind(null, updateFlag))

export { build, deploy, fonts, sprite }

export default dev
