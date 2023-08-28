import { paths } from '../settings/paths.js'

import { deleteAsync } from 'del'

const { buildFolder, binFolder, gitKeepFiles } = paths

const reset = () => deleteAsync([buildFolder, binFolder, gitKeepFiles])

export { reset }
