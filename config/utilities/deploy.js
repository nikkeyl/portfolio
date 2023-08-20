import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import { publish } from 'gh-pages'

const deploy = () =>
	publish(
		paths.buildFolder,
		{
			repo: paths.repository
		},
		error => {
			error
				? plugins.logger.error('Something went wrong', error)
				: plugins.logger.success('Published')
		}
	)

export { deploy }
