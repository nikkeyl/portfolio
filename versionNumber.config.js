import { paths } from './config/settings/paths.js'

const { versionFile } = paths

const versionNumberConfig = {
	value: '%DT%',
	append: {
		key: 'v',
		cover: 0,
		to: ['css', 'js']
	},
	output: {
		file: versionFile
	}
}

export { versionNumberConfig }
