import { paths } from '../settings/paths.js'
import { plugins } from '../settings/plugins.js'

import { publish } from 'gh-pages'

const { buildFolder, repository } = paths
const { notifier } = plugins

const deploy = () => {
	const taskName = 'deploy'

	return publish(
		buildFolder,
		{
			repo: repository
		},
		(error) => {
			error
				? notifier.error(taskName, {
					path: buildFolder,
					info: error
				})
				: notifier.success(taskName, {
					path: buildFolder,
					info: `Published to ${repository}`
				})
		}
	)
}

export { deploy }
