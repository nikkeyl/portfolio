class Logger {
	move(name, from, to) {
		return console.log(`${name} moved from ${from} to ${to}`)
	}

	create(name) {
		return console.log(`A ${name} has been created`)
	}

	remove(name) {
		return console.log(`A ${name} has been removed`)
	}
}

const logger = new Logger()

export { logger }
