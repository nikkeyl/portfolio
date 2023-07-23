import Typed from 'typed.js'

if (document.querySelector('[data-typed]')) {
	new Typed('[data-typed]', {
		strings: ['разработка'],
		typeSpeed: 50,
		loop: false,
		fadeOut: true,
		cursorChar: '_'
	})
}
