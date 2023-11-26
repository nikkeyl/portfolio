const isTypeChecker = (arg, argName, argType) => {
	const message = `The '${argName}' argument must be an '${argType}'`;
	const isArray = argType === 'array'

	if (!Array.isArray(arg) && isArray) {
		throw new Error(message);
	}

	if (typeof arg !== argType && !isArray) {
		throw new Error(message);
	}
};

export default isTypeChecker;
