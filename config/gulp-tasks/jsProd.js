import webPackConfig from '../webpack/webpack.prod.js'

import { jsFormatConfig } from '../utilities/jsFormatConfig.js'

const jsProd = () => jsFormatConfig(webPackConfig, 'Prod')

export { jsProd }
