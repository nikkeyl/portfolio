import { paths } from '../settings/paths.js'

import { deleteAsync } from 'del'

const { binFolder, buildFolder, gitKeepFiles } = paths

const reset = () => {
	return deleteAsync([binFolder, buildFolder, gitKeepFiles])
}

export { reset }
