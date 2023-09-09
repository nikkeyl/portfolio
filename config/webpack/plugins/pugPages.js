import { paths } from '../../settings/paths.js'
import { plugins } from '../../settings/plugins.js'

const { srcFolder } = paths
const {
	fs: { readdirSync }
} = plugins

const pugPages = readdirSync(`${srcFolder}/views`).filter((fileExt) => {
	return fileExt.endsWith('.pug')
})

export { pugPages }
