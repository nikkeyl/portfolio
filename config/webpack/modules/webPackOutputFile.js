import { paths } from '../../settings/paths.js'

const { buildFolder } = paths

const output = (fileName) => ({
	filename: fileName,
	path: buildFolder,
	publicPath: '/'
})

export { output }
