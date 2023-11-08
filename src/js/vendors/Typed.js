import Typed from 'typed.js';

const typedText = () => {
	const typedElement = document.querySelector('[data-typed]');

	if (typedElement) {
		new Typed(typedElement, {
			strings: ['Development'],
			typeSpeed: 50,
			loop: false,
			fadeOut: true
		});
	}
};

export default typedText;
