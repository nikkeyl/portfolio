import Typed from 'typed.js'

import { html } from '@js/helpers/nodeList'

const elem = document.querySelector('[data-typed]')

if (elem) {
	new Typed(elem, {
		strings: [
			html.classList.contains('halloween')
				? 'Magic' : html.classList.contains('new-year')
					? 'Miracle' : 'Development'
		],
		typeSpeed: 50,
		loop: false,
		fadeOut: true
	})
}
