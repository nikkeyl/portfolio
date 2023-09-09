import { paths } from '../../settings/paths.js'

const { srcFolder } = paths

const extensionsAndAliases = {
	alias: {
		'@js': `${srcFolder}/js`,
		'@scss': `${srcFolder}/scss`
	},
	extensions: [
		'.js',
		'.scss'
	]
}

export { extensionsAndAliases }
