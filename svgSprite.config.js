import PATHS from './config/settings/paths.js';

import svgoConfig from './svgo.config.js';

const { spriteFile } = PATHS;

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
};

export default svgSpriteConfig;
