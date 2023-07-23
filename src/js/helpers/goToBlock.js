import { bodyUnlock } from '@js/helpers/bodyLockToggle'
import { html } from '@js/helpers/nodeList'

const goToBlock = (targetBlock, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock)

	if (targetBlockElement) {
		let headerItemHeight = 0

		headerItemHeight = document.querySelector('header.header').offsetHeight
		html.classList.contains('lock') ? bodyUnlock() : null

		let targetBlockElementPosition =
			targetBlockElement.getBoundingClientRect().top + scrollY

		targetBlockElementPosition = headerItemHeight
			? targetBlockElementPosition - headerItemHeight
			: targetBlockElementPosition
		targetBlockElementPosition = offsetTop
			? targetBlockElementPosition - offsetTop
			: targetBlockElementPosition
		window.scrollTo({
			top: targetBlockElementPosition
		})
	}
}

export { goToBlock }
