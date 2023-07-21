import { bodyUnlock } from '@js/helpers/bodyLockToggle'
import { html } from '@js/helpers/nodeList'

const goToBlock = (targetBlock, noHeader = false, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock)

	if (targetBlockElement) {
		let headerItem = ''
		let headerItemHeight = 0

		if (noHeader) {
			headerItem = 'header.header'

			const headerElement = document.querySelector(headerItem)

			if (!headerElement.classList.contains('header-scroll')) {
				headerElement.style.cssText = 'transition-duration: 0;'
				headerElement.classList.add('header-scroll')
				headerItemHeight = headerElement.offsetHeight
				headerElement.classList.remove('header-scroll')
			} else {
				headerItemHeight = headerElement.offsetHeight
			}
		}

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
