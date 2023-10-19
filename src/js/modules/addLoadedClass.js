import { html } from '@js/helpers/nodeList';

const addLoadedClass = () => {
	window.addEventListener('load', html.classList.add('loaded'));

	const preloader = document.querySelector('.preloader');
	const preloaderContainer = document.querySelector('#preloader');
	const timeout = 300;
	const interval = 300;

	if (html.classList.contains('loaded')) {
		setInterval(() => {
			preloader.classList.add('hide');
			preloaderContainer.classList.add('hide');

			setTimeout(() => {
				preloader.remove();
				preloaderContainer.remove();
			}, timeout);
		}, interval);
	}
};

export default addLoadedClass;
