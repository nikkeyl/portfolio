import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import chalk from 'chalk'

class Notifier {
	errorHandler(taskName) {
		return plumber({
			errorHandler: notify.onError({
				title: taskName,
				message: 'Error: <%= error.message %>'
			})
		})
	}

	success(message) {
		return console.log(chalk.green.bold(
			message ? `Success: ${message}` : 'Successfully'
		))
	}

	warning(message) {
		return console.warn(chalk.yellow.bold(
			message ? `Warning: ${message}` : 'Warning'
		))
	}

	error(message = 'Something went wrong!') {
		return console.error(chalk.red.bold(message))
	}
}

const notifier = new Notifier()

export { notifier }
