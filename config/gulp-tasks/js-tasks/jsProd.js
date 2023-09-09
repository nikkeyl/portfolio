import { jsFormatter } from './jsFormatter.js'

import webPackConfig from '../../webpack/webpack.prod.js'

const jsProd = () => {
	return jsFormatter(webPackConfig, 'Prod')
}

export { jsProd }
