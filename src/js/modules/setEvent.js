import { html } from '@js/helpers/nodeList';

const setEvent = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const [halloweenStartDate, halloweenEndDate] = [
		new Date(`10.30.${currentYear}`),
		new Date(`11.01.${currentYear}`)
	];
	const isHalloween =
		currentDate > halloweenStartDate && currentDate < halloweenEndDate;
	const favicon = document.getElementById('favicon');

	switch (true) {
		case isHalloween:
			favicon.setAttribute('href', 'assets/img/favicons/halloween.ico');
			html.classList.add('halloween');
			break;
		default:
			break;
	}
};

export default setEvent;
