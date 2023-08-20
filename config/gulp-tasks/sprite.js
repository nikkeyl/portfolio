import gulp from 'gulp'

import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import { svgoConfig } from '../../svgo.config.js'

import svgSprite from 'gulp-svg-sprite'

const sprite = () =>
	gulp
		.src(paths.src.sprite)
		.pipe(plugins.logger.catchErrors('SPRITE'))
		.pipe(
			svgSprite({
				mode: {
					symbol: {
						sprite: paths.spriteFile
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
		.pipe(gulp.dest(paths.srcFolder)) // ???

export { sprite }
