import Typed from 'typed.js'

const elem = document.querySelector('[data-typed]')

if (elem) {
	new Typed(elem, {
		strings: ['development'],
		typeSpeed: 50,
		loop: false,
		fadeOut: true
	})
}
