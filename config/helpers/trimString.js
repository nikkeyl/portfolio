const trimString = (string, regex) => {
	return string?.replace(regex, '').toLowerCase();
};

export default trimString;
