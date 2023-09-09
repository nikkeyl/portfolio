import { paths } from './config/settings/paths.js'

import { svgoConfig } from './svgo.config.js'

const { spriteFile } = paths

const svgSpriteConfig = {
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
}

export { svgSpriteConfig }
