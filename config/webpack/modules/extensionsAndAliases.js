import { paths } from '../../settings/paths.js'

const { srcFolder } = paths

const extensionsAndAliases = {
	extensions: [
		'.scss',
		'.js'
	],
	alias: {
		'@scss': `${srcFolder}/scss`,
		'@js': `${srcFolder}/js`
	}
}

export { extensionsAndAliases }
