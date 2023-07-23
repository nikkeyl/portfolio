import { addTouchClass } from '@js/helpers/addTouchClass'
import { header, html } from '@js/helpers/nodeList'
import { isMobile } from '@js/helpers/isMobile'

function fullScreenFix() {
	const fullScreens = document.querySelectorAll('[data-fullscreen]')

	/*! Accounting for floating panel in mobile browsers */
	function fixHeight() {
		const vh = window.innerHeight * 0.01

		html.style.setProperty('--vh', `${vh - header.offsetHeight / 100}px`)
	}

	if (fullScreens.length && isMobile.any()) {
		window.addEventListener('resize', fixHeight)
		addTouchClass()
		fixHeight()
	}
}

export { fullScreenFix }
