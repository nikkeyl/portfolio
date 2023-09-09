import { onError } from 'gulp-notify'

import chalk from 'chalk'
import plumber from 'gulp-plumber'

class Notifier {
	#logger(taskName, options = {}, logLevel = 0) {
		if (!taskName) {
			return console.warn(yellow.bold('Warning: Please add more information'))
		}

		const { path, info } = options
		const { blueBright, cyan, gray, magenta, yellow, green, red } = chalk

		const log = (path = 'Please add file path', info = 'Please add info') => {
			return `\n${magenta.bold('Source:')} ${gray.underline(
				path
			)}\n${blueBright.bold('Info:')} ${gray(info)}`
		}

		if (logLevel === 0) {
			return console.log(
				`${green.bold('Success:')} ${cyan('Task:')} '${taskName}' ${log(path, info)}`
			)
		}

		if (logLevel === 1) {
			return console.warn(
				`${yellow.bold('Warning:')} ${cyan('Task:')} '${taskName}' ${log(
					path,
					info
				)}`
			)
		}

		return console.error(
			`${red.bold('Error:')} ${cyan('Task:')} '${taskName}' ${log(path, info)}`
		)
	}

	errorHandler(taskName) {
		return plumber({
			errorHandler: onError({
				title: `Error: Task: ${taskName}`,
				message: 'Error: <%= error.message %>'
			})
		})
	}

	success(taskName, options) {
		return this.#logger(taskName, options)
	}

	warning(taskName, options) {
		const logLevel = 1

		return this.#logger(taskName, options, logLevel)
	}

	error(taskName, options) {
		const logLevel = 2

		return this.#logger(taskName, options, logLevel)
	}
}

const notifier = new Notifier()

export { notifier }
