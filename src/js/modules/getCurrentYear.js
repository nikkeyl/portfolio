const getCurrentYear = () => {
	const placeTime = document.querySelector('.logo span');

	if (placeTime) {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();

		return (placeTime.innerHTML = currentYear);
	}
};

export default getCurrentYear;
