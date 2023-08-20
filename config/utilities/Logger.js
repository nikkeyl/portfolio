import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import chalk from 'chalk'

class Logger {
	success(message) {
		return console.log(chalk.bgGreen.white.bold(
			message ? `SUCCESS: ${message}` : 'SUCCESS'
		))
	}

	warning(message) {
		return console.log(chalk.bgYellow.white.bold(
			message ? `WARNING: ${message}` : 'WARNING'
		))
	}

	error(message, error = []) {
		return console.log(chalk.bgRed.white.bold(
			message ? `ERROR: ${message}\n` : 'ERROR'
		), error)
	}

	catchErrors(taskName) {
		return plumber({
			errorHandler: notify.onError({
				title: taskName,
				message: 'Error: <%= error.message %>'
			})
		})
	}
}

const logger = new Logger()

export { logger }
