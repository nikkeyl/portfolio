import imageMin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import avif from 'gulp-avif';

import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

import imageMinConfig from '../../../imageMin.config.js';

const {
	build: { images: imagesBuild },
	src: {
		images: imagesSrc,
		svg: svgSrc
	}
} = PATHS;
const {
	notifier,
	gulp: { dest, src },
	if: cond
} = PLUGINS;

const images = (isWebp, isAvif) => {
	return src(imagesSrc)
		.pipe(notifier.errorHandler('images'))
		.pipe(newer(imagesBuild))
		.pipe(cond(isWebp, webp()))
		.pipe(cond(isAvif, avif()))
		.pipe(cond(isWebp || isAvif, dest(imagesBuild)))
		.pipe(cond(isWebp || isAvif, src(imagesSrc)))
		.pipe(cond(isWebp || isAvif, newer(imagesBuild)))
		.pipe(imageMin(imageMinConfig))
		.pipe(dest(imagesBuild))
		.pipe(src(svgSrc))
		.pipe(dest(imagesBuild));
};

export default images;
