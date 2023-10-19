const currentYear = () => {
	const placeTime = document.querySelector('.logo span');

	if (placeTime) {
		const date = new Date();
		const currentYear = date.getFullYear();

		return (placeTime.innerHTML = currentYear);
	}
};

export default currentYear;
