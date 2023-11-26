import { onError } from 'gulp-notify';

import chalk from 'chalk';
import plumber from 'gulp-plumber';

import projectConfig from '../../project.config.js';

import { trimAfterCapitalRegex } from './regExps.js';

import trimString from './trimString.js';
import isTypeChecker from './isTypeChecker.js';

const {
	notifier: { notify, sound }
} = projectConfig;
const { blueBright, gray, magenta, yellow, green, red } = chalk;

class Notifier {
	#SEVERITY_LEVELS = {
		success: 0,
		warning: 1,
		error: 2
	};

	constructor(isInit = true) {
		this.isInit = isInit;
	}

	#formatterMessage(taskName, path, message) {
		const maxMessageLength = 80;

		let templateMessage;

		if (typeof message === 'boolean') {
			const trimTaskName = trimString(taskName, trimAfterCapitalRegex);

			templateMessage = `File already exists, run 'npm run ${trimTaskName} --update'`;
		}

		const resultMessage =
			message.length > maxMessageLength
				? `The message must be no longer than ${maxMessageLength} characters`
				: templateMessage || message;

		return `\n${magenta.bold('Source:')} ${gray.underline(path)}\n${blueBright.bold(
			'Message:'
		)} ${gray(resultMessage)}`;
	}

	#message(
		taskName,
		{ path = 'Please add file path', message = 'Please add message' } = {},
		severityLevel = this.#SEVERITY_LEVELS.success
	) {
		if (!this.isInit) {
			return;
		}

		if (!taskName) {
			return console.warn(yellow.bold('Warning: Please add a task name'));
		}

		isTypeChecker(path, 'path', 'string');

		const info = this.#formatterMessage(taskName, path, message);

		switch (severityLevel) {
			case 0:
				console.info(`${green.bold('Success:')} '${taskName}' ${info}`);
				break;
			case 1:
				console.warn(`${yellow.bold('Warning:')} '${taskName}' ${info}`);
				break;
			default:
				console.error(`${red.bold('Error:')} '${taskName}' ${info}`);
				break;
		}
	}

	errorHandler(taskName) {
		return plumber({
			errorHandler: onError({
				title: `Error: ${taskName}`,
				message: 'Error: <%= error.message %>',
				sound: sound
			})
		});
	}

	success(taskName, options) {
		return this.#message(taskName, options);
	}

	warning(taskName, options) {
		return this.#message(taskName, options, this.#SEVERITY_LEVELS.warning);
	}

	error(taskName, options) {
		return this.#message(taskName, options, this.#SEVERITY_LEVELS.error);
	}
}

const notifier = new Notifier(notify);

export default notifier;
