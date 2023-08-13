import { plugins } from '../../settings/plugins.js'
import { paths } from '../../settings/paths.js'

const pugPages = plugins.fs
	.readdirSync(`${paths.srcFolder}/views`)
	.filter(fileExt => fileExt.endsWith('.pug'))

export { pugPages }
