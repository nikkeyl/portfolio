import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import { svgoConfig } from '../../svgo.config.js'

import svgSprite from 'gulp-svg-sprite'

const {
	src: { sprite: spriteSrc },
	spriteFile,
	srcFolder
} = paths
const { gulp, notifier } = plugins

const sprite = () =>
	gulp
		.src(spriteSrc)
		.pipe(notifier.errorHandler('SPRITE'))
		.pipe(
			svgSprite({
				mode: {
					symbol: {
						sprite: spriteFile
					}
				},
				shape: {
					transform: [
						{
							svgo: svgoConfig
						}
					]
				},
				svg: {
					xmlDeclaration: false,
					rootAttributes: {
						style: 'display: none;',
						role: 'img',
						'aria-hidden': true
					}
				}
			})
		)
		.pipe(gulp.dest(srcFolder)) // ???
export { sprite }
