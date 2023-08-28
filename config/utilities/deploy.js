import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import { publish } from 'gh-pages'

const { buildFolder, repository } = paths
const { notifier } = plugins

const deploy = () =>
	publish(
		buildFolder,
		{
			repo: repository
		},
		(error) => {
			error
				? notifier.error()
				: notifier.success('Published')
		}
	)

export { deploy }
