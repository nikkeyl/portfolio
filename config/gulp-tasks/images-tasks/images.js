import { paths } from '../../settings/paths.js'
import { plugins } from '../../settings/plugins.js'

import { imageMinConfig } from '../../../imageMin.config.js'

import imageMin from 'gulp-imagemin'
import newer from 'gulp-newer'
import webp from 'gulp-webp'

const {
	build: { images: imagesDest },
	src: {
		images: imagesSrc,
		svg: svgSrc
	}
} = paths
const {
	notifier,
	gulp: { dest, src },
	if: cond
} = plugins

const images = (isWebp) => {
	return src(imagesSrc)
		.pipe(notifier.errorHandler('images'))
		.pipe(newer(imagesDest))
		.pipe(cond(isWebp, webp()))
		.pipe(cond(isWebp, dest(imagesDest)))
		.pipe(cond(isWebp, src(imagesSrc)))
		.pipe(cond(isWebp, newer(imagesDest)))
		.pipe(imageMin(imageMinConfig))
		.pipe(dest(imagesDest))
		.pipe(src(svgSrc))
		.pipe(dest(imagesDest))
}

export { images }
