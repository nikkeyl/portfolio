import Typed from 'typed.js';

import { html } from '@js/helpers/nodeList';

const typedText = () => {
	const typedElement = document.querySelector('[data-typed]');
	const string = html.classList.contains('halloween')
		? 'Magic'
		: html.classList.contains('new-year')
		? 'Miracle'
		: 'Development';

	if (typedElement) {
		new Typed(typedElement, {
			strings: [string],
			typeSpeed: 50,
			loop: false,
			fadeOut: true
		});
	}
};

export default typedText;
