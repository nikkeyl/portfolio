import { plugins } from '../settings/plugins.js'
import { paths } from '../settings/paths.js'

import ghPages from 'gh-pages'

const deploy = () =>
	ghPages.publish(
		paths.buildFolder,
		{
			repo: paths.repository
		},
		error => {
			error ? console.log(error) : console.log(plugins.chalk.green.bold('Published'))
		}
	)

export { deploy }
