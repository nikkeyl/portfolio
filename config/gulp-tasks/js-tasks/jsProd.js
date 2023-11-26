import webPackConfig from '../../webpack/webpack.prod.js';

import jsFormatter from './jsFormatter.js';

const jsProd = () => {
	return jsFormatter(webPackConfig, 'jsProd');
};

export default jsProd;
