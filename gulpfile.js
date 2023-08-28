import gulp from 'gulp'

import { argv } from 'node:process'

import { validator } from './config/utilities/validators.js'
import { deploy } from './config/utilities/deploy.js'
import { reset } from './config/utilities/reset.js'
import { zip } from './config/utilities/zip.js'

import { otfToTtf } from './config/gulp-tasks/fonts-tasks/otfToTtf.js'
import { ttfToWoff2 } from './config/gulp-tasks/fonts-tasks/ttfToWoff2.js'
import { fontsStyles } from './config/gulp-tasks/fonts-tasks/fontsStyles.js'
import { images } from './config/gulp-tasks/images.js'
import { sprite } from './config/gulp-tasks/sprite.js'
import { jsProd } from './config/gulp-tasks/jsProd.js'
import { jsDev } from './config/gulp-tasks/jsDev.js'
import { html } from './config/gulp-tasks/html.js'
import { css } from './config/gulp-tasks/css.js'

const isWebp = argv.includes('--webp')
const fonts = gulp.series(reset, otfToTtf, ttfToWoff2, fontsStyles)
const build = gulp.series(
	fonts,
	jsDev,
	jsProd,
	gulp.parallel(images.bind(null, isWebp), html.bind(null, isWebp), css),
	gulp.parallel(validator, zip)
)
const dev = gulp.parallel(fonts, sprite)

export { sprite, deploy, build, fonts }

export default dev
