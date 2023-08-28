import { plugins } from '../../settings/plugins.js'
import { paths } from '../../settings/paths.js'

const { srcFolder } = paths
const { fs } = plugins

const pugPages = fs
	.readdirSync(`${srcFolder}/views`)
	.filter((fileExt) => fileExt.endsWith('.pug'))

export { pugPages }
