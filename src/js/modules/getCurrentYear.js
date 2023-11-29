import { currentYear } from '@js/helpers/nodeList';

const getCurrentYear = () => {
	const placeTime = document.querySelector('.logo span');

	if (placeTime) {
		return (placeTime.innerHTML = currentYear);
	}
};

export default getCurrentYear;
