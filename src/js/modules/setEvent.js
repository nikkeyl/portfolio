import { html } from '@js/helpers/nodeList';

const setEvent = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const [halloweenStartDate, halloweenEndDate] = [
		new Date(`10.30.${currentYear}`),
		new Date(`11.01.${currentYear}`)
	];
	const [newYearStartDate, newYearEndDate] = [
		new Date(`12.30.${currentYear}`),
		new Date(`12.01.${currentYear}`)
	];
	const isHalloween =
		currentDate > halloweenStartDate && currentDate < halloweenEndDate;
	const isNewYear =
		currentDate > newYearStartDate && currentDate < newYearEndDate;

	const changeFavicon = (faviconName, themeClass) => {
		const favicon = document.getElementById('favicon');

		favicon.setAttribute('href', `assets/img/favicons/${faviconName}.ico`);
		html.classList.add(themeClass);
	}

	switch (true) {
		case isHalloween:
			changeFavicon('halloween', 'halloween')
			break;
		case isNewYear:
			changeFavicon('new-year', 'new-year')
			html.classList.remove('dark')
			break;
		default:
			break;
	}
};

export default setEvent;
