import { html } from '@js/helpers/nodeList';

const colorScheme = () => {
	const prefersDarkMode =
		window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

	html.classList.add(prefersDarkMode ? 'dark' : 'light');

	if (window.matchMedia) {
		const darkMode = window.matchMedia('(prefers-color-scheme: dark)');

		if (darkMode) {
			html.classList.remove(prefersDarkMode ? 'light' : 'dark');
		}
	}
};

export default colorScheme;
