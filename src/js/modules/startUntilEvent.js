import { html } from '@js/helpers/nodeList';

const startUntilEvent = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const [halloweenStart, halloweenEnd] = [
		new Date(`10.17.${currentYear}`),
		new Date(`10.31.${currentYear}`)
	];
	const halloweenDuration =
		currentDate >= halloweenStart && currentDate <= halloweenEnd;
	const favicon = document.getElementById('favicon');

	switch (true) {
		case halloweenDuration:
			favicon.setAttribute('href', 'assets/img/favicons/halloween.ico');
			html.classList.add('halloween');
			break;
		default:
			break;
	}
};

export default startUntilEvent;
