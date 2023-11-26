import fs from 'fs';

const { existsSync } = fs;

class Status {
	state(file, state) {
		return existsSync(file) && state ? 'Update' : 'Added';
	}

	hasMatch(string, regex) {
		return regex.test(string);
	}
}

const status = new Status();

export default status;
