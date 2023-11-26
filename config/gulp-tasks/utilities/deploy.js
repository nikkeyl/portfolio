import { publish } from 'gh-pages';

import PATHS from '../../settings/paths.js';
import PLUGINS from '../../settings/plugins.js';

const { buildFolder, remoteRepositoryLink, gitHubPagesLink } = PATHS;
const { notifier } = PLUGINS;

const deploy = () => {
	const taskName = 'deploy';

	return publish(
		buildFolder,
		{
			repo: remoteRepositoryLink
		},
		(error) => {
			error
				? notifier.error(taskName, {
					path: buildFolder,
					message: error
				})
				: notifier.success(taskName, {
					path: buildFolder,
					message: `Published to ${gitHubPagesLink}`
				});
		}
	);
};

export default deploy;
