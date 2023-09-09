import { paths } from '../../settings/paths.js'
import { plugins } from '../../settings/plugins.js'

import { svgSpriteConfig } from '../../../svgSprite.config.js'

import svgSprite from 'gulp-svg-sprite'

const {
	srcFolder,
	src: { sprite: spriteSrc }
} = paths
const {
	notifier,
	gulp: { dest, src }
} = plugins

// Сделать также как и в fontsStyle.js
const sprite = () => {
	return src(spriteSrc)
		.pipe(notifier.errorHandler('sprite'))
		.pipe(svgSprite(svgSpriteConfig))
		.pipe(dest(srcFolder)) // ???
}

export { sprite }
