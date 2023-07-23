import Typed from 'typed.js'

const elem = document.querySelector('[data-typed]')

if (elem) {
	new Typed(elem, {
		strings: ['разработка'],
		typeSpeed: 50,
		loop: false,
		fadeOut: true,
		cursorChar: '_'
	})
}
