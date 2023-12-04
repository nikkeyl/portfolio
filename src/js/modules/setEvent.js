import { date, currentYear, html } from '@js/helpers/nodeList';

const setEvent = () => {
	const currentDate = new Date(
		`${date.getMonth() + 1}.${date.getDate()}.${currentYear}`
	);
	const [halloweenStartDate, halloweenEndDate] = [
		new Date(`10.25.${currentYear}`),
		new Date(`10.31.${currentYear}`)
	];
	const [xmasStartDate, xmasEndDate] = [
		new Date(`12.01.${currentYear}`),
		new Date(`12.31.${currentYear}`)
	];
	const isHalloween =
		currentDate >= halloweenStartDate && currentDate <= halloweenEndDate;
	const isXmas = currentDate >= xmasStartDate && currentDate <= xmasEndDate;

	const changeFavicon = (themeName) => {
		const favicon = document.getElementById('favicon');

		favicon.setAttribute('href', `assets/img/favicons/${themeName}.ico`);
		html.classList.add(themeName);
	};

	if (isHalloween) {
		changeFavicon('halloween');
	}

	if (isXmas) {
		changeFavicon('xmas');
		html.classList.remove('dark');
	}
};

export default setEvent;
